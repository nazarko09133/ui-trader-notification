import { useState } from "react";
import TabsNotification from "./components/TabsNotification";
import "material-symbols";
import MyButton from "./components/MyButton";
import NotificationItemList, {
  type NotificationItemProps,
} from "./components/NotificationItemList";
import BottomButton from "./components/BottomButton";

export type NotificationTab = "inbox" | "read";

function App() {
  const [typeNotification, setTypeNotification] =
    useState<NotificationTab>("inbox");

  const [inbox, setInbox] = useState<NotificationItemProps[]>(
    Array.from({ length: 17 }, (_, i) => ({
      id: (i + 1).toString(),
      photo: (i + 1) % 3 === 0,
      price: (i + 1) % 5 === 0 ? "$123.000.000" : undefined,
    })),
  );

  const [read, setRead] = useState<NotificationItemProps[]>(
    Array.from({ length: 72 }, (_, i) => ({
      id: (i + 1).toString(),
      photo: (i + 1) % 2 === 0,
      price: (i + 1) % 10 === 0 ? "$123.000.000" : undefined,
    })),
  );

  const handleAction = () => {
    if (typeNotification === "inbox") {
      setRead((prev) => [...inbox, ...prev]);
      setInbox([]);
    } else {
      setRead([]);
    }
  };

  return (
    <div className="flex w-[400px] flex-col items-center gap-4 rounded-xl border bg-neutral-800 px-6 pt-6">
      <div className="flex w-full flex-col gap-4">
        <div className="flex flex-row justify-between">
          <h3 className="font-display text-neutral-white-100 text-lg font-medium">
            Notifications
          </h3>
          <span className="material-symbols-outlined text-neutral-grey-100 cursor-pointer">
            close
          </span>
        </div>
        <TabsNotification
          type={typeNotification}
          setType={setTypeNotification}
          inboxCount={inbox.length}
          readCount={read.length}
        />
        <div className="border-neutral-grey-500 h-[1px] w-full border" />
        <NotificationItemList
          notification={typeNotification === "inbox" ? inbox : read}
        />
      </div>
      <BottomButton type={typeNotification} onClick={handleAction} />
    </div>
  );
}

export default App;
