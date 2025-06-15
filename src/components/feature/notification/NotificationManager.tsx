"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import Notification from "./Notification";
import { removeNotification } from "@/store/slices/notificationSlice";

export default function NotificationManager() {
  const notifications = useSelector(
    (state: RootState) => state.notification.notifications
  );
  const dispatch = useDispatch();

  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col gap-4">
      {notifications.map((notification) => (
        <Notification
          key={notification.id}
          message={notification.message}
          type={notification.type}
          duration={notification.duration}
          onClose={() => dispatch(removeNotification(notification.id))}
        />
      ))}
    </div>
  );
}
