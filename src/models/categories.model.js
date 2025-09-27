import mongoose from "mongoose";

const categoriesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Trường này bắt buộc nhập"],
    },
  },
  { timestamp: true, versionKey: false }
);

const Categories = mongoose.model("Categories", categoriesSchema);

export default Categories;
