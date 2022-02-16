import Header from './components/Layout/Header';
import { Fragment } from 'react';
import TaskContainer from './components/TaskTracker/TaskContainer';

function App() {
  return (
    <Fragment>
      <Header/>
      <main>
        <TaskContainer/>
      </main>
    </Fragment>
  );
}

export default App;
