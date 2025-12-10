import { NextResponse } from "next/server";
import { connectDatabase } from "@/libs/connectDatabase";
import Classes from "@/libs/models/classes.models";
import Courses from "@/libs/models/courses.models";

export async function GET(req, { params }) {
  const { id, classId } = await params;
  try {
    await connectDatabase();
    // check if the class exist
    const classes = await Classes.findById(classId).populate(
      "courseId",
      "courseTitle courseCode courseDescription semester courseUnit courseCoordinator"
    );
    if (!classes) {
      return NextResponse.json(
        { error: "Class does not exist" },
        {
          status: 400,
        }
      );
    }

    return NextResponse.json(
      { classes },
      {
        status: 200,
      }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "An error occurred while getting class" },
      {
        status: 400,
      }
    );
  }
}
