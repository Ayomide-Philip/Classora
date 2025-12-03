import { NextResponse } from "next/server";
import { connectDatabase } from "@/libs/connectDatabase";
import Announcements from "@/libs/models/annoucements.models";
import Boards from "@/libs/models/boards.models";

export async function GET(req, { params }) {
  const { id } = await params;
  console.log(id);
  if (!id) {
    return NextResponse.json(
      { error: "Board Id is missing" },
      {
        status: 400,
      }
    );
  }

  try {
    await connectDatabase();
    const announcement = await Announcements.find({ boardId: id }).populate(
      "boardId"
    );

    return NextResponse.json(
      { announcement },
      {
        status: 200,
      }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "An error occurred while getting all boards announcements" },
      {
        status: 500,
      }
    );
  }
}

export async function POST(req, { params }) {
  const { id } = await params;
  const data = await req.json();
  const { tag, title, description } = data;

  if (!id) {
    return NextResponse.json(
      { error: "User has no board" },
      {
        status: 400,
      }
    );
  }

  if (!tag || !tag.trim()) {
    return NextResponse.json(
      { error: "No tag is provided" },
      {
        status: 400,
      }
    );
  }

  if (tag.trim().length < 3) {
    return NextResponse.json(
      { error: "Tag should be at least 3 characters" },
      {
        status: 400,
      }
    );
  }

  if (!title || !title.trim()) {
    return NextResponse.json(
      { error: "Announcement title is required" },
      {
        status: 400,
      }
    );
  }

  if (title.trim().length < 5) {
    return NextResponse.json(
      { error: "Annoucement title should be at least 5 characters" },
      {
        status: 400,
      }
    );
  }

  if (!description || !description.trim()) {
    return NextResponse.json(
      { error: "Annoucement description is required" },
      {
        status: 400,
      }
    );
  }

  if (description.trim().length < 5) {
    return NextResponse.json(
      { error: "Announcement description should be at least 5 characters" },
      {
        status: 400,
      }
    );
  }

  try {
    await connectDatabase();
    // check if the board exist
    const board = await Boards.findOne({ _id: id });
    // if it doesn't exist return an error
    if (!board) {
      return NextResponse.json(
        { error: "Board does not exist" },
        {
          status: 400,
        }
      );
    }
    // if it exists create an annoucements
    const annoucement = await Announcements.create({
      tag,
      title,
      description,
      boardId: id,
    });
    // After creating an annoucements push it to the board.annoucement
    board.announcement.push(annoucement._id);
    await board.save();

    return NextResponse.json(
      { annoucement, message: "Announcement created successfully", board },
      {
        status: 200,
      }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "An error occurred while creating announcement" },
      {
        status: 500,
      }
    );
  }
}
