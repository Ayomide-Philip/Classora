"use server";
import { BASE_URL } from "@/libs/config";
import { cookies } from "next/headers";
export async function getUserInfomation() {
  const userRequest = await fetch(`${BASE_URL}/api/users`, {
    method: "GET",
    headers: {
      Cookie: (await cookies()).toString(),
      "Content-Type": "application/json",
    },
  });
  const { user } = await userRequest.json();
  return {
    user: user,
    userId: user?._id,
    boardId: user?.board?.boardId?._id,
    role: user?.board?.role,
  };
}
