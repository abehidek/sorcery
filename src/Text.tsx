import React from "react";
import "./tailwind.css";

export interface TextProps {
  children: React.ReactNode;
}
export const Text = ({ children }: TextProps) => {
  return <h1>{children}</h1>;
};
