import { Button, Flex, ResponsiveValue, useColorModeValue } from '@chakra-ui/react'
import { Property } from 'csstype'

import { Link } from 'react-scroll'

type FlexDirection = Property.FlexDirection
type FlexWrap = Property.FlexWrap
type JustifyContent = Property.JustifyContent

interface MenuButtonProps {
  href: string
  children: React.ReactNode
}

interface MenuItemsProps {
  flexDirection?: ResponsiveValue<FlexDirection>
  flexWrap?: ResponsiveValue<FlexWrap>
  justifyContent?: ResponsiveValue<JustifyContent>
}

const MenuButton = ({ href, children }: MenuButtonProps) => (
  <Link
    activeClass={useColorModeValue('activeLight', 'activeDark')}
    to={href}
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
  >
    <Button
      variant="unstyled"
      color={useColorModeValue('white', 'gray.800')}
      _hover={{ bg: useColorModeValue('purple.600', 'purple.300') }}
      justifyContent="flex-start"
      size={{ base: 'xs', sm: 'sm', md: 'md' }}
      fontWeight="bold"
    >
      {children}
    </Button>
  </Link>
)

export default function MenuItems({ flexDirection, flexWrap, justifyContent }: MenuItemsProps) {
  return (
    <Flex
      flexDirection={flexDirection}
      flexWrap={flexWrap}
      justifyContent={justifyContent}
      gap={{ base: 'inherit', md: '5rem' }}
      alignItems="center"
    >
      <MenuButton href="home">Accueil</MenuButton>
      <MenuButton href="about">À propos</MenuButton>
      <MenuButton href="portfolio">Portfolio</MenuButton>
      <MenuButton href="contact">Contact</MenuButton>
    </Flex>
  )
}
