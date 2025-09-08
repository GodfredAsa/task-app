import { render } from "@testing-library/react";
import { ReactNode } from "react";
import { TasksProvider } from "../context/TasksContext";


const customRender = (ui: ReactNode, options = {}) =>
  render(<TasksProvider>{ui}</TasksProvider>, options);
export * from "@testing-library/react";
export { customRender as render };