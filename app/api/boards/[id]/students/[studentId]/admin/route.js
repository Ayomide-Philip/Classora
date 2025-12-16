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
    if (
      studentExist.board.role === "owner" ||
      studentExist.board.role === "admin"
    ) {
      return NextResponse.json(
        { error: `User has the role ${studentExist.board.role}` },
        {
          status: 400,
        }
      );
    }
    // check user adding the role
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
    if (user?.board?.boardId.toString() !== id.toString()) {
      return NextResponse.json(
        { error: "User does not belong to this board" },
        {
          status: 401,
        }
      );
    }
    if (user?.board) {
      user.board.role = "admin";
    }
    await user.save();

    return NextResponse.json(
      { student: user },
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

export async function DELETE(req, { params }) {
  const { userId } = await req.json();
  const { id, studentId } = await params;
  // checking if userId exist
  if (!userId) {
    return NextResponse.json(
      { error: "User Id is not specified" },
      {
        status: 400,
      }
    );
  }

  try {
    await connectDatabase();
    // get the board from the database
    const boards = await Boards.findById(id).populate("students", "-password");
    // if board doesnt exist
    if (!boards) {
      return NextResponse.json(
        { error: "Board does not exist" },
        {
          status: 401,
        }
      );
    }
    // check user adding the role
    const userAddingRole = boards?.students?.find((student) => {
      return student._id.toString() === userId.toString();
    });
    // if user adding role doesnt exist
    if (!userAddingRole) {
      return NextResponse.json(
        { error: "User does not belong to this board" },
        {
          status: 400,
        }
      );
    }
    // check user role if it's not admin or owner return error
    if (
      userAddingRole?.board?.role !== "owner" &&
      userAddingRole?.board?.role !== "admin"
    ) {
      return NextResponse.json(
        { error: "You dont have the access to remove a role" },
        {
          status: 400,
        }
      );
    }

    // check if student exists in the board
    const studentExist = boards?.students.find((student) => {
      return student._id.toString() === studentId.toString();
    });
    // if students doesnt exist
    if (!studentExist) {
      return NextResponse.json(
        { error: "Student doesnt belong to this board" },
        {
          status: 400,
        }
      );
    }
    // check if the user has the owner privileges
    if (studentExist?.board?.role === "owner") {
      return NextResponse.json(
        { error: `You cant change the role ${studentExist.board.role}` },
        {
          status: 401,
        }
      );
    }
    // check if the user is a student
    if (studentExist?.board?.role === "member") {
      return NextResponse.json(
        { error: `You cant change the role ${studentExist.board.role}` },
        {
          status: 400,
        }
      );
    }
    // validating user adding role
    if (
      userAddingRole.board?.role !== "owner" ||
      studentExist?.board?.role !== "admin"
    ) {
      return NextResponse.json(
        { error: `You need owner privilege to remove the role` },
        {
          status: 400,
        }
      );
    }
    // update the user role to member
    const user = await Users.findById(studentId).select("-password");
    console.log(user);

    return NextResponse.json(
      { message: "DELETE user admin role" },
      {
        status: 200,
      }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "An error occurred while trying to delete user role" },
      {
        status: 400,
      }
    );
  }
}
