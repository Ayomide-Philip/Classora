import { NextResponse } from "next/server";
import { connectDatabase } from "@/libs/connectDatabase";
import Users from "@/libs/models/user.models";
import { auth } from "@/auth";
import Boards from "@/libs/models/boards.models";
import Profile from "@/libs/models/profile.models";

export const GET = auth(async function GET(req) {
  if (!req.auth || !req.auth?.user) {
    return NextResponse.json(
      { error: "User is Unauthorized" },
      {
        status: 400,
      }
    );
  }

  const userId = req.auth?.user?.id;

  if (!userId) {
    return NextResponse.json(
      { error: "User not found" },
      {
        status: 404,
      }
    );
  }
  try {
    await connectDatabase();
    const user = await Users.findOne({ _id: userId })
      .select("-password -email")
      .populate("board.boardId").populate("profileId");

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(
      { user },
      {
        status: 200,
      }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "An error occurred" },
      {
        status: 500,
      }
    );
  }
});
