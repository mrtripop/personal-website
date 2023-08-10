import { Lato } from 'next/font/google'
import Navbar from '@components/Navbar/Navbar'
import Footer from '@components/Footer/Footer'
import { PersonalMetaImage } from '@assets'

import '@styles/global.css'

const lato = Lato({
  weight: ['100', '300', '400', '700', '900'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'Mrtripop',
  description:
    'Portfolio website to improve skill, collect knowledge, sharing profile, and make good opportunities',
  icons: {
    icon: '/icon.ico',
  },
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
          content="https://mrtripop.github.io/resume-website"
        />
        <meta property="og:image" content={PersonalMetaImage.src} />

        <meta name="twitter:title" content="Mrtripop World Landing" />
        <meta
          name="twitter:description"
          content="Portfolio website to improve skill, collect knowledge, sharing profile, and make good opportunities for me."
        />
        <meta name="twitter:image" content={PersonalMetaImage.src} />
        <meta name="twitter:card" content="summary_large_image" />
        <title>Mrtripop</title>
        <link rel="icon" href="/favicon.ico" sizes="96x96" />
      </head>
      <body className={lato.className}>
        <Navbar />
        <main className="scroll-smooth">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
