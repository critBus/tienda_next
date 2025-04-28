"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store";
import Notification from "./Notification";

export default function NotificationManager() {
  const notifications = useSelector(
    (state: RootState) => state.notification.notifications
  );

  return (
    <div
      style={{ position: "fixed", top: "1rem", right: "1rem", zIndex: 1000 }}
    >
      {notifications.map((notification) => (
        <Notification
          key={notification.id}
          message={notification.message}
          type={notification.type}
          duration={notification.duration}
        />
      ))}
    </div>
  );
}
