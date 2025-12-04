import { NextResponse } from "next/server";
import Announcements from "@/libs/models/annoucements.models";
import Users from "@/libs/models/user.models";
import Boards from "@/libs/models/boards.models";

export async function GET(req, { params }) {
  const { id, annoucementId } = await params;
  // if no boardId exist
  if (!id) {
    return NextResponse.json(
      { error: "Board does not exist" },
      {
        status: 400,
      }
    );
  }
  // if no annoucement id exist
  if (!annoucementId) {
    return NextResponse.json(
      { error: "Announcements does not exist" },
      {
        status: 400,
      }
    );
  }

  try {
    const announcement = await Announcements.findOne({
      boardId: id,
      _id: annoucementId,
    })
      .populate("userId", "name")
      .populate("boardId","allowComments");
    return NextResponse.json(
      { announcement },
      {
        status: 200,
      }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "An error occurred while fetching announcements" },
      {
        status: 400,
      }
    );
  }
}
