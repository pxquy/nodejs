let posts = [
  { id: 1, title: "Bài viết 1", content: "Nội dung bài viết 1" },
  { id: 2, title: "Bài viết 2", content: "Nội dung bài viết 2" },
];

export const getAllPosts = async (req, res) => {
  try {
    return res.status(200).json({ data: posts });
  } catch (error) {
    return res.status(400).json("Có lỗi");
  }
};

export const getById = async (req, res) => {
  try {
    const id = req.params.id;

    if (!id) {
      return res.status(404).json({
        message: "Không tìm thấy id sách phù hợp!",
      });
    }

    const postId = posts.find((p) => p.id == id);
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

    const create = { title, content };

    return res.status(201).json({
      message: "Thêm thành công",
      data: create,
    });
  } catch (error) {
    return res.status(400).json("Có lỗi");
  }
};
export const updatePost = async (req, res) => {
  try {
    const id = req.params.id;

    const post = posts.find((p) => p.id === id);
    const { title, content } = req.body;
    const update = { title, content };

    return res.status(201).json({
      message: "sửa thành công",
      data: update,
    });
  } catch (error) {
    return res.status(400).json("Có lỗi");
  }
};

export const deletePost = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const deletePost = posts.findIndex((p) => p.id === id);

    const deleted = posts.splice(deletePost, 1);

    return res.status(200).json({
      success: "true",
      message: `Dữ liệu vừa xoá:`,
      data: deleted[0],
    });
  } catch (error) {
    return res.status(400).json("Có lỗi");
  }
};
