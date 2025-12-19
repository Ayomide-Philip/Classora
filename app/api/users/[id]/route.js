import { NextResponse } from "next/server";

export default async function GET(req, { params }) {
  return NextResponse.json(
    { message: "GET users by ID" },
    {
      status: 200,
    }
  );
}
