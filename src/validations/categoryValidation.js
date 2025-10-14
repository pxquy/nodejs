import Joi from "joi";

export const categoryValidation = Joi.object({
  name: Joi.string().required().messages({
    "string.base": "Tên danh mục phải có kiểu là chuỗi!",
    "any.required": "Tên danh mục không được để trống!",
  }),
});
