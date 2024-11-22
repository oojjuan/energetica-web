import { Link } from "react-router-dom";
import styled from "styled-components"


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

const BotaoLink = ({ active, children, local }) => {
    return (
        <LinkEstilizado to={local} $active={active}>
            {children}
        </LinkEstilizado>
    )
}

export default BotaoLink