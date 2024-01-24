import { Button } from '@chakra-ui/react'
import { FaCheck, FaClock, FaCodeBranch, FaList, FaQuestion } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'

const projectStatus = (status: string, icon: React.ReactElement, colorScheme: string) => {
  return (
    <Button leftIcon={icon} colorScheme={colorScheme} variant="ghost">
      {status}
    </Button>
  )
}

export default function ProjectStatus({ status }: { status: string }) {
  switch (status) {
    case 'À faire':
      return projectStatus(status, <FaList />, 'yellow')
    case 'En cours':
      return projectStatus(status, <FaCodeBranch />, 'blue')
    case 'Terminé':
      return projectStatus(status, <FaCheck />, 'green')
    case 'En attente':
      return projectStatus(status, <FaClock />, 'orange')
    case 'Annulé':
      return projectStatus(status, <FaXmark />, 'red')
    default:
      return projectStatus(status, <FaQuestion />, 'gray')
  }
}
