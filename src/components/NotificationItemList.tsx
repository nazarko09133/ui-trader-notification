import React from "react";
import NotificationItem from "./NotificationItem";

export interface NotificationItemProps {
  id: string;
  photo: boolean;
  price: string | undefined;
}

interface NotificationListProps {
  notification: NotificationItemProps[];
}

function NotificationItemList({ notification }: NotificationListProps) {
  return (
    <div className="custom-scroll flex h-[458px] flex-col gap-2 overflow-auto">
      {notification.map((item) => (
        <React.Fragment key={item.id}>
          <NotificationItem {...item} />
          <div className="border-neutral-grey-500 h-[1px] w-full border" />
        </React.Fragment>
      ))}
    </div>
  );
}

export default NotificationItemList;
