import { Lato } from 'next/font/google'
import Navbar from '@components/Navbar/Navbar'

import '@styles/global.css'
import Footer from '@components/Footer/Footer'

const lato = Lato({
  weight: ['100', '300', '400', '700', '900'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'Mrtripop | Home',
  description: `One of my resume, I create as a website for easy to update experience and working with share knowledge. If this impressive for you, don't worry, contact me.`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Navbar />
        <main className="scroll-smooth">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
