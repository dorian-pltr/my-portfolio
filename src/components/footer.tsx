import { Flex, Text, useColorModeValue } from '@chakra-ui/react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <Flex
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
      mt={10}
      flexDirection="column"
      py={4}
      direction={{ base: 'column', md: 'row' }}
      justify="center"
      align="center"
      mb={{ base: '70px', sm: '100px', md: 0 }}
    >
      <Text align="center">© {year} Dorian PELLETIER | Tous droits réservés</Text>
    </Flex>
  )
}
