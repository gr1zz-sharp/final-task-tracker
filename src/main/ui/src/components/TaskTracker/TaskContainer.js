import React from 'react';
import TaskSummary from './TaskSummary';
import TaskList from './TaskList';

const TaskContainer = () => {
  return (
    <div>
        <TaskSummary/>
        <TaskList/>
    </div>
  )
}

export default TaskContainer