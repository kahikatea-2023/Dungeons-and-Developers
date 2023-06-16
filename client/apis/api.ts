import request from 'superagent'
import { Class, Outcome, User, UserDraft } from '../../models/models'

const rootUrl = '/api/v1/routes'


//OUTCOMES
export async function getOutcomes() {
  const res = await request.get(`${rootUrl} + /outcomes`)
  console.log(res.body);

  return res.body as Outcome[]
}

//CLASSES
export async function getClasses() {
  const res = await request.get(`${rootUrl} + /classes`)
  return res.body as Class[]
}

// USERS
export async function addUser(newUser: UserDraft) {
  return (await request.post(`${rootUrl} + /user`).send(newUser))
}

export async function getUsers() {
  const res = await request.get(`${rootUrl} + /users`)
  return res.body as User[]
}
