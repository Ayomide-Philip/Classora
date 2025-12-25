import { NextResponse } from "next/server";

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
    return NextResponse.json(
      { message: "GET board by ID", id, assignmentId },
      {
        status: 200,
      }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Unable to get assignments" },
      {
        status: 400,
      }
    );
  }
}
