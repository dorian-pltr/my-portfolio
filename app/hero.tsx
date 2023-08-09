'use client'
import {
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import NextLink from 'next/link'

export default function Hero() {
  return (
    <>
      <Stack p={{ base: '10', md: '20' }} direction={{ base: 'column', md: 'row' }}>
        <Flex flex={0.6} align="center" justify="center">
          <Stack spacing={6} w="full">
            <Heading fontSize={{ base: '4xl', md: '4xl', lg: '5xl' }}>
              <Text align={{ base: 'center', md: 'left' }}>Hello, je suis</Text>
              <Text
                align={{ base: 'center', md: 'left' }}
                bgGradient="linear(to-r, purple.400, pink.400, yellow.400)"
                bgClip="text"
                fontWeight="extrabold"
              >
                Dorian PELLETIER
              </Text>
              <Center>
                <Image
                  mt={50}
                  alt="Mon portrait"
                  borderRadius="full"
                  maxHeight="200"
                  src="images/color_portrait.png"
                  minWidth="auto"
                  display={{ base: 'initial', md: 'none' }}
                />
              </Center>
              <Text mt={50} align={{ base: 'center', md: 'left' }}>
                Votre développeur Full Stack
              </Text>
              <Stack
                mt={5}
                align={{ base: 'center', md: 'left' }}
                justify={{ base: 'center', md: 'left' }}
                direction="row"
                flexWrap="wrap"
              >
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
              </Stack>
            </Heading>
            <Text
              fontSize={{ base: 'md', lg: 'lg' }}
              color="gray.500"
              align={{ base: 'center', md: 'left' }}
            >
              Quels que soient vos projets, qu&apos;ils soient de courte ou de longue durée, je vous
              encourage vivement à me contacter afin que nous puissions discuter de vos besoins et
              trouver la meilleure façon de collaborer 😊
            </Text>
            <Stack
              direction={{ base: 'column', md: 'row' }}
              spacing={4}
              mt={{ base: '5', md: '0' }}
              mb={{ base: '5', md: '0' }}
            >
              <Button as={NextLink} rounded="full" colorScheme="pink" href="/contact">
                Me contacter
              </Button>
              <Button
                as={NextLink}
                rounded="full"
                colorScheme="purple"
                variant="outline"
                href="/about"
              >
                À propos
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={0.4} justifyContent="center">
          <Center>
            <Image
              alt="Mon portrait"
              borderRadius="full"
              maxHeight="300"
              src="images/color_portrait.png"
              minWidth="auto"
              display={{ base: 'none', md: 'initial' }}
            />
          </Center>
        </Flex>
      </Stack>
      <Flex
        pr={{ base: '10', md: '20' }}
        pl={{ base: '10', md: '20' }}
        direction="row"
        flexWrap="wrap"
        align="center"
        justify="space-evenly"
        gap={10}
      >
        {/*<Image*/}
        {/*  alt="The Shampouineuse"*/}
        {/*  maxHeight="50"*/}
        {/*  src="images/the_shampouineuse.png"*/}
        {/*  minWidth="auto"*/}
        {/*/>*/}
        <Image
          alt="Urbasolar"
          filter={useColorModeValue('', 'contrast(0)')}
          maxHeight="30"
          src="images/urbasolar.png"
          minWidth="auto"
        />
        <Image
          alt="Force Interative"
          filter={useColorModeValue('', 'contrast(0)')}
          maxHeight="30"
          src="images/fi.png"
          minWidth="auto"
        />
        <Image
          alt="Fabrique Opéra"
          filter={useColorModeValue('', 'contrast(0)')}
          maxHeight="50"
          src="images/fabop.png"
          minWidth="auto"
        />
        <Image alt="UIMM" maxHeight="75" src="images/uimm.png" minWidth="auto" />
      </Flex>
    </>
  )
}
