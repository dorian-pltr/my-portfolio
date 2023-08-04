'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import theme from '../styles/theme' // Importez le thème que vous avez créé

export function Providers({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}