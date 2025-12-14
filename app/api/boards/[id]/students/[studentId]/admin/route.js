import { NextResponse } from "next/server";
import { connectDatabase } from "@/libs/connectDatabase";
import Boards from "@/libs/models/boards.models";
import Users from "@/libs/models/user.models";

export async function PUT(req, { params }) {
  const { userId } = await req.json();
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
    const studentExist = boards?.students.find((student) => {
      return student._id.toString() === studentId.toString();
    });
    // if student does not exist
    if (!studentExist) {
      return NextResponse.json(
        { error: "Student does not exist" },
        {
          status: 400,
        }
      );
    }
    // check user adding role
    const checkUserIdRole = boards?.students?.find((student) => {
      return student._id.toString() === userId.toString();
    });
    // if user we are even checking doesn't exist
    if (!checkUserIdRole) {
      return NextResponse.json(
        { error: "Anonymous user has unauthorized Access" },
        {
          status: 401,
        }
      );
    }

    if (
      checkUserIdRole?.board?.role !== "owner" &&
      checkUserIdRole?.board?.role !== "admin"
    ) {
      return NextResponse.json(
        { error: "You dont have the access to grant a role" },
        {
          status: 401,
        }
      );
    }
    // edit user role
    const user = await Users.findById(studentId).select("-password");
    console.log(user);

    return NextResponse.json(
      { message: "PUT user role", userId, studentId, boardId: id },
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
