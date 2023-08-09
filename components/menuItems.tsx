import { Button, Flex, ResponsiveValue } from '@chakra-ui/react'
import NextLink from 'next/link'
import { Property } from 'csstype'

type FlexDirection = Property.FlexDirection
type FlexWrap = Property.FlexWrap
type JustifyContent = Property.JustifyContent

interface MenuItemsProps {
  flexDirection?: ResponsiveValue<FlexDirection>
  flexWrap?: ResponsiveValue<FlexWrap>
  justifyContent?: ResponsiveValue<JustifyContent>
  displayHome?: boolean
}

const MenuButton = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Button as={NextLink} href={href} mr={4} variant="ghost" justifyContent="flex-start">
    {children}
  </Button>
)

export default function MenuItems({
  flexDirection,
  flexWrap,
  justifyContent,
  displayHome,
}: MenuItemsProps) {
  return (
    <Flex flexDirection={flexDirection} flexWrap={flexWrap} justifyContent={justifyContent}>
      {displayHome && <MenuButton href="/">Accueil</MenuButton>}
      <MenuButton href="/about">À propos</MenuButton>
      <MenuButton href="/skills">Compétences</MenuButton>
      <MenuButton href="/projects">Projets</MenuButton>
      <MenuButton href="/contact">Me contacter</MenuButton>
    </Flex>
  )
}
