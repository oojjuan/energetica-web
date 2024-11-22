import styled from "styled-components"
import BotaoLink from "../Link"
import { useLocation } from "react-router-dom"

const Navegacao = styled.nav`
    height: 140px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 70px;
`

const Menu = () => {
    
    const localizacao = useLocation()
    
    return (
            <Navegacao>
                <BotaoLink 
                    local='/sobre'
                    active={
                        localizacao.pathname === '/sobre' 
                        ? '#FFFFFF' 
                        : '#36556D'
                }>
                    Sobre
                </BotaoLink>
                <BotaoLink 
                    local='/tipos'
                    active={
                        localizacao.pathname === '/tipos' 
                        ? '#FFFFFF' 
                        : '#36556D'
                }>
                    Tipos
                </BotaoLink>
            </Navegacao>
    )
}

export default Menu