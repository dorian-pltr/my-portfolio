'use client'
import Hero from './hero'
import Skills from './skills'
import { Box, Stack } from '@chakra-ui/react'
import './globals.css'

export default function Page() {
  return (
    <Stack p={{ base: '10', md: '20' }}>
      <Hero />
      <Box pt="50">
        <Skills />
      </Box>
    </Stack>
  )
}
