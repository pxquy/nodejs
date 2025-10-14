import Joi from "joi";

export const productValidation = Joi.object({
  name: Joi.string().required().messages({
    "string.base": "Tên sản phẩm phải có kiểu dữ liệu chuỗi",
    "string.empty": "Tên sản phẩm không được để trống",
    "any.required": "Tên sản phẩm bắt buộc nhập",
  }),
  price: Joi.number().required().messages({
    "number.base": "Giá sản phẩm phải là kiểu số",
    "any.required": "Giá sản phẩm không được để trống",
  }),
  description: Joi.string().required().max(500).messages({
    "string.base": "Mô tả sản phẩm phải có kiểu dữ liệu chuỗi",
    "string.empty": "Mô tả sản phẩm không được để trống",
    "string.max": "Mô tả sản phẩm không được dài quá {#limit} ký tự",
    "any.required": "Mô tả sản phẩm bắt buộc nhập",
  }),
  category: Joi.string().required().messages({}),
});

export const validateUpdateProduct = productValidation.fork(
  ["name", "price"],
  (Schema) => Schema.optional()
);
