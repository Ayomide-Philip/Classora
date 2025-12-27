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

  let interval;
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
    const assignments = await Assignments.find({ boardId: id })
      .populate("boardId", "students")
      .populate("courseId", "courseTitle")
      .sort({ createdAt: -1 });
    const stream = new ReadableStream({
      start(controller) {
        // Send initial message
        controller.enqueue(
          new TextEncoder().encode(
            `data: ${JSON.stringify({ assignments })}\n\n`
          )
        );

        // Send updates every second
        interval = setInterval(async () => {
          try {
            const newAssignments = await Assignments.find({ boardId: id })
              .populate("boardId", "students")
              .populate("courseId", "courseTitle")
              .sort({ createdAt: -1 });
            const assignmentsDifference = newAssignments.filter(
              (newAssignment) => {
                return !assignments.includes(newAssignment);
              }
            );
            controller.enqueue(
              new TextEncoder().encode(
                `data: ${JSON.stringify({ assignments: newAssignments })}\n\n`
              )
            );
          } catch (err) {
            // client disconnected, stop interval
            clearInterval(interval);
          }
        }, 1000);
      },
      cancel() {
        // Called when client disconnects
        clearInterval(interval);
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
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
