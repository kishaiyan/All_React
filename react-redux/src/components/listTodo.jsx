import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeTodo } from '../features/todoSlice';
function ListTodo() {
  const todos=useSelector((state)=>state.todos)
  const dispatch=useDispatch()
  console.log(todos);
  return (
    <div className='items-center justify-center'>
     <h1 className='text-center'>Your Todos</h1>
     {
      todos.map((todo)=>(
        <div className="bg-black/70 w-[60%] flex justify-between px-4 py-2 rounded mb-2.5 items-center" id={todo.id}>
          <h1 className='text-white'>{todo.text}</h1>
          <button 
          onClick={()=>dispatch(removeTodo(todo.id))}
          className='bg-red-400 px-2 py-1 rounded border-2 border-red-600'>delete</button>
        </div>
      ))
     }

    </div>
  )
}

export default ListTodo