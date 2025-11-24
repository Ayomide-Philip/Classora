"use client";
import { useEffect, useState } from "react";

export default function InstallWebApp() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the install prompt");
        } else {
          console.log("User dismissed the install prompt");
        }
        setDeferredPrompt(null);
      });
    }
  };
  return (
    <button
      onClick={handleInstallClick}
      className="h-12 cursor-pointer px-6 rounded-lg bg-foreground hover:bg-background border hover:text-foreground text-background font-medium flex items-center gap-2 hover:opacity-90 transition-opacity"
    >
      Download Web App
    </button>
  );
}
