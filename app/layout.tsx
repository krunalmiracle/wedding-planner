import Footer from '@/components/footer'
import NavBar from '@/components/navBar'
import './globals.css'
import BottomBar from './../components/bottomBar';

export const metadata = {
  title: 'Wedding Planner',
  description: 'An global weding planner by Krusil',
  viewport: { 
    width: "device-width",
    initialScale: 1.0
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>Wedding Planner</title>
      </head>
      <body className="debug-screens">
        <NavBar/>
        {children}
        <BottomBar/>
        <Footer/>
      </body>
    </html>
  )
}
