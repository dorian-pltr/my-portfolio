'use client'

import React from 'react'
import Navbar from '@/components/navbar'
import { Providers } from './providers'
import Footer from '@/components/footer'

type DashboardLayoutProps = {
  children: React.ReactNode
}
export default function Layout({ children }: DashboardLayoutProps) {
  return (
    <html lang="fr">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff /" />
        <title>Dorian PELLETIER - Développeur Full Stack</title>
      </head>
      <body>
        <Providers>
          <nav>
            <Navbar />
          </nav>
          {children}
          <footer>
            <Footer />
          </footer>
        </Providers>
      </body>
    </html>
  )
}
