import { Link, useLocation } from "react-router-dom"
import styled from "styled-components"

const Navegacao = styled.nav`
    height: 140px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 70px;
`

const LinkEstilizado = styled(Link)`
    background-color: ${props => props.$active};
    padding: 40px 50px;
    border-radius: 25px;
    color: ${props => props.$active === '#FFFFFF' ? '#36556D' : '#FFFFFF'};
    font-size: 32px;
    text-decoration: none;
    font-family: 'AnonymousProRegular';
    transition: 0.25s ease;

    &:hover {
        box-shadow: 10px 10px 5px #00000025;
        background-color: ${props => props.$active === '#FFFFFF' ? '#9fd4ff' : '#1C3040'};
         
    }
`

const Menu = () => {
    const local = useLocation();
    
    return (
            <Navegacao>
                <LinkEstilizado to='/' $active={
                    local.pathname === '/sobre' 
                    ? '#FFFFFF' 
                    : '#36556D'
                }>
                    Sobre
                </LinkEstilizado>
                <LinkEstilizado to='/tipos' $active={
                    local.pathname === '/tipos' 
                    ? '#FFFFFF' 
                    : '#36556D'
                }>
                    Tipos
                </LinkEstilizado>
            </Navegacao>
    )
}

export default Menu