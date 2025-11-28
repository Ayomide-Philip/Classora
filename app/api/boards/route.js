import { NextResponse } from "next/server";

export async function POST(req) {
  const request = await req.json();
  const {
    userId,
    name,
    tagline,
    description,
    boardType,
    school,
    joinMode,
    seatLimit,
    allowComments,
    allowAssignments,
  } = request;
  console.log(request);

  if (!name || !name.trim())
    return NextResponse.json(
      { error: "Board Name is required" },
      {
        status: 404,
      }
    );

  if (name.trim().length < 5)
    return NextResponse.json(
      { error: "Board Name should be at least 5 characters" },
      {
        status: 404,
      }
    );

  return NextResponse.json({ message: "POST a new board" });
}
