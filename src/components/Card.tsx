import React, { ReactNode } from 'react';

interface CardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
}

const Card: React.FC<CardProps> = ({ title, value, icon }) => {
  return (
    <div className="bg-white shadow rounded-lg p-6 flex items-center justify-between">
      <div className="flex items-center">
        <div className="mr-4">
          {icon}
        </div>
        <div>
          <div className="text-sm text-gray-500">{title}</div>
          <div className="text-2xl font-bold text-gray-900 float-right">{value}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
