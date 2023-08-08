'use client'
import {
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react'

export default function Hero() {
  return (
    <>
      <Stack p={20} direction={{ base: 'column', md: 'row' }}>
        <Flex flex={0.6} align="center" justify="center">
          <Stack spacing={6} w="full">
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
              <Text mt={50}>Votre développeur Full Stack</Text>
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
        <Flex flex={0.4} justifyContent="center">
          <Center>
            <Image
              alt="Mon portrait"
              borderRadius="full"
              maxHeight="300"
              src="images/color_portrait.png"
              minWidth="auto"
            />
          </Center>
        </Flex>
      </Stack>
      <Flex pr={20} pl={20} direction="row" align="center" justify="space-between">
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
