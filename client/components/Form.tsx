import { useIsRestoring, useQuery } from "@tanstack/react-query"
import React, { useEffect, useState } from "react"
import { getClasses } from "../apis/api"


function Form() {

  const [userData, setUserData] = useState({
    playerName: '',
    className: '',
  })

  // get the classes list// need some help
  const { isLoading, playerClasses } = useQuery('getClasses', async () => {
    return await getClasses()
  })



  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const name = event.target.name
    const value = event.target.value
    const newUserData = { ...userData, [name]: value }
    setUserData(newUserData)
  }

  function handleSelect(event: React.ReactEvent<HTMLSelectElement>) {

  }

  function handleSubmit() {

  }

  return (
    <>
      <form action="">
        <div>
          <label htmlFor="name">Player Name: </label>
          <input type="text" name="name" id="" onChange={handleChange} value={userData.playerName} />
        </div>
        <div>
          <label htmlFor="class">Player Class</label>
          <select name="class" id="" onSelect={handleSelect} value={playerClassId}>
            <option value="">Select your class</option>
            {playerClasses.map((playerClass) =>
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