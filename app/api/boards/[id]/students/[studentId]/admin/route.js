import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  return NextResponse.json(
    { message: "PUT user role" },
    {
      status: 200,
    }
  );
}
