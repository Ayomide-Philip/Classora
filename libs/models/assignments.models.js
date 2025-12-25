import { models, model, Schema } from "mongoose";

const assignmentSchema = new Schema(
  {
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
    userId: {
      type: Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    title: {
      type: String,
      required: true,
      minlength: 5,
    },
    description: {
      type: String,
      required: true,
      minlength: 10,
    },
    dueDate: {
      type: Date,
      default: null,
    },
    studentsSubmitted: {
      type: [Schema.Types.ObjectId],
      ref: "Users",
      default: [],
    },
    submitMode: {
      type: String,
      enum: ["googleForm", "directSubmission", "unknown"],
      default: "unknown",
    },
    googleFormUrl: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const Assignments =
  models.Assignments || model("Assignments", assignmentSchema);
export default Assignments;
