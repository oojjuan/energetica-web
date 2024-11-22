import styled from "styled-components"
import Textos from "../../Textos"

const InfoContainer = styled.div`
    height: 550px;
    width: 700px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 60px 0;
`

const InfoImagem = styled.figure`
    background-image: url(${props => props.$backgroundImg});
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    min-height: 220px;
    ;
`

const Info = ( {backgroundImg, alt, texto} ) => {
    return (
        <InfoContainer>
            <InfoImagem
                $backgroundImg={backgroundImg}
                alt={alt}
            />
            <Textos 
                texto={texto}
                tag='p'
                fontSize='24px'
                fontFamily='InterSemiBold'
                width='100%'
            />
        </InfoContainer>
    )
}

export default Info