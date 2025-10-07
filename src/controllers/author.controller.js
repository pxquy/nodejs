import Author from "../models/author.model";

export const getAllAuthors = async (req, res) => {
  try {
    const getAll = await Author.find();

    if (getAll.length === 0)
      return res.status(200).json({
        message: "Hiện tại chưa có tác giả nào",
      });
    return res.status(200).json({ data: getAll });
  } catch (error) {
    return res.status(400).json("Có lỗi");
  }
};

export const getById = async (req, res) => {
  try {
    const postId = await Author.findById(req.params.id);
    if (!postId) {
      return res.status(404).json({
        message: "Không tìm thấy id tác giả phù hợp!",
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

export const createAuthor = async (req, res) => {
  try {
    const { name, bio } = req.body;

    const createAuthor = await Author.create(req.body);

    return res.status(201).json({
      message: "Thêm tác giả thành công",
      data: createAuthor,
    });
  } catch (error) {
    return res.status(400).json("Có lỗi");
  }
};
export const updateAuthor = async (req, res) => {
  try {
    const updateAuthor = await Author.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    return res.status(201).json({
      message: "sửa thông tin tác giả thành công",
      data: updateAuthor,
    });
  } catch (error) {
    return res.status(400).json("Có lỗi");
  }
};

export const deleteAuthor = async (req, res) => {
  try {
    const deleteAuthor = await Author.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      success: "true",
      message: `Dữ liệu vừa xoá:`,
      data: deleteAuthor,
    });
  } catch (error) {
    return res.status(400).json("Có lỗi");
  }
};
