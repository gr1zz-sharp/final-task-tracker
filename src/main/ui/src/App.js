import Header from './components/Layout/Header';
import { Fragment, useEffect, useState } from 'react';
import { getTasks, addTask, deleteTask, updateStatus} from './proxies/proxies';
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
      <AddTask 
        onAdd={addTask} 
        setTasks={setTaskList}
      />
        <TaskList 
          tasks={taskList} 
          setTasks={setTaskList} 
          onDelete={deleteTask}
          onUpdateStatus={updateStatus}
        />
      </main>
    </Fragment>
  );
}

export default App;
