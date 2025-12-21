import { NextResponse } from "next/server";
import { connectDatabase } from "@/libs/connectDatabase";
import Boards from "@/libs/models/boards.models";

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
