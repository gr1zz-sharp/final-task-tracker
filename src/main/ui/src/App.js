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
        <TaskList/>
      </main>
    </Fragment>
  );
}

export default App;
