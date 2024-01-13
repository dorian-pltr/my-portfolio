'use client'
import { Flex, Stack } from '@chakra-ui/react'
import ContactForm from './contactForm'
import './globals.css'
import Hero from './hero'
import ProjectsList from './projectsList'
import Skills from './skills'

export default function Page() {
  return (
    <Stack px={{ base: '5', md: '20' }}>
      <section id="home">
        <Flex
          pb="50"
          pt={{ base: '5', md: '20' }}
          minHeight="100vh"
          flexDirection="column"
          justifyContent="center"
        >
          <Hero />
        </Flex>
      </section>
      <section id="about">
        <Flex pb="5rem" minHeight="100vh" flexDirection="column" justifyContent="center">
          <Skills />
        </Flex>
      </section>
      <section id="portfolio">
        <Flex pb="5rem" minHeight="100vh" flexDirection="column" justifyContent="center">
          <ProjectsList />
        </Flex>
      </section>
      <section id="contact">
        <Flex
          pb={{ base: '5', md: '20' }}
          minHeight="100vh"
          flexDirection="column"
          justifyContent="center"
        >
          <ContactForm />
        </Flex>
      </section>
    </Stack>
  )
}
