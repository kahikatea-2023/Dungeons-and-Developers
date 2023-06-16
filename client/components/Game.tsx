import { useQuery } from '@tanstack/react-query'
import { getOutcomes } from '../apis/api'
import Tile from './Tile'

function Game() {

  


  const { isLoading, data } = useQuery(['getOutcomes'], async () => {
    return await getOutcomes()
  })

  function handleClick() {
    

  }

  return (
    <>
      <p>I'm the game</p>

      {!isLoading && 
      data &&
      data.map((outcome) => {
        return (

          <Tile key={outcome.outcome} outcome={outcome} handleClick={handleClick}/>
        )
      })}
    </>
  )
}

export default Game
