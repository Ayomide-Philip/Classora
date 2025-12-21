import { auth } from "@/auth";
import { redirect } from "next/navigation";

/* eslint-disable @next/next/no-img-element */
export default async function Layout({ children }) {
  const session = await auth();
  if (session && session.user && session?.user?.id)
    return redirect("/overview");
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12 mt-10 bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white dark:bg-gray-800 shadow-2xl rounded-3xl overflow-hidden">
        <div className="bg-[url('/images/hero-bg.jpg')] bg-cover bg-center hidden md:block relative">
          <img
            src="/images/Classora_Logo_nobg.png"
            alt="Hero Background"
            className="w-full h-full object-cover p-3"
          />
        </div>

        {children}
      </div>
    </div>
  );
}
