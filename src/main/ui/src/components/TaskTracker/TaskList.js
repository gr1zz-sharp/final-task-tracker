import React from 'react';
import './TaskList.css';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const TaskList = () => {
  return (
    <div>
        <div class="wrapper">
            <header>Track your Tasks:</header>
                <div className="inputField">
                <input type="text" placeholder="Add your new todo"/>
                <button className='button'>Submit</button>
                </div>
        <ul className="todoList">
            <li className='icons'>
            <input type='checkbox'/>&nbsp;Code<TiEdit className='edit-icon'/><RiCloseCircleLine className='delete-icon'/>
            </li>
        </ul>
        </div>
    </div>
  )
}

export default TaskList