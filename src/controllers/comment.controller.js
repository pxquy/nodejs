import Comment from "../models/categories.model";
import Products from "../models/products.model";

export const getAllComment = async (req, res) => {
  try {
    const getAll = await Comment.find()
      .populate("product", "name")
      .populate("user", "name");

    if (getAll.length === 0)
      return res.status(200).json({
        message: "Hiện tại chưa có bình luận nào",
      });
    return res.status(200).json({ data: getAll });
  } catch (error) {
    return res.status(500).json("Có lỗi");
  }
};

export const getById = async (req, res) => {
  try {
    const postId = await Comment.findById(req.params.id);
    if (!postId) {
      return res.status(404).json({
        message: "Không tìm thấy id bình luận phù hợp!",
      });
    }
    console.log(postId);
    return res.status(200).json({
      message: "Tác giả cần tìm:",
      data: postId,
    });
  } catch (error) {
    return res.status(500).json("Có lỗi");
  }
};

export const getByIdProductComment = async(req, res) => {
 try {
       const getInFoProduct = await findOne({product: Products._id});

    if(getInFoProduct) return res.status(404).json({
        message: "Không tìm thấy Id sản phẩm yêu cầu!"
    });

    return res.status(200).json({
        message: "Chi tiết sản phẩm có bình luận:",
        data: getInFoProduct,
    })
 } catch (error) {
    return res.status(500).json("Có Lỗi")
 }
}

export const createComment = async (req, res) => {
  try {
    const { name, bio } = req.body;

    const createComment = await Comment.create(req.body);

    return res.status(201).json({
      message: "Thêm bình luận thành công",
      data: createComment,
    });
  } catch (error) {
    return res.status(500).json("Có lỗi");
  }
};
export const updateComment = async (req, res) => {
  try {
    const updateComment = await Comment.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    return res.status(201).json({
      message: "sửa thông tin bình luận thành công",
      data: updateComment,
    });
  } catch (error) {
    return res.status(500).json("Có lỗi");
  }
};

export const deleteComment = async (req, res) => {
  try {
    const deleteComment = await Comment.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      success: "true",
      message: `Dữ liệu vừa xoá:`,
      data: deleteComment,
    });
  } catch (error) {
    return res.status(500).json("Có lỗi");
  }
};
