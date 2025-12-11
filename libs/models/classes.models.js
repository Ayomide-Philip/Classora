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
          type: String,
          required: true,
        },
        endTime: {
          type: String,
          required: true,
        },
      },
    },
    type: {
      type: String,
      enum: ["lecture", "lab", "tutorial", "practical"],
      default: "lecture",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

classesSchema.index(
  {
    day: 1,
    "time.startTime": 1,
    "time.endTime": 1,
    "venue.name": 1,
    courseId: 1,
  },
  { unique: true }
);

const Classes = models.Classes || model("Classes", classesSchema);
export default Classes;
