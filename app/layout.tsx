import { Lato } from 'next/font/google'
import Navbar from '@components/Navbar/Navbar'
import Footer from '@components/Footer/Footer'

import '@styles/global.css'

const latoFont = Lato({
  weight: ['100', '300', '400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-lato',
})

export const metadata = {
  title: 'Mrtripop',
  description:
    'Portfolio website to improve skill, collect knowledge, sharing profile, and make good opportunities',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content="Mrtripop World Landing" />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content="Portfolio website to improve skill, collect knowledge, sharing profile, and make good opportunities"
        />
        <meta
          property="og:url"
          content="https://mrtripop.github.io/personal-website"
        />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/mrtripop/personal-website/main/assets/personal-image.png"
        />

        <meta name="twitter:title" content="Mrtripop World Landing" />
        <meta
          name="twitter:description"
          content="Portfolio website to improve skill, collect knowledge, sharing profile, and make good opportunities for me."
        />
        <meta
          name="twitter:image"
          content="https://raw.githubusercontent.com/mrtripop/personal-website/main/assets/personal-image.png"
        />
        <meta name="twitter:card" content="summary_large_image" />

        <link rel="icon" href="/icon.ico" sizes="any" />

        <title>Mrtripop</title>
      </head>
      <body className={latoFont.className}>
        <Navbar />
        <main className="scroll-smooth">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
