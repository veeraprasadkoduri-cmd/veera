import { useContext } from "react";
import { AlertContext } from "../providers/AlertProvider";

export const useAlert = () => {
  if (!AlertContext) {
    throw new Error("Context not available");
  }

  return useContext(AlertContext);
};
