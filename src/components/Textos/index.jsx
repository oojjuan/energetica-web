import styled from "styled-components"

const TextoEstilizado = styled.div`
    font-family: ${props => props.$fontFamily};
    font-size: ${props => props.$fontSize};
    width: ${props => props.$width};
    text-align: center;
    color: #FFFFFF;
`

const Textos = ( {texto, tag, fontSize, fontFamily, width} ) => {
//Caso a tag seja 'p', formatar todo o texto
    if (tag === 'p') {
        const partesTexto = texto.split('.').map(parte => parte.trim()).filter(parte => parte !== '');

        return (
        <TextoEstilizado 
            as={tag}
            $fontSize={fontSize}
            $width={width}
            $fontFamily={fontFamily}
    >
        {partesTexto.map((linha, index) => (
            <span key={index}>
                {linha}.
                <br />
                <br />
            </span>
        ))}
        </TextoEstilizado>
        )
    } 
//Caso a tag seja qualquer outra, renderizar apenas o texto bruto
    else {
        return (
            <TextoEstilizado 
                as={tag}
                $fontSize={fontSize}
                $width={width}
                $fontFamily={fontFamily}
            >
                {texto}
            </TextoEstilizado>
        )
    }
}
export default Textos