import OverviewActivity from "@/components/dashboard/overview/activity";
import OverviewAnnoucement from "@/components/dashboard/overview/annoucements";
import OverviewStats from "@/components/dashboard/overview/stats";
// import ActiveBoardHeader from "./activeBoardHeader";
export default function ActiveBoard({ board }) {
  return (
    <>
      {/* <ActiveBoardHeader board={board} /> */}
      <div className="flex flex-col space-y-6 w-full px-4 mb-10 mt-5">
        <OverviewStats board={board} />
        <OverviewAnnoucement />
        <OverviewActivity />
      </div>
    </>
  );
}
