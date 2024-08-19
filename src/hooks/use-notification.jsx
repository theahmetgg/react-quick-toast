import { useCallback, useState, useRef } from "react";
import Notification from "../components/notification";

const useNotification = (position = "top-right") => {
  const [notification, setNotification] = useState(null);
  const timerRef = useRef(null);

  const triggerNotification = useCallback((notificationProps) => {
    clearTimeout(timerRef.current);
    setNotification(notificationProps);

    timerRef.current = setTimeout(() => {
      setNotification(null);
    }, notificationProps.duration);
  }, []);

  const handleClose = () => {
    setNotification(null);
    clearTimeout(timerRef.current);
  };

  const NotificationComponent = notification ? (
    <div className={`${position}`}>
      <Notification {...notification} onClose={handleClose} />
    </div>
  ) : null;

  return { NotificationComponent, triggerNotification };
};

export default useNotification;
