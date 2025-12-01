import ActiveBoard from "@/components/dashboard/overview/activeBoard";
import EmptyBoard from "@/components/dashboard/overview/emptyBoard";
import { BASE_URL } from "@/libs/config";
import { cookies } from "next/headers";

export default async function OverviewPage() {
  const userRequest = await fetch(`${BASE_URL}/api/users`, {
    method: "GET",
    headers: {
      Cookie: (await cookies()).toString(),
      "Content-Type": "application/json",
    },
  });
  const { user } = await userRequest.json();
  console.log(user);

  return (
    <>
      {user?.board ? (
        <ActiveBoard board={user?.board?.boardId} />
      ) : (
        <EmptyBoard />
      )}
    </>
  );
}
