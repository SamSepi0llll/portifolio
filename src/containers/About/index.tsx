import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'
import { GithubSection } from './styles'

const About = () => {
  return (
    <section>
      <Title fontSize={16}>Sobre mim</Title>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam magni
        eum nisi enim sequi repellat repudiandae facere, aspernatur consequuntur
        eos hic aperiam facilis aut maiores in! Eveniet pariatur fuga ad.
      </Paragraph>
      <GithubSection>
        <img src="https://github-readme-stats.vercel.app/api?username=samsepi0llll&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=samsepi0llll&layout=compact&langs_count=7&theme=dracula" />
      </GithubSection>
    </section>
  )
}

export default About
