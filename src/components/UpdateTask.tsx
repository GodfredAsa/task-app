import React, { useState, useEffect } from 'react';
import { ITask } from '../types/ITask';
import { useTasks } from '../hooks/useTask';
import Button from './Button';

interface UpdateTaskProps {
  task: ITask;
  onClose: () => void;
}

const UpdateTask: React.FC<UpdateTaskProps> = ({ task, onClose }) => {
  const { updateTask } = useTasks();
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [priority, setPriority] = useState(task.priority);
  const [dueDate, setDueDate] = useState(task.dueDate);

  useEffect(() => {
    setTitle(task.title);
    setDescription(task.description);
    setPriority(task.priority);
    setDueDate(task.dueDate);
  }, [task]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateTask(task.id, { ...task, title, description, priority, dueDate });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <h3 className="text-lg font-bold mb-4">Update Task</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">Description</label>
            <textarea
              id="description"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="priority">Priority</label>
            <select
              id="priority"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={priority}
              onChange={(e) => setPriority(e.target.value as "LOW" | "MEDIUM" | "HIGH")}
            >
              <option value="LOW">Low</option>
              <option value="MEDIUM">Medium</option>
              <option value="HIGH">High</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dueDate">Due Date</label>
            <input
              type="date"
              id="dueDate"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-end gap-2">

          <Button 
            label="Cancel"
            className="px-4 py-2 rounded border"
            bgColor="white"
            textColor="black"
            type="button"
            onClick={onClose}
            />
            <Button 
              label="Update"
              className="px-4 py-2 rounded border"
              bgColor="#000000"
              textColor="white"
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateTask;