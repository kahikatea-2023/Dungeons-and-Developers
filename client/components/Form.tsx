import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import React, { useEffect, useState } from "react"
import { getClasses } from "../apis/api"
import { User, UserDraft } from "../../models/models"


function Form() {

  const [userData, setUserData] = useState({
    name: '',
    classId: 0,
  } as UserDraft)

  // get the classes list// need some help
  const { isLoading, data } = useQuery(['getClasses'], async () => {
    return await getClasses()
  })



  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const name = event.target.name
    const value = event.target.value
    const newUserData = { ...userData, [name]: value }
    setUserData(newUserData)
  }

  function handleSelect(event: React.ChangeEvent<HTMLSelectElement>) {
    const name = event.target.name
    const value = +event.target.value

    const newUserData: UserDraft = { ...userData, classId: value }
  }

  function handleSubmit() {

  }

  return (
    <>
      <form action="">
        <div>
          <label htmlFor="name">Player Name: </label>
          <input type="text" name="name" id="" onChange={handleChange} value={userData.name} />
        </div>
        <div>
          <label htmlFor="class">Player Class</label>
          {!isLoading && data &&
            <select name="classId" id="" onChange={handleSelect}>
              <option value="">Select your class</option>
              {data.map((playerClass) =>
                <option key={playerClass.id} value={playerClass.id} >{playerClass.className}</option>
              )}
            </select>
          }
        </div>
        <div>
          <button type="submit" onSubmit={handleSubmit}>Submit</button>
        </div>
      </form>
    </>

  )
}

export default Form
