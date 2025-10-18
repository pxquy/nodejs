import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import Users from "../models/auth.model";
import { token } from "morgan";

export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const emailUser = await Users.findOne({ email });
    if (emailUser)
      return res.status(400).json({
        message: "email đã tồn tại",
      });

    console.log(password);

    const hashPassword = await bcryptjs.hash(password, 10);

    const user = await Users.create({
      name,
      email,
      password: hashPassword,
    });

    user.password = undefined;

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
    const { email, password } = req.body;

    const user = await Users.findOne({ email });
    if (!user)
      return res.status(404).json({
        message: "Không tìm thấy email tồn tại!",
      });

    const passwordCompare = await bcryptjs.compare(password, user.password);
    if (!passwordCompare)
      return res.status(400).json({
        message: "Mật khẩu không chính xác",
      });

    const token = jwt.sign(
      { _id: user._id, roles: user.roles },
      process.env.SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );

    return res.status(200).json({
      message: "Đăng nhập thành công:",
      token: token,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Lỗi dự liệu khi tải!",
      error: error.message,
    });
  }
};
