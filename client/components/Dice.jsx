import { useEffect } from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { Icosahedron } from '@react-three/drei'
import { Physics, usePlane, useConvexPolyhedron } from '@react-three/cannon'
import niceColors from 'nice-color-palettes'

function Dice() {
  const textColor = 'white'
  const dieColor = 'black'

  function calculateTextureSize(approx) {
    return Math.max(
      128,
      Math.pow(2, Math.floor(Math.log(approx) / Math.log(2)))
    )
  }

  const createTextTexture = (text, color, backColor) => {
    const size = 100
    const textMargin = 1

    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')
    const ts = calculateTextureSize(size / 1 + size * textMargin) * 1
    canvas.width = canvas.height = ts
    context.font = ts / (1 + 2 * textMargin) + 'pt Arial'
    context.fillStyle = backColor
    context.fillRect(0, 0, canvas.width, canvas.height)
    context.textAlign = 'center'
    context.textBaseline = 'middle'
    context.fillStyle = color
    context.fillText(text, canvas.width / 2, canvas.height / 2)

    if (text === 6 || text === 9) {
      context.fillText('  .', canvas.width / 2, canvas.height / 2)
    }

    const texture = new THREE.CanvasTexture(canvas)
    return texture
  }
  console.log('object:', createTextTexture(1, 'white', 'black'))

  const createUvs = (sides, fl, tab, af) => {
    // TODO Store tab and af as variables for each shape

    const uvs = []
    const aa = (Math.PI * 2) / fl

    for (let i = 0; i < sides; ++i) {
      for (let j = 0; j < fl - 2; ++j) {
        for (let k = 0; k < 3; ++k) {
          const theta = aa * (j + k)

          uvs.push(
            // u
            (Math.cos(theta + af) + 1 + tab) / 2 / (1 + tab),
            // v
            (Math.sin(theta + af) + 1 + tab) / 2 / (1 + tab)
          )
        }
      }
    }

    return new Float32Array(uvs)
  }

  const Plane = ({ color, ...props }) => {
    const [ref] = usePlane(() => ({ ...props }))
    return (
      <mesh ref={ref}>
        <planeGeometry />
        <meshPhongMaterial color={color} />
      </mesh>
    )
  }

  const D20 = (props) => {
    const sides = 20
    const verticesPerFace = 3
    const radius = 2
    const icosahedronGeometry = new THREE.IcosahedronGeometry(radius)
    const [ref, api] = useConvexPolyhedron(() => {
      return {
        args: icosahedronGeometry,
        mass: 1,
        ...props,
      }
    })

    useEffect(() => {
      if (ref.current) {
        for (let i = 0; i < sides; i++) {
          ref.current.geometry.addGroup(i * verticesPerFace, verticesPerFace, i)
        }
        ref.current.geometry.setAttribute(
          'uv',
          new THREE.Float32BufferAttribute(
            createUvs(sides, verticesPerFace, 0, -Math.PI / 20),
            2
          )
        )
      }

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
      <Icosahedron
        args={radius}
        ref={ref}
        onClick={() => api.applyImpulse([5, 20, 5], [0, 0, 0])}
        castShadow={true}
        receiveShadow
      >
        {/* TODO What's causing text textures to appear stretched? Is the UV map messed up? */}

        {Array.from(Array(sides)).map((_, i) => (
          <meshPhongMaterial
            key={i}
            map={createTextTexture(i + 1, textColor, dieColor)}
          />
        ))}
      </Icosahedron>

      // const newTextures = [...new Array(sides)].fill(createTextTexture(i + 1, textColor, dieColor))
    )
  }

  return (
    <>
      <Canvas
        concurrent={'true'}
        gl={{ alpha: false }}
        camera={{ position: [0, 0, 20] }}
      >
        {/* <hemisphereLight intensity={0.35} castShadow={true}/>
    <spotLight args={['white', 2, 0.3, 1,]} 
      position={[30, 0, 30]} castShadow={true}
    /> */}
        {/* <pointLight position={[-30, 0, -30]} intensity={0.5} castShadow={true} /> */}
        <Physics gravity={[0, 0, -30]}>
          <Plane color={niceColors[17][4]} />
          <Plane
            color={niceColors[17][1]}
            position={[-5, 0, 0]}
            rotation={[0, 1, 0]}
          />
          <Plane
            color={niceColors[17][2]}
            position={[5, 0, 0]}
            rotation={[0, -1, 0]}
          />
          <Plane
            color={niceColors[17][3]}
            position={[0, 5, 0]}
            rotation={[1, 0, 0]}
          />
          <Plane
            color={niceColors[17][0]}
            position={[0, -5, 0]}
            rotation={[-1, 0, 0]}
          />
          <D20 position={[4, 0, 2]} rotation={[2, 0, 0]} />
        </Physics>
      </Canvas>
    </>
  )
}

export default Dice
