import { NextResponse } from "next/server";

export async function GET(req, { params }) {
    const {id} = await params;
    console.log(id)
  return NextResponse.json(
    { message: "GET users by ID" },
    {
      status: 200,
    }
  );
}
