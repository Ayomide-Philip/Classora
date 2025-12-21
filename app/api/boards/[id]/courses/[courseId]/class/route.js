import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { id, courseId } = await params;
  // if no boardId
  if (!id) {
    return NextResponse.json(
      { error: "Board Id is not defined" },
      {
        status: 400,
      }
    );
  }
  // if no courseId
  if (!courseId) {
    return NextResponse.json(
      { error: "CourseId is not defined" },
      {
        status: 400,
      }
    );
  }
  try {
    return NextResponse.json(
      { message: "GET all course classes", id, courseId },
      {
        status: 200,
      }
    );
  } catch (err) {
    console.log(err);
  }
}
