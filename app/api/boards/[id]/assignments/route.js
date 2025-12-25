import { NextResponse } from "next/server";
import { connectDatabase } from "@/libs/connectDatabase";
import Boards from "@/libs/models/boards.models";
import Assignments from "@/libs/models/assignments.models";
import Courses from "@/libs/models/courses.models";
import Users from "@/libs/models/user.models";

export async function GET(req, { params }) {
  const { id } = await params;
  if (!id) {
    return NextResponse.json(
      { error: "Board Id is not defined" },
      {
        status: 404,
      }
    );
  }
  try {
    await connectDatabase();
    // find if the board exist
    const board = await Boards.findById(id);
    // if the board doesn't exist return an error
    if (!board) {
      return NextResponse.json(
        { error: "Board not found." },
        {
          status: 404,
        }
      );
    }
    // return all assignments that belongs to this board
    const assignments = await Assignments.find({ boardId: id });
    return NextResponse.json(
      { assignments },
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

export async function POST(req, { params }) {
  const { id } = await params;
  const {
    courseId,
    userId,
    title,
    description,
    dueDate,
    submitMode,
    googleFormUrl,
  } = await req.json();
  // if board Id doesnt exist
  if (!id) {
    return NextResponse.json(
      { error: "Board Id is not defined" },
      {
        status: 404,
      }
    );
  }
  // if no course id
  if (!courseId) {
    return NextResponse.json(
      { error: "Assignment doesnt have any reference course" },
      {
        status: 404,
      }
    );
  }
  // if title does not exist
  if (!title || !title.trim()) {
    return NextResponse.json(
      { error: "Assignments title is required" },
      {
        status: 400,
      }
    );
  }
  // if title is less than 5 character
  if (title.trim().length < 5) {
    return NextResponse.json(
      { error: "Assignment title cant be less than 5 characters" },
      {
        status: 400,
      }
    );
  }
  // if description doesnt exist
  if (!description || !description.trim()) {
    return NextResponse.json(
      { error: "Assignment description is required" },
      {
        status: 400,
      }
    );
  }
  // if description is less than 10 characters
  if (description.trim().length < 10) {
    return NextResponse.json(
      { error: "Assignments description can not be less than 10 characters" },
      {
        status: 400,
      }
    );
  }
  // check submit mode
  if (!submitMode || !submitMode.trim()) {
    return NextResponse.json(
      { error: "Assignment submit mode should be stated" },
      {
        status: 400,
      }
    );
  }
  // check for which inputted submitMode is not in the enum
  if (
    submitMode.trim() !== "googleForm" &&
    submitMode.trim() !== "directSubmission" &&
    submitMode.trim() !== "unknown"
  ) {
    return NextResponse.json(
      {
        error:
          "Assignment submit mode can either be Google form, Direct Submission or unknown",
      },
      {
        status: 400,
      }
    );
  }
  // check for Google form url if the mode is Google form
  if (
    submitMode.trim() === "googleForm" &&
    !googleFormUrl &&
    !googleFormUrl.trim()
  ) {
    return NextResponse.json(
      { error: "Google form url is required" },
      {
        status: 400,
      }
    );
  }

  try {
    await connectDatabase();
    // check if the board exist
    const board = await Boards.findById(id);
    // if no board return error
    if (!board) {
      return NextResponse.json(
        { error: "Board not found." },
        {
          status: 400,
        }
      );
    }
    // check if the course exist
    const courses = await Courses.findById(courseId);
    if (!courses) {
      return NextResponse.json(
        { error: "Courses not found" },
        {
          status: 400,
        }
      );
    }
    // check if the user exist
    const user = await Users.findById(userId).select("-password");
    // if user doesnt exist
    if (!user) {
      return NextResponse.json(
        { error: "User does not exist" },
        {
          status: 400,
        }
      );
    }
    // check the user role
    if (user?.board?.role !== "admin" && user?.board?.role !== "owner") {
      return NextResponse.json(
        { error: "User does not have privileged to post an assignment" },
        {
          status: 400,
        }
      );
    }
    // validating due date if it exists
    if (dueDate) {
      const inputtedDate = new Date(dueDate);
      const currentDate = new Date();
      if (inputtedDate < currentDate) {
        return NextResponse.json(
          { error: "Due date should be in the future" },
          {
            status: 400,
          }
        );
      }
    }
    // create a new assignments
    // const assignments = await Assignments.create({
    //   boardId: id,
    //   courseId,
    //   userId,
    //   title,
    //   description,
    //   dueDate,
    //   submitMode,
    //   googleFormUrl,
    // });

    return NextResponse.json(
      { message: "Post a new assignment" },
      {
        status: 200,
      }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "An error occurred while Posting a new Assignments" },
      {
        status: 500,
      }
    );
  }
}
