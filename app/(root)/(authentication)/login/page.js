"use client";
import { Eye, EyeClosed } from "lucide-react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { BsGoogle } from "react-icons/bs";
import { toast } from "react-toastify";
export default function Page() {
  const error = useSearchParams().has("error");
  const [showPassword, setShowPassword] = useState(false);
  const [inputedEmail, setInputedEmail] = useState("");
  const [inputedPassword, setInputedPassword] = useState("");

  useEffect(() => {
    if (error) {
      toast.error("Invalid credentials. Please try again.");
    }
  }, [error]);

  function handleLogin(e) {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // check if nothing is inputed into the email field
    if (inputedEmail === "" || inputedEmail.trim() == "")
      return toast.error("Email is required");

    if (!emailRegex.test(inputedEmail))
      return toast.error("Email Address is Invalid");

    if (inputedPassword.length == 0) return toast.error("Password is Required");

    if (inputedPassword.length < 8)
      return toast.error("At least 8 character is required");

    signIn("credentials", {
      email: inputedEmail,
      password: inputedPassword,
      redirectTo: "/overview",
    });
  }

  return (
    <div className="p-10 sm:p-16 flex flex-col justify-center bg-white dark:bg-gray-800">
      <h2 className="text-3xl font-extrabold text-gray-800 dark:text-gray-100 mb-8 text-center">
        Sign In
      </h2>

      <form className="space-y-6" onSubmit={handleLogin}>
        <div className="relative">
          <input
            type="email"
            id="email"
            name="email"
            className=" w-full border-b-2 border-gray-300 dark:border-gray-600 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 text-gray-900 dark:text-gray-100 bg-transparent py-3 px-1"
            placeholder="Input your Email address"
            onChange={(e) => {
              setInputedEmail(e.target.value);
            }}
          />
        </div>

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            className=" w-full border-b-2 border-gray-300 dark:border-gray-600  focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 text-gray-900 dark:text-gray-100 bg-transparent py-3 px-1"
            placeholder="Input your Password"
            onChange={(e) => {
              setInputedPassword(e.target.value);
            }}
          />
          <div
            onClick={() => {
              setShowPassword(!showPassword);
            }}
            className="absolute right-0 top-3.5 text-gray-500 dark:text-gray-300 cursor-pointer"
          >
            {showPassword ? <EyeClosed /> : <Eye />}
          </div>
        </div>

        <div className="flex md:flex-row flex-col items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
            <input
              type="checkbox"
              className="accent-indigo-600"
              defaultChecked
            />
            Remember me
          </label>
          <a
            href="#"
            className="text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            Forgot password?
          </a>
        </div>

        <button
          type="submit"
          className="w-full cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition duration-300 shadow-lg"
        >
          Sign In
        </button>
      </form>

      <div className="flex items-center gap-4 my-6">
        <hr className="grow border-gray-300 dark:border-gray-700" />
        <span className="text-gray-400 dark:text-gray-400 text-sm">OR</span>
        <hr className="grow border-gray-300 dark:border-gray-700" />
      </div>

      <div className="flex flex-col gap-4">
        <button className="flex items-center justify-center gap-3 py-2 px-4 border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition">
          <BsGoogle />
          Continue with Google
        </button>
      </div>

      <p className="text-center text-sm text-gray-600 dark:text-gray-300 mt-6">
        Don’t have an account?
        <a
          href="/register"
          className="text-indigo-600 dark:text-indigo-400 hover:underline ml-1"
        >
          Sign up
        </a>
      </p>
    </div>
  );
}
