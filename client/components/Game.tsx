import { useQuery } from '@tanstack/react-query'
import { getOutcomes } from '../apis/api'
import { getUsers } from '../apis/api'
import Tile from './Tile'
import Form from './Form'
import { useState } from 'react'

function Game() {
  const outcomeQuery = useQuery(['getOutcomes'], async () => {
    return await getOutcomes()
  })

  const userQuery = useQuery(['getUsers'], async () => {
    return await getUsers()
  })

  const [clickedOutcomeIds, setClickedOutcomeIds] = useState([])

  const handleOutcomeClick = (id) => {
    if (clickedOutcomeIds.includes(id)) {
      setClickedOutcomeIds(
        clickedOutcomeIds.filter((outcomeId) => outcomeId !== id)
      )
    } else {
      setClickedOutcomeIds([...clickedOutcomeIds, id])
    }
  }

  return (
    <>
      <Form />

      <div id="container">
        <div id="player"></div>
        <div id="numberBox">
          <p>
            ScoreBoard: Lorem Ipsum es simplemente el texto de relleno de las
            imprentas y
          </p>
        </div>
        <div id="center-content">
          <h1>Dungeons & Developers</h1>
          <div id="canvas">
            {!outcomeQuery.isLoading &&
              outcomeQuery.data &&
              outcomeQuery.data.map((outcome) => {
                return (
                  <div
                    key={outcome.outcome}
                    className="outcome"
                    id="outcomeList"
                    onClick={() => handleOutcomeClick(outcome.id)}
                  >
                    {clickedOutcomeIds.includes(outcome.id)
                      ? outcome.outcome
                      : outcome.id}
                  </div>
                )
              })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Game
