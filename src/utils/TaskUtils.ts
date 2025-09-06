import { ITask } from "../types/ITask";

export const GenerateTaskId = (): number => {
  const stored = localStorage.getItem("tasks");
  const tasks: ITask[] = stored ? JSON.parse(stored) : [];
  return tasks.length === 0 ? 1 : Math.max(...tasks.map((task) => task.id)) + 1;
};

