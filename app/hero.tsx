'use client'
import { Button, Flex, Heading, Image, Stack, Text, useBreakpointValue } from '@chakra-ui/react'

export default function Hero() {
  return (
    <Stack minH="100vh" direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align="center" justify="center">
        <Stack spacing={6} w="full" maxW="lg">
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text>Hello, je suis</Text>
            <Text
              as="span"
              position="relative"
              ml={5}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bgGradient: 'linear(to-l, pink.400, purple.400)',
                zIndex: -1,
              }}
            >
              Dorian PELLETIER
            </Text>
            <Text mt={50}>Votre développeur web Full Stack</Text>
            <Button colorScheme="purple" size="sm" mr={2}>
              React
            </Button>
            <Button colorScheme="purple" size="sm" mr={2}>
              Node.js
            </Button>
            <Button colorScheme="purple" size="sm" mr={2}>
              Next.js
            </Button>
            <Button colorScheme="purple" size="sm" mr={2}>
              Airtable
            </Button>
            <Button colorScheme="purple" size="sm">
              Power Automate
            </Button>
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color="gray.500">
            Quels que soient vos projets, qu&apos;ils soient de courte ou de longue durée, je vous
            encourage vivement à me contacter afin que nous puissions discuter de vos besoins et
            trouver la meilleure façon de collaborer 😊
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button rounded="full" colorScheme="pink">
              Me contacter
            </Button>
            <Button rounded="full" colorScheme="purple" variant="outline">
              À propos
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt="Login Image"
          objectFit="cover"
          src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        />
      </Flex>
    </Stack>
  )
}
