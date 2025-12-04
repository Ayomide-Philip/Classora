import { model, models, Schema } from "mongoose";

const coursesSchema = new Schema(
  {
    boardId: {
      type: Schema.Types.ObjectId,
      ref: "Boards",
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
    courseCordinator: {
      type: String,
    },
  },
  {
    timestamp: true,
  }
);

const Courses = models.Courses || model("Courses", coursesSchema);
export default Courses;
