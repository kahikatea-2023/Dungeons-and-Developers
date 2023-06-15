import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchOutcomes } from '../slices/slice'

function App() {
  const outcomes = useAppSelector((state) => state.outcomes)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchOutcomes())
  }, [dispatch])

  return (
    <>
      <div className="app">
        <h1>Dungeons and Devlopers ma' fu**ers!</h1>
        <ul>
          {outcomes.map((outcome) => (
            <li key={outcome.id}>{outcome.outcome}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
