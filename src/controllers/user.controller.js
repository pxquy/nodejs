import Users from "../models/auth.model";

export const getAllUser = async (req, res) => {
  try {
    const getAllUser = await Users.find();

    if (getAllUser.length == 0)
      return res.status(200).json({
        message: "Hiện tại chưa có người dùng nào!",
      });

    return res.status(200).json({
      message: "Danh sách người dùng:",
      data: getAllUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Lỗi dự liệu server",
      error: error.message,
    });
  }
};

export const profile = async (req, res) => {
  try {
    const user = req.user;

    return res.status(200).json({
      message: "Thông tin người dùng:",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Lỗi server",
      error: error.message,
    });
  }
};
