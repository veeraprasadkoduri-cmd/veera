import { createContext, useEffect, useState } from "react";

export const BadgeContext = createContext();

const initBadgeCount = () => {
  const storeCount = localStorage.getItem("badgeCount");
  return storeCount ? parseInt(storeCount, 10) : 0;
};

export const BadgeProvider = ({ children }) => {
  const [badgeCount, setBadgeCount] = useState(initBadgeCount);

  useEffect(() => {
    localStorage.setItem("badgeCount", badgeCount.toString());
  }, [badgeCount]);

  const incrementBadgeCount = () => {
    setBadgeCount((currentCount) => currentCount + 1);
  };

  const resetBadgeCount = () => {
    setBadgeCount(0);
  };

  return (
    <BadgeContext.Provider
      value={{ badgeCount, incrementBadgeCount, resetBadgeCount }}
    >
      {children}
    </BadgeContext.Provider>
  );
};
