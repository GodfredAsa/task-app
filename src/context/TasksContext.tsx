import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { TasksContextType } from "../types/TasksContextType";
import { GenerateTaskId } from "../utils/TaskUtils";
import { ITask } from "../types/ITask";


export const TasksContext = createContext<TasksContextType | undefined>(undefined);

// Provider component
export const TasksProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<ITask[]>(() => {
    const stored = localStorage.getItem("tasks");
    return stored ? JSON.parse(stored) : [];
  });

  // SYNC LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // ADDING TASK
  const addTask = (task: ITask) => {
    const newTask: ITask = { 
      id: GenerateTaskId(),
      title: task.title,
      description: task.description,
      priority: task.priority,
      createdAt: Date.now().toString(),
      dueDate: task.dueDate,
      completed: false
    };
    setTasks((prev) => [...prev, newTask]);
  };

  // UPDATE
  const updateTask = (id: number, updatedTask: ITask) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, ...updatedTask } : task))
    );
  };

//   MARK TASK AS COMPLETED
  const completeTask = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: true } : task
      )
    );
  };

  // DELETE A TASK 
  const deleteTask = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <TasksContext.Provider value={{ tasks, addTask, updateTask, completeTask, deleteTask }}>
      {children}
    </TasksContext.Provider>
  );
};
