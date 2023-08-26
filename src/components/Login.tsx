// import React from 'react'

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {useContext} from "react" 
import { Context } from "./ContextProvider"

const Login = () => {

  const nav = useNavigate()
  const context = useContext(Context)
  const [val , setVal] = useState("")  

  function handleSubmit(e:any){
    e.preventDefault();
    const pass = e.target.password.value;
    console.log(pass)
    console.log(val)
    if(val == "surya" && pass == "qwertyuiop"){
      {context.setState("Success")}
    }else{
      {context.setState("Failure")}
    }
    nav('/result')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" value={val} onChange={(e)=>setVal(e.target.value)} placeholder="Enter Username" />
        <input type="password" name="password" placeholder="Enter Password" />
        <button type="submit">Submit</button>
      </form>
      
    </div>
  )
}

export default Login