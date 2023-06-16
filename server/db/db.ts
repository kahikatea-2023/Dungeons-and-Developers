import connection from './connection'
import { Class, Outcome, User, UserDraft } from '../../models/models'

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
    ) as User[]
}

export async function getClasses(db = connection) {
  return await db('classes').select(
    'classes.id',
    'classes.class_name as className'
  ) as Class[]
}

export async function addUser({ name, classId }: UserDraft, db = connection) {
  return await db('users').insert({ name, class_id: classId })
}