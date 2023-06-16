import request from 'superagent'
import { Class, Outcome, User, UserDraft } from '../../models/models'

const rootUrl = '/api/v1/routes'

export async function getOutcomes() {
  const res = await request.get(`${rootUrl} + /outcomes`)
  console.log(res.body);

  return res.body as Outcome[]

}

export async function addUser(newUser: UserDraft) {
  return (await request.post(rootUrl).send(newUser))
}


export async function getClasses() {
  const res = await request.get(`${rootUrl} + /classes`)
  return res.body as Class[]
}