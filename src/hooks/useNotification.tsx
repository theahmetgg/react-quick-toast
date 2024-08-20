import React, { useState, useCallback } from "react";
import Notification from "../components/Notification";
import { v4 as uuidv4 } from "uuid";
import {
  NotificationProps,
  PositionType,
  UseNotificationReturn,
} from "../components/types";

const useNotification = (
  position: PositionType = "bottom-right"
): UseNotificationReturn => {
  const [notifications, setNotifications] = useState<NotificationProps[]>([]);

  const triggerNotification = useCallback(
    (notificationProps: Omit<NotificationProps, "id">) => {
      const toastId = uuidv4();
      const notificationWithId = { id: toastId, ...notificationProps };

      setNotifications((prevNotifications) => [
        ...prevNotifications,
        notificationWithId,
      ]);

      setTimeout(() => {
        setNotifications((prevNotifications) =>
          prevNotifications.filter((n) => n.id !== toastId)
        );
      }, notificationProps.duration);
    },
    []
  );

  const handleNotificationClose = (id: string) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((n) => n.id !== id)
    );
  };

  const NotificationComponent = (
    <div className={`notification-container ${position}`}>
      {notifications.map((notification) => (
        <Notification
          key={notification.id}
          {...notification}
          onClose={() => handleNotificationClose(notification.id)}
        />
      ))}
    </div>
  );

  return { NotificationComponent, triggerNotification };
};

export default useNotification;
