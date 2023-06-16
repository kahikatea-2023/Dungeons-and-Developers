import { Router } from 'express'

import * as db from '../db/db'

const router = Router()

// OUTCOMES

router.get('/outcomes', async (req, res) => {
  try {
    const outcomes = await db.getAllOutcomes()
    res.json(outcomes)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Route: Something went wrong getting outcomes' })
  }
})

router.get('/users', async (req, res) => {
  try {
    const users = await db.getUsers()
    res.json(users)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: ' Route: Something went wrong getting users' })
  }
})

router.get('/classes', async (req, res) => {
  try {
    const classes = await db.getClasses()
    res.json(classes)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: ' Route: Something went wrong getting classes' })
  }
})

router.post('/user', async (req, res) => {
  try {
    //need to post the following shape
    // {id: number, name: string, classId}
    await db.addUser({ ...req.body })
    res.sendStatus(201)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: ' Route: Something went wrong getting classes' })
  }
})

export default router
