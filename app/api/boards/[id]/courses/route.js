import { NextResponse } from "next/server";
import { connectDatabase } from "@/libs/connectDatabase";
import Courses from "@/libs/models/courses.models";
import Boards from "@/libs/models/boards.models";
import { auth } from "@/auth";
import { Users } from "lucide-react";

export async function GET(req, { params }) {
  const { id } = await params;
  try {
    await connectDatabase();
    const board = await Boards.findOne({ _id: id });
    if (!board) {
      return NextResponse.json(
        { error: "Board doesn't exist" },
        {
          status: 404,
        }
      );
    }
    // check for all course where boardId = id
    const course = await Courses.find({ boardId: id }).populate("boardId");

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

export const POST = auth(async function POST(req, { params }) {
  if (!req.auth || !req.auth?.user) {
    return NextResponse.json(
      { error: "User is Unauthorized" },
      {
        status: 400,
      }
    );
  }
  const { id } = await params;
  const data = await req.json();

  const userId = req.auth?.user?.id;
  let {
    courseTitle,
    courseCode,
    courseDescription,
    courseCoordinator,
    courseDepartment,
    courseUnit,
    semester,
    prerequisites,
  } = data;

  //  checking if the board exists
  if (!id) {
    return NextResponse.json(
      { error: "Board doesn't exist" },
      {
        status: 400,
      }
    );
  }

  // checking if the user id is passed
  if (!userId) {
    return NextResponse.json(
      { error: "User doesn't exist" },
      {
        status: 400,
      }
    );
  }

  // validating the course title
  if (!courseTitle || !courseTitle.trim()) {
    return NextResponse.json(
      { error: "Course title is required" },
      {
        status: 400,
      }
    );
  }

  if (courseTitle.trim().length < 5) {
    return NextResponse.json(
      { error: "Course title should be at least 5 characters" },
      {
        status: 400,
      }
    );
  }

  // validating the course code
  if (!courseCode || !courseCode.trim()) {
    return NextResponse.json(
      { error: "Course Code is required" },
      {
        status: 400,
      }
    );
  }

  if (courseCode.trim().length < 3) {
    return NextResponse.json(
      { error: "Course Code should be at least 3 characters" },
      {
        status: 400,
      }
    );
  }

  // validating the course description
  if (!courseDescription || !courseDescription.trim()) {
    return NextResponse.json(
      { error: "Course Description is required" },
      {
        status: 400,
      }
    );
  }

  if (courseDescription.trim().length < 10) {
    return NextResponse.json(
      { error: "Course Description should be at least 10 characters" },
      {
        status: 400,
      }
    );
  }

  // validating course coordinator
  if (!courseCoordinator || !courseCoordinator.trim()) {
    return NextResponse.json(
      { error: "Course Coordinator is required" },
      {
        status: 400,
      }
    );
  }

  if (courseCoordinator.trim().length < 5) {
    return NextResponse.json(
      { error: "Course Coordinator should be at least 5 characters" },
      {
        status: 400,
      }
    );
  }

  // validating course department
  if (courseDepartment && courseDepartment.trim().length < 5) {
    return NextResponse.json(
      { error: "Course Department should be at least 5 characters" },
      {
        status: 400,
      }
    );
  }

  // validating course unit
  if (!courseUnit) {
    return NextResponse.json(
      { error: "Course Unit is required" },
      {
        status: 400,
      }
    );
  }
  //converting course unit to number
  courseUnit = Number(courseUnit);

  if (typeof courseUnit !== "number") {
    return NextResponse.json({ error: "Course Unit should be a number" });
  }

  // validating semester
  if (semester && semester.trim().length < 3) {
    return NextResponse.json(
      { error: "Semester should be at least 3 characters" },
      {
        status: 400,
      }
    );
  }

  if (prerequisites && prerequisites.trim().length < 3) {
    return NextResponse.json(
      { error: "Prerequisite can not be less than 3 characters" },
      {
        status: 400,
      }
    );
  }

  try {
    await connectDatabase();
    // check if the board exist
    const board = await Boards.findOne({ _id: id, userId });

    // if it doesn't exist return an error
    if (!board) {
      return NextResponse.json(
        { error: "Board does not exist" },
        {
          status: 400,
        }
      );
    }

    // if it exists create a course
    const course = await Courses.create({
      boardId: id,
      userId,
      courseTitle,
      courseCode,
      courseDescription,
      courseUnit,
      courseCoordinator,
      courseDepartment,
      semester,
      prerequisites,
    });

    // adding it to the list of courses in the board
    board?.course?.push(course?._id);
    await board.save();

    // returning back the course
    return NextResponse.json(
      { course, message: "Course created successfully." },
      {
        status: 200,
      }
    );
  } catch (err) {
    if (err.code === 11000) {
      return NextResponse.json(
        { error: "You have create a course with this course code and title" },
        {
          status: 400,
        }
      );
    }
    console.log(err);
    return NextResponse.json(
      { error: "An error occurred while fetching registering a new courses" },
      {
        status: 400,
      }
    );
  }
});
