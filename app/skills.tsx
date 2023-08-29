'use client'

import { Box, Button, Container, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react'

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
      <Flex wrap="wrap" alignContent="flex-start" justifyContent="flex-start">
        {skills.map(feature => (
          <Button key={feature} colorScheme={colorScheme} variant="outline" size="sm" mr={2} mb={2}>
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
        <Heading fontSize="2xl" marginY={{ base: '5', lg: '10' }}>
          Bénéficiez de mes {totalExperience.yearDiff} ans et {totalExperience.monthDiff} mois
          d&apos;expérience en développement Full Stack
        </Heading>
      </Container>

      <Flex flexDirection={{ base: 'column', lg: 'row' }}>
        <Flex
          flex={0.5}
          pr={{ base: '0', lg: '10' }}
          pb={5}
          pt={5}
          wrap="wrap"
          borderRight={{ base: 'none', lg: '1px' }}
          borderColor={{ base: 'none', lg: 'gray.500' }}
          justifyContent="space-between"
        >
          <Text fontSize="xl">
            Je suis un développeur <b>Fullstack</b> spécialisé dans la création d&apos;applications
            <b> modernes et performantes</b>. Basé à Montpellier, je travaille avec des startups et
            des entreprises en croissance pour les aider à atteindre leurs objectifs business.
            <br />
            <br /> Mes atouts résident dans ma connaissance approfondie de l&apos;écosystème
            <b> JavaScript avec React, Node.js et Next.js</b>.
          </Text>
        </Flex>
        <Flex flex={0.5} pl={{ base: '0', lg: '10' }} pb={5} wrap="wrap" direction="column">
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
