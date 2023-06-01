import { createContext, useState } from "react";

export const RequestContext = createContext()

export const RequestProvider = ({children}) => {
  const [request , setRequest] = useState([]);
  const [token,setToken] = useState("");


  return(
    <RequestContext.Provider value={ {request , setRequest,token,setToken} }>
      {children}
    </RequestContext.Provider>
  )
}