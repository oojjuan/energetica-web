import styled from "styled-components"
import Botao from "../../components/Botao"
import { useState } from "react"
import Textos from "../../components/Textos"


const TipoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    margin-top: 50px;
`

const Tipos = () => {
    
    const [tipo, setTipo] = useState('ENERGIA LIMPA')
 
    const alternarCard = () => {
        setTipo((energia) => {
            const novoTipo = energia === 'ENERGIA LIMPA' ? 'ENERGIA POLUENTE' : 'ENERGIA LIMPA';
            return novoTipo;
        });
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
        </TipoContainer>
    )
}

export default Tipos