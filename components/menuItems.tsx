import { Button, Flex, ResponsiveValue } from '@chakra-ui/react'
import NextLink from 'next/link'
import { Property } from 'csstype'

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
  displayHome?: boolean
  onItemClick?: OnItemClickFunction
}

const MenuButton = ({ href, children, onItemClick }: MenuButtonProps) => (
  <Button
    as={NextLink}
    href={href}
    mr={4}
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
  displayHome,
  onItemClick,
}: MenuItemsProps) {
  return (
    <Flex flexDirection={flexDirection} flexWrap={flexWrap} justifyContent={justifyContent}>
      {displayHome && (
        <MenuButton href="/" onItemClick={onItemClick}>
          Accueil
        </MenuButton>
      )}
      <MenuButton href="/about" onItemClick={onItemClick}>
        À propos
      </MenuButton>
      <MenuButton href="/skills" onItemClick={onItemClick}>
        Compétences
      </MenuButton>
      <MenuButton href="/projects" onItemClick={onItemClick}>
        Projets
      </MenuButton>
      <MenuButton href="/contact" onItemClick={onItemClick}>
        Me contacter
      </MenuButton>
    </Flex>
  )
}
