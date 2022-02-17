import Header from './components/Layout/Header';
import { Fragment } from 'react';
import TaskList from './components/TaskTracker/TaskList';
import TaskSummary from './components/Layout/TaskSummary';

function App() {
  return (
    <Fragment>
      <Header/>
      <TaskSummary/>
      <main>
<<<<<<< Updated upstream
        <TaskList/>
=======
        <AddTask onAdd={addTask} setTasks={setTaskList}/>
>>>>>>> Stashed changes
      </main>
      <TaskList tasks={taskList}/>
    </Fragment>
  );
}

export default App;
