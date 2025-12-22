import { NextResponse } from "next/server";
import { connectDatabase } from "@/libs/connectDatabase";
import Boards from "@/libs/models/boards.models";
import Assignments from "@/libs/models/assignments.models";

export async function GET(req, { params }) {
  const { id } = await params;
  if (!id) {
    return NextResponse.json(
      { error: "Board Id is not defined" },
      {
        status: 404,
      }
    );
  }
  try {
    await connectDatabase();
    // find if the board exist
    const board = await Boards.findById(id);
    // if the board doesn't exist return an error
    if (!board) {
      return NextResponse.json(
        { error: "Board not found." },
        {
          status: 404,
        }
      );
    }
    // return all assignments that belongs to this board
    const assignments = await Assignments.find({ boardId: id });
    return NextResponse.json(
      { assignments },
      {
        status: 200,
      }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "An error was encountered while trying to get all assignments" },
      {
        status: 500,
      }
    );
  }
}
