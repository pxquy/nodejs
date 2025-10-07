import { optional } from "joi";
import mongoose from "mongoose";

const authorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      empty: true,
      required: true,
    },
    bio: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Author = mongoose.model("Author", authorSchema);

export default Author;
