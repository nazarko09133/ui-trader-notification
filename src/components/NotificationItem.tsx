import React from "react";
import MyButton from "./MyButton";
import bitcoinSrc from "../assets/Bitcoin.svg";
import type { NotificationItemProps } from "./NotificationItemList";

function NotificationItem({ id, photo, price }: NotificationItemProps) {
  return (
    <div className="flex flex-col pb-2">
      {photo && <div className="bg-neutral-grey-100 h-24 w-full rounded-lg" />}
      <div className="flex flex-row gap-2 py-3">
        <span className="material-symbols-outlined text-neutral-grey-50 h-5 w-5">
          notifications
        </span>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <p className="text-neutral-white-100 text-sm font-medium">
              Trial: Trader Plan #{id}
            </p>
            <p className="text-neutral-grey-100 text-sm">
              Notification description Notification dtion
            </p>
            <p className="text-neutral-grey-100 text-sm">
              Notification description Notification
            </p>
          </div>
          {price && (
            <div className="flex items-center gap-2">
              <img src={bitcoinSrc} alt="Bitcoin" width={18} height={18} />
              <p className="text-sm">
                <span className="text-neutral-grey-50 font-display text-base">
                  Bitcoin{" "}
                </span>
                <span className="text-neutral-white-100 font-display text-base">
                  reached price{" "}
                </span>
                <span className="text-accent-green-500 font-display text-base font-medium">
                  {price}
                </span>
              </p>
            </div>
          )}
          <p className="text-neutral-grey-50 text-sm opacity-30">6 hours ago</p>
        </div>
      </div>
      <MyButton variant="secondary" text="Upgrade" />
    </div>
  );
}

export default NotificationItem;
