import request from 'superagent'
import { Outcome } from '../../models/models'

const rootUrl = '/api/v1/routes'

export function getOutcomes(): Promise<Outcome[]> {
  return request.get(rootUrl).then((res) => {
    return res.body.outcomes
  })
}
