import  { useState } from 'react'
import axios from 'axios'

const Axios = () => {

    const [data , setReqData] = useState("")
    const [value ,setValue] = useState("")

    // function getRequest(){
    //     axios.get("http://localhost:8000/"+value).then(resp=>{
    //         setReqData(resp.data)
    //     })
    // }

    function postRequest(){
        axios.post("http://localhost:8000/data",{name:value}).then(resp=>{
            setReqData(resp.data)
        })
    }

  return (
    <div>
        <input type='text' placeholder='Enter here...' onChange={(e)=>setValue(e.target.value)} />
        <button onClick={postRequest}>SEND</button>
        <br/>
        The data recieved is {data}
    </div>
  )
}

export default Axios