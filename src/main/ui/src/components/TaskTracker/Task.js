import React, { useState } from 'react';
import TaskForm from './TaskForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import './TaskForm.css'

const Task = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TaskForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (

    <div className='task-wrapper' key={index}>
        <ul className="todoList">
            <>
      <li key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </li>
      </>
      <div className='icons'>
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className='delete-icon'
        />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className='edit-icon'
        />
      </div>
      </ul>
    </div>
  ));
};

export default Task;