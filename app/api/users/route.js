import { NextResponse } from "next/server";
import { connectDatabase } from "@/libs/connectDatabase";
import Users from "@/libs/models/user.models";
import { auth } from "@/auth";
import Boards from "@/libs/models/boards.models";
import Profile from "@/libs/models/profile.models";

export const GET = auth(async function GET(req) {
  if (!req.auth || !req.auth?.user) {
    return NextResponse.json(
      { error: "User is Unauthorized" },
      {
        status: 400,
      }
    );
  }

  const userId = req.auth?.user?.id;

  if (!userId) {
    return NextResponse.json(
      { error: "User not found" },
      {
        status: 404,
      }
    );
  }
  try {
    await connectDatabase();
    const user = await Users.findOne({ _id: userId })
      .select("-password")
      .populate("board.boardId")
      .populate("profileId");

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(
      { user },
      {
        status: 200,
      }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "An error occurred" },
      {
        status: 500,
      }
    );
  }
});

export async function PUT(req) {
  // getting all possible data from the frontend
  let {
    userId,
    bio,
    phoneNumber,
    gender,
    department,
    faculty,
    degree,
    currentLevel,
    instagram,
    twitter,
    github,
    linkedin,
    enrollmentYear,
  } = await req.json();
  //if no userId
  if (!userId) {
    return NextResponse.json(
      { error: "User Id not provided" },
      {
        status: 404,
      }
    );
  }
  // checking if bio exists
  if (bio && bio.trim().length < 10) {
    return NextResponse.json(
      { error: "Bio cant be less than 10 characters" },
      {
        status: 400,
      }
    );
  }
  // verify phone number
  const phoneRegex = new RegExp("^\\+\\d{1,4}[\\d\\s.-]{6,14}$");
  if (phoneNumber && !phoneRegex.test(phoneNumber)) {
    return NextResponse.json(
      { error: "Invalid phone number" },
      {
        status: 400,
      }
    );
  }
  // verifying gender
  if (gender && gender.trim() !== "Male" && gender.trim() !== "Female") {
    return NextResponse.json(
      { error: "Gender can either be male or female" },
      {
        status: 400,
      }
    );
  }
  // verifying department
  if (department && department.trim().length < 10) {
    return NextResponse.json(
      { error: "Department cant be less than 10 characters" },
      {
        status: 400,
      }
    );
  }
  //verifying faculty
  if (faculty && faculty.trim().length < 10) {
    return NextResponse.json(
      { error: "Faculty cant be less than 10 characters" },
      {
        status: 400,
      }
    );
  }
  // verifying degree
  if (degree && degree.trim().length < 3) {
    return NextResponse.json(
      { error: "Degree cant be less than 3 characters" },
      {
        status: 400,
      }
    );
  }
  //current level
  if (currentLevel && currentLevel.length < 3) {
    return NextResponse.json(
      { error: "Current level cant be less than 3 characters" },
      {
        status: 400,
      }
    );
  }
  // instagram username
  if (instagram && instagram.trim().length < 5) {
    return NextResponse.json(
      { error: "Instagram username cant be less than 5 character" },
      {
        status: 400,
      }
    );
  }
  // Twitter username
  if (twitter && twitter.trim().length < 5) {
    return NextResponse.json(
      { error: "Twitter username cant be less than 5 characters" },
      {
        status: 400,
      }
    );
  }
  // GitHub username
  if (github && github.trim().length < 5) {
    return NextResponse.json(
      { error: "Github username cant be less than 5 characters" },
      {
        status: 400,
      }
    );
  }
  // Linkedin username
  if (linkedin && linkedin.trim().length < 5) {
    return NextResponse.json(
      { error: "Linkedin username cant be less than 5 characters" },
      {
        status: 400,
      }
    );
  }
  // enrollement year
  enrollmentYear = Number(enrollmentYear);
  if (enrollmentYear && typeof enrollmentYear !== "number") {
    return NextResponse.json(
      { error: "Enrollement year should be a type number" },
      {
        status: 400,
      }
    );
  }

  try {
    return NextResponse.json(
      {
        message: "UPDATING user profile",
      },
      {
        status: 200,
      }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "An error occurred while trying to update profile" },
      {
        status: 400,
      }
    );
  }
}
