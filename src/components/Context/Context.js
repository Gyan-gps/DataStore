import React, { createContext, useContext, useEffect, useState } from 'react'

const Context = createContext();

export const ContextProvider = ({children}) => {

    const [alertData,setAlertData] = useState();
    const [action,setAction] = useState();
    const [personsData, setPersonsData] = useState(localStorage.getItem("persons")
    ? JSON.parse(localStorage.getItem("persons"))
    : []);

    useEffect(()=>{
      setTimeout(() => {
        setAlertData("")
      }, 4000);
    },[alertData])

    const values ={
      alertData,
      setAlertData,
      action,
      setAction,personsData, 
      setPersonsData
    }

  return (
    <Context.Provider value={values}>
      {children}
    </Context.Provider>
  )
}

export const useContextData = () => useContext(Context);
