import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchOutcomes } from '../slices/slice'
import Form from './Form'
import Game from './Game'
import Nav from './Nav'

function App() {
 const [page, setPage] = useState('form')
  
  

 function handleClick(path:string) {
  
 }

  return (
    <main>

      <Nav />
      <Form />
      <Game />

    </main>
  )
}

export default App
