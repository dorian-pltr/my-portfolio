'use client'

import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { FaCog } from 'react-icons/fa'

const frontTechnologies = ['React', 'Next.js', 'Redux', 'Routing', 'TypeScript', 'HTML', 'CSS']
const backTechnologies = [
  'Node.JS',
  'Express',
  'GraphQL',
  'PostgreSQL',
  'MySQL',
  'MongoDB',
  'InfluxDB',
]
const projectManagement = ['GIT', 'Agile et Scrum', 'Jira', 'Confluence', 'Trello']
const lowCode = ['Airtable', 'Zapier', 'Power Automate', 'WordPress']

const differenceDates = (stringStartDate: string, stringEndDate?: string | undefined) => {
  const startDate = new Date(stringStartDate)
  const endDate = stringEndDate ? new Date(stringEndDate) : new Date()
  let yearDiff = endDate.getFullYear() - startDate.getFullYear()
  let monthDiff = endDate.getMonth() - startDate.getMonth()
  if (monthDiff < 0) {
    yearDiff--
    monthDiff += 12
  }
  return { yearDiff, monthDiff }
}

const skillsList = (title: string, skills: Array<string>, colorScheme: string) => {
  return (
    <Box>
      <Heading fontSize="xl" mt={5} mb={3}>
        {title}
      </Heading>
      <Flex wrap="wrap" alignContent="flex-start" justifyContent="flex-start" gap={2}>
        {skills.map(feature => (
          <Badge
            colorScheme={colorScheme}
            key={feature}
            rounded="3xl"
            size="sm"
            p={2}
            variant="outline"
          >
            {feature}
          </Badge>
        ))}
      </Flex>
    </Box>
  )
}

const totalExperience = differenceDates('2020-01-01')
export default function Skills() {
  return (
    <Box
      shadow="base"
      p={{ base: '1', lg: '6' }}
      rounded="xl"
      paddingX={10}
      background={useColorModeValue('gray.50', 'gray.900')}
    >
      <Container textAlign="center" maxWidth="100%" padding={0}>
        {' '}
        <Heading fontSize={{ base: 'xl', sm: '2xl', lg: '3xl' }} marginY={{ base: '5', lg: '10' }}>
          Bénéficiez de mes {totalExperience.yearDiff} ans et {totalExperience.monthDiff} mois
          d&apos;expérience en développement Full Stack
        </Heading>
      </Container>

      <Flex flexDirection={{ base: 'column', lg: 'row' }}>
        <Flex
          flex={0.5}
          gap={10}
          flexDirection="column"
          pr={{ base: '0', lg: '10' }}
          pb={5}
          pt={5}
          wrap="wrap"
          borderRight={{ base: 'none', lg: '1px' }}
          borderColor={{ base: 'none', lg: 'gray.500' }}
          justifyContent="space-evenly"
        >
          <Text fontSize="xl">
            Je suis un développeur <b>Fullstack</b> spécialisé dans la création d&apos;applications
            <b> modernes et performantes</b>. Basé à Montpellier, je travaille avec des startups et
            des entreprises en croissance pour les aider à atteindre leurs objectifs business.
            <br />
            <br /> Mes atouts résident dans ma connaissance approfondie de l&apos;écosystème
            <b> JavaScript avec React, Node.js et Next.js</b>.
          </Text>

          <Button
            as={NextLink}
            width="min-content"
            rounded="xl"
            colorScheme="pink"
            href="/skills"
            leftIcon={<FaCog />}
            display={{ base: 'none', lg: 'inherit' }}
          >
            Mes compétences en détail
          </Button>
        </Flex>
        <Flex
          flex={0.5}
          pl={{ base: '0', lg: '10' }}
          marginBottom={7}
          wrap="wrap"
          gap={2}
          flexDirection="column"
          width="100%"
        >
          {skillsList('Front-End', frontTechnologies, 'pink')}
          {skillsList('Back-End', backTechnologies, 'purple')}
          {skillsList('Gestion de projet', projectManagement, 'yellow')}
          {skillsList('Low Code', lowCode, useColorModeValue('blackAlpha', 'gray'))}
          <Button
            mt={7}
            as={NextLink}
            rounded="xl"
            colorScheme="pink"
            href="/skills"
            leftIcon={<FaCog />}
            display={{ base: 'flex', lg: 'none' }}
          >
            Mes compétences en détail
          </Button>
        </Flex>
      </Flex>
    </Box>
  )
}
