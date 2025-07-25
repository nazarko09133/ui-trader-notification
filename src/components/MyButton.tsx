import React from "react";
import { cn } from "../utils/cn";

interface MyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "secondary";
  text?: string;
  children?: React.ReactNode;
}

function MyButton({
  variant = "secondary",
  text,
  children,
  className,
  ...rest
}: MyButtonProps) {
  return (
    <button
      className={cn(
        "w-full gap-2 rounded-md px-6 py-1.5",
        variant === "secondary" &&
          "bg-neutral-grey-500 text-neutral-white-100 items-center text-sm font-semibold",
        className,
      )}
      {...rest}
    >
      {text || children}
    </button>
  );
}

export default MyButton;
