import Link from "next/link";
import { Layers, UserPlus, Users, PlusCircle } from "lucide-react";
import EmptyBoardHeader from "./empty/header";
import EmptyBoardCta from "./empty/cta";
import EmptyBoardJoin from "./empty/join";
import EmptyBoardCreate from "./empty/create";

export default function EmptyBoard() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden transition-colors duration-300">
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col gap-12 px-6 py-14 md:px-10">
        <EmptyBoardHeader />
        <EmptyBoardCta />

        <section className="grid gap-6 lg:grid-cols-2 pb-10">
          <EmptyBoardJoin />
          <EmptyBoardCreate />
        </section>
      </div>
    </div>
  );
}
