import { Flex, Heading, Icon, Stack, useColorModeValue } from '@chakra-ui/react'
import { useEffect, useRef } from 'react'
import { IconType } from 'react-icons'

export default function TechnologyCard({
  name,
  icon,
}: Readonly<{
  name: string
  icon: IconType
}>) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const initializeCard3d = async () => {
      if (cardRef.current) {
        /* Dynamically import the card3d library within the useEffect hook to ensure that it is only
        loaded on the client side where the document object is available */
        const { default: Card3d } = await import('card3d')

        // Check if the component is still mounted before initializing
        if (cardRef.current) {
          // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
          const card = new Card3d(cardRef.current, {})
        }
      }
    }

    initializeCard3d()
  }, [])

  return (
    <Stack bg={useColorModeValue('purple.500', 'purple.200')}>
      <Flex
        flexDirection="column"
        p={5}
        w={{ base: '7em', md: '10em' }}
        gap={3}
        ref={cardRef}
        className="card"
        bg={useColorModeValue('gray.50', 'gray.900')}
        alignContent="center"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        <Icon boxSize="3em" as={icon} />
        <Stack spacing="3">
          <Heading size="md" color={useColorModeValue('black', 'white')}>
            {name}
          </Heading>
        </Stack>
      </Flex>
    </Stack>
  )
}
