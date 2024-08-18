import styled from "styled-components"

export default function Assentos({ seats }) {
    const cor = 'red';
    return (
        <AssentosDiv>
            {seats && seats.map(seat => <Assento key={seat.id} disponivel={seat.isAvailable} cor={cor}>{seat.name}</Assento>)}
            <Exemplo>
                <div>
                    <Assento cor='green' />
                    Selecionado
                </div>

                <div>
                    <Assento cor='grey' />
                    Disponível
                </div>

                <div>
                    <Assento cor='red' />
                    Indisponível
                </div>
            </Exemplo>
        </AssentosDiv>
    )
}

function Assento({ children, disponivel, cor }) {

    function status(disponivel) {
        console.log(disponivel)
        if (!disponivel) {
            return
        }
        if (disponivel) {
            cor = 'grey';
        }
    }

    status(disponivel)
    return (
        <AssentoDiv cor={cor}>{children}</AssentoDiv>
    )
}

const AssentoDiv = styled.div`
width: 26px;
height: 26px;
border-radius: 50%;
border: 1px solid #808F9D;
font-size:11px;
color: black;
background-color: ${props => props.cor};
display: flex;
justify-content: center;
align-items: center;
margin: 4px;

&:hover{
    cursor: pointer;
    filter: brightness(1.1);
}
`

const AssentosDiv = styled.div`
width: 360px;
display: flex;
background-color: #666666;
border-radius: 5px;
flex-wrap: wrap;
`
const Exemplo = styled.div`
display: flex;
justify-content: space-around;
width:100%;
margin-top: 10px;

div{
    display: flex;
    flex-direction: column;
    font-size: 13px;
    align-items: center;
    justify-content: center;

    &:hover{
        filter: brightness(1);
        cursor: auto;
    }
}
`

