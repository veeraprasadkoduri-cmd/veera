import { formatDate } from "./utils";
import { formatTime } from "./utils";
import { v4 as uuidv4 } from "uuid";

const getNotifications = () => {
  const storedNotifications =
    JSON.parse(localStorage.getItem("notifications")) || [];
  return storedNotifications;
};

const addNotification = (message, data) => {
  const newNotifications = {
    id: uuidv4(),
    message,
    data,
    time: ` ${formatDate(new Date())} - ${formatTime(new Date())}`
  };

  const storedNotifications = getNotifications();

  localStorage.setItem(
    "notifications",
    JSON.stringify([...storedNotifications, newNotifications])
  );
};

const clearNotifications = () => {
  localStorage.removeItem("notifications");
};

export { getNotifications, addNotification, clearNotifications };
