"use client"
import { createContext, useContext, useState, ReactNode, useRef, useEffect } from "react";
import Notifications from "@/components/Notifications/Notifications";

type Position = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
type Animation = 'fade' | 'slide' | 'bounce' | 'ping' | 'pulse' | 'none';

type NotificationOptions = {
  duration?: number;
  position?: Position;
  animation?: Animation;
  showIcon?: boolean;
  showCloseButton?: boolean;
  action?: {
    text: string;
    onClick: () => void;
  };
  title?: string;
  description?: string;
  customContent?: ReactNode;
  autoClose?: boolean;
  className?: string;
};

type Notification = {
  id: number;
  message: string;
  type: "success" | "error" | "info";
  createdAt: number; // timestamp de quando a notificação foi criada
  options: NotificationOptions;
};

type NotificationContextType = {
  addNotification: (message: string, type: "success" | "error" | "info", options?: NotificationOptions) => void;
  removeNotification: (id: number) => void;
};

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error("useNotification must be used within a NotificationProvider");
  }
  return context;
};

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [position, setPosition] = useState<Position>('top-right');
  const timersRef = useRef<{ [key: number]: NodeJS.Timeout }>({});

  // Função para limpar os timers quando o componente é desmontado
  useEffect(() => {
    return () => {
      const currentTimers = { ...timersRef.current }; // Cria uma cópia estável do objeto
      Object.values(currentTimers).forEach(timer => clearTimeout(timer));
    };
  }, []);


  const addNotification = (
    message: string,
    type: "success" | "error" | "info",
    options: NotificationOptions = {}
  ) => {
    const id = Date.now();
    const duration = options.duration || 5000;

    if (options.position && options.position !== position) {
      setPosition(options.position);
      // Limpa notificações anteriores se a posição mudar
      setNotifications([{ id, message, type, options, createdAt: Date.now() }]);
    } else {
      setNotifications(prev => [...prev, { id, message, type, options, createdAt: Date.now() }]);
    }

    if (options.autoClose !== false) {
      // Armazenar o timer na ref para poder limpá-lo posteriormente
      timersRef.current[id] = setTimeout(() => {
        removeNotification(id);
      }, duration);
    }
  };

  const removeNotification = (id: number) => {
    setNotifications(prev => prev.filter(n => n.id !== id));

    // Limpar o timer se existir
    if (timersRef.current[id]) {
      clearTimeout(timersRef.current[id]);
      delete timersRef.current[id];
    }
  };

  const positionStyles = getPositionStylesForContainer(position);

  return (
    <NotificationContext.Provider value={{ addNotification, removeNotification }}>
      {children}
      <div className={`fixed z-50 ${positionStyles} m-4 w-full max-w-sm pointer-events-none flex flex-col`}>
        {notifications.map((notification) => (
          <Notifications
            key={notification.id}
            message={notification.message}
            type={notification.type}
            onClose={() => removeNotification(notification.id)}
            animation={notification.options.animation || 'fade'}
            showIcon={notification.options.showIcon !== false}
            showCloseButton={notification.options.showCloseButton !== false}
            action={notification.options.action}
            className={notification.options.className || ''}
            title={notification.options.title}
            description={notification.options.description}
            customContent={notification.options.customContent}
          />
        ))}
      </div>
    </NotificationContext.Provider>
  );
};

function getPositionStylesForContainer(position: Position): string {
  switch (position) {
    case 'top-right':
      return 'top-0 right-0';
    case 'top-left':
      return 'top-0 left-0';
    case 'bottom-right':
      return 'bottom-0 right-0';
    case 'bottom-left':
      return 'bottom-0 left-0';
    case 'top-center':
      return 'top-0 left-1/2 transform -translate-x-1/2';
    case 'bottom-center':
      return 'bottom-0 left-1/2 transform -translate-x-1/2';
    default:
      return 'top-0 right-0';
  }
}