export default function manifest() {
  return {
    name: "Classora - Teach more, manage less",
    short_name: "Classora",
    description:
      "A friendly classroom dashboard that helps teachers and students manage coursework and communication with ease. Track attendance, assignments, and grades; share resources and announcements; schedule lessons and sync with calendars; receive real-time notifications and visualize student progress with simple reports. Responsive and role-aware (teacher, student, admin), it aims to streamline classroom workflows, improve engagement, and keep learning organized and secure.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/images/Classora_Logo_withbg.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/Classora_Logo_withbg.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
