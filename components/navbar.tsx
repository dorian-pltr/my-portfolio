import NextLink from 'next/link'
import { Button, Center, Flex, Stack, useColorModeValue } from '@chakra-ui/react'
import Logo from '@/components/logo'
import ThemeToggle from './themeToggle'
import NavbarDrawer from './navbarDrawer'
import { DownloadIcon } from '@chakra-ui/icons'
import MenuItems from './menuItems'

export default function Navbar() {
  return (
    <Flex
      as="nav"
      bg={useColorModeValue('gray.50', 'gray.900')}
      p={5}
      color={useColorModeValue('gray.700', 'gray.200')}
      mb={10}
      justify="space-between"
      alignItems="center"
    >
      <Logo />
      <Center display={{ base: 'none', md: 'initial' }}>
        <MenuItems flexDirection="row" />
      </Center>
      <Center>
        <Button
          as={NextLink}
          href="/docs/Dorian_PELLETIER_CV.pdf"
          colorScheme="pink"
          mr="4"
          leftIcon={<DownloadIcon />}
          variant="link"
        >
          CV
        </Button>
        <ThemeToggle />
        <Stack ml="4" display={{ base: 'initial', md: 'none' }}>
          <NavbarDrawer />
        </Stack>
      </Center>
    </Flex>
  )
}
