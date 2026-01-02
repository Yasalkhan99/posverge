import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Aivora - AI Agency & Technology React Template',
  description: 'Web site created using Next.js',
  themeColor: '#000000',
  icons: {
    icon: '/favicon.svg',
    apple: '/logo192.png',
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/static/media/fa-solid-900.866bbb7a13a33d21b363.ttf"
          as="font"
          type="font/ttf"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/static/media/fa-brands-400.176a65f44a88183cf1dc.ttf"
          as="font"
          type="font/ttf"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/static/media/fa-regular-400.1fb710c67dcecf785a61.ttf"
          as="font"
          type="font/ttf"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/static/media/fa-light-300.8b18a77be77619201f1a.ttf"
          as="font"
          type="font/ttf"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/static/media/themify.eda8b94308c6f538f04a.ttf"
          as="font"
          type="font/ttf"
          crossOrigin=""
        />
      </head>
      <body>{children}</body>
    </html>
  )
}

