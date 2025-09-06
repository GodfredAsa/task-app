import React, { Fragment } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import { TasksProvider } from './context/TasksContext';

function App() {
  return (
    <TasksProvider>
      <Fragment>
        <AddTask />
        <TaskList />
      </Fragment>
    </TasksProvider>
  );
}

export default App;
