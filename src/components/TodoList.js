import React, { useState } from 'react'
import './TodoInput.js'
import { AiOutlineEdit } from 'react-icons/ai'
import { AiOutlineDelete } from 'react-icons/ai';

function TodoList(props) {
    const [inputTasks, setInputTasks, status] = useState('');

    return (
        <div className='list'>
            {props.item}
            <div className='edit-icons'>
                <AiOutlineEdit onClick={e => {
                    // props.editListItem(props.index);
                }} />
                <AiOutlineDelete onClick={e => {
                    props.deleteItem(props.index);
                }} />
            </div>
            {/* <li className='list-item'>
                {props.item}
                <input type='checkbox' id="task-1" className='custom-checkbox' />
                <div>{inputTasks}</div>
                <div className='edit-icons'>
                    <AiOutlineEdit />
                    <AiOutlineDelete />
                </div>
            </li> */}
        </div>
    )
}

export default TodoList