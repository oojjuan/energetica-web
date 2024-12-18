import styled from "styled-components"
import EstilosGlobais from './components/Global'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import PaginaPadrao from "./components/PaginaPadrao"
import Sobre from "./Pages/Sobre"
import Tipos from "./Pages/Tipos"
import CardSelecionado from "./Pages/Card"
import NaoEncontrada from "./Pages/NaoEncontrada"
import ScrollToTop from "./components/ScrollToTop"

const FundoEstilizado = styled.div`
  background: linear-gradient(to bottom, #457337 0%, #36556D 100%);
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

function AppRoutes() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <FundoEstilizado>
        <EstilosGlobais />
      
        <Routes>
          <Route path="/" element={ <PaginaPadrao /> }>
            <Route index element={ <Sobre/> } />
            <Route path='/tipos' element={ <Tipos/> } />
          </Route>
          
          <Route path="/card/:id" element={ <CardSelecionado /> }/>
          
          <Route path="*" element={ <NaoEncontrada /> } />
        </Routes>

      </FundoEstilizado>
    </BrowserRouter>
  )
}

export default AppRoutes
