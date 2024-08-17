import styled from "styled-components"

export default function Assentos({ seats }) {

    return (
        <AssentosDiv>
            {seats && seats.map(seat => <Assento key={seat.id} disponivel={seat.isAvailable}>{seat.name}</Assento>)}
        </AssentosDiv>
    )
}

function Assento({ children, disponivel }) {
    console.log(disponivel)
    return (
        <AssentoDiv disponivel={disponivel}>{children}</AssentoDiv>
    )
}

const AssentoDiv = styled.div`
width: 26px;
height: 26px;
border-radius: 50%;
border: 1px solid #808F9D;
font-size:11px;
color: black;
background-color: ${props => props.disponivel ? '#C3CFD9' : 'red'};
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