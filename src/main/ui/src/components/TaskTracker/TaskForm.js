import React, { useState, useEffect, useRef } from 'react';
import './TaskForm.css'

function TaskForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return (
    <div className='wrapper'>
    <form onSubmit={handleSubmit} className="inputField" >
      {props.edit ? (
        <>
          <input
            value={input}
            onChange={handleChange}
            name='text'
<<<<<<< Updated upstream
            ref={inputRef}/>
=======
            ref={inputRef}
            className='inputField'/>
>>>>>>> Stashed changes
          <button onClick={handleSubmit}>
            Update
          </button>
          </>
      ) : (
        <>
          <input
            placeholder='Add a todo'
            value={input}
            onChange={handleChange}
            name='text'
            className="todoList"
            ref={inputRef}/>
          <button onClick={handleSubmit}>
            Add todo
          </button>
        </>
      )}
    </form>
    </div>
  );
}

export default TaskForm;