import { useQuery } from '@tanstack/react-query'
import { getOutcomes } from '../apis/api'
import { getUsers } from '../apis/api'
import Tile from './Tile'
import Form from './Form'

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
                  <div key={outcome.outcome} className="outcome" id='outcomeList'>
                    {outcome.id}
                  </div>
                )
              })}
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

export default Game
