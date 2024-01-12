import LogoVariant from '@/src/components/logoVariant'
import { Button, Flex, useColorModeValue } from '@chakra-ui/react'
import NextLink from 'next/link'
import { FaDownload } from 'react-icons/fa'
import MenuItems from './menuItems'
import ThemeToggle from './themeToggle'

export default function Navbar() {
  return (
    <Flex
      as="nav"
      bg={useColorModeValue('purple.600', 'purple.300')}
      p={5}
      color={useColorModeValue('gray.700', 'gray.200')}
      flexDirection={{ base: 'row', md: 'column' }}
      justify="space-between"
      position="fixed"
      zIndex={100}
      width={{ base: '100%', md: '120px' }}
      height={{ base: '70px', sm: '100px', md: '100%' }}
      shadow="2xl"
      bottom={{ base: '0', md: 'inherit' }}
      alignItems="center"
    >
      <LogoVariant />
      <MenuItems flexDirection={{ base: 'row', md: 'column' }} />
      <Flex flexDirection={{ base: 'row', md: 'column' }} gap={2}>
        <ThemeToggle />
        <Button
          color={useColorModeValue('white', 'black')}
          _hover={{ bg: useColorModeValue('purple.700', 'purple.400') }}
          as={NextLink}
          href={process.env.NEXT_CV_URL ?? ''}
          target="_blank"
          variant="ghost"
          leftIcon={<FaDownload />}
          size={{ base: 'xs', sm: 'sm', md: 'md' }}
        >
          CV
        </Button>
      </Flex>
    </Flex>
  )
}
