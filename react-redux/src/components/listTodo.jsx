import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, editTodo } from '../features/todoSlice';

function ListTodo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [editingId, setEditingId] = useState(null);
  const [editedText, setEditedText] = useState('');

  const handleEdit = (text, id) => {
    setEditingId(id);
    setEditedText(text);
  };

  const handleSave = (id) => {
    dispatch(editTodo({ id, text: editedText }));
    setEditingId(null);
    setEditedText('');
  };

  return (
    <div className='items-center justify-center'>
      <h1 className='text-center'>Your Todos</h1>
      <div className='flex flex-col items-center justify-center gap-2'>
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="bg-black/70 w-[60%] flex justify-between px-4 py-2 rounded items-center"
          >
            <input
              type='text'
              value={editingId === todo.id ? editedText : todo.text}
              onChange={(e) => setEditedText(e.target.value)}
              disabled={editingId !== todo.id}
              
            />
            <div className='flex gap-2'>
              {editingId === todo.id ? (
                <>
                  <button
                    onClick={() => handleSave(todo.id)}
                    className='bg-green-400 px-2 py-1 rounded border-2 border-green-600'
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditingId(null)}
                    className='bg-yellow-400 px-2 py-1 rounded border-2 border-yellow-600'
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => handleEdit(todo.text, todo.id)}
                    className='bg-blue-400 px-2 py-1 rounded border-2 border-blue-600'
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => dispatch(removeTodo(todo.id))}
                    className='bg-red-400 px-2 py-1 rounded border-2 border-red-600'
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListTodo;
