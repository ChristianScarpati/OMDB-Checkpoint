import React, { useState, useEffect, useReducer } from 'react'
import { loginUser } from '../state/user'

export const useLocalStorage = (props) => {

    const [name, setName] = useReducer(loginUser, []);
    
    useEffect(() => {
      window.localStorage.setItem("name", JSON.stringify(name))
    }, [name])
             
    

    return (
      <useLocalStorage value={{name, setName}}>
          {props.children}
      </useLocalStorage>
    )
   
}

export default useLocalStorage

