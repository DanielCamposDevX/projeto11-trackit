import { useState } from 'react'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Historico from './pages/Historico'
import Habitos from './pages/Habitos'
import Hoje from './pages/Hoje'
import reset from './reset.jsx'
import styled, { createGlobalStyle } from 'styled-components'
import { Routes, BrowserRouter , Route } from 'react-router-dom'
import { RequestProvider } from './context/RequestContext'

export default function App() {


  return (
    <RequestProvider>
      <Reset />
      <BrowserRouter>
        <Routes>
          <Route element={<Login />} path="/" />
          <Route element={<Cadastro />} path="/cadastro" />
          <Route element={<Habitos />} path="/hábitos" />
          <Route element={<Hoje />} path="/hoje" />
          <Route element={<Historico />} path="/histórico" />
        </Routes>
      </BrowserRouter>
    </RequestProvider>
  )
}







const Reset = createGlobalStyle`
  ${reset}
`
