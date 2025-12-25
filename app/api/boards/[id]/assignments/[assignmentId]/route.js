import { NextResponse } from "next/server";
import { connectDatabase } from "@/libs/connectDatabase";
import Boards from "@/libs/models/boards.models";
import Assignments from "@/libs/models/assignments.models";
import Users from "@/libs/models/user.models";
import Courses from "@/libs/models/courses.models";
import { auth } from "@/auth";

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

export const DELETE = auth(async function DELETE(req, { params }) {
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
  // if board id doesnt exist
  if (!id) {
    return NextResponse.json(
      { error: "Board Id not found" },
      {
        status: 400,
      }
    );
  }
  // if assignment id doesnt exist
  if (!assignmentId) {
    return NextResponse.json(
      { error: "Assignments Id not found" },
      {
        status: 400,
      }
    );
  }
  try {
    await connectDatabase();
    // get the user board info
    const user = await Users.findById(userId).select("board");
    // if user doesnt have admin prviledges
    if (user?.board?.role !== "admin" && user?.board?.role !== "owner") {
      return NextResponse.json(
        { error: "You dont have access to delete and assignments" },
        {
          status: 400,
        }
      );
    }
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
    // if assignments doesnt exist
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
    // check the course
    const course = await Courses.findById(assignments?.courseId);
    const remainingAssignments = course?.assignments.filter((assignment) => {
      return assignment.toString() !== assignmentId;
    });
    course.assignments = remainingAssignments ? remainingAssignments : [];
    await course.save();
    // delete the course also from the assignments page
    const deleteAssignments = await Assignments.deleteOne({
      _id: assignmentId,
      boardId: id,
    });
    if (
      !deleteAssignments.acknowledged &&
      deleteAssignments.deletedCount !== 1
    ) {
      return NextResponse.json(
        { error: "Unable to delete assignments" },
        {
          status: 400,
        }
      );
    }
    return NextResponse.json(
      { message: "Successfully deleted Assignments" },
      {
        status: 200,
      }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "Unable to delete assignment" },
      {
        status: 400,
      }
    );
  }
});
