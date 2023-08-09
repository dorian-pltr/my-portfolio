'use client'

import { Heading, Text } from '@chakra-ui/react'

export default function Page() {
  return (
    <Heading fontSize={{ base: '4xl', md: '4xl', lg: '5xl' }}>
      <Text
        align="center"
        bgGradient="linear(to-r, purple.400, pink.400, yellow.400)"
        bgClip="text"
        fontWeight="extrabold"
      >
        Projets
      </Text>
    </Heading>
  )
}
