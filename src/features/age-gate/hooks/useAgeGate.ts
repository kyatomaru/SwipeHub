import { useState } from "react";
import { useRouter } from "next/navigation";

export function useAgeGate() {
  const router = useRouter();
  const [denyMessage, setDenyMessage] = useState(false);

  const handleAccept = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("isAdult", "true");
      router.push("/home");
    }
  };

  const handleDeny = () => {
    setDenyMessage(true);
  };

  return {
    denyMessage,
    handleAccept,
    handleDeny,
  };
}

