'use client'

import Footer from '@/src/components/footer'
import Navbar from '@/src/components/navbar'
import React from 'react'
import { Providers } from './providers'

import { Stack } from '@chakra-ui/react'
import { Provider, createClient, fetchExchange } from 'urql'

const client = createClient({
  url: process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:4000/graphql',
  exchanges: [fetchExchange],
})

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
        <Provider value={client}>
          <Providers>
            <Navbar />
            <Stack pl={{ base: '0', md: '100px' }}>{children}</Stack>
            <footer>
              <Footer />
            </footer>
          </Providers>
        </Provider>
      </body>
    </html>
  )
}
