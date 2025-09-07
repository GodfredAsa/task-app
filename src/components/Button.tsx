import React from "react";

interface ButtonProps {
    label: string;
    onClick?: () => void;
    textColor?: string;
    bgColor?: string; 
    className?: string;
    type?: "button" | "submit" | "reset";
  }

  const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    textColor = "#ffffff",
    bgColor = "#2563eb", 
    className = "",
    type = "button",
  }) => {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`px-4 py-2 rounded-lg ${className}`}
        style={{ color: textColor, backgroundColor: bgColor }}
      >
        {label}
      </button>
    );
  };
  
  export default Button;