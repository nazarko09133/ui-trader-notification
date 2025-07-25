import React from "react";
import type { NotificationTab } from "../App";
import MyButton from "./MyButton";
import { cn } from "../utils/cn";

interface TabsNotificationProps {
  type: NotificationTab;
  setType: (value: NotificationTab) => void;
  inboxCount: number;
  readCount: number;
}

function TabsNotification({
  type,
  setType,
  inboxCount,
  readCount,
}: TabsNotificationProps) {
  const switchToInbox = () => {
    setType("inbox");
  };

  const switchToRead = () => {
    setType("read");
  };

  return (
    <div className="border-neutral-grey-500 flex h-10 w-full flex-row gap-1 rounded-lg border p-1">
      <MyButton
        onClick={switchToInbox}
        variant="secondary"
        className={cn(
          "font-display text-neutral-grey-100 flex flex-1 items-center justify-center rounded-md bg-neutral-800 px-1 py-2 text-xs transition-colors duration-300 ease-in-out",
          type === "inbox" &&
            "bg-accent-green-500 text-neutral-grey-700 shadow-md",
        )}
      >
        Inbox {inboxCount > 0 && `[${inboxCount}]`}
      </MyButton>

      <MyButton
        onClick={switchToRead}
        variant="secondary"
        className={cn(
          "font-display text-neutral-grey-100 flex flex-1 items-center justify-center rounded-md bg-neutral-800 px-1 py-2 text-xs transition-colors duration-300 ease-in-out",
          type === "read" &&
            "bg-accent-green-500 text-neutral-grey-700 shadow-md",
        )}
      >
        Read {readCount > 0 && `[${readCount}]`}
      </MyButton>
    </div>
  );
}

export default TabsNotification;
