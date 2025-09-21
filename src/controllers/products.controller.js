export const getAllProducts = async (req, res) => {
  try {
    const { title, price, discount } = req.query;
    res.send(
      `Sản phẩm ${title || "sách"} và có giá ${price}$ được sell ${discount}%`
    );
  } catch (error) {}
};
