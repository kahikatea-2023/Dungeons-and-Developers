import { useQuery } from '@tanstack/react-query'
import { getOutcomes, getUsers } from '../apis/api'
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
    <div id="container">
      <h1>Dungeons & Developers</h1>

      <div className="wrapper">
        <div id="player">
          {!userQuery.isLoading &&
            userQuery.data &&
            userQuery.data.map((outcome) => {
              return (
                <div className="playerItem" key={outcome.id}>
                  <div>
                    <strong>Name: </strong>
                    {outcome.name}
                  </div>
                  <div>
                    <strong>Class: </strong> {outcome.className}
                  </div>
                </div>
              )
            })}
        </div>
        <div className="" id="canvas">
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
        <div id="numberBox">
          <NumberBox />
        </div>
      </div>
      <div id="commentBox">
        <p>
          <div>{message}</div>
        </p>
      </div>
    </div>
  )
}

export default Game
