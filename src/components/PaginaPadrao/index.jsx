import { Outlet } from "react-router-dom"
import styled from "styled-components"
import Menu from "../Menu"
import Footer from "../Footer"

const MainContainer = styled.main`
  width: 1200px;
  max-width: 80%;
  min-height: 90vh;
  background-color: #0c270878;
`

const LogoContainer = styled.figure`
  background-image: url(${(props => props.$imagem)});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 450px;
  height: 140px;
  margin: 0;
`

const PaginaPadrao = ({ children }) => {
    return (
        <>
          <LogoContainer $imagem='../public/images/logoEscrito.png' />
          <MainContainer>
            <Menu />
            <Outlet />
            {children}
              
          </MainContainer>
          <Footer />
        </>
    )
}

export default PaginaPadrao