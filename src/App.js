import React, { useState } from 'react'
import './App.css';
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'

function App() {
  const [listTodo, setListTodo] = useState([]);
  const addList = (inputTasks) => {
    if (inputTasks !== '')
      setListTodo([...listTodo, inputTasks]);
  }

  const deleteListItem = (key) => {
    const newListTodo = [...listTodo];
    newListTodo.splice(key, 1);
    setListTodo([...newListTodo]);
  }


  return (
    <div className="todo-app">
      <div className="center-container">
        <h2>Todo List</h2>
        <TodoInput addList={addList} />
        <hr />
        {listTodo.map((listItem, i) => {
          return <TodoList key={i} index={i} item={listItem} deleteItem={deleteListItem} />
        })}
        <TodoList />
        <div className='filters'>
          <div className='dropdown'>
            <button className='dropbtn'>Filter</button>
            <div className='dropdown-content'>
              <a href='#' id='all'>All</a>
              <a href='#' id='comp'>completed</a>
              <a href='#' id='uncomp'>uncompleted</a>
            </div>
          </div>

          <div className='complete-task'>
            <p>Completed:</p>
            <span className='comp-count'>1</span>
          </div>

          <div className='total-task'>
            <p>Total:</p>
            <span className='total-count'>4</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App