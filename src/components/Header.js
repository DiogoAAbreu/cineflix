import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Header() {

    return (
        <Topo>
            <StyledLink to={"/"}>
                <TituloPagina>
                    CINEFLIX
                </TituloPagina>
            </StyledLink>
        </Topo>


    )
}

const StyledLink = styled(Link)`
text-decoration: none;
`

const Topo = styled.header`
width: 100%;
height: 67px;
background-color: black;
display: flex;
align-items: center;
justify-content: center;
`

const TituloPagina = styled.h1`
color: red;
font-size: 34px;
font-weight: 700;
transition: font-size 0.1s linear ;
&:hover{
    font-size: 40px;
}
`

