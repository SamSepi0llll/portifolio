import Avatar from '../../components/Avatar'
import Paragraph from '../../components/Paragraph'
import Title from '../../components/Title'
import { ButtonTheme, Description, SidebarContainer } from './styles'

const Sidebar = () => {
  return (
    <aside>
      <SidebarContainer>
        <Avatar />
        <Title fontSize={20}>David Bonardi</Title>
        <Paragraph type="sec" fontSize={16}>
          samsepi0llll
        </Paragraph>
        <Description type="main" fontSize={12}>
          Engenheiro Front-End
        </Description>
        <ButtonTheme>Trocar tema</ButtonTheme>
      </SidebarContainer>
    </aside>
  )
}

export default Sidebar
