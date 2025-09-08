import React, { Fragment, useState } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import { TasksProvider } from './context/TasksContext';
import Card from './components/Card';
import TaskIcon from './components/TaskIcon';
import PriorityFilter from './components/PriorityFilter';
import { ITask } from './types/ITask';
import { useTasks } from './hooks/useTask';

function App() {
  const [filterPriority, setFilterPriority] = useState<ITask["priority"] | "ALL">("ALL");

  const handleFilterChange = (priority: ITask["priority"] | "ALL") => {
    setFilterPriority(priority);
  };

  const { tasks } = useTasks();

  const highPriorityTasks = tasks.filter(task => task.priority === "HIGH").length;
  const completedTasks = tasks.filter(task => task.completed).length;
  const pendingTasks = tasks.filter(task => !task.completed).length;

  return (
    <TasksProvider>
      <Fragment>
        <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-4 w-[80%] m-auto bg-[#F4F4F4] mt-8">
          <Card
            title="High Priority"
            value={highPriorityTasks}
            icon={<TaskIcon />}
          />
          <Card
            title="Completed Tasks"
            value={completedTasks}
            icon={<TaskIcon />}
          />
          <Card
            title="Pending Tasks"
            value={pendingTasks}
            icon={<TaskIcon />}
          />
        </div>
        <div className="w-[80%] m-auto flex justify-end items-center my-4 gap-2">
          <AddTask />
          <PriorityFilter onFilterChange={handleFilterChange} currentFilter={filterPriority} />
        </div>
        <TaskList filterPriority={filterPriority} />
      </Fragment>
    </TasksProvider>
  );
}

export default App;
