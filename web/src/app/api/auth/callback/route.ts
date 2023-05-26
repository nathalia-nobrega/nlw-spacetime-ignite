import { api } from '@/lib/api'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  // Get code from the URL's params
  const { searchParams } = new URL(req.url)
  const code = searchParams.get('code')

  // Send the code to the API
  const registerResponse = await api.post('/register', {
    code,
  })

  // Should return token to the front-end as a cookie
  const acessToken = registerResponse.data

  const redirectURL = new URL('/', req.url)

  return NextResponse.redirect(redirectURL, {
    headers: {
      'Set-Cookie': `access_token=${acessToken}; Path=/; max-age=1296000;},`,
    },
  })
}
