import mongoose from "mongoose";

const PostSchema = mongoose.Schema(
  {
    photographerId: { type: mongoose.Schema.Types.ObjectId, required: true },
    title: String,
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
