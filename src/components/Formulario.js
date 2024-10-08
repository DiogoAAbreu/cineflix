import axios from "axios";
import styled from "styled-components"
import { useNavigate } from "react-router-dom"

export default function Formulario({
    $setUsuario,
    $usuario,
    assentos,
    titulo,
    diaSemana,
    date,
    hora }) {

    const cpfMask = value => {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})/, '$1-$2')
            .replace(/(-\d{2})\d+?$/, '$1')
    }

    const navigate = useNavigate();

    function handleForm(event) {
        event.preventDefault();
        if ($usuario.ids.length < 1) {
            return
        }
        const promise = axios.post('https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many', $usuario)
        promise.then(
            navigate('/sucesso', { state: { ...$usuario, assentos, titulo, diaSemana, date, hora } })
        )
        $setUsuario({ ids: [], name: '', cpf: '' })
    }
    return (
        <StyledForm onSubmit={handleForm} >
            <label htmlFor="name">Nome do comprador:</label>
            <input required
                name="name"
                id="name"
                placeholder="Digite seu nome..."
                value={$usuario.name}
                onChange={e => $setUsuario({
                    ...$usuario,
                    [e.target.name]: e.target.value
                })} />

            <label htmlFor="cpf">CPF do comprador:</label>
            <input required
                maxLength='14'
                id="cpf"
                name="cpf"
                value={$usuario.cpf}
                placeholder="Digite seu CPF..."
                onChange={e => $setUsuario({
                    ...$usuario,
                    [e.target.name]: cpfMask(e.target.value)
                })} />

            <button type="submit">Reservar assento(s)</button>
        </StyledForm>
    )
}


const StyledForm = styled.form`
padding-top: 40px;
color: white;
font-size: 18px;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
width: 100%;

input{
   width: 322px;
   height: 46px;
   font-size: 18px;
   padding: 5px;
   border-radius: 5px;
   border: none;

   &::placeholder{
    font-style: italic;
    color: #AFAFAF;
   }
}

label{
    margin:10px 0px 5px 0px;
}

button{
    background-color: red;
    border-radius: 5px;
    width: 225px;
    height: 42px;
    margin: 30px 0px 20px 0px;

    &:hover{
    filter: brightness(1.3);
}
}
`