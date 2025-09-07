import React, { useState } from "react";
import { GenerateTaskId } from "../utils/TaskUtils";
import { ITask } from "../types/ITask";
import { formatDate } from "../utils/GeneralUtils";
import { useTasks } from "../hooks/useTask";
import Button from "./Button";

const AddTask: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { addTask } = useTasks();

  const [task, setTask] = useState<Omit<ITask, "id" | "completed">>({
    title: "",
    description: "",
    dueDate: "",
    createdAt: formatDate(new Date()),
    priority: "LOW",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTask((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTask: ITask = {
      id: GenerateTaskId(),
      ...task,
      createdAt: formatDate(new Date()),
      completed: false,
    };

    addTask(newTask);
    console.log("New Task Added:", newTask);

    setIsOpen(false);
    setTask({
      title: "",
      description: "",
      dueDate: "",
      createdAt: formatDate(new Date()),
      priority: "LOW",
    });
  };

  return (
    <div className="p-4 w-[63%] m-auto mt-16">
          <Button 
            label="+ Add Task"
            className="px-4 py-2 rounded border float-right "
            bgColor="#000000"
            textColor="white"
            type="button"
            onClick={() => setIsOpen(true)}
            />

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Add Task</h2>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                name="title"
                placeholder="Task Title"
                value={task.title}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
              />
              <textarea
                name="description"
                placeholder="Task Description"
                value={task.description}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
              <label htmlFor="dueDate">Due Date</label>
              <input
                type="date"
                name="dueDate"
                value={task.dueDate}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
              />
              <select
                name="priority"
                value={task.priority}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              >
                <option value="LOW">Low</option>
                <option value="MEDIUM">Medium</option>
                <option value="HIGH">High</option>
              </select>
              <div className="flex justify-end space-x-2">
              <Button 
                  label="Cancel"
                  className="px-4 py-2 rounded border"
                  bgColor="white"
                  textColor="black"
                  type="button"
                  onClick={() => setIsOpen(false)}
              />
              <Button 
                  label="Create"
                  className="px-4 py-2 bg-black text-white rounded"
                  bgColor="#000000"
                  type="submit"
              />
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddTask;
