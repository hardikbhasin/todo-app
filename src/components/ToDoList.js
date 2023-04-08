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

    const updatedToDo = (todoId, newvalue ) => {
      if(!newvalue.text || /^\s*$/.test(newvalue.text)){
        return;
    }
    setTodos(prev => prev.map(item => item.id === todoId ? newvalue : item));

    };
    const removetodo = id => {
      const removArr = [...todos].filter(ToDo => ToDo.id !== id)
      setTodos(removArr);
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
         completeToDo={completeToDo}
         removetodo={removetodo}

         updatedToDo={updatedToDo}/>
      
    </div>
  )
}
