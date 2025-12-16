import { Schema, model, models } from "mongoose";

const profileModel = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    bio: {
      type: String,
      default: "",
    },
    phoneNumber: {
      type: String,
      default: "",
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Prefer not to say"],
      default: "Prefer not to say",
    },
    department: {
      type: String,
      default: "",
    },
    faculty: {
      type: String,
      default: "",
    },
    degree: {
      type: String,
      default: "",
    },
    currentLevel: {
      type: String,
      default: "",
    },

    socialHandles: {
      type: {
        instagram: {
          type: String,
          default: "",
        },
        twitter: {
          type: String,
          default: "",
        },
        github: {
          type: String,
          default: "",
        },
        linkedin: {
          type: String,
          default: "",
        },
      },
    },
    enrollmentYear: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Profile = models.Profile || model("Profile", profileModel);
export default Profile;
