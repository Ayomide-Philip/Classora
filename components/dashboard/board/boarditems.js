import BoardClassCard from "@/components/dashboard/board/boardclasscard";
import BoardDayNoClass from "./noclass";

export default function BoardItem({ classes }) {
  return (
    <div className="space-y-2 sm:space-y-3">
      {classes.length > 0 ? (
        <BoardClassCard classes={classes} />
      ) : (
        <BoardDayNoClass />
      )}
    </div>
  );
}
