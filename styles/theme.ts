// 1. import `extendTheme` function
import { extendTheme, ThemeConfig } from '@chakra-ui/react'

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'dark', // Définissez ici le mode couleur initial (light ou dark)
  useSystemColorMode: false, // Définissez sur true si vous souhaitez que le thème suive les paramètres du système d'exploitation
}

// 3. Extend the theme
const theme = extendTheme({ config })

export default theme