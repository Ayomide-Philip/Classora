import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
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
    { message: "PUT user role" },
    {
      status: 200,
    }
  );
}
