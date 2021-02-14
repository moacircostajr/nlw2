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

  await db('users').insert({
    // short syntax
    name,
    avatar,
    whatsapp,
    bio
  })

  return response.send()
})

export default routes