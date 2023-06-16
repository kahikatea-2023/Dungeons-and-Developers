import { useState } from 'react'

function NumberBox() {
  const [number, setNumber] = useState(0)
  function handleClick() {
    const numberGenerated = Math.floor(1 + Math.random() * 20)
    return setNumber(numberGenerated)
  }

  return (
    <>
      <div>
        <p className="thisfucks">{number}</p>
        <button onClick={handleClick}>Click me!!!</button>
      </div>
    </>
  )
}

export default NumberBox
