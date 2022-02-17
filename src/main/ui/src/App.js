import Header from './components/Layout/Header';
import { Fragment } from 'react';
import TaskList from './components/TaskTracker/TaskList';


function App() {
  return (
    <Fragment>
      <Header/>
      <main>
        <TaskList/>
      </main>
    </Fragment>
  );
}

export default App;
