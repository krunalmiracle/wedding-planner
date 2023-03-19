import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="px-4 text-3xl font-bold text-center underline py-60 bg-yellow-50">Hello World! Wedding Planner in progress</div>
      <div className="px-4 text-3xl font-bold text-center underline py-60 bg-blue-50">Section 2</div>
      <div className="px-4 text-3xl font-bold text-center underline py-60 bg-purple-50">Section 3</div>
    </main>
  )
}
