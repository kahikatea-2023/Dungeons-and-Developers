import { useQuery } from '@tanstack/react-query'
import { getOutcomes } from '../apis/api'

function Game() {
  // const outcomes = useAppSelector((state) => state.outcomes)
  // const dispatch = useAppDispatch()

  const { isLoading, data } = useQuery(['getOutcomes'], async () => {
    return await getOutcomes()
  })
  return (
    <>
      {!isLoading &&
        data &&
        data.map((outcome) => {
          return (
            <div key={outcome.outcome} className="outcome">
              <div>{outcome.outcome}</div>
            </div>
          )
        })}
    </>
  )
}

export default Game
