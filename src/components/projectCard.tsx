'use client'

import { Box, Flex, Heading, Image, Text, useColorModeValue } from '@chakra-ui/react'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { Project } from '../types'
import technologiesList from './technologiesList'

export default function ProjectCard({ name, id, status, technologies, images }: Readonly<Project>) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const initializeCard3d = async () => {
      if (cardRef.current) {
        /* Dynamically import the card3d library within the useEffect hook to ensure that it is only 
        loaded on the client side where the document object is available */
        const { default: Card3d } = await import('card3d')

        // Check if the component is still mounted before initializing
        if (cardRef.current) {
          const card = new Card3d(cardRef.current, {
            glare: true,
            glareOpacity: 0.1,
          })
        }
      }
    }

    initializeCard3d()
  }, [])

  return (
    <Link href="#portfolio" passHref>
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
      >
        <Box rounded="lg">
          {images && (
            <Image
              rounded="lg"
              height="200px"
              width="200px"
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
          <Text fontSize="xl">{status?.name}</Text>
          <Flex gap={2} flexWrap="wrap" justifyContent="center" flexDirection="row">
            {technologies && technologiesList(technologies)}
          </Flex>
        </Flex>
      </Flex>
    </Link>
  )
}
