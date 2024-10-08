import { createSlice,nanoid } from "@reduxjs/toolkit";
const initialState={
  todos:[{
    id:'1',
    text:"Hello"
  }]
}
const todoSlice=createSlice({
  name:"todo",
  initialState, 
  reducers:{
    addTodo:(state,actions)=>{
      const todo={
        id:nanoid(),
        text:actions.payload
      }
      state.todos.push(todo)
    },
    removeTodo:(state,actions)=>{
      state.todos=state.todos.filter((todo)=>todo.id!==actions.payload)
    },
    editTodo:(state,actions)=>{
      state.todos.forEach((todo)=>{
      if(todo.id === actions.payload.id){
        todo.text=actions.payload.text
      }
      })
    }
  }
})

export const {addTodo,removeTodo,editTodo} = todoSlice.actions;

export default todoSlice.reducer