'use client'

import { useDisclosure } from '@chakra-ui/hooks'
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from '@chakra-ui/react'
import { DownloadIcon, HamburgerIcon } from '@chakra-ui/icons'
import React from 'react'
import MenuItems from '@/components/menuItems'
import NextLink from 'next/link'

export default function NavbarDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef<HTMLButtonElement>(null)

  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        <HamburgerIcon />
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <MenuItems flexDirection="column" accueil={true} />
          </DrawerBody>
          <DrawerFooter justifyContent="flex-start">
            <Button
              as={NextLink}
              href="/"
              colorScheme="pink"
              mr="4"
              leftIcon={<DownloadIcon />}
              variant="link"
            >
              CV
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
