'use client'

import { Box, Button, Container, Flex, Heading, Text } from '@chakra-ui/react'

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

const skillsList = (title: string, skills: Array<string>) => {
  return (
    <Box>
      <Heading fontSize="xl" mt={5} mb={3}>
        {title}
      </Heading>
      <Flex wrap="wrap" alignContent="flex-start" justifyContent="flex-start">
        {skills.map(feature => (
          <Button key={feature} colorScheme="gray" size="sm" mr={2} mb={2}>
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
    <Box boxShadow="xl" p={{ base: '1', lg: '6' }} rounded="md" paddingX={10}>
      <Container maxW="4xl" textAlign="center">
        <Heading fontSize="3xl" marginY={{ base: '5', lg: '10' }}>
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
          <Text color="gray.500" fontSize="xl">
            Je suis un développeur Fullstack spécialisé dans la création d&apos;applications
            modernes et performantes. Basé à Montpellier, je travaille avec des startups et des
            entreprises en croissance pour les aider à atteindre leurs objectifs business.
            <br />
            <br /> Mes atouts résident dans ma connaissance approfondie de l&apos;écosystème
            JavaScript avec React, Node.js et Next.js.
          </Text>
        </Flex>
        <Flex flex={0.5} pl={{ base: '0', lg: '10' }} pb={5} wrap="wrap" direction="column">
          {skillsList('Front-End', frontTechnologies)}
          {skillsList('Back-End', backTechnologies)}
          {skillsList('Gestion de projet', projectManagement)}
          {skillsList('Low Code', lowCode)}
        </Flex>
      </Flex>
    </Box>
  )
}
