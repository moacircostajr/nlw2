import { Request, Response } from 'express'
import db from '../database/connection'

export default class ConnectionsController {

  async index(request: Request, response: Response) {
    const totalConnections = await db('connections').count('* as total')
    const { total } = totalConnections[0]
    return response.json({ total })
  }
  async create(request: Request, response: Response) {
    try {
      const { user_id } = request.body
      console.log('user_id', user_id)
      await db('connections').insert({
        user_id
      })
      return response.status(201).send()
    } catch (err) {
      console.error(err)
      return response.status(400).send({
        error: 'Unexpected error while creating new connection'
      })
    }
  }

}