import { useColorMode, IconButton, Icon } from '@chakra-ui/react'
import { FaSun, FaMoon } from 'react-icons/fa'

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <IconButton
      aria-label="Toggle Dark Mode"
      icon={colorMode === 'light' ? <Icon as={FaMoon} /> : <Icon as={FaSun} />}
      onClick={toggleColorMode}
    />
  )
}

export default ThemeToggle
