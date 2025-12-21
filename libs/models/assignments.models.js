import { models, model, Schema } from "mongoose";

const assignmentSchema = new Schema(
  {},
  {
    timestamps: true,
  }
);

const Assignments =
  models.Assignments || model("Assignments", assignmentSchema);
export default Assignments;
