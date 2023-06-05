import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from '../assets/Group 8.png'
import axios from "axios";
import { ThreeDots } from 'react-loader-spinner';




export default function Cadastro(){

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");
    const [foto, setFoto] = useState("");
    const [loading, setLoading] = useState(false);


    const navigate = useNavigate();

    function Signup(event){
        event.preventDefault();
        setLoading(true);
        const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",{ email: email, name: nome, image: foto, password: senha});
        request.then(() => {navigate("/"); 
        setLoading(false)});
        request.catch(() => {alert("Erro"); setLoading(false)});
    }

    return (
        <>
            <Container>
                <Logo src={logo} />
                <form onSubmit={Signup}>
                    <input required type="email" disabled={loading} placeholder="email" value={email} onChange={e => setEmail(e.target.value)} data-test="email-input"/>
                    <input required type="password" disabled={loading} placeholder="senha" value={senha} onChange={e => setSenha(e.target.value)} data-test="password-input"/>
                    <input required type="text" disabled={loading} placeholder="nome" value={nome} onChange={e => setNome(e.target.value)} data-test="user-name-input"/>
                    <input required type="url" disabled={loading} placeholder="foto" value={foto} onChange={e => setFoto(e.target.value)} data-test="user-image-input"/>
                    <Submit type="submit" disabled={loading} data-test="signup-btn" >{!loading ? 'Cadastrar' :  <ThreeDots
                            height="20"
                            width="45"
                            radius="9"
                            color="#FFFFFF"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            wrapperClassName=""
                            visible={true}
                        />} </Submit>
                </form>
                <A onClick={() => navigate("/")} data-test="login-link">Já tem uma conta? Faça login!</A>
                
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
    display:flex;
    align-items:center;
    justify-content:center;

    font-family: 'Lexend Deca', sans-serif;
    color: white;
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 26px;
`
