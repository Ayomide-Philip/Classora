import { models, model, Schema } from "mongoose";

const annoucementSchema = new Schema(
  {
    boardId: {
      type: Schema.Types.ObjectId,
      ref: "Boards",
      required: true,
    },
    tag: {
      type: String,
      required: true,
      minLength: 3,
    },
    title: {
      type: String,
      required: true,
      minLength: 5,
    },
    description: {
      type: String,
      required: true,
    },
    comments: {
      type: [Schema.Types.ObjectId],
      ref: "Comments",
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Announcements =
  models.Announcements || model("Announcements", annoucementSchema);
export default Announcements;
