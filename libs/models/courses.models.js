import { model, models, Schema } from "mongoose";

const coursesSchema = new Schema(
  {
    boardId: {
      type: Schema.Types.ObjectId,
      ref: "Boards",
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    courseTitle: {
      type: String,
      required: true,
      minLength: 5,
    },
    courseCode: {
      type: String,
      required: true,
      minLength: 3,
    },
    courseDescription: {
      type: String,
      required: true,
      minLength: 10,
    },
    courseCoordinator: {
      type: String,
    },
    courseDepartment: {
      type: String,
    },
    courseUnit: {
      type: Number,
      required: true,
    },
    semester: {
      type: String,
      required: true,
    },
    assignments: {
      type: [Schema.Types.ObjectId],
      ref: "Assignments",
      default: [],
    },
    resources: {
      type: [Schema.Types.ObjectId],
      ref: "Resources",
      default: [],
    },
  },
  {
    timestamp: true,
  }
);

const Courses = models.Courses || model("Courses", coursesSchema);
export default Courses;
