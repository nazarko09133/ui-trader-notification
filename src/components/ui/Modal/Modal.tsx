import ModalLayout from "./ModalLayout";
import ModalBody from "./ModalBody";
import type { PropsWithChildren, FC } from "react";
import type { ModalProps } from "../../../hooks/useModal";

interface ModalComponentProps extends PropsWithChildren<ModalProps> {}

const ModalComponent: FC<ModalComponentProps> = ({
  children,
  ...layoutProps
}) => {
  return <ModalLayout {...layoutProps}>{children}</ModalLayout>;
};

const Modal = Object.assign(ModalComponent, {
  Body: ModalBody,
});

export default Modal;
