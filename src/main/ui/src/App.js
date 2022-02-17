import Header from './components/Layout/Header';
import { Fragment, useEffect, useState } from 'react';
import { getTasks } from './proxies/proxies';
import TaskList from './components/TaskTracker/TaskList';

function App() {

  const [taskList, setTaskList] = useState([])

  useEffect(() => {
    getTasks(setTaskList)
  }, [])

  console.log(taskList)

  return (
    <Fragment>
      <Header/>
      <main>
        <TaskList tasks={taskList}/>
      </main>
    </Fragment>
  );
}

export default App;
