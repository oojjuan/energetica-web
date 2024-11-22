import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const LinkEstilizado = styled.button`
    background-color: ${props => props.$active};
    padding: 40px 50px;
    border-radius: 25px;
    border: none;
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

const LinkVoltar = ({ active, children }) => {
    
    const navegar = useNavigate()
    
    return (
        <LinkEstilizado onClick={() => navegar(-1)} $active={active}>
            {children}
        </LinkEstilizado>
    )
}

export default LinkVoltar