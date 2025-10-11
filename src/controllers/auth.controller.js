import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/auth.model";

export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const emailUser = await User.findOne({ email });
    if (emailUser)
      return res.status(400).json({
        message: "email đã tồn tại",
      });

    const hashPassword = await bcryptjs.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashPassword,
    });

    return res.status(201).json({
      message: "Đăng ký thành công!",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Lỗi dự liệu khi tải!",
      error: error.message,
    });
  }
};

export const signin = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({
      message: "Lỗi dự liệu khi tải!",
      error: error.message,
    });
  }
};
