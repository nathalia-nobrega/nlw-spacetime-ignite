import Image from 'next/image'
import nlwLogo from '../assets/logo.svg'

export function Hero() {
  return (
    <div className="space-y-5">
      <Image src={nlwLogo} alt="NextLevelWeek's Logo" />
      <div className="max-w-[420px] space-y-4">
        <h1 className="mt-5 text-5xl font-bold leading-tight text-gray-50">
          Your time capsule
        </h1>
        <p className="text-lg leading-relaxed">
          Collect incredible moments of your journey and share (if you want to)
          with the world!
        </p>
      </div>

      <a
        href="#"
        className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-white hover:bg-green-700 hover:text-black"
      >
        REGISTER A MEMORY
      </a>
    </div>
  )
}
