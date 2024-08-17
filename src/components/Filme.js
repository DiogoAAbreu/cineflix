import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import Footer from "./Footer";
import Horarios from "./Horarios";



export default function Filme() {

    const { filmeId } = useParams()
    const [filme, setFilme] = useState();

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${filmeId}/showtimes`)
        promise.then(res => { setFilme(res.data) })
    }, [])


    return (
        <Conteudo>
            <p>Selecione o horário</p>
            {filme && <Horarios datas={filme.days} />}
            {filme && <Footer poster={filme.posterURL} titulo={filme.title} />}
        </Conteudo>

    )
}


const Conteudo = styled.div`
display: flex;
align-items:center;
flex-direction:column;
p{
    color:white;
    font-size: 24px;
    margin: 50px 0px;
}
`