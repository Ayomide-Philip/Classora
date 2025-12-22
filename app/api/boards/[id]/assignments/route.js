import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { id } = await params;
  try {
    return NextResponse.json(
      { error: "GET all assignments" },
      {
        status: 200,
      }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "An error was encountered while trying to get all assignments" },
      {
        status: 500,
      }
    );
  }
}
