import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Historico from './pages/Historico'
import Habitos from './pages/Habitos'
import Hoje from './pages/Hoje'
import reset from './reset.jsx'
import styled, { createGlobalStyle } from 'styled-components'
import { Routes, BrowserRouter, Route, useLocation, useNavigate } from 'react-router-dom'
import { RequestProvider } from './context/RequestContext'
import perfil from './assets/TrackIt.png'
import { useEffect } from 'react'

export default function App() {

 

  return (
    <RequestProvider>
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
    </RequestProvider>
  )
}
function HeaderAndFooter() {
  const location = useLocation();
  const navigate = useNavigate();;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  if (location.pathname === "/") {
    return null;
  }

  return (
    <>
      <Header>
        <img src={perfil} alt="Profile" />
        <Perfil src="" />
      </Header>
      <Footer>
        <button onClick={() => {navigate('/habitos')}}>Hábitos</button>
        <Circle onClick={() => {navigate('/hoje')}}>Hoje</Circle>
        <button onClick={() => {navigate('/historico')}}>Histórico</button>
      </Footer>
    </>
  );
}






const Reset = createGlobalStyle`
  ${reset}
`

const Header = styled.div`
  position: fixed;
  top:0px;
  left:0px;
  background-color:#126BA5;
  height:70px;
  width:100%;
  display:flex;
  align-items: center;
  justify-content:space-between;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  img{
    margin-left:10px;
  }
  
`

const Perfil = styled.img`
  border-radius:100px;
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