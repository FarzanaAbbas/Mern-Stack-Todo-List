import { AiFillEdit } from "react-icons/ai"; 
import { toast } from "react-toastify";
import { AiOutlineDelete } from "react-icons/ai"; 
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const TodoList = ()=>{
   const [todoo, setTodoo] = useState([])
 const getAllTodos = async()=> {
    try {
      const response = await axios.get('http://localhost:3000/todolist/getall') //post(create)
      console.log(response.data.data)
       setTodoo(response.data.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    getAllTodos()
  }, [])

  const handleDelete = async(id)=>{

try {
  const result = await axios.delete(`http://localhost:3000/todolist/deleteToDo/${id}`) //delete
console.log(result.data.success)
if(result.data.success === 'deleted'){
  toast('deleted')
  getAllTodos()
}
}
catch (error) {
  console.log(error)
}
  }
// const updateToDo = async()=>{
//   try {
//     const response = await axios.put('http://localhost:3000/todolist/updateTodo') //put(update)
//   } catch (error) {
//     console.log(error)
//   }
// }

  return (
<div>
  <ul>
    {
      todoo.map((todo)=>{
   return(
    <li key={todo._id} className="delete">{todo.message}< AiOutlineDelete className="icon" onClick={() => handleDelete(todo._id)}/></li>
   )
      })
    }


  </ul>
</div>
  )
}
export default TodoList

