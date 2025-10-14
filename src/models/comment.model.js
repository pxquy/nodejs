import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    content: {
        type: String,
        maxLength: [500, "Trường này chỉ tối đa 500 ký tự"],
        required: [true, "Trường này không được bỏ trống!"]
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Products"
    }
}, {
    timestamps: true,
    versionKey: false,
});

const Comment = mongoose.model("Comments", commentSchema);

export default Comment;