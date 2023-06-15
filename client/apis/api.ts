import request from 'superagent'
import { Outcome } from '../../models/models'

const rootUrl = '/api/v1/routes'

export async function getOutcomes() {
  const res = await request.get(rootUrl)
  console.log(res.body);
  
    return res.body as Outcome[]

}

// Todo

interface NewUser {
  name: string,
  class_id: number
}
export async function addUser(newUser: NewUser) {
  return (await request.post(rootUrl).send(newUser))
}

interface PlayerClass {
  className: string
}
export async function getClasses() {
  const res = await request.get(rootUrl)
  return res.body as PlayerClass[]
}