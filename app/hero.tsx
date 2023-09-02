import {
  Badge,
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
import './globals.css'
import { FaBoltLightning } from 'react-icons/fa6'
import { FaEnvelope } from 'react-icons/fa'

const companyLogo = (imageSrc: string, name: string, url: string, maxHeight: number) => {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <Image
        alt={name}
        filter="contrast(0)"
        transition="1s"
        _hover={{ filter: 'contrast(1)' }}
        maxHeight={maxHeight}
        src={imageSrc}
        minWidth="auto"
      />
    </a>
  )
}
export default function Hero() {
  return (
    <>
      <Stack direction={{ base: 'column', md: 'row' }} pb={{ base: 5, md: 20 }} gap={10}>
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
                  shadow="xl"
                  alt="Mon portrait"
                  borderRadius="full"
                  maxHeight="200"
                  src="images/color_portrait.png"
                  minWidth="auto"
                  _hover={{ transform: 'scale(1.1)' }}
                  transition="1s"
                  display={{ base: 'inherit', md: 'none' }}
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
                <Badge colorScheme="purple" rounded="3xl" size="sm" p={2} mr={2} variant="outline">
                  React
                </Badge>
                <Badge colorScheme="purple" rounded="3xl" size="sm" p={2} mr={2} variant="outline">
                  Next.js
                </Badge>
                <Badge colorScheme="purple" rounded="3xl" size="sm" p={2} mr={2} variant="outline">
                  Node.js
                </Badge>
              </Stack>
            </Heading>
            <Flex
              flexDirection="row"
              flexWrap="wrap"
              background={useColorModeValue('gray.50', 'gray.900')}
              p={5}
              rounded="xl"
              shadow="md"
            >
              <Text
                mr="2"
                fontSize="xl"
                as="samp"
                color={useColorModeValue('pink.500', 'pink.200')}
              >
                dorian@my-portfolio
              </Text>
              <Text
                mr="2"
                fontSize="xl"
                as="samp"
                color={useColorModeValue('purple.500', 'purple.200')}
              >
                ~ $
              </Text>
              <Text fontSize="xl" as="samp" color="gray.500">
                Quels que soient vos projets, qu&apos;ils soient de courte ou de longue durée, je
                vous encourage vivement à me contacter afin que nous puissions discuter de vos
                besoins et trouver la meilleure façon de collaborer
                <span className="blinking">▐</span>
              </Text>
            </Flex>

            <Stack
              direction={{ base: 'column', md: 'row' }}
              width="100%"
              spacing={4}
              mt={{ base: '5', md: '0' }}
              mb={{ base: '5', md: '0' }}
            >
              <Button
                as={NextLink}
                rounded="xl"
                colorScheme="pink"
                variant="outline"
                href="/contact"
                width="100%"
                leftIcon={<FaEnvelope />}
              >
                Me contacter
              </Button>
              <Button
                as={NextLink}
                rounded="xl"
                colorScheme="purple"
                href="/projects"
                width="100%"
                leftIcon={<FaBoltLightning />}
              >
                Voir mes projets
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={0.4} justifyContent="center">
          <Center>
            <Image
              alt="Mon portrait"
              borderRadius="full"
              shadow="xl"
              maxHeight="300"
              src="images/color_portrait.png"
              minWidth="auto"
              _hover={{ transform: 'scale(1.1)' }}
              transition="1s"
              display={{ base: 'none', md: 'inherit' }}
            />
          </Center>
        </Flex>
      </Stack>
      <Flex direction="row" flexWrap="wrap" align="center" justify="space-evenly" gap={10}>
        {companyLogo('images/urbasolar.png', 'Urbasolar', 'https://www.urbasolar.com/', 30)}
        {companyLogo('images/fi.png', 'Force Interactive', 'https://www.forceinteractive.fr/', 35)}
        {companyLogo(
          'images/fabop.png',
          'La Fabrique Opéra Val de Loire',
          'https://www.lafabriqueopera-valdeloire.com/',
          70
        )}
        {companyLogo(
          'images/uimm.png',
          'UIMM Centre – Val de Loire',
          'https://www.uimm-regioncentre.com/',
          75
        )}
      </Flex>
    </>
  )
}
