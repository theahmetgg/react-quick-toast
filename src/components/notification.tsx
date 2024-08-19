import React from "react";
import PropTypes from "prop-types";
import {
  AiOutlineCheckCircle,
  AiOutlineClose,
  AiOutlineCloseCircle,
  AiOutlineInfoCircle,
  AiOutlineWarning,
} from "react-icons/ai";
import "./notification.css";

// Define types for props
type NotificationType = "success" | "info" | "warning" | "error";
type AnimationType =
  | "fadeIn"
  | "popup"
  | "slideIn"
  | "shake"
  | "bounce"
  | "pulse"
  | "rotate"
  | "flip"
  | "zoom";

interface NotificationProps {
  type?: NotificationType;
  message: string;
  onClose?: () => void;
  animation?: AnimationType;
}

const iconStyles = { marginRight: "10px" };

const icons: Record<NotificationType, JSX.Element> = {
  success: <AiOutlineCheckCircle style={iconStyles} />,
  info: <AiOutlineInfoCircle style={iconStyles} />,
  warning: <AiOutlineWarning style={iconStyles} />,
  error: <AiOutlineCloseCircle style={iconStyles} />,
};

const Notification: React.FC<NotificationProps> = ({
  type = "info",
  message,
  onClose = () => {},
  animation,
}) => {
  return (
    <div className={`notification ${type} ${animation}`}>
      {/* icon */}
      {icons[type]}
      {/* message */}
      {message}
      {/* close button */}
      <AiOutlineClose color="white" className="closeBtn" onClick={onClose} />
    </div>
  );
};

// PropTypes for type checking
Notification.propTypes = {
  type: PropTypes.oneOf(["success", "info", "warning", "error"]),
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func,
  animation: PropTypes.oneOf([
    "fadeIn",
    "popup",
    "slideIn",
    "shake",
    "bounce",
    "pulse",
    "rotate",
    "flip",
    "zoom",
  ]),
};

export default Notification;
