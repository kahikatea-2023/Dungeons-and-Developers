import connection from './connection'
import { Outcome, User, UserDraft } from '../../models/models'

export async function getAllOutcomes(db = connection) {
  return await db('outcomes').select() as Outcome[]
}

export async function getUsers(db = connection) {
  return await db('users')
  .join('classes', 'classes.id', 'users.class_id')
  .select(
    'users.id',
    'users.name',
    'classes.class_name as className'
  )
}

export async function getClasses(db = connection) {
  return await db('classes').select()
}

export async function addUser({id, name, classId}: User, db = connection) {
  return await db('user').insert({ id, name, class_id: classId})
}