// ...
import ProjectCard from '@/src/components/projectCard'
import { GetProjectsDocument } from '@/src/graphql/generated'
import { Projects as ProjectsType } from '@/src/types'
import { Flex, Heading, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import { useQuery } from 'urql'

export default function Portfolio() {
  const [results] = useQuery({
    query: GetProjectsDocument,
  })

  const projects = (results.data?.project as ProjectsType) ?? null

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
        {projects ? (
          projects.map(project => (
            <ProjectCard
              name={project.name}
              id={project.id}
              status={project.status}
              technologies={project.technologies}
              images={project.images}
              key={project.id}
              description={project.description}
              startDate={undefined}
              url={project.url}
            />
          ))
        ) : (
          <Text fontSize="xl">Aucun projet disponible pour le moment...</Text>
        )}
      </Flex>
    </Stack>
  )
}
