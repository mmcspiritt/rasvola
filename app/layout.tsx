import './globals.css'
import type { Metadata } from 'next'
import { Inter, Fraunces } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const fraunces = Fraunces({ 
  subsets: ['latin'],
  variable: '--font-fraunces',
})

export const metadata: Metadata = {
  title: 'Rasvola Ice Cream',
  description: 'Vintage-style frosted ice cream bar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${fraunces.variable}`}>{children}</body>
    </html>
  )
}