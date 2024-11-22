import styled from "styled-components"

const BotaoEstilizado = styled.button`
    text-decoration: none;
    background-color: ${props => props.$active ? '#FFFFFF' : '#36556D'};
    color: ${props => props.$active ? '#36556D' : '#FFFFFF'};
    padding: ${props => props.$size === 'sm' ? '24px 40px' : '27px 70px'};
    font-family: 'AnonymousProRegular';
    font-size: ${props => props.$size === 'sm' ? '32px' : '36px'};
    border: none;
    border-radius: 25px;
    transition: 0.25s ease;
    
    &:hover {
        box-shadow: 10px 10px 5px #00000025;
        background-color: ${props => props.$active ? '#9fd4ff' : '#1C3040'};
        cursor: pointer;
    }
`

const Botao = ({ size = 'sm', children, active, onClick, id }) => {
    return (
        <BotaoEstilizado
            $size = {size}
            $active = {active}
            onClick= {onClick}
            id={id}
        >
            {children}
        </BotaoEstilizado>
    )
}

export default Botao