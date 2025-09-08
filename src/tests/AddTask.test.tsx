

import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import AddTask from "../components/AddTask";
import { TasksProvider } from "../context/TasksContext";
import TaskList from "../components/TaskList";

test("renders AddTask inside provider", () => {
  render(
    <TasksProvider>
      <AddTask />
      <TaskList filterPriority={"ALL"}/>
    </TasksProvider>
  );

  fireEvent.click(screen.getByText("+ Add Task"));
  expect(screen.getByText("+ Add Task")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Task Title")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Task Description")).toBeInTheDocument();
  expect(screen.getByText("Due Date")).toBeInTheDocument();
  expect(screen.getByText("Create")).toBeInTheDocument();
  expect(screen.getByText("Cancel")).toBeInTheDocument();

  fireEvent.change(screen.getByPlaceholderText("Task Title"), {
          target: { value: "My First Task" },
        });

        fireEvent.click(screen.getByText("Create"));
  expect(screen.getByText("My First Task")).toBeInTheDocument();
  expect(screen.getByText("Tasks (1)")).toBeInTheDocument();

});
