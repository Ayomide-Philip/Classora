import mongoose from "mongoose";
import { MONGODB_URL } from "@/libs/config";

export async function connectDatabase() {
  if (!MONGODB_URL) {
    throw new Error("MongoDB URL is missing");
  }

  if (mongoose.connection.readyState === 1) {
    console.log("MongoDB Connected");
    return;
  }

  if (mongoose.connection.readyState === 2) {
    console.log("Connecting to Database");
    return;
  }
  try {
    await mongoose.connect(MONGODB_URL, {
      dbName: "classoraboard",
    });
    console.log("Connected to Database");
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
}
