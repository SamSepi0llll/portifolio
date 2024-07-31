import Paragraph from '../Paragraph'
import Title from '../Title'
import { Card, LinkButton } from './styles'

const Project = () => {
  return (
    <Card>
      <Title>Projeto lista de tarefas</Title>
      <Paragraph type="sec">Lista de tarefas feita com VueJS</Paragraph>
      <LinkButton>Visualizar</LinkButton>
    </Card>
  )
}

export default Project
