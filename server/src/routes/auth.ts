import { FastifyInstance } from 'fastify'
import axios from 'axios'
import { z } from 'zod'

export async function authRoutes(app: FastifyInstance) {
  app.post('/register', async (req) => {
    const bodySchema = z.object({
      code: z.string(),
    })

    const { code } = bodySchema.parse(req.body)
    const acessTokenResponse = await axios.post(
      'https://github.com/login/oauth/access_token',
      null,
      {
        params: {
          client_id: process.env.GITHUB_CLIENT_ID,
          client_secret: process.env.GITHUB_CLIENT_SECRET,
          code,
        },
        headers: {
          Accept: 'application/json',
        },
      },
    )

    // const { acess_token } = acessTokenResponse.data

    return {
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
      code,
    }
  })
}
