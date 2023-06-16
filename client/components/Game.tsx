import { useQuery } from '@tanstack/react-query'
import { getOutcomes } from '../apis/api'
import { getUsers } from '../apis/api'
import Tile from './Tile'
import Form from './Form'
import { useState } from 'react'
import NumberBox from './NumberBox'

const initialMessage = ''

function Game() {
  const [message, setMessage] = useState(initialMessage)
  const outcomeQuery = useQuery(['getOutcomes'], async () => {
    return await getOutcomes()
  })

  function handleClick(message: string) {
    setMessage(message)
  }
  const userQuery = useQuery(['getUsers'], async () => {
    return await getUsers()
  })

  return (
    <>
      <div id="container">
        <div id="player">
          <p>
            Player: Lorem Ipsum es simplemente el texto de relleno de las
            imprentas y
          </p>
        </div>
        <div id="numberBox">
          <NumberBox />
        </div>
        <div id="center-content">
          <h1>Dungeons & Developers</h1>
          <div id="canvas">
            {!outcomeQuery.isLoading &&
              outcomeQuery.data &&
              outcomeQuery.data.map((outcome) => {
                return (
                  <Tile
                    key={outcome.outcome}
                    outcome={outcome}
                    handleClick={handleClick}
                  />
                )
              })}
          </div>
          <div id="commentBox">
            <p>
              <div>{message}</div>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Game
