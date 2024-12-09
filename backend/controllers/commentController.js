import CommentModel from "../models/commentModal.js";

export const addComment = async (req, res) => {
    const { postId, userId, text } = req.body;
  
    try {
      const newComment = new CommentModel({ postId, userId, text });
      await newComment.save();
      res.status(201).json({ message: "Comment added successfully!", comment: newComment });
    } catch (error) {
      res.status(500).json({ message: "Error adding comment", error: error.message });
    }
  }; 


export const getCommentsForPost = async (req, res) => {
    const { postId } = req.params;
  
    try {
      const comments = await CommentModel.find({ postId }).populate("userId", "username avatar");
      res.status(200).json(comments);
    } catch (error) {
      res.status(500).json({ message: "Error fetching comments", error: error.message });
    }
  };
  
  
export const deleteComment = async (req, res) => {
    const { commentId } = req.params;
  
    try {
      await CommentModel.findByIdAndDelete(commentId);
      res.status(200).json({ message: "Comment deleted successfully!" });
    } catch (error) {
      res.status(500).json({ message: "Error deleting comment", error: error.message });
    }
  };
  