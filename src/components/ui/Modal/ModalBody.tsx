import type { ComponentProps, FC } from "react";
import { cn } from "../../../utils/cn";

interface ModalBodyProps extends ComponentProps<"div"> {}

const ModalBody: FC<ModalBodyProps> = ({ children, className, ...props }) => {
  return (
    <div
      {...props}
      className={cn("flex flex-col items-center justify-center", className)}
    >
      {children}
    </div>
  );
};

export default ModalBody;
