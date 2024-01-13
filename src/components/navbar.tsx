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
      bg={useColorModeValue('purple.500', 'purple.200')}
      p={1}
      color={useColorModeValue('gray.700', 'gray.200')}
      flexDirection={{ base: 'row', md: 'column' }}
      py={{ base: 'inherit', sm: 10 }}
      justify="space-between"
      position="fixed"
      zIndex={100}
      width={{ base: '100%', md: '120px' }}
      height={{ base: '70px', sm: '100px', md: '100%' }}
      shadow="dark-lg"
      bottom={{ base: '0', md: 'inherit' }}
      alignItems="center"
    >
      <LogoVariant />
      <MenuItems flexDirection={{ base: 'row', md: 'column' }} />
      <Flex
        flexDirection={{ base: 'row', md: 'column' }}
        mt={{ base: '2px', md: 10 }}
        ml={{ base: 1, sm: 'inherit' }}
        gap={2}
      >
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
