import styled from "styled-components"
import { useLocation } from "react-router-dom"

export default function Sucesso() {

    const location = useLocation();
    console.log(location)

    return (
        <Conteudo>
            <div>
                <p>Pedido feito com sucesso</p>
                <StyledDiv>
                    <p>Filme e Sessão</p>
                    <span>teste</span>
                </StyledDiv>
                <StyledDiv>
                    <p>Ingresso</p>
                    <span>teste</span>
                </StyledDiv>
                <StyledDiv>
                    <p>Comprador</p>
                    <span>teste</span>
                </StyledDiv>
                <StyledButton>Voltar para Home</StyledButton>
            </div>

        </Conteudo>
    )
}

const Conteudo = styled.div`
width: 100%;
display: flex;
justify-content: center;

 div{
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
}
p{
    color:  white;
}

span{
    color: white;
    margin-top: 5px;
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