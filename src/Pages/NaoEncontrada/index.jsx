import styled from "styled-components"
import Textos from "../../components/Textos"
import LinkVoltar from "../../components/Link/LinkVoltar"

const ErroContainer = styled.div`
    display: flex;
    justify-content: center;
`

const ContainerAlert = styled.div`
    width: 1000px;
    height: 800px;
    background-color: #860e0e6e;
    border-radius: 50px;
    box-shadow: 15px 15px 5px #0000006d;
    margin-bottom: 100px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

const NaoEncontrada = () => {
    return (
        <ErroContainer>
            <ContainerAlert>
                <Textos
                    tag='h2'
                    fontSize='70px'
                    fontFamily='AnonymousProBold'
                    texto='Página não encontrada ;('
                />
                <LinkVoltar active='#FFFFFF'>
                    Voltar
                </LinkVoltar>
            </ContainerAlert>
        </ErroContainer>
    )
}

export default NaoEncontrada