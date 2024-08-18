import styled from "styled-components"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from './Footer'
import Assentos from "./Assentos";


export default function Sessao() {
    const { sessaoId } = useParams();
    const [sessao, setSessao] = useState();

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${sessaoId}/seats`)
        promise.then(res => setSessao(res.data))
    }, [])


    return (
        <Conteudo>
            <StyledP>Selecione o(s) assento(s)</StyledP>
            {sessao && <Assentos seats={sessao.seats} />}
            {sessao &&
                <Footer
                    poster={sessao.movie.posterURL}
                    titulo={sessao.movie.title}
                    diaSemana={sessao.day.weekday}
                    hora={sessao.name} />}
        </Conteudo>
    )
}

const Conteudo = styled.main`
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
`


const StyledP = styled.p`
    font-size: 24px;
    color: white;
    margin:50px 0px 30px 0px;
`

