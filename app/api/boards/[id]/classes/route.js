import { NextResponse } from "next/server";
import { connectDatabase } from "@/libs/connectDatabase";
import Classes from "@/libs/models/classes.models";
import Users from "@/libs/models/user.models";
import Courses from "@/libs/models/courses.models";
import Boards from "@/libs/models/boards.models";
import { auth } from "@/auth";

export async function GET(req, { params }) {
  const { id } = await params;

  try {
    await connectDatabase();
    const courses = await Classes.find({ boardId: id })
      .populate("courseId", "courseTitle courseCoordinator")
      .sort({ "time.startTime": 1 });

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

export const POST = auth(async function POST(req, { params }) {
  if (!req.auth || !req?.auth?.user) {
    return NextResponse.json(
      { error: "User is unauthorized." },
      {
        status: 400,
      }
    );
  }
  const userId = req.auth?.user?.id;
  const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
  const { id } = await params;
  const { courseId, venueName, venueMapUrl, day, startTime, endTime, type } =
    await req.json();
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
  if (venueMapUrl && venueMapUrl.length < 10) {
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
    day.trim().toLowerCase() !== "friday"
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

  if (startTime > endTime.trim()) {
    return NextResponse.json(
      { error: "Class start time can not be greater than end time" },
      {
        status: 400,
      }
    );
  }

  if (!timeRegex.test(startTime)) {
    return NextResponse.json(
      { error: "Invalid Start time" },
      {
        status: 400,
      }
    );
  }

  if (!timeRegex.test(endTime)) {
    return NextResponse.json(
      { error: "Invalid End time" },
      {
        status: 400,
      }
    );
  }

  if (!type || !type.trim()) {
    return NextResponse.json(
      { error: "Classes type is required" },
      {
        status: 400,
      }
    );
  }

  if (
    type?.trim().toLowerCase() !== "lecture" &&
    type?.trim().toLowerCase() !== "lab" &&
    type?.trim().toLowerCase() !== "tutorial" &&
    type?.trim().toLowerCase() !== "practical"
  ) {
    return NextResponse.json(
      {
        error: "Class can either be lecture or lab or tutorial or practical",
      },
      {
        status: 400,
      }
    );
  }

  try {
    await connectDatabase();

    // verifying user
    const user = await Users.findById(userId);
    if (!user) {
      return NextResponse.json(
        { error: "Invalid User, Unauthorized Access" },
        {
          status: 400,
        }
      );
    }
    if (user?.board?.role !== "admin" && user?.board?.role !== "owner") {
      return NextResponse.json(
        { error: "Unauthorized Access" },
        {
          status: 400,
        }
      );
    }

    // verify board
    const board = await Boards.findById(id);
    if (!board) {
      return NextResponse.json(
        { error: "Board does not exist" },
        {
          status: 400,
        }
      );
    }

    // verifying courseId
    const course = await Courses.findById(courseId);
    if (!course) {
      return NextResponse.json(
        { error: "Course does not exist" },
        {
          status: 400,
        }
      );
    }

    // create a new class
    const newClass = await Classes.create({
      userId,
      boardId: id,
      courseId,
      venue: {
        name: venueName,
        mapUrl: venueMapUrl || "",
      },
      day: day.trim().toLowerCase(),
      time: {
        startTime: startTime.trim(),
        endTime: endTime.trim(),
      },
      type,
    });

    board?.classes?.push(newClass._id);
    await board.save();

    return NextResponse.json(
      { class: newClass },
      {
        status: 200,
      }
    );
  } catch (err) {
    if (err.code === 11000) {
      return NextResponse.json(
        { error: "This class already exists" },
        {
          status: 400,
        }
      );
    }
    console.log(err);
    return NextResponse.json(
      { error: "An error occurred while creating a class" },
      {
        status: 400,
      }
    );
  }
});
