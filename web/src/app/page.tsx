import { cookies } from 'next/headers'

import { Profile } from '@/components/Profile'
import { Copyright } from '@/components/Copyright'
import { Hero } from '@/components/Hero'
import { SignIn } from '@/components/SignIn'
import { EmptyMemory } from '@/components/EmptyMemory'

export default async function Home() {
  const isAuthenticated = cookies().has('access_token')
  return (
    <main className="grid min-h-screen grid-cols-2">
      {/* Left Column */}
      <section className="relative flex flex-col items-start justify-between overflow-hidden border-r bg-cover px-28 py-16">
        {/* Blur */}
        <div className="absolute left-1/2 right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 rounded-full bg-purple-700 opacity-70 blur-full" />

        {/* Stripes */}
        <div className="absolute bottom-0 right-3 top-3 w-2 bg-stripes" />

        {isAuthenticated ? <Profile /> : <SignIn />}
        <Hero />
        <Copyright />
      </section>

      {/* Right Column */}
      <section className="flex flex-col bg-gradient-to-br from-purple-800 to-zinc-800 bg-cover p-16">
        <EmptyMemory />
      </section>
    </main>
  )
}
