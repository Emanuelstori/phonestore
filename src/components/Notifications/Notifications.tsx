import { useState, ReactNode } from "react";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import { IoIosInformationCircle, IoMdClose } from "react-icons/io";

type Animation = 'fade' | 'slide' | 'bounce' | 'ping' | 'pulse' | 'none';

type NotificationProps = {
  message: string;
  type: "success" | "error" | "info";
  animation?: Animation;
  showIcon?: boolean;
  showCloseButton?: boolean;
  onClose?: () => void;
  action?: {
    text: string;
    onClick: () => void;
  };
  className?: string;
  title?: string;
  description?: string;
  customContent?: ReactNode;
};

export default function Notifications({
  message,
  type,
  animation = 'fade',
  showIcon = true,
  showCloseButton = true,
  onClose,
  action,
  className = '',
  title,
  description,
  customContent,
}: NotificationProps) {
  const [visible, setVisible] = useState(true);

  // Não gerencia mais o tempo da notificação aqui - isso é feito no provider

  if (!visible) return null;

  const handleClose = () => {
    setVisible(false);
    if (onClose) onClose();
  };

  const animationStyles = getAnimationStyles(animation);
  const typeStyles = getTypeStyles(type);
  const icon = showIcon ? getIcon(type) : null;

  return (
    <div
      className={`pointer-events-auto mb-4 w-full max-w-sm ${animationStyles} ${className} ease-in-out`}
      role="alert"
    >
      <div className={`p-4 rounded-lg shadow-lg flex items-start ${typeStyles.bg}`}>
        {showIcon && icon && (
          <div className="flex-shrink-0 mr-3">
            {icon}
          </div>
        )}

        <div className="flex-grow">
          {title && <h3 className="font-medium text-white mb-1">{title}</h3>}

          {customContent || (
            <div>
              <p className="text-white">{message}</p>
              {description && <p className="text-white opacity-80 text-sm mt-1">{description}</p>}
            </div>
          )}

          {action && (
            <button
              onClick={action.onClick}
              className="mt-2 px-3 py-1 bg-white bg-opacity-20 rounded text-sm font-medium text-white hover:bg-opacity-30 transition-colors"
            >
              {action.text}
            </button>
          )}
        </div>

        {showCloseButton && (
          <button
            onClick={handleClose}
            className="flex-shrink-0 ml-3 text-white hover:text-gray-200"
            aria-label="Fechar"
          >
            <IoMdClose className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  );
}

function getAnimationStyles(animation: Animation): string {
  switch (animation) {
    case 'fade':
      return 'animate-(--animate-fade)'; // Sintaxe simplificada do Tailwind v4
    case 'slide':
      return 'animate-(--animate-slide)'; // Sintaxe simplificada do Tailwind v4
    case 'bounce':
      return 'animate-bounce'; // Nativa do Tailwind
    case 'ping':
      return 'animate-ping'; // Nativa do Tailwind
    case 'pulse':
      return 'animate-pulse'; // Nativa do Tailwind
    case 'none':
      return 'animate-none';
    default:
      return 'animate-(--animate-fade)';
  }
}

function getTypeStyles(type: "success" | "error" | "info") {
  switch (type) {
    case "success":
      return {
        bg: 'bg-green-500',
        icon: 'text-green-100'
      };
    case "error":
      return {
        bg: 'bg-red-500',
        icon: 'text-red-100'
      };
    case "info":
      return {
        bg: 'bg-blue-500',
        icon: 'text-blue-100'
      };
    default:
      return {
        bg: '',
        icon: ''
      };
  }
}

function getIcon(type: "success" | "error" | "info") {
  const iconClass = "h-6 w-6 text-white";

  switch (type) {
    case "success":
      return <FaCheckCircle className={iconClass} />;
    case "error":
      return <FaExclamationCircle className={iconClass} />;
    case "info":
      return <IoIosInformationCircle className={iconClass} />;
    default:
      return null;
  }
}