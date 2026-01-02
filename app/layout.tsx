import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'POS Verge',
  description: 'POS Verge - Leading Payment Solutions Provider',
  themeColor: '#000000',
  icons: {
    icon: '/Asset 1.png',
    apple: '/Asset 1.png',
    shortcut: '/Asset 1.png',
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
        <link rel="icon" href="/Asset 1.png" type="image/png" />
        <link rel="shortcut icon" href="/Asset 1.png" type="image/png" />
        <link rel="apple-touch-icon" href="/Asset 1.png" />
        <link href="/static/css/main.c92bd3f8.css" rel="stylesheet" />
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

