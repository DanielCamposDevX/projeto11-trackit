import styled from "styled-components";
import { useEffect, useContext, useState } from "react";
import axios from "axios";
import { RequestContext } from "../context/RequestContext";

export default function Hoje() {
  const { request, check, setCheck, total, setTotal } = useContext(RequestContext);
  const [habits, setHabits] = useState([]);
  const [checkin, setCheckin] = useState([]);

  useEffect(() => {
    const config = {
      headers: {
        "Authorization": `Bearer ${request.token}`
      }
    };

    const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config);
    promise.then(response => {
      setHabits(response.data);
      setTotal(response.data.length);
    });
  }, []);



  function handleCheck(id) {
    const config = {
      headers: {
        "Authorization": `Bearer ${request.token}`
      }
    }
    const prevCheckin = [...checkin];
    if (!prevCheckin.includes(id)) {
      prevCheckin.push(id);
      setCheckin(prevCheckin);
      const promisse = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, null, config)
      promisse.then(setCheck(check + 1));
      promisse.catch();
    }
    else {
      const updatedCheckin = prevCheckin.filter(item => item !== id);
      setCheckin(updatedCheckin);
      const promisse = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, null, config)
      promisse.then(setCheck(check - 1));
      promisse.catch();

    }
  }

  return (
    <Content>
      <Upper>
        <h1></h1>
        <h2></h2>
      </Upper>
      {habits.length !== 0 && habits.map(habit => (
        <Card key={habit.id}>
          <form >
            <h1>{habit.name}</h1>
            <p>Sequência atual: {habit.currentSequence} dias</p>
            <p>Seu recorde: {habit.highestSequence} dias</p>
            <input type="checkbox" onChange={() => handleCheck(habit.id)} />
          </form>
        </Card>
      ))}
    </Content>
  );
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

`

const Card = styled.div`
    width: 92%;
    background-color: white;
    height: 94px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    position:relative;
    form{
        width:100%;
        height:100%;
    }
    input[type=checkbox]{
        height:69px;
        width:69px;
        position:absolute;
        top: 10px;
        right: 5px;
        border-radius: 5px;
        accent-color: #5ca101;
        content: '';
        :checked{
        color:white; 
        }
    }
   
`
