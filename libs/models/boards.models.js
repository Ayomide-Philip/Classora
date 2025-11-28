import { model, models, Schema } from "mongoose";

const boardsSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "Users",
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50,
    },
    tagline: {
      type: String,
    },
    description: {
      type: String,
      required: true,
      minlength: 10,
    },
    boardType: {
      type: String,
      enum: ["school", "projects", "group", "personal"],
      default: "school",
    },
    school: {
      type: {
        name: {
          type: String,
        },
        logo: {
          type: String,
        },
        shortName: {
          type: String,
        },
        country: {
          type: String,
        },
      },
    },
    joinMode: {
      type: String,
      enum: ["code", "limited"],
      default: "code",
    },
    seatLimit: {
      type: Number,
    },
    allowComments: {
      type: Boolean,
      default: true,
    },
    allowPost: {
      type: Boolean,
      default: false,
    },
    course: {
      type: [Schema.Types.ObjectId],
      ref: "Courses",
      default: [],
    },
    roles: {
      type: {
        admin: {
          type: [Schema.Types.ObjectId],
          ref: "Users",
        },
      },
    },
    announcement: {
      type: [Schema.Types.ObjectId],
      ref: "Announcements",
      default: [],
    },
    students: {
      type: [Schema.Types.ObjectId],
      ref: "Users",
      default: [],
    },
    message: {
      type: [Schema.Types.ObjectId],
      ref: "Messages",
      default: [],
    },
    calendar: {
      type: [Schema.Types.ObjectId],
      ref: "Calendars",
      default: [],
    },
    joinCode: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true }
);

const Boards = models.Boards || model("Boards", boardsSchema);
export default Boards;
