"use client";
import { BsGoogle } from "react-icons/bs";
import { useState } from "react";
import { Eye, EyeClosed } from "lucide-react";
import RegisterAction from "./action";
import Form from "next/form";
export default function Page() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  return (
    <div className="p-10 sm:p-16 flex flex-col justify-center bg-white dark:bg-gray-800">
      <h2 className="text-3xl font-extrabold text-gray-800 dark:text-gray-100 mb-8 text-center">
        Sign Up
      </h2>

      <Form className="space-y-6" action={RegisterAction}>
        <div className="relative">
          <input
            type="text"
            id="fullname"
            name="fullname"
            required
            className="w-full border-b-2 border-gray-300 dark:border-gray-600 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 text-gray-900 dark:text-gray-100 bg-transparent py-3 px-1"
            placeholder="Full name"
          />
        </div>

        <div className="relative">
          <input
            type="text"
            id="username"
            name="username"
            className="w-full border-b-2 border-gray-300 dark:border-gray-600 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 text-gray-900 dark:text-gray-100 bg-transparent py-3 px-1"
            placeholder="Username"
            required
          />
        </div>

        <div className="relative">
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full border-b-2 border-gray-300 dark:border-gray-600 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 text-gray-900 dark:text-gray-100 bg-transparent py-3 px-1"
            placeholder="Email address"
          />
        </div>

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            required
            className="w-full border-b-2 border-gray-300 dark:border-gray-600 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 text-gray-900 dark:text-gray-100 bg-transparent py-3 px-1"
            placeholder="Password"
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

        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            id="confirmPassword"
            name="confirmPassword"
            className="w-full border-b-2 border-gray-300 dark:border-gray-600 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 text-gray-900 dark:text-gray-100 bg-transparent py-3 px-1"
            placeholder="Confirm password"
            required
          />
          <div
            onClick={() => {
              setShowConfirmPassword(!showConfirmPassword);
            }}
            className="absolute right-0 top-3.5 text-gray-500 dark:text-gray-300 cursor-pointer"
          >
            {showConfirmPassword ? <EyeClosed /> : <Eye />}
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
          Create Account
        </button>
      </Form>

      <div className="flex items-center gap-4 my-6">
        <hr className="grow border-gray-300 dark:border-gray-700" />
        <span className="text-gray-400 dark:text-gray-400 text-sm">OR</span>
        <hr className="grow border-gray-300 dark:border-gray-700" />
      </div>

      <button className="flex items-center justify-center gap-3 py-2 px-4 border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition">
        <BsGoogle />
        Continue with Google
      </button>

      <p className="text-center text-sm text-gray-600 dark:text-gray-300 mt-6">
        Already have an account?
        <a
          href="/login"
          className="text-indigo-600 dark:text-indigo-400 hover:underline ml-1"
        >
          Sign in
        </a>
      </p>
    </div>
  );
}
