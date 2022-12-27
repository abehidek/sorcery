import React from "react";
import "./tailwind.css";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";

const buttonStyles = cva("bg-blue-500 text-white", {
  variants: {
    size: {
      xs: "px-4 py-2 text-2xl",
      md: "px-6 py-4 text-2xl",
      lg: "px-8 py-6 text-2xl",
    },
    fullWidth: {
      true: "w-full",
    },
  },
  defaultVariants: {
    size: "xs",
  },
});

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonStyles> & {
    children: React.ReactNode;
    onClickFn: () => void;
  };
export const Button = ({
  children,
  onClickFn,
  size,
  className,
  fullWidth,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={buttonStyles({ fullWidth, size, className })}
      {...props}
      onClick={onClickFn}
    >
      {children}
    </button>
  );
};
