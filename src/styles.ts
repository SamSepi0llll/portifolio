import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
    list-style: none;
}

@media (min-width: 1024px){
  main{
  padding-bottom: 40px;
}
}

body{
  padding-top: 80px;

  @media (max-width: 768px){
    padding-top: 16px;
  }
}
`

export default EstiloGlobal

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 136px auto;
  gap: 56px;

  @media (max-width: 768px) {
    max-width: 80%;
    display: block;
    text-align: center;
  }

  img {
    max-width: 100%;

    @media (max-width: 768px) {
      max-width: 100%;
      height: 100%;
    }
  }
`
