import styled from "styled-components"
import Textos from "../Textos"
import BotaoLink from "../Link"

const Cards = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    padding: 10px 0;
    width: ${props => props.$size};

    background-color: ${props => props.$tipo === 'limpa' ? '#457337' : '#763E45'};
    border-bottom: 5px solid ${props => props.$tipo === 'limpa' ? '#D0FFC1' : '#FFC1C2'};
    border-radius: 20px 20px 0 0;
`

const CardImg = styled.img`
    width: ${props => props.$size === '80%' ? '40%' : ''};
`


const Card = ({ tipo, imgSrc, titulo, id, size, children, text = undefined }) => {
    
    return (
        <>
            <Cards
                $tipo={tipo}
                $size = {size}
            >
                <CardImg src={imgSrc}/>
                <Textos
                    as='h2'
                    fontSize='30px'
                    fontFamily='AnonymousProBold'
                    width='80%'
                    texto={titulo}
                />
                <Textos
                    as='p'
                    texto={text !== undefined ? text : ''}
                    fontFamily='InterSemiBold'
                    fontSize='34px'
                    width='90%'

                />
                <BotaoLink
                    local={`/tipos/${id}`}
                    active='#FFFFFF'
                >
                    {children}
                </BotaoLink>
            </Cards>
        </>
    )
}

Card.defaultProps = {
    size: '40%'
}

export default Card