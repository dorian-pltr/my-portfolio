'use client'
import Hero from './hero'
import Skills from './skills'
import { Box, Stack } from '@chakra-ui/react'

export default function Page() {
  return (
    <div>
      <Stack p={{ base: '10', md: '20' }}>
        <Hero />
        <Box mt={15} mr={{ base: '10', lg: '20' }} ml={{ base: '10', lg: '20' }}>
          <Skills />
        </Box>
      </Stack>
    </div>
  )
}
