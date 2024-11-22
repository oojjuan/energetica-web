import styled from "styled-components"
import Textos from "../Textos"
import Botao from "../Botao"
import { useState } from "react"
import Info from "./DiferencaInfo"

const TituloContainer = styled.div`
    width: 100%;
    height: 100px;
    background-color: #36556D;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 90px 0;
`

const BotoesContainer = styled.div`
    width: 100%;
    height: 260px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

const ExplicacaoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`


const Diferencas = () => {
    
    const [botao1, setBotao1] = useState(true)
    const [botao2, setBotao2] = useState(false)
    
    const alternarCard = (event) => {
        const botao = event.currentTarget.id;
        if (botao == 'botao1') {
            if (botao1 == false) {
                setBotao1(!botao1)
                setBotao2(!botao2)
            }
        } else {
            if (botao2 == false) {
                setBotao2(!botao2)
                setBotao1(!botao1)
            }
        }  
    };
    return (
        <>
            <TituloContainer>
                <Textos 
                    tag='h2'
                    width='80%'
                    fontFamily='AnonymousProBold'
                    fontSize='32px'
                    texto='As diferenças entre energia limpa e energia poluente'
                />
            </TituloContainer>

            <BotoesContainer>
                <Botao 
                    id='botao1'
                    size='sm' 
                    active={botao1}
                    onClick={alternarCard}
                >
                    Energia Limpa
                </Botao>
                <Botao 
                    id='botao2'
                    size='sm'
                    active={botao2}
                    onClick={alternarCard}
                >
                    Energia Poluente
                </Botao>
            </BotoesContainer>
            
            <ExplicacaoContainer>
                <Info 
                    backgroundImg={botao1 === true 
                        ? '/images/energiaLimpa.png'
                        : '/images/energiaPoluente.png'}
                    alt='Imagem ilustrativa da energia'
                    texto={botao1 === true
                        ? 'É gerada através de fontes renováveis da natureza, como o vento, a água dos rios e oceanos, biocombustível e até dos raios solares. Em comparação às energias poluentes, elas podem gerar 70% - 90% menos poluição ao meio ambiente, por conta de sua fonte sustentável.'
                        
                        : 'É gerada através de fontes não renováveis da natureza, como petróleo, carvão mineral, gás natural e energia nuclear. Uma das suas consequências é a liberação de altas quantidades de gases na atmosfera, aumentando o efeito estufa. Além disso, diminui a qualidade do ar que respiramos.'
                    }
                />
            </ExplicacaoContainer>


        </>
    )
    }


export default Diferencas