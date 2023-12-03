'use client'

import { GetProjectsDocument } from '@/src/graphql/generated'
import { Heading, Stack, Text } from '@chakra-ui/react'
import { useQuery } from 'urql'

export default function Page() {
  const [results] = useQuery({
    query: GetProjectsDocument,
  })

  const projects = results.data?.project || []

  return (
    <Stack p={{ base: '10', md: '20' }}>
      <Heading fontSize={{ base: '4xl', md: '4xl', lg: '5xl' }}>
        <Text
          align="center"
          bgGradient="linear(to-r, purple.400, pink.400, yellow.400)"
          bgClip="text"
          fontWeight="extrabold"
        >
          Détails du projet
        </Text>
      </Heading>
      <Text alignSelf="center">En cours de développement...</Text>
    </Stack>
  )
}
