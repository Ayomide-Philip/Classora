import { NextResponse } from "next/server";
import { connectDatabase } from "@/libs/connectDatabase";
import Boards from "@/libs/models/boards.models";
import Courses from "@/libs/models/courses.models";
import Classes from "@/libs/models/classes.models";

export async function GET(req, { params }) {
  const { id, courseId } = await params;
  // if no boardId
  if (!id) {
    return NextResponse.json(
      { error: "Board Id is not defined" },
      {
        status: 400,
      }
    );
  }
  // if no courseId
  if (!courseId) {
    return NextResponse.json(
      { error: "CourseId is not defined" },
      {
        status: 400,
      }
    );
  }
  try {
    await connectDatabase();
    // check if the board exist
    const board = await Boards.findById(id);
    // if board doesnt exist return error
    if (!board) {
      return NextResponse.json(
        { error: "Board not found" },
        {
          status: 400,
        }
      );
    }
    // check if the course exist
    const course = await Courses.findOne({ _id: courseId, boardId: id });
    // if course doesnt exist return error
    if (!course) {
      return NextResponse.json(
        { error: "Course does not exist" },
        {
          status: 400,
        }
      );
    }
    // check if the classes exist
    const classes = await Classes.find({ boardId: id, courseId });
    return NextResponse.json(
      { message: "GET all course classes", id, courseId },
      {
        status: 200,
      }
    );
  } catch (err) {
    console.log(err);
  }
}
