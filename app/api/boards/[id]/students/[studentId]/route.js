import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { id, studentId } = await params;
  return NextResponse.json(
    { boardId: id, studentId },
    {
      status: 200,
    }
  );
}
