import styled from "styled-components"
import cards from "../../json/cards.json"

const Cards = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: ${props => props.$tipo === 'limpa' ? '#457337' : '#763E45'};
    border-bottom: 5px solid ${props => props.$tipo === 'limpa' ? '#D0FFC1' : '#FFC1C2'};
    border-radius: 20px 20px 0 0;
`

const CardImg = styled.figure`
    background-image: url(${props => props.$imgSrc});
    background-size: cover;
    background-repeat: no-repeat;
    
    width: 80%;
`


const Card = ({ tipo, imgSrc, children }) => {
    return (
        <>
            <Cards
                $tipo={tipo}
            >
                <CardImg $imgSrc={imgSrc}/>
            </Cards>
        </>
    )
}

export default Card