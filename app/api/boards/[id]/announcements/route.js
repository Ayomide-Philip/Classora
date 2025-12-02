import { NextResponse } from "next/server";
import { connectDatabase } from "@/libs/connectDatabase";
import Announcements from "@/libs/models/annoucements.models";

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
    const announcement = await Announcements.find({ boardId: id });

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
    
}