import { Badge } from '@chakra-ui/react'
import { Technology } from '../graphql/generated'

export default function technologiesList(technologies: Array<Technology>) {
  const technologyColor: { [key: string]: string } = {
    'Front-End': 'pink',
    'Back-End': 'purple',
    Transverse: 'blue',
    'Gestion de projet': 'orange',
    'Low Code': 'yellow',
  }

  return (
    <>
      {technologies.map(technology => (
        <Badge
          key={technology.id}
          rounded="3xl"
          p={2}
          variant="outline"
          colorScheme={technologyColor[technology.type.name]}
        >
          {technology.name}
        </Badge>
      ))}
    </>
  )
}
