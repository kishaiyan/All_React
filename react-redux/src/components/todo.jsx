import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todoSlice'
function Todo() {
  const [text,setText]=useState("")
  const dispatch=useDispatch()

  const addTodoHandler=(e)=>{
    e.preventDefault();
    if(text){
      dispatch(addTodo(text))
    }
    setText('')
  }
  return (
    
      <div className='flex items-center justify-center'>
        <input 
        value={text}
        onChange={(e)=>setText(e.target.value)}
        type='text'
        placeholder='Your Todo'
        className='border border-blue-400 px-3 py-1 rounded'
        />
        <button 
        onClick={addTodoHandler}
        className='bg-blue-400 px-3 py-1 rounded border-2 border-blue-600 hover:bg-blue-600'>Add</button>
      </div>
    
  )
}

export default Todo