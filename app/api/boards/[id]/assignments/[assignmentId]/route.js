import { NextResponse } from "next/server";
import { connectDatabase } from "@/libs/connectDatabase";
import Boards from "@/libs/models/boards.models";
import Assignments from "@/libs/models/assignments.models";
import Users from "@/libs/models/user.models";
import Courses from "@/libs/models/courses.models";

export async function GET(req, { params }) {
  const { id, assignmentId } = await params;
  // check board id
  if (!id) {
    return NextResponse.json(
      { error: "Board Id not found" },
      {
        status: 400,
      }
    );
  }
  // check assignments id
  if (!assignmentId) {
    return NextResponse.json(
      { error: "Assignment Id not found" },
      {
        status: 400,
      }
    );
  }

  try {
    await connectDatabase();
    // check if the board exist
    const board = await Boards.findById(id);
    // return an error if board is not found
    if (!board) {
      return NextResponse.json(
        { error: "Board not found" },
        {
          status: 400,
        }
      );
    }
    // find the assignments
    const assignment = await Assignments.findOne({
      _id: assignmentId,
      boardId: id,
    })
      .populate("boardId", "students")
      .populate("courseId", "courseTitle courseCode courseCoordinator")
      .populate("userId", "name");
    //if no assignments return an error
    if (!assignment) {
      return NextResponse.json(
        { error: "Assignment not found" },
        {
          status: 400,
        }
      );
    }
    return NextResponse.json(
      { assignment: assignment },
      {
        status: 200,
      }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "Unable to get assignments" },
      {
        status: 400,
      }
    );
  }
}
