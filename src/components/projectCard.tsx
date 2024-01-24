'use client'

import {
  Box,
  Flex,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'
import { useEffect, useRef } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import { Project } from '../types'
import ProjectStatus from './projectStatus'
import technologiesList from './technologiesList'

export default function ProjectCard({
  name,
  status,
  technologies,
  images,
  description,
}: Readonly<Project>) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const initializeCard3d = async () => {
      if (cardRef.current) {
        /* Dynamically import the card3d library within the useEffect hook to ensure that it is only
        loaded on the client side where the document object is available */
        const { default: Card3d } = await import('card3d')

        // Check if the component is still mounted before initializing
        if (cardRef.current) {
          // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
          const card = new Card3d(cardRef.current, {
            glare: true,
            glareOpacity: 0.05,
          })
        }
      }
    }

    initializeCard3d()
  }, [])

  return (
    <>
      <Flex
        p={6}
        flexDirection="column"
        alignSelf="stretch"
        bg={useColorModeValue('gray.50', 'gray.900')}
        rounded="xl"
        pos="relative"
        shadow="md"
        ref={cardRef}
        className="card"
        data-card3d=""
        onClick={onOpen}
      >
        <Box rounded="lg">
          {images && (
            <Image
              rounded="lg"
              height="200px"
              width="400px"
              objectFit="cover"
              src={images[0].url}
              alt={name}
              shadow="2xl"
            />
          )}
        </Box>
        <Flex pt={5} gap={5} alignItems="center" direction="column">
          <Heading textAlign="center" fontSize="2xl" fontFamily="body" fontWeight={800}>
            {name}
          </Heading>
          <ProjectStatus status={status.name} />
          <Flex gap={2} flexWrap="wrap" justifyContent="center" flexDirection="row">
            {technologies && technologiesList(technologies)}
          </Flex>
        </Flex>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center" fontSize="3xl" fontWeight="extrabold">
            {name}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex flexDirection="column" alignContent="center" justifyContent="center" gap={5}>
              <Carousel
                showThumbs={false}
                showStatus={false}
                showIndicators={false}
                showArrows={true}
                autoPlay={true}
              >
                {images?.map((image, index) => (
                  <Image
                    // eslint-disable-next-line react/no-array-index-key
                    key={index}
                    rounded="lg"
                    height="200px"
                    width="200px"
                    objectFit="cover"
                    src={image.url}
                    alt={name}
                  />
                ))}
              </Carousel>
              <Flex textAlign="center" fontSize="xl">
                {description}
              </Flex>
              <Flex gap={2} flexWrap="wrap" justifyContent="center" flexDirection="row">
                {technologies && technologiesList(technologies)}
              </Flex>
            </Flex>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
