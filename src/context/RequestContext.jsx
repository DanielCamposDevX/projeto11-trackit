import { createContext, useState } from "react";

export const RequestContext = createContext()

export const RequestProvider = ({children}) => {
  const [request , setRequest] = useState([]);
  const [check, setCheck] = useState(0);
  const [total, setTotal] = useState(0);


  return(
    <RequestContext.Provider value={ {request , setRequest, check,setCheck,total,setTotal} }>
      {children}
    </RequestContext.Provider>
  )
}