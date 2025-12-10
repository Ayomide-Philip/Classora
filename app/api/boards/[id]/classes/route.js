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
  const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
  const { id } = await params;
  const { userId, courseId, venueName, venueMapUrl, day, startTime, endTime } =
    await req.json();
  console.log(
    userId,
    courseId,
    venueName,
    venueMapUrl,
    day,
    startTime,
    endTime
  );
  // validating venue name
  if (!venueName || !venueName.trim()) {
    return NextResponse.json(
      { error: "Venue name is required" },
      {
        status: 400,
      }
    );
  }

  // validating venue map url
  if (venueMapUrl && venueMapUrl.length > 10) {
    return NextResponse.json(
      { error: "Invalid map url" },
      {
        status: 400,
      }
    );
  }

  // validating venue day
  if (!day || !day.trim()) {
    return NextResponse.json(
      { error: "Venue day is required" },
      {
        status: 400,
      }
    );
  }

  if (
    day.trim().toLowerCase() !== "monday" &&
    day.trim().toLowerCase() !== "tuesday" &&
    day.trim().toLowerCase() !== "wednesday" &&
    day.trim().toLowerCase() !== "thursday" &&
    day.trim().toLowerCase() === "friday"
  ) {
    return NextResponse.json(
      { error: "Invalid day it range from monday to friday" },
      {
        status: 400,
      }
    );
  }

  // validating start time and end time
  if (!startTime || !startTime.trim()) {
    return NextResponse.json(
      { error: "Start time is required" },
      {
        status: 400,
      }
    );
  }

  if (!endTime || !endTime.trim()) {
    return NextResponse.json(
      { error: "End time is required" },
      {
        status: 400,
      }
    );
  }

  return NextResponse.json(
    { message: "POST a new Class" },
    {
      status: 200,
    }
  );
}
