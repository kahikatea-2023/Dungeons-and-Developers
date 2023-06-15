import request from 'superagent'
import { Outcome } from '../../models/models'

const rootUrl = '/api/v1/routes'

export async function getOutcomes() {
  const res = await request.get(`${rootUrl} + /outcomes`)
  console.log(res.body);
  
    return res.body as Outcome[]

}
