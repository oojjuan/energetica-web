import styled from "styled-components"

const FooterContainer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
`

const FooterFigure = styled.figure`
    background-image: url(${props => props.$imagem});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    
    width: 1200px;
    max-width: 80%;
    height: 140px;
    margin: 0;
`

const Footer = () => {
    return (
        <FooterContainer>
            <FooterFigure $imagem={'../public/images/footer.png'} />
        </FooterContainer>
    )
}

export default Footer