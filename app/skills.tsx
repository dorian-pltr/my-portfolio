'use client'

import TechnologyCard from '@/src/components/technologyCard'
import { Box, Container, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import { FaNodeJs, FaPhp, FaReact, FaVuejs } from 'react-icons/fa'
import {
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNuxtdotjs,
  SiPostgresql,
  SiTypescript,
} from 'react-icons/si'

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
      <Container textAlign="center" maxWidth="100%" padding={0}>
        <Heading
          fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
          paddingX={{ base: 'inherit', md: '50px', xl: '100px' }}
          pb="1em"
        >
          <Text
            align="center"
            color={useColorModeValue('purple.500', 'purple.200')}
            fontWeight="extrabold"
          >
            Bénéficiez de mes {totalExperience.yearDiff} ans d&apos;expérience en développement Full
            Stack
          </Text>
        </Heading>
      </Container>

      <Flex flexDirection={{ base: 'column', lg: 'row' }} alignItems="center">
        <Flex
          gap={10}
          flexBasis="50%"
          flexDirection="column"
          pr={{ base: '0', lg: '10' }}
          pb={5}
          wrap="wrap"
          borderRight={{ base: 'none', lg: '1px' }}
          borderColor={{ base: 'none', lg: 'gray.500' }}
          justifyContent="space-evenly"
        >
          <Text fontSize="xl" textAlign="justify">
            Mon expertise s&apos;étend avant tout dans l&apos;écosystème <b>JavaScript</b>, où
            j&apos;utilise des technologies telles que{' '}
            <b>Vue.js/Nuxt.js, React/Next.js, Node.js et NestJS.</b>
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
            me permet de rester à la pointe des dernières mises à jour et avancées technologiques.
          </Text>
        </Flex>
        <Flex
          pl={{ base: '0', lg: '10' }}
          flexBasis="50%"
          flexDirection="row"
          justifyContent={{ base: 'center', lg: 'flex-start' }}
          height="100%"
          wrap="wrap"
        >
          <TechnologyCard name="React" icon={FaReact} />
          <TechnologyCard name="Next.js" icon={SiNextdotjs} />
          <TechnologyCard name="Vue.js" icon={FaVuejs} />
          <TechnologyCard name="Nuxt.js" icon={SiNuxtdotjs} />
          <TechnologyCard name="Node.js" icon={FaNodeJs} />
          <TechnologyCard name="NestJS" icon={SiNestjs} />
          <TechnologyCard name="TypeScript" icon={SiTypescript} />
          <TechnologyCard name="PHP" icon={FaPhp} />
          <TechnologyCard name="MongoDB" icon={SiMongodb} />
          <TechnologyCard name="PostgreSQL" icon={SiPostgresql} />
        </Flex>
      </Flex>
    </Box>
  )
}
