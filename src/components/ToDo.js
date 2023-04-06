import React, { useState } from 'react'
import ToDoForm from './ToDoForm'
import { RiCloseCircleLine } from 'react-icons/ri'
import ToDoList from './ToDoList'
import { TiEdit } from 'react-icons/ti'
function ToDo({ todos, completeToDo, removetodo,updatedToDo }) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });
    const submitupdate = value => {
        updatedToDo(edit.id,value)
        setEdit({
            id:null,
            value: ''
        }) 
    }
    if(edit.id){
        return <ToDoForm edit={edit} onSubmit={submitupdate}></ToDoForm>
    }
    return todos.map((ToDo, index) => (
        <div className={ToDo.isComplete ? 'todo-row  complete' : 'todo-row'} key={index}>
            <div key={ToDo.id} onClick={() => completeToDo(ToDo.id)}>
                {ToDo.text}
            </div>
            <div className='icons'>
                <RiCloseCircleLine 
                onClick={() => removetodo(ToDo.id)} className='delete-icon'/>
                <TiEdit onClick={() => setEdit({id:ToDo.id, value: ToDo.text})} className='delete-icon' />
            </div>
        </div>
    ))
}

export default ToDo
