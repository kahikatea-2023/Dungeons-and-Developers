import { useIsRestoring } from "@tanstack/react-query"
import { options } from "superagent"

function Form() {

  function handleChange() {

  }

  function handleSelect() {

  }

  function handleSubmit() {

  }

  return (
    <>
      <form action="">
        <div>
          <label htmlFor="name">Player Name: </label>
          <input type="text" name="name" id="" onChange={handleChange} value={userName} />
        </div>
        <div>
          <label htmlFor="class">Player Class</label>
          <select name="class" id="" onSelect={handleSelect} value={playerClassId}>
            <option value="">Select your class</option>
            {playerClasess.map((playerClass) =>
              <option key={playerClassId} value={playerClassId}>{playerClass.name}</option>
            )}
          </select>
        </div>
        <div>
          <button type="submit" onSubmit={handleSubmit}>Submit</button>
        </div>
      </form>
    </>

  )
}

export default Form