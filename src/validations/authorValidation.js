import Joi from "joi";

export const authorValidation = Joi.object({
  name: Joi.string().required().min(2).max(100).messages({
    "string.base": "Tên sản phẩm phải có kiểu dữ liệu chuỗi",
    "string.empty": "Tên sản phẩm không được để trống",
    "string.max": "Tên sản phẩm không được quá {#limit} ký tự",
    "string.min": "tên sản phẩm không được ngắn quá {#limit} ký tự",
    "any.required": "Tên sản phẩm bắt buộc nhập",
  }),
  bio: Joi.string().optional().allow("").max(500).message({
    "string.base": "Thông tin tác giả phải có kiểu là chuỗi",
    "string.max": "Thông tin tác giả tối đa {#limit} ký tự",
  }),
});
