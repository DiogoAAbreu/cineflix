import styled from "styled-components"
import { useLocation, useNavigate } from "react-router-dom"

export default function Sucesso() {

    const location = useLocation();
    const navigate = useNavigate();
    const { assentos, cpf, name, titulo, date, hora } = location.state;

    return (
        <Conteudo>
            <div>
                <p>Pedido feito com sucesso</p>
                <StyledDiv>
                    <p>Filme e Sessão</p>
                    <span>{titulo}</span>
                    <span>{date} - {hora}</span>
                </StyledDiv>
                <StyledDiv>
                    <p>Ingresso</p>
                    {assentos.map((assento, index) => <span key={index}>Assento {assento}</span>)}
                </StyledDiv>
                <StyledDiv>
                    <p>Comprador</p>
                    <span>Nome: {name}</span>
                    <span>CPF: {cpf}</span>
                </StyledDiv>
                <StyledButton onClick={() => navigate('/')}>Voltar para Home</StyledButton>
            </div>

        </Conteudo>
    )
}

const Conteudo = styled.div`
width: 100%;
display: flex;
justify-content: center;
box-sizing: border-box;

 div{
    box-sizing: border-box;
    margin-top: 40px;
    background-color: #666666;
    width: 360px;
    border-radius: 5px;
    padding: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
}
 p{
    margin-top: 10px;
    font-size:24px;
    font-weight: 700;
    color: lightgreen;
 }
`

const StyledDiv = styled.div`
&&{display: flex;
align-items: start;
margin: 5px;
}
p{
    color:  white;
}

span{
    color: white;
    margin-top: 5px;
    font-size: 22px;
}
`

const StyledButton = styled.button`
width: 225px;
height: 42px;
border-radius: 5px;
background-color: red;
font-size: 18px;
color: white;
margin-top: 20px;

&:hover{
    cursor: pointer;
    filter: brightness(1.3);
}
`