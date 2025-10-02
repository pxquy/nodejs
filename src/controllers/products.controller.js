import Products from "../models/products.model";

export const getAllProducts = async (req, res) => {
  const {
    _page = 1,
    _limit = 10,
    _sort = "price",
    _order = "desc",
    _search = "name",
    _keyword = "",
    _minPrice,
    _maxPrice,
  } = req.query;

  const sortOption = { [_sort]: _order === "desc" ? -1 : 1 };

  const options = {
    page: parseInt(_page),
    limit: parseInt(_limit),
    sort: sortOption,
  };

  const loaded = {};

  if (_keyword && _keyword.trim() !== "") {
    loaded[_search] = { $regex: _keyword, $options: "i" };
  }

  if (_minPrice || _maxPrice) {
    loaded[_sort] = {};
    if (_minPrice !== undefined && _minPrice !== "") {
      const min = Number(_minPrice);
      if (!Number.isNaN(min)) loaded[_sort].$gte = min;
    }
    if (_maxPrice !== undefined && _maxPrice !== "") {
      const max = Number(_maxPrice);
      if (!Number.isNaN(max)) loaded[_sort].$lte = max;
    }
  }

  try {
    const getAll = await Products.paginate(loaded, options);

    if (getAll.docs.length === 0) {
      return res.status(200).json({
        message: "Hiện tại không có sản phẩm nào",
        data: [],
      });
    }

    console.log(getAll);

    return res.status(200).json({
      message: "Lấy sản phẩm thành công",
      data: getAll,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Lỗi dữ liệu phía server",
      error: error.message,
    });
  }
};

export const getById = async (req, res) => {
  try {
    const getById = await Products.findById(req.params.id);
    if (!getById)
      return res.status(404).json({
        message: "Không tìm thấy id sản phẩm trùng khớp",
      });

    return res.status(200).json({
      message: "Sản phẩm cần tìm",
      data: getById,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Lỗi dữ liệu phía server",
    });
  }
};
export const createProduct = async (req, res) => {
  try {
    const { name, price, description } = req.body;

    const createProduct = await Products.create(req.body);

    return res.status(201).json({
      message: "Thêm sản phẩm mới thành công",
      data: createProduct,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Lỗi dữ liệu phía server",
      error: error.message,
    });
  }
};
export const updateProduct = async (req, res) => {
  try {
    const { name, price, description } = req.body;

    const updateProduct = await Products.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updateProduct)
      return res.status(404).json({
        message: "Không tìm thấy id sản phẩm cần sửa",
      });

    return res.status(200).json({
      message: "Sửa thành công",
      data: updateProduct,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Lỗi dữ liệu phía server",
      error: error.message,
    });
  }
};
export const deleteProduct = async (req, res) => {
  try {
    const deleteProduct = await Products.findByIdAndDelete(req.params.id);

    if (!deleteProduct)
      return res.status(404).json({
        message: "Không tìm thấy sản phẩm cần xoá",
      });

    return res.status(200).json({
      success: "true",
      data: deleteProduct,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Lỗi dữ liệu phía server",
      error: error.message,
    });
  }
};
