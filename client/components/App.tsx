import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchOutcomes } from '../slices/slice'
import Form from './Form'
import Game from './Game'

function App() {
 
  

  return (
    <main>
      <Form />
      <Game />

    </main>
  )
}

export default App
