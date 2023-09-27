import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

// COMPONENTS
import { Version } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Franco Cespi Porfolio',
  description: 'Here you will find a preview of my most relevant computer science and art projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}

        <Version />
      </body>
    </html>
  )
}
