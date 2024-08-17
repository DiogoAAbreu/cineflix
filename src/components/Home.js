import styled from "styled-components"
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import axios from "axios";

export default function Home() {

    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        const promise = axios.get('https://mock-api.driven.com.br/api/v8/cineflex/movies')
        promise.then(res => {
            const { data } = res;
            setFilmes(data)
        })
    }, [])
    return (
        <Conteudo>
            <p>Selecione o filme</p>
            <Filmes filmes={filmes} />
        </Conteudo>
    )
}

function Filmes({ filmes }) {

    return (
        <ul>
            {filmes.map(filme =>
                <Link key={filme.id} to={`/filme/${filme.id}`}>
                    <li>
                        <img src={filme.posterURL} alt={filme.title} />
                    </li>
                </Link>
            )}
        </ul>

    )
}

const Conteudo = styled.main`
width: 100%;
display: flex;
align-items:center;
flex-direction: column;

p{
    font-size: 24px;
    color: white;
    margin:50px 0px;
}

ul{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}

img{
    width: 129px;
    margin: 15px;
    transition: width 0.2s linear;
    border-radius:5px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    &:hover{
        width: 139px;
        cursor: pointer;
    }
}
`