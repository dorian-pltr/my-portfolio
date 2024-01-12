import { Box, Container, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import { FaCalendar, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import SocialButton from './socialButton'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
      mt={10}
    >
      <Container
        as={Stack}
        maxW="6xl"
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
        mb={{ base: '100px', md: 0 }}
      >
        <Text>© {year} Dorian PELLETIER | Tous droits réservés</Text>
        <Stack direction="row" spacing={6}>
          <SocialButton label="Calendly" href={process.env.NEXT_CALENDLY_URL ?? ''}>
            <FaCalendar />
          </SocialButton>
          <SocialButton label="LinkedIn" href={process.env.NEXT_LINKEDIN_URL ?? ''}>
            <FaLinkedinIn />
          </SocialButton>
          <SocialButton label="Github" href={process.env.NEXT_GITHUB_URL ?? ''}>
            <FaGithub />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  )
}
