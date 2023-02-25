import React, { useState, useEffect } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import { AiOutlineCloseCircle } from "react-icons/ai"
import { TiEdit } from "react-icons/ti"

function Todo({todos, completeTodo, removeTodo, updateTodo}) {

  const [store, setStore] = useState("");


  const [edit, setEdit] = useState({
    id: null,
    value: ""
  });

// useEffect(() => {
//     const data = localStorage.getItem("my-tier-list");
//     if (data) {
//       setEdit(JSON.parse(data))
//     }

//   }, [])

// useEffect(() => {
//     localStorage.setItem("my-tier-list", JSON.stringify(todos))
//   })

  const submitUpdate = (value) => {
    updateTodo(edit.id, value)
    setEdit({
      id: null,
      value: ""
    })
  }

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />
  }

  return todos.map((todo, index) => (
    <div className={todo.isComplete ? "todo-row complete" : 
  "todo-row"} key={index}
  >
    <div key={todo.id} onClick={() => completeTodo(todo.id)} >
      {todo.text}
    </div>
    <div className='icons'></div>
    <AiOutlineCloseCircle 
    onClick={() => removeTodo(todo.id)}
    className="delete-icon"
    />
    <TiEdit onClick={() => setEdit({ id: todo.id, value: todo.text })}
    className="edit-icon" />
  </div>
  ))
}

export default Todo