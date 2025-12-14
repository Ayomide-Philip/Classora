import { NextResponse } from "next/server";
import { connectDatabase } from "@/libs/connectDatabase";
import Boards from "@/libs/models/boards.models";

export async function PUT(req, { params }) {
  const { id, studentId } = await params;

  // checking board id
  if (!id) {
    return NextResponse.json(
      { error: "Board Id not defined" },
      {
        status: 404,
      }
    );
  }
  // checking studentId
  if (!studentId) {
    return NextResponse.json(
      { error: "Student Id not defined" },
      {
        status: 404,
      }
    );
  }

  try {
    await connectDatabase();
    // check if the board exists
    const boards = await Boards.findById(id).populate("students", "-password");
    // if board does not exist return error
    if (!boards) {
      return NextResponse.json(
        { error: "Board not found" },
        {
          status: 404,
        }
      );
    }
    // check if the student exist
    const studentExist = boards?.students.map((student) => {
      return student._id.toString() === studentId.toString();
    });
    return NextResponse.json(
      { message: "PUT user role" },
      {
        status: 200,
      }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "An error occurred while trying to update student role" },
      {
        status: 400,
      }
    );
  }
}
