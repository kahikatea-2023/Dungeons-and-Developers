import { useQuery } from '@tanstack/react-query'
import { getOutcomes, getUsers } from '../apis/api'
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
      {/* {!outcomeQuery.isLoading &&
        outcomeQuery.data &&
        outcomeQuery.data.map((outcome) => {
          return (
            <div key={outcome.outcome} className="outcome">
              {outcome.outcome}
            </div>
          )
        })} */}

      <div id="container">
        <div id="player">
          <p>
            {!userQuery.isLoading &&
              userQuery.data &&
              userQuery.data.map((outcome) => {
                return (
                  <div key={outcome.id} className="outcome">
                    <div>{outcome.name}</div>
                    <div>{outcome.className}</div>

                  </div>

                )
              })}
          </p>
        </div>
        <div id="numberBox">
          <p>
            ScoreBoard: Lorem Ipsum es simplemente el texto de relleno de las
            imprentas y
          </p>
        </div>
        <div id="center-content">
          <h1>Dungeons & Developers</h1>
          <div id="canvas"></div>
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
