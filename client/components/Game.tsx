import { useQuery } from '@tanstack/react-query'
import { getOutcomes } from '../apis/api'
import Tile from './Tile'
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

  return (
    <>
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
        <NumberBox />
      <div>{message}</div>
    </>
  )
}

export default Game
