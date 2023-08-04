import NextLink from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import { Box, Button, Flex, Spacer, useColorModeValue } from '@chakra-ui/react'
import ThemeToggle from './ThemeToggle'
import Logo from '@/components/logo'


const Navbar = () => {
  const { t } = useTranslation('common')
  return (
    <Flex as="nav" bg={useColorModeValue('gray.50', 'gray.900')} p="2" color={useColorModeValue('gray.700', 'gray.200')} mb={10}>
      <Logo />
      <Spacer />
      <Box>
        <Button as={NextLink} href="/about" mr="4">{t('about')}</Button>
        <Button as={NextLink} href="/skills" mr="4">{t('skills')}</Button>
        <Button as={NextLink} href="/projects" mr="4">{t('projects')}</Button>
        <Button as={NextLink} href="/contact" mr="4">{t('contact')}</Button>
        <ThemeToggle />
      </Box>
    </Flex>
  )
}

export default Navbar