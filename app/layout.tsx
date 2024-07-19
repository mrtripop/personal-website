import { Lato, Nunito } from 'next/font/google'
import Navbar from '@components/Navbar/Navbar'
import Footer from '@components/Footer/NewFooter'

import '@styles/global.css'
import '@styles/global.scss'

const fontLato = Lato({
  weight: ['100', '300', '400', '700', '900'],
  subsets: ['latin'],
  variable: '--lato-font',
})

const fontNunito = Nunito({
  weight: ['200', '300', '400', '700', '900'],
  subsets: ['latin'],
  variable: '--nunito-font',
})

export const metadata = {
  title: 'Mrtripop',
  description:
    'Portfolio website to improve skill, collect knowledge, sharing profile, and make good opportunities',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={`${fontLato.variable} ${fontNunito.variable}`}>
      <head>
        <meta property='og:title' content='Mrtripop Portfolio' />
        <meta property='og:type' content='article' />
        <meta
          property='og:description'
          content='Portfolio website to collect experiences, showcase, and frontend practicing.'
        />
        <meta property='og:url' content='https://mrtripop.github.io/personal-website' />
        <meta
          property='og:image'
          content='https://raw.githubusercontent.com/mrtripop/personal-website/main/assets/personal-image.png'
        />

        <meta name='twitter:title' content='Mrtripop Portfolio' />
        <meta
          name='twitter:description'
          content='Portfolio website to collect experiences, showcase, and frontend practicing.'
        />
        <meta
          name='twitter:image'
          content='https://raw.githubusercontent.com/mrtripop/personal-website/main/assets/personal-image.png'
        />
        <meta name='twitter:card' content='summary_large_image' />

        <link rel='icon' href='/icon.ico' sizes='any' />

        <title>Mrtripop</title>
      </head>
      <body>
        <main className='scroll-smooth'>
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
