import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchOutcomes } from '../slices/slice'
import Form from './Form'
import Game from './Game'
import Dice from './Dice'

function App() {
 
  

  return (
    <main>
      <Form />
      <Game />
      <Dice />
    </main>
  )
}

export default App
