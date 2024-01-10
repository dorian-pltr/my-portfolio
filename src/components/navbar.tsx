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
      <Stack mr={{ base: '5', lg: '150' }}>
        <LogoVariant />
      </Stack>

      <Stack display={{ base: 'none', lg: 'inherit' }}>
        <MenuItems />
      </Stack>

      <Center>
        <Button
          as={NextLink}
          href={process.env.NEXT_CV_URL ?? ''}
          target="_blank"
          colorScheme="pink"
          mr={4}
          ml={4}
          leftIcon={<DownloadIcon />}
          variant="solid"
        >
          CV
        </Button>
        <ThemeToggle />
        <Stack ml={4} display={{ base: 'inherit', lg: 'none' }}>
          <NavbarDrawer />
        </Stack>
      </Center>
    </Flex>
  )
}
