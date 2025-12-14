import { NextResponse } from "next/server";

export async function GET(req, { params }) {
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

  return NextResponse.json(
    { boardId: id, studentId },
    {
      status: 200,
    }
  );
}
