import { useEffect, useState, type FC } from "react";
import type { ModalProps } from "../../../hooks/useModal";
import Modal from "../Modal/Modal";
import BottomButton from "../../BottomButton";
import NotificationItemList from "../../NotificationItemList";
import type { NotificationItemProps } from "../../NotificationItemList";
import TabsNotification from "../../TabsNotification";

interface NotificationModalProps extends ModalProps {}

export type NotificationTab = "inbox" | "read";

const NotificationModal: FC<NotificationModalProps> = (props) => {
  const [typeNotification, setTypeNotification] =
    useState<NotificationTab>("inbox");
  const [animateItems, setAnimateItems] = useState(false);

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

  const [animationPhase, setAnimationPhase] = useState<"enter" | "exit">(
    "enter",
  );

  // Локальний стан для списку, щоб уникнути мерехтіння при зміні вкладки
  const [currentList, setCurrentList] =
    useState<NotificationItemProps[]>(inbox);
  const [currentType, setCurrentType] = useState<NotificationTab>("inbox");

  // Масова анімація елементів (зсув/зникання)
  //   const [animateItems, setAnimateItems] = useState(false);

  // Перемикання вкладок з анімацією fade списку
  const handleTabChange = (newType: NotificationTab) => {
    if (newType === currentType) return;

    setAnimationPhase("exit"); // запускаємо анімацію зникання списку

    setTimeout(() => {
      setCurrentType(newType);
      setCurrentList(newType === "inbox" ? inbox : read);
      setAnimationPhase("enter"); // анімація появи списку
    }, 300);
  };

  const handleAction = () => {
    setAnimateItems(true);

    setTimeout(() => {
      if (currentType === "inbox") {
        setRead((prev) => [...inbox, ...prev]);
        setInbox([]);
        setCurrentList([]);
      } else {
        setRead([]);
        setCurrentList([]);
      }
      setAnimateItems(false);
    }, 300);
  };

  useEffect(() => {
    if (currentType === "inbox") {
      setCurrentList(inbox);
    } else {
      setCurrentList(read);
    }
  }, [inbox, read, currentType]);

  return (
    <Modal {...props}>
      <Modal.Body>
        <div className="flex w-[400px] flex-col items-center gap-4 rounded-xl border bg-neutral-800 px-6 pt-6">
          <div className="flex w-full flex-col gap-4">
            <div className="flex flex-row justify-between">
              <h3 className="font-display text-neutral-white-100 text-lg font-medium">
                Notifications
              </h3>
              <span
                onClick={props.onClose}
                className="material-symbols-outlined text-neutral-grey-100 cursor-pointer"
              >
                close
              </span>
            </div>

            <TabsNotification
              type={currentType}
              setType={handleTabChange}
              inboxCount={inbox.length}
              readCount={read.length}
            />

            <div className="border-neutral-grey-500 h-[1px] w-full border" />

            <NotificationItemList
              notification={currentList}
              animateOut={animateItems}
              animationType={currentType === "inbox" ? "slideRight" : "fadeOut"}
              animationPhase={animationPhase}
            />
          </div>

          <BottomButton type={currentType} onClick={handleAction} />
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default NotificationModal;
