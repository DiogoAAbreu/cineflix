import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Horarios({ datas }) {
    return (
        <Sessoes>
            {datas.map((value, index) =>
                <Dia key={index}>
                    {value.weekday} - {value.date}
                    <Botoes>
                        {value.showtimes.map(showtime =>
                            <StyledLink key={showtime.id} to={`/sessao/${showtime.id}`}>
                                <BotaoHorario >
                                    {showtime.name}
                                </BotaoHorario>
                            </StyledLink>)}
                    </Botoes>
                </Dia>)}
        </Sessoes >
    )
}

const StyledLink = styled(Link)`
text-decoration: none;
color: white;
`

const Dia = styled.div`
color: white;
font-size:20px;
margin:0px 0px 20px 0px;
background-color:#666666;
width: 350px;
border-radius:5px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
padding: 10px;
display: flex;
flex-direction: column;
align-items:start;
`

const Sessoes = styled.main`
margin-bottom: 120px;
`

const Botoes = styled.div`
`

const BotaoHorario = styled.button`
width:82px;
height:43px;
background-color: red;
border-radius: 5px;
margin: 8px;

&:hover{
    filter: brightness(1.5);
}
`
