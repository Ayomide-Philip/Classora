import { NextResponse } from "next/server";
import { connectDatabase } from "@/libs/connectDatabase";

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
    return NextResponse.json(
      { message: "Getting all students", boardId: id },
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
