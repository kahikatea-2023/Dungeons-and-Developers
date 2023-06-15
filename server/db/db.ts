import connection from './connection'
import { Outcome } from '../../models/models'

export async function getAllOutcomes(db = connection) {
  return await db('outcomes').select() as Outcome[]
}
