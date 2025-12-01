import { models, model, Schema } from "mongoose";

const annoucementSchema = new Schema(
  {
    boardId: {
      type: Schema.Types.ObjectId,
      ref: "Boards",
    },
      tag:{
        t
      }
  },
  {
    timestamps: true,
  }
);

const Announcements =
  models.Announcements || model("Announcements", annoucementSchema);
export default Announcements;
