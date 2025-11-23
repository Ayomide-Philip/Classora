import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemesProvider from "@/components/themesprovider";
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister";
import InstallButton from "@/components/InstallButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Classora - Teach more, manage less",
    template: "Classora | %s",
  },
  description:
    "A friendly classroom dashboard that helps teachers and students manage coursework and communication with ease. Track attendance, assignments, and grades; share resources and announcements; schedule lessons and sync with calendars; receive real-time notifications and visualize student progress with simple reports. Responsive and role-aware (teacher, student, admin), it aims to streamline classroom workflows, improve engagement, and keep learning organized and secure.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark:bg-black dark:text-white`}
      >
        <ThemesProvider>
          <ServiceWorkerRegister />
          <InstallButton />
          {children}
        </ThemesProvider>
      </body>
    </html>
  );
}
