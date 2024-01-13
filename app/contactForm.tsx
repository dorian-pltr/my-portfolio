'use client'

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  Text,
  Textarea,
  Tooltip,
  VStack,
  useClipboard,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import {
  FaCalendar,
  FaEnvelope,
  FaEnvelopeOpenText,
  FaGithub,
  FaLinkedinIn,
  FaPaperPlane,
} from 'react-icons/fa'

type FormData = {
  fullName: string
  email: string
  message: string
}

export default function ContactForm() {
  const { register, handleSubmit, formState } = useForm<FormData>()
  const toast = useToast()

  const { hasCopied, onCopy } = useClipboard('pelletierdorian@gmail.com')

  const onSubmit: SubmitHandler<FormData> = async data => {
    // Ici, vous pouvez envoyer les données à votre backend ou effectuer toute autre logique nécessaire.
    console.log(data)

    // Affichage d'un toast pour informer l'utilisateur que le formulaire a été soumis.
    toast({
      title: 'Formulaire non envoyé...',
      description: "Désolé, cette fonctionnalité n'est pas encore disponible.",
      status: 'error',
      duration: 3000,
      isClosable: true,
    })
  }

  return (
    <Flex
      flexDirection={{ base: 'column-reverse', lg: 'row' }}
      justifyContent="space-evenly"
      gap={10}
    >
      <Flex
        flex={0.6}
        flexDirection="column"
        shadow="base"
        py={10}
        px={5}
        rounded="xl"
        background={useColorModeValue('gray.50', 'gray.900')}
      >
        <Heading fontSize={{ base: '4xl', md: '4xl', lg: '5xl' }}>
          <Text
            align="center"
            color={useColorModeValue('purple.600', 'purple.200')}
            fontWeight="extrabold"
            mb={5}
          >
            Me contacter
          </Text>
        </Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack spacing={4}>
            <FormControl id="fullName">
              <FormLabel size="xl">Nom complet</FormLabel>
              <Input {...register('fullName', { required: true })} />
            </FormControl>

            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input type="email" {...register('email', { required: true })} />
            </FormControl>

            <FormControl id="message">
              <FormLabel>Message</FormLabel>
              <Textarea {...register('message', { required: true })} />
            </FormControl>

            <Button
              type="submit"
              isLoading={formState.isSubmitting}
              colorScheme="purple"
              leftIcon={<FaPaperPlane />}
              mt={5}
            >
              Envoyer
            </Button>
          </VStack>
        </form>
      </Flex>
      <Flex justify="space-evenly" direction={{ base: 'row', lg: 'column' }}>
        <Tooltip
          label={hasCopied ? 'Email copié !' : "Copier l'email"}
          closeOnClick={false}
          hasArrow
        >
          <IconButton
            aria-label="email"
            variant="ghost"
            size="lg"
            fontSize="3xl"
            shadow="md"
            icon={hasCopied ? <FaEnvelopeOpenText /> : <FaEnvelope />}
            bg={useColorModeValue('gray.50', 'gray.900')}
            _hover={{
              bg: useColorModeValue('pink.500', 'pink.200'),
              color: useColorModeValue('white', 'gray.700'),
            }}
            onClick={onCopy}
            isRound
          />
        </Tooltip>
        <Box as="a" href={process.env.NEXT_GITHUB_URL ?? ''} target="_blank">
          <IconButton
            aria-label="github"
            variant="ghost"
            size="lg"
            fontSize="3xl"
            shadow="md"
            icon={<FaGithub />}
            bg={useColorModeValue('gray.50', 'gray.900')}
            _hover={{
              bg: useColorModeValue('pink.500', 'pink.200'),
              color: useColorModeValue('white', 'gray.700'),
            }}
            isRound
          />
        </Box>
        <Box as="a" href={process.env.NEXT_LINKEDIN_URL ?? ''} target="_blank">
          <IconButton
            aria-label="linkedin"
            variant="ghost"
            size="lg"
            fontSize="3xl"
            shadow="md"
            icon={<FaLinkedinIn />}
            bg={useColorModeValue('gray.50', 'gray.900')}
            _hover={{
              bg: useColorModeValue('pink.500', 'pink.200'),
              color: useColorModeValue('white', 'gray.700'),
            }}
            isRound
          />
        </Box>
        <Box as="a" href={process.env.NEXT_CALENDLY_URL ?? ''} target="_blank">
          <IconButton
            aria-label="calendly"
            variant="ghost"
            size="lg"
            fontSize="3xl"
            shadow="md"
            icon={<FaCalendar />}
            bg={useColorModeValue('gray.50', 'gray.900')}
            _hover={{
              bg: useColorModeValue('pink.500', 'pink.200'),
              color: useColorModeValue('white', 'gray.700'),
            }}
            isRound
          />
        </Box>
      </Flex>
    </Flex>
  )
}
