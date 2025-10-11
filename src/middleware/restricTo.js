export const restrectTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.roles)) {
      return res.status(404).json({
        message: "Không tìm thấy user",
      });
    }
    next();
  };
};
