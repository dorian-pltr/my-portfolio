import { Technology } from '@/src/types'
import { Badge } from '@chakra-ui/react'
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
          variant="subtle"
          colorScheme={technologyColor[technology.type.name]}
        >
          {technology.name}
        </Badge>
      ))}
    </>
  )
}
