import { FastifyInstance } from 'fastify'
import axios from 'axios'
import { z } from 'zod'
import { prisma } from '../lib/prisma'

export async function authRoutes(app: FastifyInstance) {
  app.post('/register', async (req) => {
    const bodySchema = z.object({
      code: z.string(),
    })

    // Trading the generated CODE for an ACCESS TOKEN
    const { code } = bodySchema.parse(req.body)
    const acessTokenResponse = await axios.post(
      'https://github.com/login/oauth/access_token',
      {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      },
      {
        headers: {
          Accept: 'application/json',
        },
      },
    )

    const { access_token } = acessTokenResponse.data

    /* Since this route returns public and private information about the authenticated user,
    we need to send an Authorization to the API, so that we can make the request on behalf of the user.
    */
    const userResponse = await axios.get('https://api.github.com/user', {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })

    const userSchema = z.object({
      id: z.number(),
      login: z.string(),
      name: z.string().nullable(),
      avatar_url: z.string().url(),
    })

    const userInfo = userSchema.parse(userResponse.data)

    let user = await prisma.user.findUnique({
      where: {
        gitHubId: userInfo.id,
      },
    })

    // IF the user's info hasn't been created in the DB, we create it.
    if (!user) {
      user = await prisma.user.create({
        data: {
          gitHubId: userInfo.id,
          login: userInfo.login,
          name: userInfo.name === null ? userInfo.login : userInfo.name,
          avatar: userInfo.avatar_url,
        },
      })
    }

    // Return the JWT token to authorize further requests to the server by the front-end
    const token = app.jwt.sign(
      {
        sub: user.id,
        name: user.name,
        userAvatar: user.avatar,
      },
      {
        expiresIn: '15 days',
      },
    )

    return token
  })
}
