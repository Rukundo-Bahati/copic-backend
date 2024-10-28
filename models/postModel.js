import mongoose from "mongoose";

const PostSchema = mongoose.Schema(
  {
    userId: { type: String, required: true },
    desc: { type:String },
    likes: [],
    createdAt: {
      type: Date,
      default: new Date(),
    },
    image: String,
  },
  {
    timestamps: true,
  }
);

const PostModel = mongoose.model("Posts", PostSchema);
export default PostModel;
