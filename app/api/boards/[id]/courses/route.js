import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { id } = await params;
  return NextResponse.json(
    { message: "GET all courses", id },
    {
      status: 200,
    }
  );
}
