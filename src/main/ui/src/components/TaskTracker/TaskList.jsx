import React, { useState } from 'react';
import TaskForm from './TaskForm';
import Task from './Task';
import TaskSummary from './TaskSummary';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const TaskList = ({ tasks, setTasks, onDelete, onUpdateStatus }) => {
  // const [todos, setTodos] = useState([]);

  // const addTodo = todo => {
  //   if (!todo.text || /^\s*$/.test(todo.text)) {
  //     return;
  //   }

  //   const newTodos = [todo, ...todos];

  //   setTodos(newTodos);
  //   console.log(...todos);
  // };

  // const updateTodo = (todoId, newValue) => {
  //   if (!newValue.text || /^\s*$/.test(newValue.text)) {
  //     return;
  //   }

  //   setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  // };

  // const removeTodo = id => {
  //   const removedArr = [...todos].filter(todo => todo.id !== id);

  //   setTodos(removedArr);
  // };

  // const completeTodo = id => {
  //   let updatedTodos = todos.map(todo => {
  //     if (todo.id === id) {
  //       todo.isComplete = !todo.isComplete;
  //     }
  //     return todo;
  //   });
  //   setTodos(updatedTodos);
  // };

  const clickHandler = (e, task) => {
    e.preventDefault()
    if(!task){
      alert('how did you do that?')
    }
    console.log(task)
    onDelete(task, setTasks)
  }

  const changeStatus = (e, task) => {
    e.preventDefault()
    if(!task){
      alert('oh, its you agiain')
    }
    console.log(task)
    if(task.status === true ){
      task.status = false
    } else {
      task.status = true
    }
    console.log(task.status)
    onUpdateStatus(task, setTasks)
  }

  return (
    <>
      <table className='wrapper'>
        <tbody >
          {tasks.map((task) => {
            return(
              <tr  key={task.id}  >
                <td 
                  className={task.status ? 'todoList' : 'complete'}
                  onClick={e => changeStatus(e, task)} 
                  >
                    {task.task}
                  </td>
                <td className='icons'>
                <RiCloseCircleLine className='delete-icon' type='button' onClick={ e => clickHandler(e, task)}>Delete</RiCloseCircleLine> <TiEdit/>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      {/* <TaskForm onSubmit={addTodo} />
      <Task
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      /> */}
    </>
  );
}

export default TaskList;