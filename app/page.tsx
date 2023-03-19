import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="pt-40 text-3xl font-bold text-center underline mb-52">Hello World! Wedding Planner in progress</div>
    </main>
  )
}
