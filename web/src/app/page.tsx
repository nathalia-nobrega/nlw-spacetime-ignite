import Image from 'next/image'
import { User } from 'lucide-react'
import nlwLogo from '../assets/logo.svg'

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      {/* Left Column */}
      <section className="relative flex flex-col items-start justify-between overflow-hidden border-r bg-cover px-28 py-16">
        {/* Blur */}
        <div className="absolute left-1/2 right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 rounded-full bg-purple-700 opacity-70 blur-full" />

        {/* Stripes */}
        <div className="absolute bottom-0 right-3 top-3 w-2 bg-stripes" />

        {/* Sign in */}
        <a
          href="#"
          className="flex items-center gap-3 text-left transition-colors hover:text-gray-50"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
            <User className="h-5 w-5 text-gray-500" />
          </div>
          <p className="max-w-[140px] text-sm leading-snug">
            <span className="underline">Create your account</span> and record
            your memories
          </p>
        </a>

        {/* Hero */}
        <div className="space-y-5">
          <Image src={nlwLogo} alt="NextLevelWeek's Logo" />
          <div className="max-w-[420px] space-y-4">
            <h1 className="mt-5 text-5xl font-bold leading-tight text-gray-50">
              Your time capsule
            </h1>
            <p className="text-lg leading-relaxed">
              Collect incredible moments of your journey and share (if you want
              to) with the world!
            </p>
          </div>

          <a
            href="#"
            className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black text-white hover:bg-green-700 hover:text-black"
          >
            REGISTER A MEMORY
          </a>
        </div>

        {/* Copyright */}
        <span className="text-sm leading-relaxed text-gray-200">
          Made with at 💜{' '}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://rocketseat.com.br"
            className="underline hover:text-gray-100"
          >
            Rocketseat's
          </a>{' '}
          NLW
        </span>
      </section>

      {/* Right Column */}
      <section className="flex flex-col bg-gradient-to-br from-purple-800 to-zinc-800 bg-cover p-16">
        <div className="flex flex-1 items-center justify-center">
          <p className="w-[360px] text-center leading-relaxed">
            You don't have any memories yet.{' '}
            <a href="#" className="underline hover:text-gray-50">
              {' '}
              Create one now
            </a>
            !
          </p>
        </div>
      </section>
    </main>
  )
}
