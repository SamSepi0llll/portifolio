import { P } from './styles'

export type Props = {
  children: string
  typeP?: 'mainP' | 'secP'
}

const Paragraph = ({ children, typeP = 'mainP' }: Props) => (
  <P typeP={typeP}>{children}</P>
)

export default Paragraph
