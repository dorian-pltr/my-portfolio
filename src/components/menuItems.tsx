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
  marginRight?: number
}

interface MenuItemsProps {
  flexDirection?: ResponsiveValue<FlexDirection>
  flexWrap?: ResponsiveValue<FlexWrap>
  justifyContent?: ResponsiveValue<JustifyContent>
  onItemClick?: OnItemClickFunction
}

const MenuButton = ({ href, children, onItemClick, marginRight }: MenuButtonProps) => (
  <Button
    as={NextLink}
    href={href}
    mr={marginRight}
    variant="ghost"
    justifyContent="flex-start"
    onClick={onItemClick}
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
    <Flex flexDirection={flexDirection} flexWrap={flexWrap} justifyContent={justifyContent}>
      <MenuButton href="/" onItemClick={onItemClick} marginRight={4}>
        Accueil
      </MenuButton>
      <MenuButton href="/projects" onItemClick={onItemClick} marginRight={4}>
        Projets
      </MenuButton>
      <MenuButton href="/contact" onItemClick={onItemClick} marginRight={0}>
        Me contacter
      </MenuButton>
    </Flex>
  )
}
