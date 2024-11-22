import { useParams } from "react-router-dom"
import styled from "styled-components"
import cards from "../../json/cards.json"
import Card from "../../components/Cards"

const CardContainer = styled.section`
    margin-top: 25px;
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: space-evenly;
    gap: 25px;
    align-items: center;
    color: white;

`

const CardSelecionado = () => {
    
    const parametros = useParams();

    const cardClicado = cards.find((selecionado) => {
        return selecionado.id === parametros.id;
    })

    if (!cardClicado) {
        return ''
    }
    
    return (
        <CardContainer>
            <Card
                size={'80%'}
                tipo={cardClicado.tipo}
                imgSrc={cardClicado.path}
                titulo={cardClicado.titulo}
                text={cardClicado.texto}
            >
                Voltar
            </Card>
        </CardContainer>
    )
}

export default CardSelecionado