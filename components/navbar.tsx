import NextLink from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import { Box, Button, Flex, Link, Spacer } from '@chakra-ui/react'


const Navbar = () => {
  const { t } = useTranslation('common')
  return (
    <Flex as="nav" bg="gray.600" p="2" color="white">
      <Box>
        <Link as={NextLink} href="#" fontSize="xl" fontWeight="bold">
          Logo
        </Link>
      </Box>
      <Spacer />
      <Box>
        <Button as={NextLink} href="#" mr="4">
          {t('home')}
        </Button>
        <Button as={NextLink} href="#">{t('about')}</Button>
      </Box>
    </Flex>
  )
}

export default Navbar