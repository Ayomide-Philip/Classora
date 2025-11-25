import { connectDatabase } from "@/libs/connectDatabase.js";
import { NextResponse } from "next/server";
import Users from "@/libs/models/user.models.js";
import hashPassword from "@/libs/utility/hashpassword";

export async function POST(req) {
  const { name, email, password, username } = await req.json();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!name) {
    return NextResponse.json(
      { error: "No name was provided" },
      {
        status: 400,
      }
    );
  }

  if (name.length < 5) {
    return NextResponse.json(
      { error: "Name should be at least 5 characters" },
      {
        status: 400,
      }
    );
  }

  if (!username) {
    return NextResponse.json(
      { error: "No username was provided" },
      {
        status: 400,
      }
    );
  }

  if (username.length < 5) {
    return NextResponse.json(
      { error: "Username should be at least 5 characters" },
      {
        status: 400,
      }
    );
  }

  if (!email) {
    return NextResponse.json(
      { error: "No email was provided" },
      {
        status: 400,
      }
    );
  }

  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { error: "Invalid email address" },
      {
        status: 400,
      }
    );
  }

  if (!password) {
    return NextResponse.json(
      { error: "No password was provided" },
      {
        status: 400,
      }
    );
  }

  if (password.length < 8) {
    return NextResponse.json(
      { error: "Password should be at least 8 characters" },
      {
        status: 400,
      }
    );
  }

  try {
    await connectDatabase();
    const emailExists = await Users.findOne({ email });

    if (emailExists) {
      return NextResponse.json(
        { error: "Email already exists" },
        {
          status: 400,
        }
      );
    }
    const usernameExists = await Users.findOne({ username });

    if (usernameExists) {
      return NextResponse.json(
        { error: "Username already exists" },
        {
          status: 400,
        }
      );
    }
    const user = await Users.create({
      name,
      email,
      username,
      password: await hashPassword(password),
    });
    return NextResponse.json(
      { message: "Account Successfully created", user },
      {
        status: 201,
      }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        error: "An error occurred while trying to registering you.",
      },
      {
        status: 500,
      }
    );
  }
}
