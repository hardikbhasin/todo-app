import React , {useState} from 'react'
import ToDoForm from './ToDoForm'
import ToDo from './ToDo';

export default function ToDoList() {
    const [todos, setTodos] = useState([]);
    const addToDo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)){
            return;
        }
        const newTodos = [todo, ...todos];
        setTodos(newTodos);
       
    }
    const completeToDo = id =>{
      let updatedToDo = todos.map(todo => {
        if(todo.id === id){
          todo.isComplete = !todo.isComplete
        }
        return todo
      })
      setTodos(updatedToDo);
    }

  return (
    <div>
        <h1>What's the plan for today?</h1>
        <ToDoForm onSubmit={addToDo}/>
        <ToDo
         todos={todos} 
         ccompleteToDo={completeToDo}/>
      
    </div>
  )
}
