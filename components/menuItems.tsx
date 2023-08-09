import { Button, Flex } from '@chakra-ui/react'
import NextLink from 'next/link'
import { Property } from 'csstype'
import FlexDirection = Property.FlexDirection
import FlexWrap = Property.FlexWrap
import JustifyContent = Property.JustifyContent

type ResponsiveValue<T> = T | T[]

interface MenuItemsProps {
  flexDirection?: ResponsiveValue<FlexDirection>
  flexWrap?: ResponsiveValue<FlexWrap>
  justifyContent?: ResponsiveValue<JustifyContent>
  accueil?: boolean
}

export default function MenuItems({
  flexDirection,
  flexWrap,
  justifyContent,
  accueil,
}: MenuItemsProps) {
  return (
    <Flex flexDirection={flexDirection} flexWrap={flexWrap} justifyContent={justifyContent}>
      <Button
        display={accueil ? 'inherit' : 'none'}
        as={NextLink}
        href="/"
        mr={4}
        variant="ghost"
        justifyContent="flex-start"
      >
        Accueil
      </Button>
      <Button as={NextLink} href="/about" mr={4} variant="ghost" justifyContent="flex-start">
        À propos
      </Button>
      <Button as={NextLink} href="/skills" mr={4} variant="ghost" justifyContent="flex-start">
        Compétences
      </Button>
      <Button as={NextLink} href="/projects" mr={4} variant="ghost" justifyContent="flex-start">
        Projets
      </Button>
      <Button as={NextLink} href="/contact" mr={4} variant="ghost" justifyContent="flex-start">
        Me contacter
      </Button>
    </Flex>
  )
}
