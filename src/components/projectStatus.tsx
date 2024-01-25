import { Flex, Icon, Text, useColorModeValue } from '@chakra-ui/react'
import { FaCheck, FaClock, FaCodeBranch, FaList, FaQuestion } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'

const projectStatus = (status: string, icon: React.ElementType, colorScheme: string) => {
  return (
    <Flex flexDirection="row" alignItems="center" gap={1}>
      <Icon as={icon} color={colorScheme} />
      <Text color={colorScheme}>{status}</Text>
    </Flex>
  )
}

export default function ProjectStatus(status: string) {
  switch (status) {
    case 'À faire':
      return projectStatus(status, FaList, useColorModeValue('yellow.600', 'yellow.200'))
    case 'En cours':
      return projectStatus(status, FaCodeBranch, useColorModeValue('blue.600', 'blue.200'))
    case 'Terminé':
      return projectStatus(status, FaCheck, useColorModeValue('green.600', 'green.200'))
    case 'En attente':
      return projectStatus(status, FaClock, useColorModeValue('orange.600', 'orange.200'))
    case 'Annulé':
      return projectStatus(status, FaXmark, useColorModeValue('red.600', 'red.200'))
    default:
      return projectStatus(status, FaQuestion, useColorModeValue('gray.600', 'gray.200'))
  }
}
