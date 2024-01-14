'use client'

import ProjectCard from '@/src/components/projectCard'
import { GetProjectsDocument } from '@/src/graphql/generated'
import { Projects } from '@/src/types'
import { Flex, Heading, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import { useQuery } from 'urql'

export default function ProjectsList() {
  const [results] = useQuery({
    query: GetProjectsDocument,
  })

  const projects = (results.data?.project as Projects) ?? []

  return (
    <Stack>
      <Heading fontSize={{ base: '4xl', lg: '5xl' }}>
        <Text
          align="center"
          color={useColorModeValue('pink.500', 'pink.200')}
          fontWeight="extrabold"
          pb={10}
        >
          Mon portfolio
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
