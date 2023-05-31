import { useState } from 'react'
import Login from './pages/Login'
import reset from './reset.jsx'
import styled,{ createGlobalStyle } from 'styled-components'

export default function App() {
  const [token, setToken] = useState(0)

  return (
    <>
      <Reset />
      <Login setToken={setToken}/>
    </>
  )
}







const Reset = createGlobalStyle`
  ${reset}
`
