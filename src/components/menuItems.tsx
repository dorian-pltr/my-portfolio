import { Button, Flex, ResponsiveValue, useColorModeValue } from '@chakra-ui/react'
import { Property } from 'csstype'

import { Link } from 'react-scroll'

type FlexDirection = Property.FlexDirection
type FlexWrap = Property.FlexWrap
type JustifyContent = Property.JustifyContent
type OnItemClickFunction = () => void

interface MenuButtonProps {
  href: string
  children: React.ReactNode
}

interface MenuItemsProps {
  flexDirection?: ResponsiveValue<FlexDirection>
  flexWrap?: ResponsiveValue<FlexWrap>
  justifyContent?: ResponsiveValue<JustifyContent>
  onItemClick?: OnItemClickFunction
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
      variant="ghost"
      color={useColorModeValue('white', 'black')}
      colorScheme="white"
      justifyContent="flex-start"
      size={{ base: 'xs', sm: 'sm', md: 'md' }}
      fontWeight="bold"
    >
      {children}
    </Button>
  </Link>
)

export default function MenuItems({
  flexDirection,
  flexWrap,
  justifyContent,
  onItemClick,
}: MenuItemsProps) {
  return (
    <Flex
      flexDirection={flexDirection}
      flexWrap={flexWrap}
      justifyContent={justifyContent}
      gap={{ base: 'inherit', md: '5rem' }}
      alignItems="center"
    >
      <MenuButton href="home" onItemClick={onItemClick}>
        Accueil
      </MenuButton>
      <MenuButton href="about" onItemClick={onItemClick}>
        À propos
      </MenuButton>
      <MenuButton href="portfolio" onItemClick={onItemClick}>
        Portfolio
      </MenuButton>
      <MenuButton href="contact" onItemClick={onItemClick}>
        Contact
      </MenuButton>
    </Flex>
  )
}
