import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from '../assets/Group 8.png'
import axios from "axios";
import { useContext } from "react";




export default function Login(props) {
    
 const LoginContext = createContext();   

const [email,setEmail] = useState("");
const [senha,setSenha] = useState("");


   function login(){
    const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",Login)
    request.then( () => {
        props.setToken = request.token;
        console.log(token);
    }
    )
    request.catch(console.log("Errou"));
   }


    return (
        <>
            <Container>
                <Logo src={logo} />
                <form onSubmit={() => login}>
                    <input required type="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
                    <input required type="password" placeholder="senha" value={senha} onChange={e => setSenha(e.target.value)}/>
                    <Submit type="submit">Entrar</Submit>
                    <a>Não tem uma conta? Cadastre-se!</a>
                </form>
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

    a{
        color: #52B6FF;
        text-decoration: underline;
        font-family: 'Lexend Deca', sans-serif;
        font-weifht: 400;
        font-size: 14px;
    }
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





