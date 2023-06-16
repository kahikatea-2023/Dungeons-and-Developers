import { useQuery } from '@tanstack/react-query'
import { getOutcomes } from '../apis/api'
import Tile from './Tile'

function Game() {
  // const outcomes = useAppSelector((state) => state.outcomes)
  // const dispatch = useAppDispatch()


  const outcomeQuery = useQuery(['getOutcomes'], async () => {
    return await getOutcomes()

  })

  const userQuery = useQuery(['getUsers'], async () => {
    return await getUsers()
  })

  return (
    <>
      <p>I'm the game</p>

      {!outcomeQuery.isLoading &&
        outcomeQuery.data &&
        outcomeQuery.data.map((outcome) => {
          return (
            <div key={outcome.outcome} className='outcome'>{outcome.outcome}</div>
          )
        })}
    </>
  )
}

export default Game
