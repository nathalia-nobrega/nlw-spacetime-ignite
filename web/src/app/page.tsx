export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      {/* Left Column */}
      <section className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 px-28 py-16">
        {/* Blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-x-1/2 -translate-y-1/2 rounded-full  bg-purple-700 opacity-50 blur-[380px]" />

        {/* Stripes */}
        <div className="absolute bottom-0 right-3 top-3 w-2 bg-stripes" />
      </section>

      {/* Right Column */}
      <section className="flex flex-col p-16">
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
