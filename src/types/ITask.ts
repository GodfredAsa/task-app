
export interface ITask {
  id: number;
  title: string;
  description: string;
  priority: "LOW" | "MEDIUM" | "HIGH";
  createdAt: string;
  dueDate: string;
  completed: boolean
}