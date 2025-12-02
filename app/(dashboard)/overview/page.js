import ActiveBoard from "@/components/dashboard/overview/activeBoard";
import EmptyBoard from "@/components/dashboard/overview/emptyBoard";
import { getUserInfomation } from "@/components/dashboard/userdetails";

export default async function OverviewPage() {
  const data = await getUserInfomation();
  const { user } = data;

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
