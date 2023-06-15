import connection from './connection'
import { Outcome } from '../../models/models'

export function getAllOutcomes(db = connection): Promise<Outcome[]> {
  return db('outcomes').select()
}
