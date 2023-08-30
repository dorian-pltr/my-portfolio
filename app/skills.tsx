'use client'

import { Box, Button, Container, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import NextLink from 'next/link'
import { TfiArrowRight } from 'react-icons/tfi'

const frontTechnologies = ['React', 'Next.js', 'Redux', 'Routing', 'TypeScript', 'HTML', 'CSS']
const backTechnologies = [
  'NodeJS',
  'Express',
  'GraphQL',
  'PostgreSQL',
  'MySQL',
  'MongoDB',
  'InfluxDB',
]
const projectManagement = ['GIT', 'Agile et Scrum', 'Jira', 'Confluence', 'Trello']
const lowCode = ['Airtable', 'Zapier', 'Power Automate']

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
          <Button
            className="shaking"
            key={feature}
            colorScheme={colorScheme}
            variant="outline"
            size="sm"
          >
            {feature}
          </Button>
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
        <Heading fontSize="2xl" marginY={{ base: '5', lg: '10' }}>
          Bénéficiez de mes{' '}
          <u>
            {totalExperience.yearDiff} ans et {totalExperience.monthDiff} mois
          </u>{' '}
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
            rounded="xl"
            colorScheme="pink"
            href="/skills"
            width="100%"
            shadow="md"
            leftIcon={<TfiArrowRight />}
          >
            Mes compétences
          </Button>
        </Flex>
        <Flex
          flex={0.5}
          pl={{ base: '0', lg: '10' }}
          pb={5}
          wrap="wrap"
          gap={2}
          flexDirection="column"
        >
          {skillsList('Front-End', frontTechnologies, 'pink')}
          {skillsList('Back-End', backTechnologies, 'purple')}
          {skillsList(
            'Gestion de projet',
            projectManagement,
            useColorModeValue('blackAlpha', 'gray')
          )}
          {skillsList('Low Code', lowCode, useColorModeValue('blackAlpha', 'gray'))}
        </Flex>
      </Flex>
    </Box>
  )
}
