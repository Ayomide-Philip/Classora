import { cookies } from "next/headers";
import { BASE_URL } from "@/libs/config";
import CodeNotFound from "@/components/dashboard/overview/code/codeNotFound";
import CodeFound from "@/components/dashboard/overview/code/codeFound";

export default async function JoinBoardPage({ searchParams }) {
  const { code } = await searchParams;
  const boardRequest = await fetch(`${BASE_URL}/api/boards/join/${code}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Cookie: (await cookies()).toString(),
    },
  });

  const data = await boardRequest.json();
  console.log(data);
  const { board } = data;

  return (
    <>
      {!board || !boardRequest.ok ? (
        <CodeNotFound code={code} />
      ) : (
        <CodeFound code={code} board={board} />
      )}
    </>
  );
}
