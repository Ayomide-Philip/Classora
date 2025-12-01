import { NextResponse } from "next/server";
import Boards from "@/libs/models/boards.models";
import Users from "@/libs/models/user.models";
import { auth } from "@/auth";
import { connectDatabase } from "@/libs/connectDatabase";

export const POST = auth(async function POST(req, { params }) {
  const { code } = await params;
  if (!req.auth || !req.auth.user) {
    return NextResponse.json(
      { error: "User is unauthorized" },
      {
        status: 400,
      }
    );
  }
  const userId = req?.auth?.user?.id;

  if (!code) {
    return NextResponse.json(
      { error: "Code not found" },
      {
        status: 400,
      }
    );
  }

  try {
    await connectDatabase();
    // check if the user exists in the database
    const user = await Users.findById(userId).select("-password -email");

    if (!user) {
      return NextResponse.json(
        { error: "User does not exist" },
        {
          status: 400,
        }
      );
    }

    // check if board exist
    const board = await Boards.findOne({ joinCode: code });

    //  if  board dosen't  exist
    if (!board) {
      return NextResponse.json(
        { error: "Invalid code" },
        {
          status: 400,
        }
      );
    }

    if (
      board.joinMode === "limited" &&
      board.seatLimit !== null &&
      board.students.length >= board.seatLimit
    ) {
      return NextResponse.json(
        { error: "Maximum number of seat has being reached" },
        {
          status: 400,
        }
      );
    }

    // check if the user already exist in the board
    const userExist = board.students.find((user) => {
      return user.equals(userId);
    });

    if (userExist) {
      return NextResponse.json(
        { error: "User already joined the board" },
        { status: 400 }
      );
    }
    // update the board student
    board.students.push(userId);
    await board.save();

    // updating the user profile
    user.board = {
      boardId: board._id,
      role: "member",
    };
    await user.save();

    return NextResponse.json(
      { board, user, message: "Successfully Joined the board" },
      {
        status: 200,
      }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "An error occurred while joining a you to the board" },
      {
        status: 400,
      }
    );
  }
});

export async function GET(req, { params }) {
  const { code } = await params;
  if (!code) {
    return NextResponse.json(
      { error: "Code not found" },
      {
        status: 400,
      }
    );
  }

  try {
    await connectDatabase();
    const board = await Boards.findOne({ joinCode: code }).select(
      "-announcement -message -calendar -course"
    );
    if (!board) {
      return NextResponse.json(
        { error: "Invalid board" },
        {
          status: 400,
        }
      );
    }
    return NextResponse.json(
      { board },
      {
        status: 200,
      }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "An error occurred while getting board" },
      {
        status: 400,
      }
    );
  }
}
