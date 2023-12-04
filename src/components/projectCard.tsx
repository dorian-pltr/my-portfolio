'use client'

import { Box, Center, Flex, Heading, Image, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import Link from 'next/link'
import { Project } from '../types'
import technologiesList from './technologiesList'

export default function ProjectCard({ name, id, status, technologies, images }: Readonly<Project>) {
  return (
    <Link href={`/projects/${id}`} passHref>
      <Center py={12}>
        <Box
          p={6}
          maxW="330px"
          w="full"
          bg={useColorModeValue('gray.50', 'gray.900')}
          rounded="xl"
          pos="relative"
          shadow="md"
          zIndex={1}
          _hover={{ transform: 'scale(1.1)', shadow: 'lg' }}
          transition="1s"
        >
          <Link href={`/projects/${id}`} passHref></Link>
          <Box rounded="lg" mt={-12} pos="relative" height="230px">
            {images && (
              <Image
                rounded="lg"
                height={230}
                width={282}
                objectFit="cover"
                src={images[0].url}
                alt={name}
                shadow="2xl"
              />
            )}
          </Box>
          <Stack pt={5} gap={5} align="center">
            <Heading fontSize="2xl" fontFamily="body" fontWeight={800}>
              {name}
            </Heading>
            <Text fontSize="xl">{status?.name}</Text>
            <Flex gap={2} flexWrap="wrap" justifyContent="center" flexDirection="row">
              {technologies && technologiesList(technologies)}
            </Flex>
          </Stack>
        </Box>
      </Center>
    </Link>
  )
}
