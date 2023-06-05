import styled from "styled-components"
import { useEffect } from "react";
import { RequestContext } from "../context/RequestContext";
import { useContext } from "react";

export default function Historico(){
   const {setRequest} = useContext(RequestContext); 

    useEffect(() => {
        if(localStorage.length > 1){
        const img = localStorage.getItem("imagem");
        const token = localStorage.getItem("token");
        const id = localStorage.getItem("id");
        if(token !== null){
            setRequest({image: img , token: token, id: id});
        }}
        else{navigate ("/")}
    },[])

    return(
        <Content>
            <h1>Histórico</h1>
            <h2>Em breve você poderá ver o histórico dos seus hábitos aqui!</h2>
        </Content>
    )

}




const Content = styled.div`
    background-color: #f2f2f2;
    width:100%;
    height: 100vh;
    margin-top: 70px;
    margin-bottom: 70px;
    display: flex;
    flex-direction: column;
    align-items: left;
    h1{
       font-family: 'Lexend Deca', sans-serif;
       font-style: normal;
       font-weight: 400;
       font-size: 23px;
       line-height: 29px;
       color: #126BA5;
       margin-top: 28px;
       margin-left: 17px;
    }
    h2{
        font-family: 'Lexend Deca', sans-serif;
       font-style: normal;
       font-weight: 400;
       font-size: 18px;
       line-height: 22px;
       color: #666666;
       margin-top: 28px;
       margin-left: 17px;
    }
`