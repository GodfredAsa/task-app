import React, { Fragment } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import { TasksProvider } from './context/TasksContext';
import Card from './components/Card';
import FolderIcon from './components/FolderIcon';

function App() {
  return (
    <TasksProvider>
      <Fragment>
        <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-4 w-[80%] m-auto bg-[#F4F4F4] mt-8">
          <Card
            title="High Priority"
            value={12}
            icon={<FolderIcon />}
          />
          <Card
            title="Completed Tasks"
            value={8}
            icon={<FolderIcon />}
          />
          <Card
            title="Pending Tasks"
            value={4}
            icon={<FolderIcon />}
          />
        </div>
        <AddTask />
        <TaskList />
      </Fragment>
    </TasksProvider>
  );
}

export default App;
