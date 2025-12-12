import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemesProvider from "@/components/themesprovider";
import { ToastContainer } from "react-toastify";
import { Analytics } from "@vercel/analytics/next";

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
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark:bg-black dark:text-white`}
      >
        <ToastContainer
          position="top-center"
          autoClose={4000}
          hideProgressBar
          closeOnClick
          pauseOnHover
          draggable
          theme="colored"
          toastClassName="!rounded-xl !px-4 !py-3 !shadow-lg !border !border-slate-200 !bg-white !text-slate-900 dark:!bg-slate-900 dark:!text-white dark:!border-slate-700 !text-sm !font-semibold !leading-relaxed"
          bodyClassName="!flex !items-center !gap-2"
          className="w-full! max-w-md!"
        />
        <ThemesProvider>{children}</ThemesProvider>
        <Analytics />
      </body>
    </html>
  );
}
