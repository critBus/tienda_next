import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Notification {
  id: number;
  message: string;
  type?: "info" | "success" | "warning" | "error";
  duration?: number;
}

interface NotificationState {
  notifications: Notification[];
}

const initialState: NotificationState = {
  notifications: [],
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    addNotification: (
      state,
      action: PayloadAction<Omit<Notification, "id">>
    ) => {
      const id = Date.now(); // Generate a unique ID
      const newNotification: Notification = { id, ...action.payload };
      state.notifications.push(newNotification);
      // console.log("Notification added:");
      // console.log(newNotification);
    },
    removeNotification: (state, action: PayloadAction<number>) => {
      state.notifications = state.notifications.filter(
        (notification) => notification.id !== action.payload
      );
    },
  },
});

export const { addNotification, removeNotification } =
  notificationSlice.actions;
export default notificationSlice.reducer;
