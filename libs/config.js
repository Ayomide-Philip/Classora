// Destructure the environment variables
export const {
  MONGODB_URL,
  VAPID_PRIVATE_KEY,
  NEXT_PUBLIC_VAPID_PUBLIC_KEY,
  AUTH_SECRET,
  __NEXT_PRIVATE_ORIGIN, // Ensure this is set correctly in your environment
} = process.env;

export const BASE_URL = "http://localhost:3000";

