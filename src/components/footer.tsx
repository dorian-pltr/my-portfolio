import { Box, Flex, Stack, Text, useColorModeValue } from '@chakra-ui/react'
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
      <Flex
        as={Stack}
        flexDirection="column"
        maxW="6xl"
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        ml={{ base: 'inherit', md: '20' }}
        justify="center"
        align="center"
        mb={{ base: '70px', sm: '100px', md: 0 }}
      >
        <Text align="center">© {year} Dorian PELLETIER | Tous droits réservés</Text>
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
      </Flex>
    </Box>
  )
}
