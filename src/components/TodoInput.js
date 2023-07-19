import React, { useState } from 'react'
import { AiOutlineEdit } from 'react-icons/ai'
import { AiOutlineDelete } from 'react-icons/ai';

function TodoInput(props) {
    const [inputTasks, setInputTasks, status = {
    }] = useState('');


    return (
        <div className='todo-app2'>
            <div className='input-container'>
                <i className='fas fa-list-check' aria-hidden='true' />
                <input type='text' className='input-box-todo' placeholder='Add your todo' value={inputTasks} onChange={e => {
                    setInputTasks(e.target.value);
                    //console.log(e.target.value);
                }} />
                <button className='add-btn' onClick={() => {
                    props.addList(inputTasks);
                    setInputTasks("");
                }}>Add</button>
            </div>

            <div className='main-container'>
                <p className="complete-all">Complete all tasks</p>
                <p id="clear-all">Clear all tasks</p>
            </div>
        </div>
    )
}

export default TodoInput