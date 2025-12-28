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
        url: '/asi-logo-black.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/asi-logo-black.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/asi-logo-black.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/asi-logo-black.png',
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
