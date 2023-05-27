import 'dotenv/config'

import fastify from 'fastify'
import jwt from '@fastify/jwt'
import { memoriesRoutes } from './routes/memories'
import { usersRoutes } from './routes/users'
import { authRoutes } from './routes/auth'
import cors from '@fastify/cors'

export const startServer = async () => {
  const app = fastify()
  app.register(cors, {
    origin: true, // todas as URLs de front-end poderão acessar nosso back-end
  })

  app.register(jwt, {
    secret: 'spacetime',
  })
  app.register(authRoutes)
  app.register(usersRoutes)
  app.register(memoriesRoutes)

  app
    .listen({
      port: 3333,
      host: '0.0.0.0',
    })
    .then(() => {
      console.log('Server running on http://localhost:3333')
    })
}
