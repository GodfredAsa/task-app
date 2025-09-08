import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TaskList from '../components/TaskList';
import { useTasks } from '../hooks/useTask';
import { ITask } from '../types/ITask';


jest.mock('../hooks/useTask');

describe('TaskList Component', () => {
  const mockUseTasks = useTasks as jest.MockedFunction<typeof useTasks>;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render TaskList with no tasks initially', () => {
    mockUseTasks.mockReturnValue({
      tasks: [],
      addTask: jest.fn(),
      updateTask: jest.fn(),
      deleteTask: jest.fn(),
      completeTask: jest.fn(),
    });

    render(<TaskList filterPriority="ALL" />);

    expect(screen.getByText('Tasks (0)')).toBeInTheDocument();
    expect(screen.queryByRole('row', { name: /task/i })).not.toBeInTheDocument(); // No task rows
  });

  it('should display two tasks and update the task count', () => {
    const twoTasks: ITask[] = [
      {
        id: 1,
        title: 'First Task',
        description: 'Description for first task',
        dueDate: '2024-01-01',
        createdAt: '2024-01-01',
        priority: 'LOW',
        completed: false,
      },
      {
        id: 2,
        title: 'Second Task',
        description: 'Description for second task',
        dueDate: '2024-01-02',
        createdAt: '2024-01-01',
        priority: 'MEDIUM',
        completed: true,
      },
    ];

    mockUseTasks.mockReturnValue({
      tasks: twoTasks,
      addTask: jest.fn(),
      updateTask: jest.fn(),
      deleteTask: jest.fn(),
      completeTask: jest.fn(),
    });

    render(<TaskList filterPriority="ALL" />);

    expect(screen.getByText('Tasks (2)')).toBeInTheDocument();
    expect(screen.getByText('First Task')).toBeInTheDocument();
    expect(screen.getByText('Second Task')).toBeInTheDocument();
  });

  it('should filter tasks by priority', () => {
    const allTasks: ITask[] = [
      {
        id: 1,
        title: 'Low Priority Task',
        description: 'Low',
        dueDate: '2024-01-01',
        createdAt: '2024-01-01',
        priority: 'LOW',
        completed: false,
      },
      {
        id: 2,
        title: 'Medium Priority Task',
        description: 'Medium',
        dueDate: '2024-01-02',
        createdAt: '2024-01-01',
        priority: 'MEDIUM',
        completed: false,
      },
      {
        id: 3,
        title: 'High Priority Task',
        description: 'High',
        dueDate: '2024-01-03',
        createdAt: '2024-01-01',
        priority: 'HIGH',
        completed: false,
      },
    ];

    mockUseTasks.mockReturnValue({
      tasks: allTasks,
      addTask: jest.fn(),
      updateTask: jest.fn(),
      deleteTask: jest.fn(),
      completeTask: jest.fn(),
    });

    // Test filtering by LOW priority
    render(<TaskList filterPriority="LOW" />);
    expect(screen.getByText('Low Priority Task')).toBeInTheDocument();
    expect(screen.queryByText('Medium Priority Task')).not.toBeInTheDocument();
    expect(screen.queryByText('High Priority Task')).not.toBeInTheDocument();
    expect(screen.getByText('Tasks (3)')).toBeInTheDocument(); // Count should still be total tasks
  });
});
