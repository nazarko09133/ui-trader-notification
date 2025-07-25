import NotificationModal from "./components/ui/Modals/NotificationModal";
import useModal from "./hooks/useModal";
import "material-symbols";

function App() {
  const notificationModal = useModal();

  const handleOpenNotificationModal = () => {
    notificationModal.onOpen();
  };

  return (
    <div>
      <button onClick={handleOpenNotificationModal}>
        Open notification Modal
      </button>
      <NotificationModal {...notificationModal} />
    </div>
  );
}

export default App;
