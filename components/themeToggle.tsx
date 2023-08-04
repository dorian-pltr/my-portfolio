import { Icon, IconButton, useColorMode } from '@chakra-ui/react'
import { FaMoon, FaSun } from 'react-icons/fa'

export default function ThemeToggle() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <IconButton
      aria-label="Toggle Dark Mode"
      size="md"
      icon={colorMode === 'light' ? <Icon as={FaMoon} /> : <Icon as={FaSun} />}
      onClick={toggleColorMode}
    />
  )
}
