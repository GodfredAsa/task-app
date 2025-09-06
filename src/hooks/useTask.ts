import { useContext } from "react";
import { TasksContext } from "../context/TasksContext";

// Custom hook to use the context
export const useTasks = () => {
    const context = useContext(TasksContext);
    if (!context) {
      throw new Error("useTasks must be used within a TasksProvider");
    }
    return context;
  };
  