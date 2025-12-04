import { NextResponse } from "next/server";
import { connectDatabase } from "@/libs/connectDatabase";
import Courses from "@/libs/models/courses.models";

export async function GET(req, { params }) {
  const { id } = await params;
  try {
    await connectDatabase();
    const course = await Courses.find({ boardId: id });

    return NextResponse.json(
      { course },
      {
        status: 200,
      }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "An error occurred while fetching all courses" },
      {
        status: 404,
      }
    );
  }
}
