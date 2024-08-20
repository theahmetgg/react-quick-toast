// types.ts
export type NotificationType = "success" | "info" | "warning" | "error";

export type AnimationType =
  | "fadeIn"
  | "popup"
  | "slideIn"
  | "shake"
  | "bounce"
  | "pulse"
  | "rotate"
  | "flip"
  | "zoom";

export interface NotificationProps {
  type: NotificationType;
  message: string;
  onClose: () => void;
  animation?: AnimationType;
  duration: number;
  id: string;
}

export type PositionType =
  | "bottom-left"
  | "bottom-right"
  | "top-left"
  | "top-right";

export interface UseNotificationReturn {
  NotificationComponent: JSX.Element;
  triggerNotification: (
    notificationProps: Omit<NotificationProps, "id">
  ) => void;
}
