import Joi from "joi";

export const productValidation = Joi.object({
  name: Joi.string().required().messages({
    "string.base": "Tên sản phẩm phải có kiểu dữ liệu chuỗi",
    "string.empty": "Tên sản phẩm không được để trống",
    "any.required": "Tên sản phẩm bắt buộc nhập",
  }),
});
