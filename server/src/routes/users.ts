import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'
import { z } from 'zod'

export async function usersRoutes(app: FastifyInstance) {
  app.get('/users', async () => {
    const users = await prisma.user.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    })

    return users.map((user) => {
      return {
        id: user.id,
        fullName: user.fullName,
        avatar: user.avatar,
      }
    })
  })

  app.get('/users/:id', async (req) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(req.params)

    return await prisma.user.findUniqueOrThrow({
      where: {
        id,
      },
    })
  })
}
