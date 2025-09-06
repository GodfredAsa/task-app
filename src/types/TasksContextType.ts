import { ITask } from "./ITask";

export interface TasksContextType {
    tasks: ITask[];
    addTask: (task: ITask) => void;
    updateTask: (id: number, task: ITask) => void;
    completeTask: (id: number) => void;
    deleteTask: (id: number) => void;
  }
  