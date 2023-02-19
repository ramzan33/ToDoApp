import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [todo,setTodo] = useState('');
  const [todos,setTodos] = useState([]);
  const [editId,setEditId] = useState(0);
  const handleSubmit=(e)=>{
   e.preventDefault();
    if(todo !==""){
      setTodos([{id:`${todo}-${Date.now()}`,todo},...todos]);
      setTodo("")
    }
    if(editId){
      const editToDo=todos.find((i)=>i.id===editId);
      const updateToDo=todos.map((t)=>
      t.id===editToDo.id
      ? (t={id: t.id, todo})
      : {id: t.id, todo: t.todo}
      );
      setTodos(updateToDo)
      setEditId(0)
      setTodo("")
      return;
    }
  }
  const handleDelete=(id)=>{
      const delToDo=todos.filter((to)=>to.id !==id);
      setTodos([...delToDo])
  }
  const handleEdit=(id)=>{
    const editToDo=todos.find((i)=>i.id===id);
    setTodo(editToDo.todo)
    setEditId(id)
}
  return (
    <div className="App">
      <container>
        <h1>Todo List App</h1>
        <form className="toDoForm" onSubmit={handleSubmit}>
          <input type="text"
          //Taking the Value
           value={todo} 
           //Changing the value
          onChange={(e)=>setTodo(e.target.value)}/>
          <button type="submit">{editId ? "Edit" : "Go"}</button> 
        </form>
        <ul className="toDoList">
          {todos.map((t)=>(
              <li><span class="toDoText" key={t.id}>{t.todo}</span>
              <button onClick={()=>handleEdit(t.id)}>Edit</button>
              <button onClick={()=>handleDelete(t.id)}>Delete</button>
              </li>
          ))
            
          }
        </ul>
      </container>
    </div>
  )
}

export default App