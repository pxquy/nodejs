export const getAllProducts = async (req, res) => {
  try {
    const products = [
      { id: 1, name: "Laptop", price: 1000 },
      { id: 2, name: "Phone", price: 500 },
      { id: 3, name: "Tablet", price: 300 },
    ];

    const name = req.query.name;
    const maxPrice = req.query.maxPrice ? Number(req.query.maxPrice) : null;

    let result = products;

    if (maxPrice) {
      result = products.filter((p) => p.price <= maxPrice);
    }
    if (name) {
      result = products.filter(
        (p) => p.name.toLowerCase() == name.toLowerCase()
      );
    }

    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getById = async (req, res) => {
  try {
    const products = [
      { id: 1, name: "Laptop", price: 1000 },
      { id: 2, name: "Phone", price: 500 },
      { id: 3, name: "Tablet", price: 300 },
    ];

    const id = req.params.id;
    const getById = products.find((p) => p.id == id);
    if (!getById)
      return res.status(404).json({
        message: "Không tìm thấy id sản phẩm phù hợp",
      });

    return res.status(200).json(getById);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
