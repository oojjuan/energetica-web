import styled from "styled-components"
import Textos from "../../components/Textos"

const SobreContainer = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: space-around;
`

const SobreImg = styled.img`
    width: 550px;
    height: 100%;
`

const TextosContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`

const Sobre = () => {
    return (
        <SobreContainer>
            <SobreImg src="../public/images/sobreImg.png"/>
            <TextosContainer>
                <Textos
                    tag='h2'
                    width='450px'
                    fontFamily='AnonymousProBold'
                    fontSize='32px'
                    texto='Como os diferentes tipos de energia impactam na sua vida?'
                />

                <Textos 
                    tag='p'
                    width='450px'
                    fontFamily='InterSemiBold'
                    fontSize = '24px'
                    texto='Existem diversos tipos de energia que são utilizadas ao redor do mundo e cada uma delas possui seus altos e baixos. Entretanto, atualmente sofremos com as consequências de utilizar, na maioria das vezes, tipos que poluem nosso planeta.' 
                />
            </TextosContainer>
            
        </SobreContainer>
    )
}

export default Sobre