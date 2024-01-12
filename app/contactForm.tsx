'use client'

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  Textarea,
  VStack,
  useClipboard,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FaPaperPlane } from 'react-icons/fa'

type FormData = {
  fullName: string
  email: string
  message: string
}

export default function ContactForm() {
  const { hasCopied, onCopy } = useClipboard('pelletierdorian@gmail.com')
  const { register, handleSubmit, formState } = useForm<FormData>()
  const toast = useToast()

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
    <Stack>
      <Box
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
            pb={5}
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
            >
              Envoyer
            </Button>
          </VStack>
        </form>
      </Box>
    </Stack>
  )
}
