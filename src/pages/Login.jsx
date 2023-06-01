import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import logo from '../assets/Group 8.png'
import { RequestContext } from "../context/RequestContext";




export default function Login(props) {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const { request,setRequest,setToken } = useContext(RequestContext);
    const navigate = useNavigate();



 function login(event) {
        
        event.preventDefault();

        const promisse =  axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", { email: email, password: senha })
            
        promisse.then(response => {
            setRequest(response.data);
            navigate("/habitos")
        })
    
    }



    function handleSignup() {
        navigate("/cadastro");
    }


    return (
        <>
            <Container>
                <Logo src={logo} />
                <form onSubmit={login}>
                    <input required type="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
                    <input required type="password" placeholder="senha" value={senha} onChange={e => setSenha(e.target.value)} />
                    <Submit type="submit">Entrar</Submit>
                </form>
                <A onClick={handleSignup}>Não tem uma conta? Cadastre-se!</A>
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





