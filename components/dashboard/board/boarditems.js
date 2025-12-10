import BoardClassCard from "@/components/dashboard/board/boardclasscard";

export default function BoardItem({ classes }) {
  return (
    <div className="space-y-2 sm:space-y-3">
      <BoardClassCard classes={classes} />
    </div>
  );
}


