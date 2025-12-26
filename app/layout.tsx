import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Atlas Spatial Intelligence',
  description: 'Created with v0',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/logo_small.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/logo_small.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/logo_small.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/logo_small.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
