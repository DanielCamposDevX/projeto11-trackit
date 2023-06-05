import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Historico from './pages/Historico'
import Habitos from './pages/Habitos'
import Hoje from './pages/Hoje'
import reset from './reset.jsx'
import styled, { createGlobalStyle } from 'styled-components'
import { Routes, BrowserRouter, Route, useLocation, useNavigate } from 'react-router-dom'
import { RequestContext } from './context/RequestContext'
import logo from './assets/TrackIt.png'
import { useContext, useEffect, useState } from 'react'
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { AiOutlinePoweroff } from 'react-icons/ai'

export default function App() {



  return (
    <>
      <Reset />
      <BrowserRouter>
        <HeaderAndFooter />
        <Routes>
          <Route element={<Login />} path="/" />
          <Route element={<Cadastro />} path="/cadastro" />
          <Route element={<Habitos />} path="/habitos" />
          <Route element={<Hoje />} path="/hoje" />
          <Route element={<Historico />} path="/historico" />
        </Routes>
      </BrowserRouter>
    </>
  )
}


function HeaderAndFooter() {
  const location = useLocation();
  const navigate = useNavigate();;
  const { request, total, check } = useContext(RequestContext);
  const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const progress = (check / total) * 100;
    setProgressValue(progress);
  }, [check, total]);

  if (location.pathname === "/" || location.pathname === "/cadastro") {
    return null;
  }

function Logoff(){
  localStorage.removeItem("imagem");
  localStorage.removeItem("token");
  localStorage.removeItem("id")
  navigate("/")
}


  return (
    <>
      <Header data-test="header">
        <img src={logo} alt="Profile" />
        <Holder>
          <Perfil src={request.image} data-test="avatar" />
          <Sair onClick={Logoff}><AiOutlinePoweroff /></Sair>
        </Holder>
      </Header>
      <Footer data-test="menu">
        <button onClick={() => { navigate('/habitos') }} data-test="habit-link">Hábitos</button>
        <Circle onClick={() => { navigate('/hoje') }} data-test="today-link" >

          <CircularProgressbar value={progressValue} text={`Hoje`} background
            backgroundPadding={6}
            styles={buildStyles({
              backgroundColor: "#3e98c7",
              textColor: "#fff",
              pathColor: "#fff",
              trailColor: "transparent"
            })} />

        </Circle>
        <button onClick={() => { navigate('/historico') }} data-test="history-link" >Histórico</button>
      </Footer>
    </>
  );
}






const Reset = createGlobalStyle`
  ${reset}
`
const Holder = styled.div `
  display:flex;
  margin-right:5px;
`
const Sair = styled.button`
  display:flex;
  align-items: center;
  justify-content:center;
  font-size:30px;
  color:white;
  border:none;
  background-color:transparent;
  width:40px;
  height:50px;
  `

const Header = styled.div`
  position: fixed;
  top:0px;
  left:0px;
  background-color:#126BA5;
  height:70px;
  width:100%;
  z-index: 1;
  display:flex;
  align-items: center;
  justify-content:space-between;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  img{
    margin-left:20px;
  }
  
`

const Perfil = styled.img`
  border-radius:1000px;
  width:50px;
  height:50px;
`

const Footer = styled.div`
    position: fixed;
    bottom: 0px;
    right: 0px;
    background-color: white;
    height: 70px;
    width: 100%;
    display:flex;
    align-items:center;
    justify-content:space-around;

    button{
      background-color: transparent;
      border: none;
      color: #52B6FF;
      font-family: 'Lexend Deca', sans-serif;
      font-weight: 400;
      font-size: 18px;
    }
`
const Circle = styled.div`
  display: flex;
  border-radius: 1000px;
  background-color: #52B6FF;
  justify-content: center;
  align-items: center;
  width: 91px;
  height: 91px;
  margin-bottom: 50px;
  color: #ffffff;
  font-family: 'Lexend Deca', sans-serif;
  font-weight: 400;
  font-size: 18px;
`