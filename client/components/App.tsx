import { useEffect, useState } from 'react'
import Form from './Form'
import Game from './Game'
// import Nav from './Nav'


function App() {
  const [page, setPage] = useState('form')

  function handleClick(path: string) {
    setPage(path)
  }

  return (
    <main>
      <Form />
      <Game />
    </main>
  )
}

export default App
