// import React from 'react'

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {useContext} from "react" 
import { Context } from "./ContextProvider"
import axios from "axios"

const Login = () => {

  const nav = useNavigate()
  const context = useContext(Context)
  const [val , setVal] = useState("") 
  // console.log(render)

  function handleSubmit(e:any){
    e.preventDefault();
    const pass = e.target.password.value;
    console.log(pass);
    axios.get("http://localhost:8000/login/"+val).then(response=>{
      if(val == response.data.name && pass == response.data.password){
        context.setState(val)
        nav('/result')
      }else{
        alert("Invalid username or password !!")
      }
    })
  }
  return (
      <div>
          <form onSubmit={handleSubmit}>
            <input type="text" name="username" value={val} onChange={(e)=>setVal(e.target.value)} placeholder="Enter Username" /><br/>
            <input type="password" name="password" placeholder="Enter Password" /><br/>
            <button type="submit">Submit</button><br/>
            New user? <a href='/signup'>Signup</a>
          </form>
      </div>
    )
}

export default Login