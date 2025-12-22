import { NextResponse } from "next/server";
import { connectDatabase } from "@/libs/connectDatabase";

export async function GET(req, { params }) {
  const { id } = await params;
  try {
    await connectDatabase();
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
