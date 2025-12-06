import { NextResponse } from "next/server";
import { connectDatabase } from "@/libs/connectDatabase";
import Boards from "@/libs/models/boards.models";
import Courses from "@/libs/models/courses.models";

export async function GET(req, { params }) {
  const { id, courseId } = await params;
  // if the board id doesn't exist
  if (!id) {
    return NextResponse.json(
      { error: "No board was specified" },
      {
        status: 400,
      }
    );
  }

  // if the course id doesn't exist
  if (!courseId) {
    return NextResponse.json(
      { error: "No course id was specified" },
      {
        status: 400,
      }
    );
  }

  try {
    await connectDatabase();
    // check if the board exist
    const board = await Boards.findById(id);
    if (!board) {
      return NextResponse.json(
        { error: "Board does not exist" },
        {
          status: 400,
        }
      );
    }

    // check if the course exist
    const course = await Courses.findOne({ _id: courseId, boardId: id });
    if (!course) {
      return NextResponse.json(
        { error: "Could not find a course" },
        {
          status: 400,
        }
      );
    }

    return NextResponse.json(
      {
        course,
      },
      {
        status: 200,
      }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "An error occurred while getting courses" },
      {
        status: 400,
      }
    );
  }
}
