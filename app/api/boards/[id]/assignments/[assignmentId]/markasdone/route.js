import { NextResponse } from "next/server";
import { connectDatabase } from "@/libs/connectDatabase";
import Boards from "@/libs/models/boards.models";
import Assignments from "@/libs/models/assignments.models";
import { auth } from "@/auth";

export const PUT = auth(async function PUT(req, { params }) {
  if (!req.auth || !req.auth.user) {
    return NextResponse.json(
      { error: "User is unauthorized" },
      {
        status: 400,
      }
    );
  }
  const userId = req?.auth?.user?.id;
  const { id, assignmentId } = await params;
  // board it does not exist
  if (!id) {
    return NextResponse.json(
      { error: "Board Id not found" },
      {
        status: 400,
      }
    );
  }
  // assignments id does not exist
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
    // check if the board exists
    const board = await Boards.findById(id);
    if (!board) {
      return NextResponse.json(
        { error: "Board not found" },
        {
          status: 400,
        }
      );
    }
    // check if the assignments exist
    const assignments = await Assignments.findOne({
      _id: assignmentId,
      boardId: id,
    });
    if (!assignments) {
      return NextResponse.json(
        { error: "Assignment not found" },
        {
          status: 400,
        }
      );
    }
    // check if the student already submit the assignments before
    if (assignments?.studentsSubmitted.includes(userId)) {
      return NextResponse.json(
        { error: "User has already submitted this assignments" },
        {
          status: 400,
        }
      );
    }
    assignments?.studentsSubmitted.push(userId);
    await assignments.save();
    // return data
    return NextResponse.json(
      {
        message: "Successfully marked as done",
        studentsSubmitted: assignments?.studentsSubmitted,
      },
      {
        status: 200,
      }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "Could not mark assignments as done" },
      {
        status: 400,
      }
    );
  }
});
