import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from '../assets/Group 8.png'
import axios from "axios";
import { useContext } from "react";




export default function Cadastro(){

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");
    const [foto, setFoto] = useState("");


    const navigate = useNavigate();

    function Signup(event){
        event.preventDefault();
        const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",{ email: email, name: nome, image: foto, password: senha});
        request.then(() => navigate("/"));
        request.catch("Deu ruuim");
    }

    return (
        <>
            <Container>
                <Logo src={logo} />
                <form onSubmit={Signup}>
                    <input required type="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
                    <input required type="password" placeholder="senha" value={senha} onChange={e => setSenha(e.target.value)} />
                    <input required type="text" placeholder="nome" value={nome} onChange={e => setNome(e.target.value)} />
                    <input required type="url" placeholder="foto" value={foto} onChange={e => setFoto(e.target.value)} />
                    <Submit type="submit">Cadastrar</Submit>
                </form>
                <A onClick={() => navigate("/")}>Já tem uma conta? Faça login!</A>
                
            </Container>
        </>



    );
}




const Container = styled.div`
    
    margin-top:68px;
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    
    form{

        display:flex;
        flex-direction:column;  
        align-items:center;
        width:100%;

    }
    
    input{

        width: 76%;
        padding-left:  4%;
        height: 45px;
        margin-bottom: 6px;
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        background-color:white;

        font-weight: 400;
        font-size: 20px
    }
    
    input::placeholder{
        color: #DBDBDB;
    }

`

const A = styled.button`
        color: #52B6FF;
        text-decoration: underline;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 14px;
        background-color:transparent;
        border:none;
`

const Logo = styled.img`
    margin-bottom: 36px;
`


const Submit = styled.button`
    
    width: 80%;
    height: 45px;
    margin-bottom: 25px;
    border: none;
    border-radius: 5px;
    background-color: #52B6FF;

    font-family: 'Lexend Deca', sans-serif;
    color: white;
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 26px;
`
