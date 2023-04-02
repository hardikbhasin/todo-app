import React, { useState } from 'react'
import ToDoForm from './ToDoForm'

function ToDo() {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });
    return ToDoList.map((ToDo, index) => (
        <div className={ToDo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
            <div key={ToDo.id} onClick={() => completeToDo(ToDo.id)}>
                {ToDo.text}
            </div>
            <div className='icons'>
                
            </div>
        </div>
    ))
}

export default ToDo
