import NextLink from 'next/link'
import { Box, Button, Center, Flex, Spacer, useColorModeValue } from '@chakra-ui/react'
import Logo from '@/components/logo'
import ThemeToggle from './themeToggle'
import { DownloadIcon } from '@chakra-ui/icons'

export default function Navbar() {
  //const { t, lang } = useTranslation('common')
  return (
    <Flex
      as="nav"
      bg={useColorModeValue('gray.50', 'gray.900')}
      p={5}
      color={useColorModeValue('gray.700', 'gray.200')}
      mb={10}
    >
      <Logo />
      <Spacer />
      <Center>
        <Box>
          <Button as={NextLink} href="/about" mr={4} variant="ghost">
            À propos
          </Button>
          <Button as={NextLink} href="/skills" mr={4} variant="ghost">
            Compétences
          </Button>
          <Button as={NextLink} href="/projects" mr={4} variant="ghost">
            Projets
          </Button>
          <Button as={NextLink} href="/contact" mr={4} variant="ghost">
            Me contacter
          </Button>
        </Box>
      </Center>
      <Spacer />
      <Center>
        <Button
          as={NextLink}
          href="/"
          colorScheme="pink"
          mr="4"
          leftIcon={<DownloadIcon />}
          variant="link"
        >
          CV
        </Button>
        <ThemeToggle />
      </Center>
    </Flex>
  )
}
