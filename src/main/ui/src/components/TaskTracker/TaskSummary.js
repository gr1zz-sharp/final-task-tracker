import React from 'react';
import './TaskSummary.css';

const TaskSummary = () => {
  return (
    <section className='summary'>
        <h2>Your personal Task Tracker..</h2>
        <p>
        Task Tracker helps you organise your tasks for the day and helps you keep track of them.
        </p>
        <p>
         All your tasks can be checked off your list once done and can be deleted at the end of the day.
         You can also add new tasks to you list.
        </p>
    </section>
  )
}

export default TaskSummary