import axios from 'axios';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = () => {

const [val , setValue] = useState("")
const nav = useNavigate()

function handleSubmit(e:any){
    e.preventDefault();
    const data = {name : val , password : e.target.pass.value}
    axios.post("http://localhost:8000/signup",data).then(response=>{
        if(response.data == "true"){
          nav('/login')
        }else{
          alert("Sigin Failure! User already exists!!!")
        }

    })

}

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' name='username' value={val} onChange={(e)=>setValue(e.target.value)} placeholder='Enter username' /><br/>
            <input type='password' name='pass' placeholder='Enter password' /><br/>
            <button type='submit'>Submit</button><br/>
            Already a user? <a href='/login'>Login</a>
        </form>
    </div>
  )
}

export default Signup