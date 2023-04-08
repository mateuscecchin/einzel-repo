import Image from 'next/image'
import { Inter } from 'next/font/google'
import { AGUA } from "@monorepo/core"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <h1>{AGUA}</h1>
  )
}
