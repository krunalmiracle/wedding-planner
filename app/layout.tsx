import Footer from '@/components/footer'
import NavBar from '@/components/navbar'
import './globals.css'

export const metadata = {
  title: 'Wedding Planner',
  description: 'An global weding planner by Krusil',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Wedding Planner</title>
      </head>
      <body>
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
