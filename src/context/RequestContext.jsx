import { createContext, useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export const RequestContext = createContext()

export const RequestProvider = ({children}) => {
  const [request , setRequest] = useState([]);
  const [check, setCheck] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => { if(request.length != 0){
    const config = {
      headers: {
        "Authorization": `Bearer ${request.token}`
      }
    };

    const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config);
    promise.then(response => {
      setTotal(response.data.length);
    });}
  }, [request]);


  return(
    <RequestContext.Provider value={ {request , setRequest, check ,setCheck, total ,setTotal} }>
      {children}
    </RequestContext.Provider>
  )
}