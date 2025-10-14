import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const categoriesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Trường này bắt buộc nhập"],
    },
  },
  { timestamp: true, versionKey: false }
);

categoriesSchema.plugin(mongoosePaginate);

const Categories = mongoose.model("Categories", categoriesSchema);

export default Categories;
