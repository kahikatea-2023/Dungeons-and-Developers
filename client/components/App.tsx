import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchOutcomes } from '../slices/slice'
import Form from './Form'
import Game from './Game'

function App() {
  return (
    <>
      <div id="container">
        <div id="player">
          <p>
            Player: Lorem Ipsum es simplemente el texto de relleno de las
            imprentas y
          </p>
        </div>
        <div id="scoreBoard">
          <p>
            ScoreBoard: Lorem Ipsum es simplemente el texto de relleno de las
            imprentas y
          </p>
        </div>
        <div id="center-content">
          <h1>Dungeons & Developers</h1>
          <div id="canvas">
            <Game />
          </div>
          <div id="commentBox">
            <p>
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
