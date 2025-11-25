import { toast } from "react-toastify";

export default async function RegisterAction(formData) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const name = formData.get("fullname");
  const email = formData.get("email");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirmPassword");
  console.log(name, email, password, confirmPassword);

  if (!name) return toast.error("Name is required");
  if (!email) return toast.error("Email is required");
  if (!password) return toast.error("Password is required");
  if (!confirmPassword) return toast.error("Password is required");

  if (name.length < 5)
    return toast.error("Name should be at least 5 characters");

  if (!name.trim().includes(" "))
    return toast.error("Your FullName is required");

  if (!email || email.trim()) return toast.error("Email address is required");

  if (!emailRegex.test(email)) return toast.error("Invalid email address");
}
