import { BASE_URL } from "@/libs/config";
import { toast } from "react-toastify";

export default async function RegisterAction(formData) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const name = formData.get("fullname");
  const email = formData.get("email");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirmPassword");
  const username = formData.get("username");

  if (!name || name.trim() === "") return toast.error("Name is required");
  if (!email || email.trim() === "") return toast.error("Email is required");
  if (
    !password ||
    password.trim() === "" ||
    !confirmPassword ||
    confirmPassword.trim() === ""
  )
    return toast.error("Password is required");

  if (!username || username.trim() === "")
    return toast.error("Username is required");

  if (username.length < 5)
    return toast.error("Username should be at least 5 characters");

  if (name.length < 5)
    return toast.error("Name should be at least 5 characters");

  if (!name.trim().includes(" "))
    return toast.error("Your FullName is required");

  if (!email || email.trim() === "")
    return toast.error("Email address is required");

  if (!emailRegex.test(email)) return toast.error("Invalid email address");

  if (!password || !confirmPassword) return toast.error("Password is required");

  if (password.length < 8)
    return toast.error("At least 8 character is required");

  if (password !== confirmPassword)
    return toast.error("Passwords do not match");

  try {
    const request = await fetch(`${BASE_URL}/api/auth/register`, {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        username,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const response = await request.json();
    console.log(response);

    if (!request.ok || response.error) {
      return toast.error(
        response.error || "Registration failed. Please try again."
      );
    }

    toast.success("Registration successful! Please log in.");
    window.location.href = "/login";
  } catch (error) {
    console.error(error);
    toast.error("An error occurred during registration. Please try again.");
  }
}
