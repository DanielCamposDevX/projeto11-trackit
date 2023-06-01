import styled from "styled-components"
import { IoAddOutline } from 'react-icons/io5'
import { useState } from "react";

export default function Habitos() {

    const days = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
    const [clicked,setClicked] = useState([false,false,false,false,false,false,false]);
    
    function handleClick(i){
        setClicked(prevClicked => {
            const newClicked = [...prevClicked];
            newClicked[i] = !newClicked[i]; 
            return newClicked;
          });
    }

    return (
        <Content>
            <Upper><h1>Meus Hábitos</h1> <button><IoAddOutline /></button></Upper>
            <Card>
                <input type="text" placeholder="nome do hábito" />
                <Holder>
                    {days.map((day, index) => (
                        <Day onClick={() => handleClick(index)} key={index} clicked={clicked[index]}>{day}</Day>
                    ))}
                </Holder>
                <Holder><Cancelar>Cancelar</Cancelar> <Salvar>Salvar</Salvar></Holder>
            </Card>
            <h1>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h1>
            
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
    align-items: center;
    h1{
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

const Upper = styled.div`
    display:flex;
    justify-content: space-between;
    width: 100%;
    h1{
       font-family: 'Lexend Deca', sans-serif;
       color:#126BA5;
       font-weight: 400;
       font-size: 23px;
       margin-top:28px;
       margin-left: 10px;
    }
    button{
        height:35px;
        width:40px;
        margin-right: 18px;
        margin-top: 22px;
        background: #52B6FF;
        border-radius: 4.6px;
        border: none;
        color: #FFFFFF;
        font-size: 45px;
        font-weight: 700;
        display:flex;
        justify-content: center;
        align-items: center;

    }
`

const Card = styled.div`
    width: 92%;
    background-color: white;
    min-height: 180px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    input{
        margin-top: 18px;
        width:88%;
        padding-left: 2%;
        height:45px;
        border: 1px solid #d4d4d4;
        border-radius: 5px;
        ::placeholder{
            color: #dbdbdb;
            font-family: 'Lexend Deca', sans-serif;
            font-weight: 400;
            font-size: 20px;
        }
    }
`
const Day = styled.button`
         width:30px;
        height:30px;
        border: 1px solid #d4d4d4;
        background-color: ${({ clicked }) => !clicked ? '#FFFFFF' : '#DBDBDB'};
        border-radius:5px;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 20px;
        color: ${({ clicked }) => !clicked ? '#DBDBDB' : '#FFFFFF'};
        margin-right: 5px;
`

const Holder = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: left;
    margin-left: 40px;
    margin-top: 10px;
    width:100%;
    :last-child{
        justify-content: right;
        margin-left: 0px;
        margin-right: 16px;
        margin-bottom: 15px;
    }
`


const Cancelar = styled.button`
    margin-top: 26px;
    border:none;
    background-color:transparent;
    color: #52B6FF;
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 16px;
    `


const Salvar = styled.button`
    height: 35px;
    width: 84px;
    margin-top: 26px;
    border: none;
    background-color: #52B6FF;
    border-radius: 5px;
    color: #FFFFFF;
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 16px;
    margin-left: 20px`

