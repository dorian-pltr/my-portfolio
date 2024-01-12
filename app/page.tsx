'use client'
import { Box, Stack } from '@chakra-ui/react'
import ContactForm from './contactForm'
import './globals.css'
import Hero from './hero'
import ProjectsList from './projectsList'
import Skills from './skills'

export default function Page() {
  return (
    <Stack p={{ base: '5', md: '10' }}>
      <section id="home">
        <Box pb="50">
          <Hero />
        </Box>
      </section>
      <section id="about">
        <Box pb="5rem">
          <Skills />
        </Box>
      </section>
      <section id="portfolio">
        <Box pb="5rem">
          <ProjectsList />
        </Box>
      </section>
      <section id="contact">
        <Box pb="5rem">
          <ContactForm />
        </Box>
      </section>
    </Stack>
  )
}
