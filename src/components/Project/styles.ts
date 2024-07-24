import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid #c1c1c1;
  padding: 16px;
  border-radius: 5px;

  @media (max-width: 768px) {
    margin-bottom: 24px;
  }
`

export const LinkButton = styled.a`
  color: #fff;
  font-size: 14px;
  background-color: #4476bf;
  text-decoration: none;
  padding: 8px;
  cursor: pointer;
  display: inline-block;
  margin-top: 24px;
  border-radius: 5px;
`
