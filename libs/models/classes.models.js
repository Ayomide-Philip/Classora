import { model, models, Schema } from "mongoose";

const classesSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    boardId: {
      type: Schema.Types.ObjectId,
      ref: "Boards",
      required: true,
    },
    courseId: {
      type: Schema.Types.ObjectId,
      ref: "Courses",
      required: true,
    },
    venue: {
      type: {
        name: {
          type: String,
          required: true,
        },
        mapUrl: {
          type: String,
        },
      },
    },
    day: {
      type: String,
      required: true,
      enum: ["monday", "tuesday", "wednesday", "thursday", "friday"],
    },
    time: {
      type: {
        startTime: {
          type: Date,
          required: true,
        },
        endTime: {
          type: Date,
          required: true,
        },
      },
    },
  },
  {
    timestamps: true,
  }
);

const Classes = models.Classes || model("Classes", classesSchema);
export default Classes;
