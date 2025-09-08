import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { TasksProvider } from './context/TasksContext';

test('Render Dashboard Cards', () => {
  render(
    <TasksProvider>
      <App />
    </TasksProvider>
  );
  expect(screen.getByText(/High Priority/i)).toBeInTheDocument();
  expect(screen.getByText(/Completed Tasks/i)).toBeInTheDocument();
  expect(screen.getByText(/Pending Tasks/i)).toBeInTheDocument();
});
