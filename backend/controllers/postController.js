import mongoose from "mongoose";
import multer from "multer";
import PostModel from "../models/postModel.js";
import {User} from "../models/userModel.js";

export const createPost = async (req, res) => {

  try {
    const { photographerId, title, description } = req.body;

    if (!photographerId || !title || !description || !req.file) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const newPost = new PostModel({
      photographerId,
      title,
      description,
      image: `/images/${req.file.filename}`, 
    });

    await newPost.save();

    // Return success response with the new post details
    res.status(201).json({ message: "Post created successfully", post: newPost });
    console.log("Post Created Successfully.")
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ message: "Failed to create post", error });
  }
};

//getting a post
export const getPost = async (req, res) => {
  const id = req.params.id;
  try {
    const post = await PostModel.findById(id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
};

export const getAllPosts = async (req, res) => {
  try {
    const posts = await PostModel.find(); // Find all posts
    res.status(200).json(posts); // Return all posts
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
};

//update a post
export const updatePost = async (req, res) => {
  const postId = req.params.id;
  const { userId } = req.body;

  try {
    const post = await PostModel.findById(postId);
    if (post.userId == userId) {
      await post.updateOne({ $set: req.body });
      res.status(200).json("Post Updated!");
    } else {
      res.status(403).json("Authentication failed!😟")
    }
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
};

// delete a post
export const deletePost = async (req, res) => {
  const id = req.params.id;
  const { userId } = req.body;

  try {
    const post = await PostModel.findById(id);
    if (post.userId === userId) {
      await post.deleteOne();
      res.status(200).json("Post deleted.");
    } else {
      res.status(403).json("Action forbidden");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// like/dislike a post
export const likePost = async (req, res) => {
  const id = req.params.id;
  const { userId } = req.body;
  try {
    const post = await PostModel.findById(id);
    if (post.likes.includes(userId)) {
      await post.updateOne({ $pull: { likes: userId } });
      res.status(200).json("Post disliked");
    } else {
      await post.updateOne({ $push: { likes: userId } });
      res.status(200).json("Post liked");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get timeline posts
export const getTimelinePosts = async (req, res) => {
  const userId = req.params.id
  try {
    const currentUserPosts = await PostModel.find({ userId: userId });

    const followingPosts = await User.aggregate([
      { 
        $match: {
          _id: new mongoose.Types.ObjectId(userId),
        },
      },
      {
        $lookup: {
          from: "posts",
          localField: "following",
          foreignField: "userId",
          as: "followingPosts",
        },
      },
      {
        $project: {
          followingPosts: 1,
          _id: 0,
        },
      },
    ]);

    res.status(200).json(
      currentUserPosts
        .concat(...followingPosts[0].followingPosts)
        .sort((a, b) => {
          return new Date(b.createdAt) - new Date(a.createdAt);
        })
    );
  } catch (error) {
    res.status(500).json(error);
  }
};


