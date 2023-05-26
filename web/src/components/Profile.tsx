import { getUser } from '@/lib/auth'
import Image from 'next/image'

export function Profile() {
  const { name, userAvatar } = getUser()
  return (
    <div>
      <div className="flex items-center justify-center rounded-full ">
        <Image
          src={userAvatar}
          width={50}
          height={50}
          className="rounded-full"
          alt="An image of your GitHub avatar"
        ></Image>
        <p className="max-w-[200px] pl-3 text-sm leading-snug">
          <span>
            Welcome, <strong>{name}</strong>
          </span>
          <a href="" className="block text-red-400 hover:text-red-300">
            I want to leave
          </a>
        </p>
      </div>
    </div>
  )
}
