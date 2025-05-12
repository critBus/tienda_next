"use client";

import { useState, useEffect } from "react";

interface NotificationProps {
  message: string;
  type?: "info" | "success" | "warning" | "error";
  duration?: number; // Duration in milliseconds
  onClose?: () => void;
}

export default function Notification({
  message,
  type = "info",
  duration = 3000,
  onClose,
}: NotificationProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (onClose) onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!visible) return null;

  const typeStyles = {
    info: "text-blue-800 border-blue-300 bg-blue-50",
    success: "text-green-800 border-green-300 bg-green-50",
    warning: "text-yellow-800 border-yellow-300 bg-yellow-50",
    error: "text-red-800 border-red-300 bg-red-50",
  };

  return (
    <div
      className={`flex items-center p-4 mb-4 border-t-4 rounded-lg shadow-lg ${typeStyles[type]}`}
      role="alert"
    >
      <svg
        className="shrink-0 w-4 h-4"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
      </svg>
      <div className="ms-3 text-sm font-medium">{message}</div>
    </div>
  );
}
