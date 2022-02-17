import React, { useState } from 'react';
import TaskForm from './TaskForm';
import Task from './Task';
import TaskSummary from './TaskSummary'

const TaskList = ({ tasks }) => {
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

  return (
    <>
      <TaskSummary/>
      <table className='wrapper'>
        <tbody >
          {tasks.map((task) => {
            return(
              <ul key={task.id} className="todoList" >
                <li>{task.task}</li>
              </ul>
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