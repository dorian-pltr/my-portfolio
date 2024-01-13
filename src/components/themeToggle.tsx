import { Icon, IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { FaMoon, FaSun } from 'react-icons/fa'

export default function ThemeToggle() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <IconButton
      variant="ghost"
      aria-label="Dark Mode"
      _hover={{ bg: useColorModeValue('purple.600', 'purple.300') }}
      icon={colorMode === 'light' ? <Icon as={FaMoon} /> : <Icon as={FaSun} />}
      color={colorMode === 'light' ? 'white' : 'gray.800'}
      onClick={toggleColorMode}
      size={{ base: 'xs', sm: 'sm', md: 'md' }}
    />
  )
}
