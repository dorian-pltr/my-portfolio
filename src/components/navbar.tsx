import LogoVariant from '@/src/components/logoVariant'
import { DownloadIcon } from '@chakra-ui/icons'
import { Button, Center, Flex, Stack, useColorModeValue } from '@chakra-ui/react'
import NextLink from 'next/link'
import MenuItems from './menuItems'
import NavbarDrawer from './navbarDrawer'
import ThemeToggle from './themeToggle'

export default function Navbar() {
  return (
    <Flex
      as="nav"
      bg={useColorModeValue('gray.50', 'gray.900')}
      p={5}
      color={useColorModeValue('gray.700', 'gray.200')}
      justify="space-between"
      alignItems="center"
    >
      <LogoVariant />
      <Stack display={{ base: 'none', lg: 'inherit' }}>
        <MenuItems />
      </Stack>
      <Center>
        <Button
          as={NextLink}
          href="/docs/Dorian_PELLETIER_CV.pdf"
          colorScheme="pink"
          mr="4"
          ml={4}
          leftIcon={<DownloadIcon />}
          variant="solid"
        >
          CV
        </Button>
        <ThemeToggle />
        <Stack ml="4" display={{ base: 'inherit', lg: 'none' }}>
          <NavbarDrawer />
        </Stack>
      </Center>
    </Flex>
  )
}
