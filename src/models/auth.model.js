import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      empty: true,
      required: true,
    },
    email: {
      type: String,
      empty: true,
      required: true,
    },
    password: {
      type: String,
      empty: true,
      required: true,
    },
    roles: {
      type: String,
      empty: true,
      enum: ["admin", "user"],
      default: "user",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
