export const getAllUser = async (req, res) => {
  try {
    const { name } = req.query;
    res.send(`Xin chào người dùng trở lại ${name}`);
  } catch (error) {}
};
