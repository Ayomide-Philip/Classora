export default function manifest() {
  return {
    id: "/",
    name: "Classora - Teach more, manage less",
    short_name: "Classora",
    description:
      "A friendly classroom dashboard that helps teachers and students manage coursework and communication with ease.",
    start_url: "./?source=pwa",
    scope: "/",
    display: "standalone",
    orientation: "portrait-primary",
    lang: "en-US",
    background_color: "#FFFFFF",
    theme_color: "#6C5CE7",
    icons: [
      {
        src: "/icons/icon-16.png",
        sizes: "16x16",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-32.png",
        sizes: "32x32",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-48.png",
        sizes: "48x48",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-72.png",
        sizes: "72x72",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-96.png",
        sizes: "96x96",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-128.png",
        sizes: "128x128",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-144.png",
        sizes: "144x144",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-152.png",
        sizes: "152x152",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-256.png",
        sizes: "256x256",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-384.png",
        sizes: "384x384",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512-maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    screenshots: [
      {
        src: "/images/Classora_Logo_withbg.png",
        sizes: "1400x900",
        type: "image/png",
        label: "Desktop mockup",
        form_factor: "wide",
      },
      {
        src: "/images/Classora_Logo_withbg.png",
        sizes: "360x800",
        type: "image/png",
        label: "Mobile mockup",
      },
    ],
  };
}
