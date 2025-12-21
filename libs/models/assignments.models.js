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
  },
  {
    timestamps: true,
  }
);

const Assignments =
  models.Assignments || model("Assignments", assignmentSchema);
export default Assignments;
