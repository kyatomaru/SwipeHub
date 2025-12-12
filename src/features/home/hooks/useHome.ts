import { useEffect, useState } from "react";

export function useHome() {
  const [isAdult, setIsAdult] = useState<boolean | null>(null);
  const [denyMessage, setDenyMessage] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const adultStatus = localStorage.getItem("isAdult") === "true";
      setIsAdult(adultStatus);
    }
  }, []);

  const handleAccept = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("isAdult", "true");
      setIsAdult(true);
      // 同じウィンドウ内の他のコンポーネントに通知
      window.dispatchEvent(new Event("localStorageChange"));
    }
  };

  const handleDeny = () => {
    setDenyMessage(true);
  };

  return {
    isAdult,
    denyMessage,
    handleAccept,
    handleDeny,
  };
}

