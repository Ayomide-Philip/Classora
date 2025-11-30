import { connectDatabase } from "@/libs/connectDatabase";
import { NextResponse } from "next/server";
import Boards from "@/libs/models/boards.models";
import generateJoinCode from "@/libs/utility/generateJoinCode";
import Users from "@/libs/models/user.models";
import { auth } from "@/auth";

export const POST = auth(async function POST(req) {
  if (!req.auth || !req.auth?.user) {
    return NextResponse.json(
      { error: "User is Unauthorized" },
      {
        status: 400,
      }
    );
  }
  const userId = req.auth?.user?.id;
  const request = await req.json();
  let {
    name,
    tagline,
    description,
    boardType,
    school,
    joinMode,
    seatLimit,
    allowComments,
    allowPosts,
  } = request;
  console.log(request);

  if (!name || !name.trim()) {
    return NextResponse.json(
      { error: "Board Name is required" },
      {
        status: 404,
      }
    );
  }

  if (name.trim().length < 5) {
    return NextResponse.json(
      { error: "Board Name should be at least 5 characters" },
      {
        status: 404,
      }
    );
  }

  if (tagline && tagline.trim().length < 5) {
    return NextResponse.json(
      { error: "Board tagline should be at least 5 characters" },
      {
        status: 404,
      }
    );
  }

  if (!description || !description.trim()) {
    return NextResponse.json(
      { error: "Board Description is required" },
      {
        status: 404,
      }
    );
  }

  if (description.trim().length < 10) {
    return NextResponse.json(
      { error: "Description should be at least 10 characters" },
      {
        status: 404,
      }
    );
  }

  if (!boardType || !boardType.trim()) {
    return NextResponse.json(
      { error: "BoardType is required" },
      {
        status: 404,
      }
    );
  }

  if (
    boardType.trim().toLowerCase() !== "school" &&
    boardType.trim().toLowerCase() !== "projects" &&
    boardType.trim().toLowerCase() !== "group" &&
    boardType.trim().toLowerCase() !== "personal"
  ) {
    return NextResponse.json(
      {
        error:
          "Board Type can be either school or projects or personal or group.",
      },
      {
        status: 404,
      }
    );
  }

  if (boardType.trim().toLowerCase() === "school") {
    if (!school?.name || !school?.name.trim()) {
      return NextResponse.json(
        { error: "School name is required" },
        {
          status: 404,
        }
      );
    }

    if (school?.name.trim().length < 10) {
      return NextResponse.json(
        { error: "School name should be at least 10 characters" },
        {
          status: 404,
        }
      );
    }

    if (!school?.logo || !school?.name.trim()) {
      return NextResponse.json(
        { error: "School Logo is required" },
        {
          status: 404,
        }
      );
    }

    if (school?.logo.length < 10) {
      return NextResponse.json(
        { error: "School logo should be at least 10 characters" },
        {
          status: 404,
        }
      );
    }

    if (!school?.shortName || !school?.shortName.trim()) {
      return NextResponse.json(
        { error: "School ShortName is required" },
        {
          status: 404,
        }
      );
    }

    if (school?.shortName.trim().length < 2) {
      return NextResponse.json(
        { error: "School ShortName should be at least 2 characters" },
        {
          status: 404,
        }
      );
    }

    if (!school?.country || !school?.country.trim()) {
      return NextResponse.json(
        { error: "School country is required" },
        {
          status: 404,
        }
      );
    }

    if (school?.country.trim().length < 5) {
      return NextResponse.json(
        {
          error: "School country should be at least 5 characters",
        },
        {
          status: 404,
        }
      );
    }
  }

  if (boardType.trim().toLowerCase() !== "school") {
    school.name = null;
    school.shortName = null;
    school.logo = null;
    school.country = null;
  }

  if (!joinMode || !joinMode.trim()) {
    return NextResponse.json(
      { error: "Board Join mode is required" },
      {
        status: 404,
      }
    );
  }

  if (
    joinMode.trim().toLowerCase() !== "code" &&
    joinMode.trim().toLowerCase() !== "limited"
  ) {
    return NextResponse.json(
      {
        error: "Board join mode can either be code or limited",
      },
      {
        status: 404,
      }
    );
  }

  if (joinMode.trim().toLowerCase() === "limited") {
    if (!seatLimit) {
      return NextResponse.json(
        { error: "Board of limited members needs a seat limit" },
        {
          status: 404,
        }
      );
    }
seatLimit = Number(seatLimit);
    if (typeof seatLimit !== "number") {
      return NextResponse.json(
        { error: "Seat limit should be a number" },
        {
          status: 404,
        }
      );
    }
  }

  if (joinMode.trim().toLowerCase() === "code" && seatLimit >= 0) {
    seatLimit = null;
  }

  if (allowComments === undefined) {
    return NextResponse.json(
      { error: "Allow comments is required" },
      {
        status: 404,
      }
    );
  }

  if (allowComments !== true && allowComments !== false) {
    return NextResponse.json(
      { error: "Allow comments can either be true or false" },
      {
        status: 404,
      }
    );
  }

  if (allowPosts === undefined) {
    return NextResponse.json(
      { error: "Allow posts is required" },
      {
        status: 404,
      }
    );
  }

  if (allowPosts !== true && allowPosts !== false) {
    return NextResponse.json(
      { error: "Allow post can either be true or false" },
      {
        status: 404,
      }
    );
  }

  try {
    await connectDatabase();
    // checking if the board exist already
    const boardExisting = await Boards.findOne({ userId });
    if (boardExisting) {
      return NextResponse.json(
        { error: "User has created a board already" },
        {
          status: 404,
        }
      );
    }
    // if a board already has this code already
    let joinCode = await generateJoinCode(school?.shortName);
    const joinCodeExist = await Boards.findOne({ joinCode });
    while (joinCodeExist) {
      joinCode = await generateJoinCode(school?.shortName);
    }

    // creating a new board for the user
    const board = await Boards.create({
      userId,
      name,
      tagline,
      description,
      boardType,
      school: {
        name: school?.name,
        logo: school?.logo,
        shortName: school?.shortName,
        country: school?.country,
      },
      joinMode: joinMode,
      seatLimit: seatLimit,
      allowComments: allowComments,
      allowPosts: allowPosts,
      students: [userId],
      joinCode,
    });
    // updating the user profile by adding the board to it
    const user = await Users.findOne({ _id: userId }).select(
      "-password -email"
    );

    user.board = {
      boardId: board._id,
      role: "owner",
    };
    await user.save();

    return NextResponse.json({ board, user, message:"Board created successfully" });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "An error was encountered while creating a new board" },
      {
        status: 404,
      }
    );
  }
});
