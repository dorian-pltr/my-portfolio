import { Icon, IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { FaMoon, FaSun } from 'react-icons/fa'

export default function ThemeToggle() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <IconButton
      variant="ghost"
      aria-label="Dark Mode"
      _hover={{ bg: useColorModeValue('purple.700', 'purple.400') }}
      icon={colorMode === 'light' ? <Icon as={FaMoon} /> : <Icon as={FaSun} />}
      color={colorMode === 'light' ? 'white' : 'black'}
      onClick={toggleColorMode}
      size={{ base: 'xs', sm: 'sm', md: 'md' }}
    />
  )
}
