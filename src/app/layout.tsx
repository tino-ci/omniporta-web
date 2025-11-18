import type { Metadata } from 'next'
import Header from '@components/global/header'
import Footer from '@components/global/footer'
import '@/styles/globals.css'
import { Manrope } from './fonts'
import { BaseGoogleAnalytics } from '@/components/global'
import 'animate.css/animate.min.css'

export const metadata: Metadata = {
  title: 'Omniporta - The Gateway to a New World',
  description: 'Omniporta - The Gateway to a New World',
  keywords: ['Omniporta', 'Omni', 'porta', 'The Gateway to a New World', 'wallet', 'Web3 Life'],
  twitter: {
    card: 'summary_large_image',
    description: 'Omniporta - The Gateway to a New World',
    title: 'Omniporta - The Gateway to a New World',
    creator: '@omni_porta',
    images: {
      url: 'https://x.com/omni_porta/header_photo',
      alt: 'Omniporta Preview'
    },
    site: '@omni_porta',
    creatorId: '@omni_porta'
  },
  openGraph: {
    type: 'website',
    title: 'Omniporta - The Gateway to a New World',
    url: 'https://www.omniporta.com/',
    description: 'Omniporta - The Gateway to a New World',
    images: {
      url: 'https://x.com/omni_porta/header_photo',
      alt: 'Omniporta Preview'
    }
  }
}

export const viewport = {
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className={`${Manrope.className} overflow-y-scroll scrollbar-hide`}>
      <head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Omniporta - The Gateway to a New World',
              url: 'https://www.omniporta.com/',
              logo: 'https://www.omniporta.com/images/logo.png',
              description: 'Omniporta - The Gateway to a New World'
            })
          }}
        />
      </head>
      <body className={`app relative overflow-hidden`}>
        <Header />
        <main>{children}</main>
        <Footer />
        {/* <BaseGoogleAnalytics /> */}
      </body>
    </html>
  )
}
