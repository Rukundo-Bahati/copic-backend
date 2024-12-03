import mongoose from "mongoose";

const PostSchema = mongoose.Schema(
  {
    photographerId: { type: String, required: true },
    title: { type: String, required: true },
    description: { type:String },
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
