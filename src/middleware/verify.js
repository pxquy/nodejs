import jwt from "jsonwebtoken";

export const verifyJWT = (req, res, next) => {
  const token = req?.headers?.authorization?.split(" ");
  if (!token)
    return res.status(404).json({
      message: "Không tìm thấy token",
    });

  try {
    const decode = jwt.verify(token, process.env.SECRETKEY);
    req.user = decode;
    next();
  } catch (error) {
    return res.status(500).json({
      message: "Lỗi dữ liệu server",
    });
  }
};
