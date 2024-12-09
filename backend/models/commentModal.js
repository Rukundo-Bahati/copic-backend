import mongoose from "mongoose";

const CommentSchema = mongoose.Schema(
  {
    postId: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "Posts", 
      required: true 
    }, // Reference to the associated post
    userId: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "Users", 
      required: true 
    }, // Reference to the user who wrote the comment
    text: { 
      type: String, 
      required: true 
    }, // The comment text
    likes: { 
      type: [mongoose.Schema.Types.ObjectId], 
      ref: "Users", 
      default: [] 
    }, // Users who liked the comment
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

const CommentModel = mongoose.model("Comments", CommentSchema);

export default CommentModel;
