import type { Metadata } from 'next'
import type { PropsWithChildren } from 'react'
import { Geist, Geist_Mono } from 'next/font/google'
import '@/styles/globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Next.js和Shadcn构建现代Web应用',
  description: 'Next.js提供了一个高效的前端框架,而Shadcn则带来了优雅的UI组件。',
  keywords: ['Next.js', 'Shadcn', 'Web应用', '现代Web应用', 'Next.js和Shadcn'],
}

interface RootLayoutProps extends PropsWithChildren { }

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
