'use client'

import NextLink from 'next/link'
import { Box, Container, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import Logo from './logo'
import SocialButton from './socialButton'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
      mt={10}
    >
      <Container as={Stack} maxW="6xl" py={4} spacing={4} justify="center" align="center">
        <Logo />
        <Stack direction="row" spacing={6}>
          <Box as={NextLink} href="/">
            Accueil
          </Box>
          <Box as={NextLink} href="/about">
            À propos
          </Box>
          <Box as={NextLink} href="/skills">
            Compétences
          </Box>
          <Box as={NextLink} href="/projects">
            Projets
          </Box>
          <Box as={NextLink} href="/contact">
            Me contacter
          </Box>
        </Stack>
      </Container>
      <Box
        borderTopWidth={1}
        borderStyle="solid"
        borderColor={useColorModeValue('gray.200', 'gray.700')}
      >
        <Container
          as={Stack}
          maxW="6xl"
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}
        >
          <Text>© {year} Dorian PELLETIER | Tous droits réservés</Text>
          <Stack direction="row" spacing={6}>
            <SocialButton label="LinkedIn" href="https://www.linkedin.com/in/dorian-pltr/">
              <FaLinkedinIn />
            </SocialButton>
            <SocialButton label="Github" href="https://github.com/dorian-pltr">
              <FaGithub />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}
