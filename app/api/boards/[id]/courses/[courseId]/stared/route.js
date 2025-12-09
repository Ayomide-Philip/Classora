import { NextResponse } from "next/server";
import Boards from "@/libs/models/boards.models";
import Users from "@/libs/models/user.models";
import Courses from "@/libs/models/courses.models";
import { auth } from "@/auth";

export const PUT = auth(async function PUT(req, { params }) {
  if (!req.auth || !req.auth.user) {
    return NextResponse.json(
      { error: "User is unauthorized" },
      {
        status: 400,
      }
    );
  }
  const userId = req?.auth?.user?.id;
  const { id, courseId } = await params;

  if (!id) {
    return NextResponse.json(
      { error: "Board not found" },
      {
        statusCode: 400,
      }
    );
  }

  if (!courseId) {
    return NextResponse.json(
      { error: "Course not found" },
      {
        statusCode: 400,
      }
    );
  }

  try {
    // check if the user exist
    const users = await Users.findById(userId);
    if (!users) {
      return NextResponse.json(
        { error: "User does not exist" },
        {
          statusCode: 401,
        }
      );
    }

    // check if the board  exist
    const board = await Boards.findById(id);
    if (!board) {
      return NextResponse.json(
        { error: "Board does not exist" },
        {
          statusCode: 404,
        }
      );
    }

    // check if the course exist
    const course = await Courses.findById(courseId);
    if (!course) {
      return NextResponse.json(
        { error: "Course does not exist" },
        {
          statusCode: 400,
        }
      );
    }

    // get all stared users
    const staredUser = course?.stared;

    const userStared = staredUser.find((user) => {
      return user.toString() === userId.toString();
    });

    if (!userStared) {
      staredUser.push(userId);
      await course.save();
    } else {
      course.stared = staredUser.filter(
        (user) => user.toString() !== userId.toString()
      );
      await course.save();
    }

    return NextResponse.json(
      {  stared: course?.stared },
      {
        status: 200,
      }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "Could not star course" },
      {
        statusCode: 400,
      }
    );
  }
});
