import styled from "styled-components"

export default function Footer({ poster, titulo, diaSemana, hora }) {

    return (
        <Filme>
            <img src={poster} alt="poster" />
            <div>
                <span>{titulo}</span>
                {diaSemana && <p>{diaSemana} - {hora}</p>}
            </div>
        </Filme>
    )
}

const Filme = styled.footer`
    display: flex;
    align-items: center;
    background-color: #666666;
    width: 100%;
    height: 117px;
    position: fixed;
    bottom: 0px;
    left: 0px;

    img{
    width: 72px;
    margin: 10px;
    border-radius:5px;
}

    span{
    font-size:26px;
    color:white;
    margin-bottom: 5px;
}
    p{
    color: white;
    font-size: 26px;
    }

    div{
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    }
`
