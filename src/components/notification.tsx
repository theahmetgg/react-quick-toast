import React from "react";
import PropTypes from "prop-types";
import {
  AiOutlineCheckCircle,
  AiOutlineClose,
  AiOutlineCloseCircle,
  AiOutlineInfoCircle,
  AiOutlineWarning,
} from "react-icons/ai";
import "./Notification.css";

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

const iconStyles: React.CSSProperties = { marginRight: "10px" };

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
  animation = "fadeIn",
}) => {
  return (
    <div className={`notification ${type} ${animation}`}>
      {icons[type]} {/* icon */}
      {message} {/* message */}
      <AiOutlineClose
        color="white"
        className="closeBtn"
        onClick={onClose}
      />{" "}
      {/* close button */}
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
