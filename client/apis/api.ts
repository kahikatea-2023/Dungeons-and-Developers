import request from 'superagent'
import { Outcome } from '../../models/models'

const rootUrl = '/api/v1/routes'

export function getOutcomes(): Promise<Outcome[]> {
  return request.get(rootUrl).then((res) => {
    return res.body.outcomes
  })
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