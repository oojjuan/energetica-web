import styled from "styled-components"
import EstilosGlobais from './components/Global'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import PaginaPadrao from "./components/PaginaPadrao"
import Sobre from "./Pages/Sobre"

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
      <FundoEstilizado>
        <EstilosGlobais />
      
        <Routes>
          <Route path="/" element={<PaginaPadrao />}>
            <Route index element={ <Sobre/> } />
            <Route path='/tipos' element={''} />
          </Route>
          <Route path="*" element={<h1>Pagina não encontrada</h1>} />
        </Routes>

      </FundoEstilizado>
    </BrowserRouter>
  )
}

export default AppRoutes