import Joi from "joi";

export const signupValidation = Joi.object({
  name: Joi.string().required().messages({
    "string.base": "Tên người dùng này phải có dữ liệu là chuỗi!",
    "string.empty": "Tên người dùng không được để trống",
    "any.required": "Tên người dùng bắt buộc nhập",
  }),
  email: Joi.string().required().messages({
    "string.base": "Email người dùng này phải có dữ liệu là chuỗi!",
    "string.empty": "Email người dùng không được để trống",
    "any.required": "Email người dùng bắt buộc nhập",
  }),
  password: Joi.string().min(6).required().messages({
    "string.base": "Mật khẩu này phải có dữ liệu là chuỗi!",
    "string.empty": "Mật khẩu không được để trống",
    "string.max": "Mật khẩu tối đa {#limit} ký tự",
    "any.required": "Mật khẩu bắt buộc nhập",
  }),
});
export const signinValidation = Joi.object({
  email: Joi.string().required().messages({
    "string.base": "Email người dùng này phải có dữ liệu là chuỗi!",
    "string.empty": "Email người dùng không được để trống",
    "any.required": "Email người dùng bắt buộc nhập",
  }),
  password: Joi.string().max(6).required().messages({
    "string.base": "Mật khẩu này phải có dữ liệu là chuỗi!",
    "string.empty": "Mật khẩu không được để trống",
    "string.max": "Mật khẩu tối đa {#limit} ký tự",
    "any.required": "Mật khẩu bắt buộc nhập",
  }),
});
