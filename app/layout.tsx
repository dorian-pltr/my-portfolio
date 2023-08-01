import React from 'react'
import Navbar from '@/components/navbar'
import '@/styles/global.css'

type DashboardLayoutProps = {
  children: React.ReactNode,
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <html lang='fr'>
      <body>
        <nav><Navbar /></nav>
        {children}
      </body>
    </html>
  )
}