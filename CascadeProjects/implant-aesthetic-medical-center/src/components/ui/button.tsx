import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: string;
  size?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, className = "", ...props }) => (
  <button className={`px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition ${className}`} {...props}>
    {children}
  </button>
);

export default Button;
