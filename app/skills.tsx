'use client'

import { Badge, Box, Container, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react'

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
      py={10}
      rounded="xl"
      paddingX={5}
      background={useColorModeValue('gray.50', 'gray.900')}
    >
      <Container textAlign="center" maxWidth="100%">
        <Heading
          fontSize={{ base: '3xl', lg: '4xl' }}
          paddingX={{ base: 'inherit', md: '100px', xl: '200px' }}
          pb={10}
        >
          <Text
            align="center"
            color={useColorModeValue('purple.600', 'purple.200')}
            fontWeight="extrabold"
          >
            Bénéficiez de mes {totalExperience.yearDiff} ans d&apos;expérience en développement Full
            Stack
          </Text>
        </Heading>
      </Container>

      <Flex flexDirection={{ base: 'column', lg: 'row' }}>
        <Flex
          flex={0.5}
          gap={10}
          flexDirection="column"
          pr={{ base: '0', lg: '10' }}
          pb={5}
          wrap="wrap"
          borderRight={{ base: 'none', lg: '1px' }}
          borderColor={{ base: 'none', lg: 'gray.500' }}
          justifyContent="space-evenly"
        >
          <Text fontSize="xl" textAlign={{ base: 'inherit', sm: 'justify' }}>
            Mon expertise s&apos;étend particulièrement dans l&apos;écosystème <b>JavaScript</b>, où
            j&apos;utilise des technologies telles que <b>React, Node.js et Next.js.</b>
            <br />
            <br />
            Que ce soit en tant que collaborateur en <b>CDI ou en freelance</b>, je m&apos;engage à
            fournir des solutions techniques de haute qualité tout en respectant vos délais.
            <br />
            <br />
            Mes valeurs résident dans la{' '}
            <b>
              bienveillance, l&apos;entraide, la curiosité et la volonté constante de relever des
              défis techniques.
            </b>{' '}
            Je suis passionné par l&apos;apprentissage continu et la montée en compétences, ce qui
            me permet de rester à la pointe des dernières avancées technologiques !
          </Text>
        </Flex>
        <Flex
          flex={0.5}
          pl={{ base: '0', lg: '10' }}
          marginBottom={7}
          wrap="wrap"
          gap={2}
          flexDirection="column"
          justify="center"
          width="100%"
        >
          {skillsList('Front-End', frontTechnologies, 'pink')}
          {skillsList('Back-End', backTechnologies, 'purple')}
          {skillsList('Gestion de projet', projectManagement, 'yellow')}
          {skillsList('Low Code', lowCode, useColorModeValue('blackAlpha', 'gray'))}
        </Flex>
      </Flex>
    </Box>
  )
}
