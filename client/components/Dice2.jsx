import { useEffect } from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { Icosahedron } from '@react-three/drei'
import { Physics, usePlane, useConvexPolyhedron } from '@react-three/cannon'
import niceColors from 'nice-color-palettes'

function Dice2 () {
return (
  <Canvas>
<ambientLight intensity={0.5}/>
<pointLight  />
  </Canvas>
)

}