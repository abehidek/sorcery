import React from "react";

export interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}
export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button className="bg-blue-500 px-4 py-2 text-white" onClick={onClick}>
      {children}
    </button>
  );
};
