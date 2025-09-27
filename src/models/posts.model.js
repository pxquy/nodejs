import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: [true, "Trường này không được để trống!"],
    },
    price: {
      type: Number,
      require: [true, "Trường này bắt buộc nhập"],
    },
    description: {
      type: String,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId(),
      ref: "Categories",
    },
  },
  {
    timestamp: true,
    versionKey: false,
  }
);

const Posts = mongoose.model("Posts", postSchema);

export default Posts;
