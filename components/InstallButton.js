"use client";
import { useEffect, useState } from "react";

export default function InstallButton() {
  const [visible, setVisible] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    function handleBeforeInstallPrompt(e) {
      e.preventDefault();
      // store the event and show button
      const prompt = window.deferredPWAInstallPrompt || e;
      window.deferredPWAInstallPrompt = prompt;
      setDeferredPrompt(prompt);
      setVisible(true);
    }

    function handleInstalled() {
      setVisible(false);
      setDeferredPrompt(null);
    }

    window.addEventListener("pwa:beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleInstalled);

    // In case the browser already provided the event to window
    if (window.deferredPWAInstallPrompt) {
      setDeferredPrompt(window.deferredPWAInstallPrompt);
      setVisible(true);
    }

    return () => {
      window.removeEventListener("pwa:beforeinstallprompt", handleBeforeInstallPrompt);
      window.removeEventListener("appinstalled", handleInstalled);
    };
  }, []);

  async function onInstallClick() {
    const promptEvent = window.deferredPWAInstallPrompt || deferredPrompt;
    if (!promptEvent) return;

    try {
      promptEvent.prompt();
      const choice = await promptEvent.userChoice;
      // choice.outcome is "accepted" or "dismissed"
      setVisible(false);
      window.deferredPWAInstallPrompt = null;
      setDeferredPrompt(null);
      window.dispatchEvent(new CustomEvent('pwa:install-choice', { detail: choice }));
      console.log('PWA install choice', choice);
    } catch (err) {
      console.warn('PWA prompt error', err);
    }
  }

  if (!visible) return null;

  return (
    <button
      onClick={onInstallClick}
      aria-label="Install Classora"
      className="fixed bottom-6 right-6 z-50 md:hidden inline-flex items-center px-4 py-2 rounded-lg shadow-lg bg-[#6C5CE7] text-white text-sm font-medium"
      style={{ backdropFilter: 'saturate(120%) blur(6px)' }}
    >
      Install
    </button>
  );
}
