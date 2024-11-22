import styled from "styled-components"
import { useState } from "react"
import Botao from "../../components/Botao"
import Textos from "../../components/Textos"

import cards from "../../json/cards.json"
import Card from "../../components/Cards"



const TipoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    margin-top: 50px;
`

const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap; 
    gap: 50px; 
    justify-content: center; 
    width: 100%; 
    margin-bottom: 25px;
`;



const Tipos = () => {
    
    const [tipo, setTipo] = useState('ENERGIA LIMPA')
    const [tipoTexto, setTipoTexto] = useState('limpa')
 
    const alternarCard = () => {
        setTipo((energia) => {
            const novoTipo = energia === 'ENERGIA LIMPA' ? 'ENERGIA POLUENTE' : 'ENERGIA LIMPA';
            return novoTipo;
        });
        setTipoTexto((texto) => {
            const novoTexto = texto === 'limpa' ? 'poluente' : 'limpa' ;
            return novoTexto
        })
    }

    return (
        <TipoContainer>
            <Botao 
                size='lg'
                active={tipo == 'ENERGIA LIMPA' ? false : true}
                onClick={alternarCard}
            >
                ALTERNAR ENERGIA
            </Botao>
            <Textos
                as='h2'
                fontSize='50px'
                fontFamily='AnonymousProBold'
                width='80%'
                spacing="20px"
                texto={tipo}
            />
            <CardContainer>
                {cards.map((card) => {
                    return (
                        card.tipo == tipoTexto ?
                        <Card
                            tipo={card.tipo}
                            imgSrc={card.path}
                            titulo={card.titulo}
                            key={card.id}
                            id={card.id}
                        >Ver</Card>
                        : ''
                )} )}
            </CardContainer>
        </TipoContainer>
    )
}

export default Tipos