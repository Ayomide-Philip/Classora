"use client";
import { useEffect, useState } from "react";

export default function ServiceWorkerRegister() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallButton, setShowInstallButton] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Register the service worker (sw.js) if supported
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then((reg) => {
          console.log("Service worker registered:", reg);
        })
        .catch((err) => {
          console.warn("Service worker registration failed:", err);
        });
    } else {
      console.log("Service workers not supported in this browser.");
    }

    // Capture beforeinstallprompt and store the event
    const onBeforeInstallPrompt = (e) => {
      // Prevent the mini-infobar from appearing
      e.preventDefault();
      // Store the event so it can be triggered later
      setDeferredPrompt(e);
      // Show the custom install button
      setShowInstallButton(true);
      console.log("beforeinstallprompt captured.");
    };

    window.addEventListener("beforeinstallprompt", onBeforeInstallPrompt);

    // Handle appinstalled event
    const onAppInstalled = () => {
      console.log("PWA was installed");
      window.dispatchEvent(new CustomEvent("pwa:installed"));
    };

    window.addEventListener("appinstalled", onAppInstalled);

    // Cleanup the event listeners when the component is unmounted
    return () => {
      window.removeEventListener("beforeinstallprompt", onBeforeInstallPrompt);
      window.removeEventListener("appinstalled", onAppInstalled);
    };
  }, []);

  // Function to prompt the user to install the PWA
  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt(); // Show the install prompt
      deferredPrompt.userChoice.then((choiceResult) => {
        console.log(choiceResult.outcome);
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the A2HS prompt");
        } else {
          console.log("User dismissed the A2HS prompt");
        }
        setDeferredPrompt(null); // Clear the deferred prompt
        setShowInstallButton(false); // Hide the install button
      });
    }
  };

  return (
    <>
      {showInstallButton && (
        <button onClick={handleInstallClick} className="install-btn">
          Install App
        </button>
      )}
    </>
  );
}
