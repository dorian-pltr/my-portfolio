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
import MenuItems from '@/src/components/menuItems'
import NextLink from 'next/link'

export default function NavbarDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef<HTMLButtonElement>(null)
  const handleMenuItemClick = () => {
    onClose() // Ferme le tiroir lorsque l'élément du menu est cliqué
  }

  return (
    <>
      <Button ref={btnRef} variant="ghost" colorScheme="gray" onClick={onOpen}>
        <HamburgerIcon />
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <MenuItems flexDirection="column" onItemClick={handleMenuItemClick} />
          </DrawerBody>
          <DrawerFooter>
            <Button
              as={NextLink}
              href="/docs/Dorian_PELLETIER_CV.pdf"
              colorScheme="pink"
              mr="4"
              leftIcon={<DownloadIcon />}
              variant="solid"
              width="100%"
            >
              CV
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
