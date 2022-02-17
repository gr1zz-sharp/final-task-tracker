import Header from './components/Layout/Header';
import { Fragment, useEffect, useState } from 'react';
import { getTasks, addTask } from './proxies/proxies';
import TaskList from './components/TaskTracker/TaskList';
import AddTask from './components/TaskTracker/AddTask';

function App() {

  const [taskList, setTaskList] = useState([])

  useEffect(() => {
    getTasks(setTaskList)
  }, [])

  console.log(taskList)

  return (
    <Fragment>
      <Header tasks={taskList}/>
      <main>
      <AddTask onAdd={addTask} setTasks={setTaskList}/>
        <TaskList tasks={taskList}/>
        
      </main>
    </Fragment>
  );
}

export default App;
