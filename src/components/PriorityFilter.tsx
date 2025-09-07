import React from 'react';
import { ITask } from '../types/ITask';

interface PriorityFilterProps {
  onFilterChange: (priority: ITask["priority"] | "ALL") => void;
  currentFilter: ITask["priority"] | "ALL";
}

const filterItems = [
    {index:1, key: "ALL", value: "ALL"},
    {index:2, key: "LOW", value: "LOW"},
    {index:3, key: "MEDIUM", value: "MEDIUM"},
    {index:4, key: "HIGH", value: "HIGH"}
]

const PriorityFilter: React.FC<PriorityFilterProps> = ({ onFilterChange, currentFilter }) => {
  return (
    <div className="mb-4 flex justify-end mt-4">
      <select
            id="priorityFilter"
            className="shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={currentFilter}
            onChange={(e) => onFilterChange(e.target.value as ITask["priority"] | "ALL")}> {filterItems.map((item) => (
         <option key={item.index} value={item.value}> {item.key.charAt(0) + item.key.slice(1).toLowerCase()}</option>))}
     </select>
    </div>
  );
};

export default PriorityFilter;
