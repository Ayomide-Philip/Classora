"use client";
import { useEffect } from "react";

export default function ServiceWorkerRegister() {
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

    // Capture beforeinstallprompt so the app can show its own install UI/button
    function onBeforeInstallPrompt(e) {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Store the event for later use
      window.deferredPWAInstallPrompt = e;
      // Dispatch a custom event so the UI can react (e.g., show Install button)
      window.dispatchEvent(
        new CustomEvent("pwa:beforeinstallprompt", { detail: e })
      );
      console.log(
        "beforeinstallprompt captured and stored on window.deferredPWAInstallPrompt"
      );
    }

    window.addEventListener("beforeinstallprompt", onBeforeInstallPrompt);

    function onAppInstalled() {
      console.log("PWA was installed");
      window.dispatchEvent(new CustomEvent("pwa:installed"));
    }

    window.addEventListener("appinstalled", onAppInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", onBeforeInstallPrompt);
      window.removeEventListener("appinstalled", onAppInstalled);
    };
  }, []);

  return null;
}
