import type { Metadata } from 'next'
import { Ubuntu_Mono } from 'next/font/google'
import './global.css'
import styles from './layout.module.css'

// COMPONENTS
import { Version, Contact } from '@/components'

export const metadata: Metadata = {
  title: 'Franco Cespi Porfolio',
  description: 'Here you will find a preview of my most relevant computer science and art projects',
}

const ubuntuMono = Ubuntu_Mono({ //       <body className={ubuntuMono.className}>
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main className={styles.mainWrapper}>
          {children}
        </main>
        {/* <div className={styles.contactWrapper}>
          <Contact />
        </div> */}
        <Version />
      </body>
    </html>
  )
}
