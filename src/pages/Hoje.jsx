import styled from "styled-components";
import { useEffect, useContext, useState } from "react";
import axios from "axios";
import { RequestContext } from "../context/RequestContext";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import 'dayjs/locale/pt-br';

export default function Hoje() {
  const { setRequest, request, check, setCheck, total, setTotal, checkin, setCheckin } = useContext(RequestContext);
  const [habits, setHabits] = useState([]);
  const [progressValue, setProgressValue] = useState(0);
  const navigate = useNavigate();
  const date = dayjs().locale('pt-br').format('dddd, D/MM');
  const dataformatada = date.charAt(0).toUpperCase() + date.slice(1);


  useEffect(() => { if(localStorage.length > 1){
    const img = localStorage.getItem("imagem");
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("id");
    if(token !== null){
        setRequest({image: img , token: token, id: id});
        const config = {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        };
    
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config);
        promise.then(response => {
          setHabits(response.data);
          setTotal(response.data.length);
        });
        promise.catch(() => { navigate("/") })
      }}
      else{navigate ("/")}
},[])


   

  useEffect(() => {
    const progress = (check / total) * 100;
    setProgressValue(progress);
  }, [check, total]);


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
        <h1 data-test="today" >{dataformatada}</h1>
        {!progressValue ? <h2 data-test="today-counter">Nenhum hábito concluído ainda</h2> : <h2 data-test="today-counter" style={{ color: 'green' }}>{progressValue.toFixed(0)}% dos hábitos concluídos</h2>}
      </Upper>
      {habits.length !== 0 && habits.map(habit => {
        const isHabitChecked = checkin.includes(habit.id);
        return (
          <Card key={habit.id} data-test="today-habit-container">
            <form>
              <h1 data-test="today-habit-name" >{habit.name}</h1>
              <p data-test="today-habit-sequence" >Sequência atual: <span style={{ color: isHabitChecked || habit.currentSequence === habit.highestSequence  ? '#8FC549' : '#666666' }}>{habit.currentSequence} dias</span></p>
              <p data-test="today-habit-record" >Seu recorde: <span style={{ color: habit.currentSequence === habit.highestSequence && habit.currentSequence !== 0 ? '#8FC549' : '#666666' }} >{habit.highestSequence} dias</span></p>
              <input type="checkbox" onChange={() => handleCheck(habit.id)} checked={isHabitChecked} data-test="today-habit-check-btn" />
            </form>
          </Card>
        );
      })}
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
    flex-direction:column;
    justify-content: space-between;
    width: 100%;
    height: 90px;
    color: transparent;
    h1{
       font-family: 'Lexend Deca', sans-serif;
       color:#126BA5;
       font-weight: 400;
       font-size: 23px;
       margin-top:28px;
       margin-left: 18px;
    }
    h2{
      font-family: 'Lexend Deca', sans-serif;
       color:#BABABA;
       font-weight: 400;
       font-size: 18px;
       margin-top:8px;
       margin-left: 18px;
    }

`

const Card = styled.div`
    width: 92%;
    background-color: white;
    height: 94px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
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
        border: none;
        accent-color: #8FC549;
        content: '';
        :checked{
        color:white; 
        }
    }
    h1{
      font-family: 'Lexend Deca', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      color: #666666;
      margin:0px;
      margin-left:20px;
      margin-top:15px;
      margin-bottom:15px;
    }
    p{
      margin-left: 20px;
      font-family: 'Lexend Deca', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      color: #666666;
      margin-top:5px;
    }
   
`
