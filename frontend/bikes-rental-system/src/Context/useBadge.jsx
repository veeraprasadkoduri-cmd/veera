import { useContext } from "react";
import { BadgeContext } from "../providers/BadgeProvider";

export const useBadge = () => {
  if (!BadgeContext) {
    throw new Error("Context not available");
  }

  return useContext(BadgeContext);
};
