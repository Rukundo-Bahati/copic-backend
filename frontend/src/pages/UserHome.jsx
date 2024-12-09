import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHeart,
  FaRegHeart,
  FaComment,
  FaEnvelope,
  FaShareAlt,
} from "react-icons/fa";
import Avatar from "../assets/MYLOGO.png";
import { fetchPosts } from "../redux/fetchPosts";
import axios from "axios";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import { useSelector } from "react-redux";

export default function UserHome() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activePostId, setActivePostId] = useState(null);
  const [commentText, setCommentText] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [comments, setComments] = useState([]);

  const currentUserId = useSelector((state) => state.user?.user?._id);

  const fetchComments = async (postId) => {
    try {
      const response = await axios.get(`/api/comments/getComments/${postId}`);
      if (Array.isArray(response.data)) {
        setComments(response.data); // Successfully fetched comments
      } else {
        console.error("Comments data is not an array", response.data);
        setComments([]); // Reset if not an array
      }
    } catch (error) {
      console.error("Error fetching comments:", error.message);
    }
  };

  useEffect(() => {
    if (activePostId) {
      fetchComments(activePostId); // Fetch comments when post is active
    }
  }, [activePostId]);

  useEffect(() => {
    const fetchPostsData = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPostsData();
  }, []);

  const handleLike = async (postId) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("Token not found");
        return;
      }

      const config = { headers: { Authorization: `Bearer ${token}` } };
      await axios.post(`/api/post/${postId}/like`, {}, config);

      setPosts((prev) =>
        prev.map((post) =>
          post._id === postId
            ? {
                ...post,
                liked: !post.liked,
                likes: post.liked
                  ? post.likes.filter((id) => id !== currentUserId)
                  : [...post.likes, currentUserId],
              }
            : post
        )
      );
    } catch (error) {
      console.error("Error liking post:", error.message);
    }
  };

  const handleComment = async (postId) => {
    if (postId === activePostId) {
      setActivePostId(null); // Close the comment modal
      setComments([]);
      setCommentText("");
    } else {
      setActivePostId(postId); // Open the comment modal
      setCommentText("");
      try {
        const response = await axios.get(`/api/comments/getComments/${postId}`);
        if (Array.isArray(response.data)) {
          setComments(response.data); // Set comments only if data is an array
        } else {
          console.error("Fetched data is not an array:", response.data);
        }
      } catch (error) {
        console.error("Error fetching comments:", error.message);
      }
    }
  };

  const handleAddComment = async (postId) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("Token not found");
        return;
      }

      const config = { headers: { Authorization: `Bearer ${token}` } };
      const { data } = await axios.post(
        `/api/comments/addComment/${postId}`, // Ensure the postId is part of the URL
        { userId: currentUserId, text: commentText }, // Include userId
        config
      );

      setComments((prev) => [...prev, data.comment]); // Add the new comment
      setCommentText(""); // Reset comment text
    } catch (error) {
      console.error("Error adding comment:", error.message);
    }
  };

  const handleEmojiSelect = (emoji) => {
    setCommentText((prev) => prev + emoji.native);
  };


  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="py-5 px-4">
        {loading ? (
          <p className="text-center text-gray-600">Loading posts...</p>
        ) : (
          <div className="flex flex-col gap-8 items-center">
            {Array.isArray(posts) && posts.length > 0 ? (
              posts.map((post) => (
                <div
                  key={post._id}
                  className="bg-white max-w-5xl w-full rounded-lg shadow-md overflow-hidden"
                >
                  <div className="flex items-center p-3">
                    <img
                      src={post.userAvatar || Avatar}
                      alt={post.username || "User"}
                      className="w-12 h-12 rounded-full"
                    />
                    <h3 className="ml-4 text-lg font-semibold text-gray-800">
                      {post.username || "Anonymous"}
                    </h3>
                  </div>

                  <div className="relative w-full h-[500px] bg-gray-200">
                    <img
                      src={post.image}
                      alt={post.title || "Post Image"}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex gap-6 text-gray-700">
                        <button
                          onClick={() => handleLike(post._id)}
                          className="text-2xl"
                        >
                          {post.likes.includes(currentUserId) ? (
                            <FaHeart className="text-red-500" />
                          ) : (
                            <FaRegHeart />
                          )}
                        </button>
                        <button
                          onClick={() => handleComment(post._id)}
                          className="text-2xl"
                        >
                          <FaComment />
                        </button>
                        <button className="text-2xl">
                          <FaShareAlt />
                        </button>
                      </div>
                      <div className="flex gap-4 items-center">
                        <span className="text-gray-500 text-sm">
                          {post.likes.length} likes
                        </span>
                        <Link to={`/chat/${post.photographerId}`}>
                          <FaEnvelope className="text-xl text-gray-700 hover:text-gray-900" />
                        </Link>
                      </div>
                    </div>

                    {activePostId === post._id && (
                      <div className="mt-4 bg-gray-50 border-t pt-4">
                        <textarea
                          value={commentText}
                          onChange={(e) => setCommentText(e.target.value)}
                          placeholder="Write a comment..."
                          className="w-full border border-gray-300 p-2 rounded-md mb-2 resize-none"
                        />
                        <div className="flex items-center justify-between">
                          <button
                            onClick={() =>
                              setShowEmojiPicker((prev) => !prev)
                            }
                            className="bg-gray-200 text-gray-600 px-3 py-1 rounded-md"
                          >
                            Emoji
                          </button>
                          <button
                            onClick={() => handleAddComment(post._id)}
                            className="bg-blue-500 text-white px-4 py-2 rounded-md"
                          >
                            Comment
                          </button>
                        </div>
                        {showEmojiPicker && (
                          <Picker
                            data={data}
                            onEmojiSelect={handleEmojiSelect}
                          />
                        )}
                        <div className="mt-4">
                          {comments.length > 0 ? (
                            comments.map((comment) => (
                              <div
                                key={comment._id}
                                className="flex items-start gap-2 mb-2"
                              >
                                <img
                                  src={comment.userAvatar || Avatar}
                                  alt={comment.username || "User"}
                                  className="w-8 h-8 rounded-full"
                                />
                                <div>
                                  <p className="text-gray-800 font-medium">
                                    {comment.username || "Anonymous"}
                                  </p>
                                  <p className="text-gray-600 text-sm">
                                    {comment.text}
                                  </p>
                                </div>
                              </div>
                            ))
                          ) : (
                            <p className="text-gray-500">No comments yet.</p>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-600">No posts available</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
