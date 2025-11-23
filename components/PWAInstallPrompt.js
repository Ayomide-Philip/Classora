"use client";

import { useState, useEffect } from "react";
import { X, Share, PlusSquare } from "lucide-react";

export default function PWAInstallPrompt() {
    const [deferredPrompt, setDeferredPrompt] = useState(null);
    const [showIOSPrompt, setShowIOSPrompt] = useState(false);
    const [isStandalone, setIsStandalone] = useState(false);

    useEffect(() => {
        // Check if already in standalone mode
        if (
            window.matchMedia("(display-mode: standalone)").matches ||
            window.navigator.standalone ||
            document.referrer.includes("android-app://")
        ) {
            setIsStandalone(true);
        }

        // Handle Android/Desktop install prompt
        const handleBeforeInstallPrompt = (e) => {
            e.preventDefault();
            setDeferredPrompt(e);
        };

        window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

        // Detect iOS
        const isIOS =
            /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

        // Show iOS prompt only if not standalone and on iOS
        if (isIOS && !window.matchMedia("(display-mode: standalone)").matches) {
            // Simple check to not annoy user every time: use sessionStorage
            const hasSeenPrompt = sessionStorage.getItem("iosInstallPromptSeen");
            if (!hasSeenPrompt) {
                setShowIOSPrompt(true);
            }
        }

        return () => {
            window.removeEventListener(
                "beforeinstallprompt",
                handleBeforeInstallPrompt
            );
        };
    }, []);

    const handleInstallClick = async () => {
        if (!deferredPrompt) return;

        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;

        if (outcome === "accepted") {
            setDeferredPrompt(null);
        }
    };

    const dismissIOSPrompt = () => {
        setShowIOSPrompt(false);
        sessionStorage.setItem("iosInstallPromptSeen", "true");
    }

    if (isStandalone) return null;

    return (
        <>
            {/* Android / Desktop Install Button */}
            {deferredPrompt && (
                <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 bg-background border border-border p-4 rounded-xl shadow-2xl z-50 flex items-center justify-between animate-in slide-in-from-bottom-10 fade-in duration-500">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">
                            C
                        </div>
                        <div>
                            <p className="font-semibold text-sm">Install Classora</p>
                            <p className="text-xs text-muted-foreground">
                                Add to home screen for quick access
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={handleInstallClick}
                        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors"
                    >
                        Install
                    </button>
                </div>
            )}

            {/* iOS Instructions */}
            {showIOSPrompt && (
                <div className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-md border-t border-border p-6 pb-8 z-50 animate-in slide-in-from-bottom-full duration-500">
                    <button
                        onClick={dismissIOSPrompt}
                        className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
                    >
                        <X className="w-5 h-5" />
                    </button>
                    <div className="flex flex-col items-center text-center max-w-md mx-auto">
                        <p className="font-semibold mb-2">Install Classora on iOS</p>
                        <p className="text-sm text-muted-foreground mb-4">
                            Install this application on your home screen for the best experience.
                        </p>
                        <div className="flex items-center gap-2 text-sm font-medium bg-secondary/50 px-4 py-2 rounded-lg">
                            <span>Tap</span>
                            <Share className="w-5 h-5 text-blue-500" />
                            <span>then</span>
                            <PlusSquare className="w-5 h-5 text-foreground" />
                            <span>Add to Home Screen</span>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
