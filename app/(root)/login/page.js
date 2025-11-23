import { BsGoogle } from "react-icons/bs";

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12 mt-10 bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white dark:bg-gray-800 shadow-2xl rounded-3xl overflow-hidden">
        <div className="bg-[url('/images/hero-bg.jpg')] bg-cover bg-center hidden md:block relative">
          {/* subtle overlay for better contrast in dark mode */}

          {/* inline SVG illustration centered on the hero panel */}
        </div>

        <div className="p-10 sm:p-16 flex flex-col justify-center bg-white dark:bg-gray-900">
          <h2 className="text-3xl font-extrabold text-gray-800 dark:text-gray-100 mb-8">
            Sign in to your account
          </h2>

          <form className="space-y-6">
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                className=" w-full border-b-2 border-gray-300 dark:border-gray-600 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 text-gray-900 dark:text-gray-100 bg-transparent py-3 px-1"
                placeholder="Input your Email address"
              />
              {/* <label
                htmlFor="email"
                className="absolute left-1 top-3 text-gray-500 dark:text-gray-300 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm"
              >
                Email address
              </label> */}
            </div>

            <div className="relative">
              <input
                type="password"
                id="password"
                name="password"
                required
                className=" w-full border-b-2 border-gray-300 dark:border-gray-600  focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 text-gray-900 dark:text-gray-100 bg-transparent py-3 px-1"
                placeholder="Password"
              />
              {/* <label
                htmlFor="password"
                className="absolute left-1 top-2 text-gray-500 dark:text-gray-300 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm"
              >
                Password
              </label> */}
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <input type="checkbox" className="accent-indigo-600" />
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
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition duration-300 shadow-lg"
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
              href="#"
              className="text-indigo-600 dark:text-indigo-400 hover:underline ml-1"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
