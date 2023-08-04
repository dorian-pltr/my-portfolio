'use client'

import React from 'react'
import Navbar from '@/components/navbar'
import { Providers } from "./providers"
import Footer from '@/components/footer'


type DashboardLayoutProps = {
  children: React.ReactNode,
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <html lang='fr'>
      <body>
        <Providers>
          <nav><Navbar /></nav>
          {children}
          <footer><Footer /></footer>
        </Providers>
      </body>
    </html>
  )
}