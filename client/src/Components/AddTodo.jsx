import React, { useState } from 'react'
import axios from 'axios'

export default function AddTodo() {
  const [message, setMessage] = useState('')
  const createToDo = async () => {
    if (message === '') {
      alert('cannot add empty message')
    }
    try {
      const response = await axios.post('http://localhost:3000/todolist', {
        message: message
      })
      if (response.data.success === 'created') {
        window.location.reload()
      }
    } catch (error) {
      console.log(error)
    }

  }
  return (
    <div className="container">
      <input type="text" placeholder='add task here' onChange={(e) => setMessage(e.target.value)}></input>
      <button onClick={createToDo} className="btn">ADD</button>
    </div>
  )
}





















