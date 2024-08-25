import styled from "styled-components"
import Formulario from "./Formulario";
import { useState } from "react";

export default function Assentos({ seats,
    titulo,
    diaSemana,
    date,
    hora
}) {
    const [usuario, setUsuario] = useState({
        ids: [],
        name: '',
        cpf: ''
    });

    const [assentosNum, setAssentosNum] = useState([]);

    return (
        <AssentosDiv
            $setUsuario={setUsuario}
            $usuario={usuario}>
            {seats && seats.map(seat =>
                <Assento
                    key={seat.id}
                    disponivel={seat.isAvailable}
                    $setUsuario={setUsuario}
                    $usuario={usuario}
                    assentoId={seat.id}
                    assentoNum={seat.name}
                    assentosNum={assentosNum}
                    setAssentosNum={setAssentosNum}>
                    {seat.name}
                </Assento>)}
            <Exemplo>
                <div>
                    <Assento corExemplo='green' />
                    Selecionado
                </div>

                <div>
                    <Assento corExemplo='grey' />
                    Disponível
                </div>

                <div>
                    <Assento corExemplo='red' />
                    Indisponível
                </div>
            </Exemplo>
            <Formulario
                $setUsuario={setUsuario}
                $usuario={usuario}
                assentos={assentosNum}
                titulo={titulo}
                diaSemana={diaSemana}
                date={date}
                hora={hora}
            />
        </AssentosDiv>
    )
}

function Assento({
    children,
    disponivel,
    corExemplo,
    $setUsuario,
    $usuario,
    assentoId,
    assentoNum,
    assentosNum,
    setAssentosNum }) {
    const [selecionado, setSelecionado] = useState('grey');

    function selecionar() {

        if (!disponivel) {
            return;
        }
        if (selecionado === 'grey') {
            setSelecionado('green')
            $setUsuario({
                ...$usuario,
                ids: [...$usuario.ids, assentoId]
            });

            setAssentosNum([...assentosNum, assentoNum]);
        } else {
            setSelecionado('grey')
            $setUsuario({
                ...$usuario,
                ids: $usuario.ids.filter(value => value !== assentoId)
            });

            setAssentosNum(assentosNum.filter(value => value !== assentoNum))
        }
    }

    return (
        <AssentoDiv
            $cor={disponivel ? selecionado : 'red'}
            $corExemplo={corExemplo}
            onClick={selecionar}
            $disponivel={disponivel}>{children}</AssentoDiv>
    )
}

const AssentoDiv = styled.div`
width: 26px;
height: 26px;
border-radius: 50%;
border: 1px solid #808F9D;
font-size:11px;
color: white;
background-color: ${props => props.$corExemplo || props.$cor};
display: flex;
justify-content: center;
align-items: center;
margin: 4px;

&:hover{
    cursor: ${props => props.$disponivel && 'pointer'};
    filter: brightness(1.1);
}
`

const AssentosDiv = styled.div`
width: 360px;
display: flex;
background-color: #666666;
border-radius: 5px;
flex-wrap: wrap;
margin-bottom: 130px;
padding-top:10px;
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
    color:white;

    &:hover{
        filter: brightness(1);
        cursor: auto;
    }
}
`

