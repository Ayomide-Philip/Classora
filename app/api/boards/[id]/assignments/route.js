import { NextResponse } from "next/server";
import { connectDatabase } from "@/libs/connectDatabase";
import Boards from "@/libs/models/boards.models";

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
    const board = await Boards.findById(id);
    if (!board) {
      return NextResponse.json(
        { error: "Board not found." },
        {
          status: 404,
        }
      );
    }
    return NextResponse.json(
      { error: "GET all assignments" },
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
