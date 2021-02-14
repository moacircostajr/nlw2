import express from 'express'
import db from './database/connection'

const routes = express.Router()

routes.post('/classes', async (request, response) => {
  const {
    name,
    avatar,
    whatsapp,
    bio,
    subject,
    cost,
    schedule
  } = request.body

  const insertedUsersIds = await db('users').insert({
    // short syntax
    name,
    avatar,
    whatsapp,
    bio
  })

  const user_id = insertedUsersIds[0]

  await db('classes').insert({
    subject,
    cost,
    user_id
  })

  return response.send()
})

export default routes

// 1:39