import { NextResponse } from "next/server";
import { connectDatabase } from "@/libs/connectDatabase";
import Boards from "@/libs/models/boards.models";

export async function GET(req, { params }) {
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
    // get all the students from the board
    let student = boards?.students.find((student) => {
      return student._id.toString() === studentId.toString();
    });
    // if student is not found
    if (!student) {
      return NextResponse.json(
        { error: "Student is not found" },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(
      { student: student },
      {
        status: 200,
      }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "An error occurred while getting student" },
      {
        status: 400,
      }
    );
  }
}
