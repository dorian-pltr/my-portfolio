'use client'
import { Box, Stack } from '@chakra-ui/react'
import './globals.css'
import Hero from './hero'
import ProjectsList from './projectsList'
import Skills from './skills'

export default function Page() {
  return (
    <Stack p={{ base: '10', md: '20' }}>
      <Hero />
      <section id="about">
        <Box pt="50">
          <Skills />
        </Box>
      </section>
      <section id="portfolio">
        <ProjectsList />
      </section>
      <section id="contact"> </section>
    </Stack>
  )
}
