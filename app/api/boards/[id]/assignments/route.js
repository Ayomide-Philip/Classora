import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  return NextResponse.json(
    { error: "GET all assignments" },
    {
      status: 200,
    }
  );
}
