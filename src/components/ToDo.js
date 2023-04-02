import React, { useState } from 'react'
import ToDoForm from './ToDoForm'
import { RiCloseCircleLine } from 'react-icons/ri'
import ToDoList from './ToDoList'
import { TiEdit } from 'react-icons/ti'
function ToDo({ todos, completeToDo }) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });
    return todos.map((ToDo, index) => (
        <div className={ToDo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
            <div key={ToDo.id} onClick={() => completeToDo(ToDo.id)}>
                {ToDo.text}
            </div>
            <div className='icons'>
                <RiCloseCircleLine />
                <TiEdit />
            </div>
        </div>
    ))
}

export default ToDo
