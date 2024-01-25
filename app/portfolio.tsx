// ...
import ProjectCard from '@/src/components/projectCard'
import { GetProjectsDocument, ProjectStatus } from '@/src/graphql/generated'
import { Projects as ProjectsType } from '@/src/types'
import { Flex, Heading, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import { useQuery } from 'urql'

export default function Portfolio() {
  const [results] = useQuery({
    query: GetProjectsDocument,
  })

  const projects = (results.data?.project as ProjectsType) ?? null

  type StatusOrder = {
    [key: string]: number
  }

  const statusOrder: StatusOrder = {
    'À faire': 1,
    'En cours': 2,
    Terminé: 3,
    'En attente': 4,
    Annulé: 5,
  }

  const sortedProjects = projects
    ? projects.slice().sort((a, b) => {
        const statusA = (a.status as ProjectStatus)?.name || ''
        const statusB = (b.status as ProjectStatus)?.name || ''

        const orderA = statusOrder[statusA]
        const orderB = statusOrder[statusB]

        if (orderA < orderB) return -1
        if (orderA > orderB) return 1

        if (a.name < b.name) return -1
        if (a.name > b.name) return 1

        return 0
      })
    : []

  return (
    <Stack>
      <Heading fontSize={{ base: '4xl', lg: '5xl' }}>
        <Text
          align="center"
          color={useColorModeValue('purple.500', 'purple.200')}
          fontWeight="extrabold"
          pb="1em"
        >
          Mon portfolio
        </Text>
      </Heading>
      <Flex gap={10} justifyContent="center" wrap="wrap">
        {sortedProjects ? (
          sortedProjects.map(project => (
            <ProjectCard
              name={project.name}
              id={project.id}
              status={project.status}
              technologies={project.technologies}
              images={project.images}
              key={project.id}
              description={project.description}
              url={project.url}
              startDate={project.startDate}
              endDate={project.endDate}
            />
          ))
        ) : (
          <Text fontSize="xl">Aucun projet disponible pour le moment...</Text>
        )}
      </Flex>
    </Stack>
  )
}
