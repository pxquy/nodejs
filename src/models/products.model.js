import { required } from "joi";
import mongoose from "mongoose";
import productPaginate from "mongoose-paginate-v2";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Tên sản phẩm không được để trống!"],
    },
    price: {
      type: Number,
      required: [true, "Giá sản phẩm không được để trống!"],
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

productSchema.plugin(productPaginate);

const Products = mongoose.model("Products", productSchema);

export default Products;
