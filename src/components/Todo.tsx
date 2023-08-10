// // // import { useState } from "react"
// // // // import { Simple } from "./Simple"
// // // // import CIcon from '@coreui/icons-react'
// // // // import { cilTrash } from "@coreui/icons";
// // // // import { Simple } from "./Simple";
// // // var todoId = 0;
// // // export const Todo = () => {
// // //     // const [count , setCount] = useState(0)
// // //     // const data = [1,2,3,4,5]
// // //     const [val , setVal] = useState("")
// // //     const [todoItems , setTodoItems] = useState([]);

// // //     // const [text , updatedText] = useState("")
// // //     function handleSubmit(e:any){
// // //         e.preventDefault()
// // //         // alert(e.target.username.value)
// // //         //  const val = e.target.int.value
// // //         // setTodoItems([...todoItems].map((object)=>{return object}))
// // //          setTodoItems(prevTodoItems=>{
// // //             setVal("");
// // //             return [...prevTodoItems,{todo : val , id : todoId++}]
// // //          })
// // //         //  updatedText(e.target.int.value) 
// // //     }
// // //     // function deleteTask(id){
// // //     //     console.log(id)
// // //     //     const newTodoItems = todoItems.filter((val)=> val.id !== id);
// // //     //     setTodoItems(newTodoItems)
// // //     //     console.log(newTodoItems)
// // //     // }
// // //   return (
// // //     <div>
        
// // //         {/* count is {count}<br/>
// // //         <button onClick={()=>setCount(count=>count+1)}>Increase</button>
// // //         <form onSubmit={handleSubmit}>
// // //             <input type="text" name="username" placeholder="Username"/><br/>
// // //             <input type="password" name="password" placeholder="Password"/><br/>
// // //             <button type="submit">Submit</button> */}
// // //         <form onSubmit={handleSubmit}>
// // //             <input type="text" name="int"/*onChange={(e)=>{console.log(e.target.value)}}*/value={val} onChange={(e)=>setVal(e.target.value)}></input><br/>
// // //             <button type="submit">Add Value</button>
// // //         </form>
// // //             <h5>The entered text is </h5>
// // //             {todoItems.map(item=>{
// // //                 return (
// // //                     <li>{item}</li>
// // //                 )
// // //             })}
// // //         {/* <Simple val={todoItems}/> */}
// // //         {/* <Simple val={todoItems} /> */}
// // //     </div>
// // //   )
// // // }


// import {useState} from 'react'
// import CIcon from '@coreui/icons-react';
// import { cilTrash } from '@coreui/icons';
// import { Simple } from './Simple';

// export const Todo = () => {
//     const [val , setVal] = useState("")
//     const [todoItems , setTodoItems] = useState([])
//     const data =[1,2,3,4,5]

//     // useEffect(()=>{
//     //   console.log(todoItems.length)
//     // },[todoItems])

//     function handleSubmit() {
//         //console.log(val+"submit")
//        // e.preventDefault();
//         setTodoItems([...todoItems,val]);
//         setVal("")

//     }

//     function deleteTask(id : string){
//         console.log(id)
//         const newTodo = todoItems.filter(val => val !== id)
//         setTodoItems(newTodo)
//     }
//   return (
//     <div>
//         <h2>TODO!!!</h2>
//         <div >
//             <input name="todo" value={val} placeholder='Enter the task' onChange={(e)=>setVal(e.target.value)} /><br/>
//             <button onClick={handleSubmit}  type="submit">Add task</button>
//             <h4>The tasks are</h4>
//             {todoItems.map(items=>(
//                 <>
//                     <li>{items} <button onClick={()=>deleteTask(items)}><CIcon icon={cilTrash} width={12} /></button></li>
                    
//                 </>
                
//             ))}
//         </div>
//         <Simple val={data} />
//     </div>
//   )
// }
// import React from 'react'

const Todo = () => {
  return (
    <div>Todo page!</div>
  )
}

export default Todo
