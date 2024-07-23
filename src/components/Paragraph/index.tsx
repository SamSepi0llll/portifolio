import { P } from './styles'

export type Props = {
  children: string
  tipo?: string
}

const Paragraph = ({ children, tipo = 'principal' }: Props) => (
  <P tipo={tipo}>{children}</P>
)

export default Paragraph