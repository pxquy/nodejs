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
      unique: true,
      required: true,
    },
    password: {
      type: String,
      empty: true,
      minLength: [6, "Trường này tối đa 6 ký tự"],
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

const Users = mongoose.model("Users", userSchema);

export default Users;
