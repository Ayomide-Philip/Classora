import { NextResponse } from "next/server";
import { connectDatabase } from "@/libs/connectDatabase";
import Boards from "@/libs/models/boards.models";
import Users from "@/libs/models/user.models"

export async function GET(req, { params }) {
  const { id } = await params;
  if (!id) {
    return NextResponse.json(
      { error: "Board id doesn't exist" },
      {
        status: 404,
      }
    );
  }
  try {
    await connectDatabase();
    const boards = await Boards.findById(id).populate("students", "-password");
    if(!boards) {
        return NextResponse.json({error:"Board does not exist"},{
            status: 404,
        })
    }
      const students = boards?.students
    return NextResponse.json(
      { students },
      {
        status: 200,
      }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "An error occurred while getting all students" },
      {
        status: 400,
      }
    );
  }
}
