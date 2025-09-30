import Posts from "../models/posts.model";

export const getAllPosts = async (req, res) => {
  try {
    const getAll = await Posts.find();
    return res.status(200).json({ data: posts });
  } catch (error) {
    return res.status(400).json("Có lỗi");
  }
};

export const getById = async (req, res) => {
  try {
    const postId = await Posts.findById(req.params.id);
    if (!postId) {
      return res.status(404).json({
        message: "Không tìm thấy id sách phù hợp!",
      });
    }
    console.log(postId);
    return res.status(200).json({
      message: "Sản phẩm cần tìm:",
      data: postId,
    });
  } catch (error) {
    return res.status(400).json("Có lỗi");
  }
};

export const createPost = async (req, res) => {
  try {
    const { title, content } = req.body;

    const createPost = await Posts.create(req.body);

    return res.status(201).json({
      message: "Thêm thành công",
      data: createPost,
    });
  } catch (error) {
    return res.status(400).json("Có lỗi");
  }
};
export const updatePost = async (req, res) => {
  try {
    const updatePost = await Posts.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    return res.status(201).json({
      message: "sửa thành công",
      data: updatePost,
    });
  } catch (error) {
    return res.status(400).json("Có lỗi");
  }
};

export const deletePost = async (req, res) => {
  try {
    const deletePost = await Posts.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      success: "true",
      message: `Dữ liệu vừa xoá:`,
      data: deletePost,
    });
  } catch (error) {
    return res.status(400).json("Có lỗi");
  }
};
