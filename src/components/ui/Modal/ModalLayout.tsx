import type { PropsWithChildren, FC } from "react";
import type { ModalProps } from "../../../hooks/useModal";
import { cn } from "../../../utils/cn";
import Portal from "../../Portal";

interface ModalLayoutProps extends PropsWithChildren<ModalProps> {}

const ModalLayout: FC<ModalLayoutProps> = ({
  onClose,
  open,
  animation,
  children,
}) => {
  if (!open) return null;

  const handleClose = () => {
    console.log("close");
    onClose();
  };

  return (
    <Portal target="modals-root">
      <div
        onClick={handleClose}
        className={cn(
          "fixed top-0 left-0 z-50 flex h-screen w-full items-center justify-center overscroll-none bg-black/30",
          animation === "out" ? `animate-fade-out` : "animate-fade-in",
        )}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="flex w-full max-w-fit"
        >
          {children}
        </div>
      </div>
    </Portal>
  );
};

export default ModalLayout;
