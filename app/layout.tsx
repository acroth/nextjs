import React from 'react';
import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['300', '400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Alex Roth Personal Site',
  description: 'Personal site for Alex Roth, Frontend Engineer',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
