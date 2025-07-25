import React, { useEffect, useState } from "react";
import NotificationItem from "./NotificationItem";

export interface NotificationItemProps {
  id: string;
  photo: boolean;
  price: string | undefined;
}

interface NotificationListProps {
  notification: NotificationItemProps[];
  animateOut?: boolean;
  animationType?: "slideRight" | "fadeOut";
  animationPhase: "enter" | "exit";
}

function NotificationItemList({
  notification,
  animateOut,
  animationType,
  animationPhase,
}: NotificationListProps) {
  const containerClasses = `custom-scroll flex h-[458px] flex-col gap-2 overflow-x-hidden overflow-y-auto transition-all duration-300 ease-in-out
    ${
      animationPhase === "enter"
        ? "opacity-100 translate-y-0 pointer-events-auto"
        : "opacity-0 -translate-y-4 pointer-events-none"
    }`;

  const [showList, setShowList] = useState(true);

  useEffect(() => {
    setShowList(false);

    const timeout = setTimeout(() => {
      setShowList(true);
    }, 300);

    return () => clearTimeout(timeout);
  }, [notification]);

  return (
    <div className={containerClasses}>
      {showList &&
        notification.map((item) => (
          <React.Fragment key={item.id}>
            <NotificationItem
              {...item}
              animateOut={animateOut}
              animationType={animationType}
            />
            <div className="border-neutral-grey-500 h-[1px] w-full border" />
          </React.Fragment>
        ))}
    </div>
  );
}

export default NotificationItemList;
