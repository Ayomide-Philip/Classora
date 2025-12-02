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
    const board = await Boards.findOne({ _id: id });
    console.log(board);
    const annoucement = await Announcements.create({
      tag,
      title,
      description,
      boardId: id,
    });
    return NextResponse.json(
      { annoucement },
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
