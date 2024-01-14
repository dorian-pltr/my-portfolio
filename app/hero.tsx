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
import { FaCalendar, FaEnvelope } from 'react-icons/fa'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Slider from 'react-infinite-logo-slider'
import { Link } from 'react-scroll/modules'
import './globals.css'

const companyLogo = (imageSrc: string, name: string) => {
  return (
    <Image
      alt={name}
      filter="contrast(0)"
      transition="1s"
      _hover={{ filter: 'contrast(1)' }}
      src={imageSrc}
    />
  )
}
export default function Hero() {
  return (
    <>
      <Stack direction={{ base: 'column', lg: 'row' }} pb={{ base: 5, md: 20 }} gap={10}>
        <Flex flex={0.6} align="center" justify="center">
          <Stack spacing={6} w="full">
            <Heading fontSize={{ base: '4xl', md: '4xl', lg: '5xl' }}>
              <Text align={{ base: 'center', lg: 'left' }}>Hello, je suis</Text>
              <Text
                align={{ base: 'center', lg: 'left' }}
                bgGradient={useColorModeValue(
                  'linear(to-r, purple.500, pink.600, yellow.600)',
                  'linear(to-r, purple.200, pink.200, yellow.200)'
                )}
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
                  display={{ base: 'inherit', lg: 'none' }}
                />
              </Center>
              <Text mt={50} align={{ base: 'center', lg: 'left' }}>
                Votre développeur Full Stack
              </Text>
              <Stack
                mt={5}
                align={{ base: 'center', lg: 'left' }}
                justify={{ base: 'center', lg: 'left' }}
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
              <Text
                fontSize="xl"
                as="samp"
                color="gray.500"
                textAlign={{ base: 'inherit', sm: 'justify' }}
              >
                Quels que soient vos projets, qu&apos;ils soient de courte ou de longue durée, je
                vous encourage vivement à me contacter afin que nous puissions discuter de vos
                besoins et trouver la meilleure façon de collaborer{' '}
                <span className="blinking">▐</span>
              </Text>
            </Flex>

            <Stack
              direction="row"
              width="100%"
              spacing={4}
              justify={{ base: 'center', lg: 'inherit' }}
              mt={{ base: '5', md: '0' }}
              mb={{ base: '5', md: '0' }}
            >
              <Link to="contact" spy={true} smooth={true} duration={500}>
                <Button
                  rounded="xl"
                  colorScheme="pink"
                  variant="outline"
                  width="100%"
                  leftIcon={<FaEnvelope />}
                >
                  Me contacter
                </Button>
              </Link>

              <Button
                as={NextLink}
                rounded="xl"
                colorScheme="purple"
                href={process.env.NEXT_CALENDLY_URL ?? ''}
                target="_blank"
                leftIcon={<FaCalendar />}
              >
                Prendre RDV
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
              display={{ base: 'none', lg: 'inherit' }}
            />
          </Center>
        </Flex>
      </Stack>
      <Stack py="1rem">
        <Slider
          width="250px"
          duration={20}
          blurBorders={false}
          blurBoderColor={useColorModeValue('white', '#1A202C')}
        >
          <Slider.Slide>{companyLogo('images/urbasolar.png', 'Urbasolar')}</Slider.Slide>
          <Slider.Slide>{companyLogo('images/fi.png', 'Force Interactive')}</Slider.Slide>
          <Slider.Slide>
            {companyLogo('images/fabop.png', 'La Fabrique Opéra Val de Loire')}
          </Slider.Slide>
        </Slider>
      </Stack>
    </>
  )
}
