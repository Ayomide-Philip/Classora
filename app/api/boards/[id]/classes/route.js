import { NextResponse } from "next/server";
import { connectDatabase } from "@/libs/connectDatabase";
import Classes from "@/libs/models/classes.models";

export async function GET(req, { params }) {
  const { id } = await params;

  try {
    await connectDatabase();
    const courses = await Classes.find({ boardId: id });

    return NextResponse.json(
      { courses },
      {
        status: 200,
      }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "An error occurred while getting classes" },
      {
        status: 400,
      }
    );
  }
}

export async function POST(req, { params }) {
  return NextResponse.json(
    { message: "POST a new Class" },
    {
      status: 200,
    }
  );
}
