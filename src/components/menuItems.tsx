import { Button, Flex, ResponsiveValue } from '@chakra-ui/react'
import { Property } from 'csstype'
import NextLink from 'next/link'

type FlexDirection = Property.FlexDirection
type FlexWrap = Property.FlexWrap
type JustifyContent = Property.JustifyContent
type OnItemClickFunction = () => void

interface MenuButtonProps {
  href: string
  children: React.ReactNode
  onItemClick?: OnItemClickFunction
}

interface MenuItemsProps {
  flexDirection?: ResponsiveValue<FlexDirection>
  flexWrap?: ResponsiveValue<FlexWrap>
  justifyContent?: ResponsiveValue<JustifyContent>
  onItemClick?: OnItemClickFunction
}

const MenuButton = ({ href, children, onItemClick }: MenuButtonProps) => (
  <Button
    as={NextLink}
    href={href}
    variant="ghost"
    justifyContent="flex-start"
    onClick={onItemClick}
    size={{ base: 'xs', sm: 'sm', md: 'md' }}
    transform={{ base: 'none', md: 'rotate(270deg)' }}
  >
    {children}
  </Button>
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
      <MenuButton href="/" onItemClick={onItemClick}>
        Accueil
      </MenuButton>
      <MenuButton href="#about" onItemClick={onItemClick}>
        À propos
      </MenuButton>
      <MenuButton href="#portfolio" onItemClick={onItemClick}>
        Portfolio
      </MenuButton>
      <MenuButton href="#contact" onItemClick={onItemClick}>
        Contact
      </MenuButton>
    </Flex>
  )
}
