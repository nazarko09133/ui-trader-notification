import React from "react";
import { cn } from "../utils/cn";
import MyButton from "./MyButton";
import type { NotificationTab } from "./ui/Modals/NotificationModal";

interface BottomButtonProps {
  type: NotificationTab;
  onClick: () => void;
}

function BottomButton({ type, onClick }: BottomButtonProps) {
  const isInbox = type === "inbox";

  return (
    <MyButton
      onClick={onClick}
      variant="secondary"
      className={cn(
        "flex w-full items-center justify-center gap-1 bg-neutral-800 px-6 py-4 text-base font-medium transition-colors duration-200 active:scale-95 active:opacity-80",
        isInbox ? "text-accent-green-500" : "text-neutral-grey-50",
      )}
    >
      <span
        className={cn(
          "material-symbols-outlined h-6 w-6 transition-colors duration-200",
          isInbox ? "text-accent-green-500" : "text-neutral-grey-50",
        )}
      >
        {isInbox ? "mark_chat_read" : "clear_all"}
      </span>
      {isInbox ? "Mark all as read" : "Clear all"}
    </MyButton>
  );
}

export default BottomButton;
