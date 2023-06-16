import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import { addUser, getClasses } from '../apis/api'
import { User, UserDraft } from '../../models/models'

function Form() {
  const queryClient = useQueryClient()
  const mutations = useMutation({
    mutationFn: addUser,
    onSuccess: () => {
      queryClient.invalidateQueries(['getUsers'])
    }
  })

  const initialState = {
    name: '',
    classId: 0,
  } as UserDraft

  const [userData, setUserData] = useState(initialState)

  // get the classes list// need some help
  const { isLoading, data } = useQuery(['getClasses'], async () => {
    return await getClasses()
    console.log(data)
  })

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const name = event.target.name
    const value = event.target.value
    const newUserData = { ...userData, [name]: value }
    setUserData(newUserData)
  }

  function handleSelect(event: React.ChangeEvent<HTMLSelectElement>) {
    const value = +event.target.value
    const newUserData: UserDraft = { ...userData, classId: value }
    setUserData(newUserData)
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    mutations.mutate(userData)
    setUserData(initialState)
  }

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Player Name: </label>
          <input
            type="text"
            name="name"
            id=""
            onChange={handleChange}
            value={userData.name}
          />
        </div>
        <div>
          <label htmlFor="class">Player Class</label>
          {!isLoading && data && (
            <select name="classId" id="" onChange={handleSelect}>
              <option value="">Select your class</option>
              {data.map((playerClass) => (
                <option key={playerClass.id} value={playerClass.id}>
                  {playerClass.className}
                </option>
              ))}
            </select>
          )}
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  )
}

export default Form
