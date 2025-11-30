import { NextResponse } from "next/server";
import { connectDatabase } from "@/libs/connectDatabase";
import Boards from "@/libs/models/boards.models";

export async function GET(req, { params }) {
  const { id } = await params;
  console.log(id);

  if (!id) {
    return NextResponse.json(
      { error: "Board not specified" },
      {
        status: 400,
      }
    );
  }

  try {
    await connectDatabase();
    const board = await Boards.findById(id);
    if (!board) {
      return NextResponse.json(
        { error: "Board not found" },
        {
          status: 404,
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
      { error: "An error occurred while getting the board" },
      {
        status: 400,
      }
    );
  }
}
