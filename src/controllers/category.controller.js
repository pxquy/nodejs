import Categories from "../models/categories.model";

export const getAllCategories = async (req, res) => {
  const {
    _page = 1,
    _limit = 5,
    _sort = "createdAt",
    order = "desc",
  } = req.body;

  const orderSort = { [_sort]: order == "desc" ? -1 : 1 };
  const options = {
    page: _page,
    limit: _limit,
    sort: orderSort,
  };
  try {
    const getAll = await Categories.paginate({}, options);

    if (getAll.length === 0)
      return res.status(200).json({
        message: "Hiện tại chưa có danh mục nào",
      });
    return res.status(200).json({ data: getAll });
  } catch (error) {
    return res.status(400).json("Có lỗi");
  }
};

export const getById = async (req, res) => {
  try {
    const postId = await Categories.findById(req.params.id);
    if (!postId) {
      return res.status(404).json({
        message: "Không tìm thấy id danh mục phù hợp!",
      });
    }
    console.log(postId);
    return res.status(200).json({
      message: "Tác giả cần tìm:",
      data: postId,
    });
  } catch (error) {
    return res.status(400).json("Có lỗi");
  }
};

export const createCategories = async (req, res) => {
  try {
    const { name, bio } = req.body;

    const createCategories = await Categories.create(req.body);

    return res.status(201).json({
      message: "Thêm danh mục thành công",
      data: createCategories,
    });
  } catch (error) {
    return res.status(400).json("Có lỗi");
  }
};
export const updateCategories = async (req, res) => {
  try {
    const updateCategories = await Categories.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    return res.status(201).json({
      message: "sửa thông tin danh mục thành công",
      data: updateCategories,
    });
  } catch (error) {
    return res.status(400).json("Có lỗi");
  }
};

export const deleteCategories = async (req, res) => {
  try {
    const deleteCategories = await Categories.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      success: "true",
      message: `Dữ liệu vừa xoá:`,
      data: deleteCategories,
    });
  } catch (error) {
    return res.status(400).json("Có lỗi");
  }
};
