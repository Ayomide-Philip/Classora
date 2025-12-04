import { NextResponse } from "next/server";
import { connectDatabase } from "@/libs/connectDatabase";
import Courses from "@/libs/models/courses.models";
import Boards from "@/libs/models/boards.models";

export async function GET(req, { params }) {
  const { id } = await params;
  try {
    await connectDatabase();
    const board = await Boards.findOne({ _id: id });
    if (!board) {
      return NextResponse.json(
        { error: "Board doesn't exist" },
        {
          status: 404,
        }
      );
    }
    // check for all course where boardId = id
    const course = await Courses.find({ boardId: id });

    return NextResponse.json(
      { course },
      {
        status: 200,
      }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "An error occurred while fetching all courses" },
      {
        status: 404,
      }
    );
  }
}

export async function POST(req, { params }) {
  return NextResponse.json(
    { message: "POST new course" },
    {
      status: 200,
    }
  );
}
