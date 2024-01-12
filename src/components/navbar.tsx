import LogoVariant from '@/src/components/logoVariant'
import { Button, Flex, useColorModeValue } from '@chakra-ui/react'
import NextLink from 'next/link'
import MenuItems from './menuItems'
import ThemeToggle from './themeToggle'

export default function Navbar() {
  return (
    <Flex
      as="nav"
      bg={useColorModeValue('gray.50', 'gray.900')}
      p={5}
      color={useColorModeValue('gray.700', 'gray.200')}
      flexDirection={{ base: 'row', md: 'column' }}
      justify="space-between"
      position="fixed"
      zIndex={100}
      width={{ base: '100%', md: '100px' }}
      height={{ base: '100px', md: '100%' }}
      shadow="2xl"
      bottom={{ base: '0', md: 'inherit' }}
      alignItems="center"
    >
      <LogoVariant />
      <MenuItems flexDirection={{ base: 'row', md: 'column' }} />
      <Flex flexDirection={{ base: 'row', md: 'column' }}>
        <ThemeToggle />
        <Button
          as={NextLink}
          href={process.env.NEXT_CV_URL ?? ''}
          target="_blank"
          colorScheme="pink"
          variant="solid"
          size={{ base: 'sm', sm: 'md' }}
        >
          CV
        </Button>
      </Flex>
    </Flex>
  )
}
