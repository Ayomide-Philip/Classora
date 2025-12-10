import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  return NextResponse.json(
    { message: "GET all Classes" },
    {
      status: 200,
    }
  );
}
