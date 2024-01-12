'use client'

import ProjectCard from '@/src/components/projectCard'
import { GetProjectsDocument } from '@/src/graphql/generated'
import { Projects } from '@/src/types'
import { Flex, Heading, Stack, Text } from '@chakra-ui/react'
import { useQuery } from 'urql'

export default function ProjectsList() {
  const [results] = useQuery({
    query: GetProjectsDocument,
  })

  const projects = (results.data?.project as Projects) ?? []

  return (
    <Stack p={{ base: '10', md: '20' }}>
      <Heading fontSize={{ base: '4xl', md: '4xl', lg: '5xl' }}>
        <Text
          align="center"
          bgGradient="linear(to-r, purple.400, pink.400, yellow.400)"
          bgClip="text"
          fontWeight="extrabold"
        >
          Projets
        </Text>
      </Heading>
      <Flex gap={10} justifyContent="center" wrap="wrap">
        {projects?.map(project => (
          <ProjectCard
            name={project.name}
            id={project.id}
            status={project.status}
            technologies={project.technologies}
            images={project.images}
            key={project.id}
            description={project.description}
            startDate={undefined}
          />
        ))}
      </Flex>
    </Stack>
  )
}
