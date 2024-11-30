import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaHeart, FaRegHeart, FaComment, FaEnvelope } from "react-icons/fa";
import UserNavbar from "../components/usernavbar";
import Avatar from "../assets/MYLOGO.png"; // Ensure this path is correct
import image1 from "../assets/wallpaper3.jpg"; 
import image2 from "../assets/wallpaper.jpg"; 

export default function UserHome() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPostsData = async () => {
      try {
        console.log("Fetching posts...");
        const response = await axios.get(
          "http://localhost:3250/api/post/posts"
        );
        console.log("API Response:", response.data);

        if (Array.isArray(response.data)) {
          setPosts(response.data);
        } else {
          console.error("Invalid API response:", response.data);
        }
      } catch (error) {
        console.error("Error fetching posts:", error.message);
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
      const response = await axios.post(`/api/post/${postId}/like`, {}, config);
      console.log("Like Response:", response.data);

      setPosts((prev) =>
        prev.map((post) =>
          post._id === postId ? { ...post, liked: !post.liked } : post
        )
      );
    } catch (error) {
      console.error("Error liking post:", error.message);
    }
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
                  {/* Header */}
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
                      src={image2}
                      alt={post.title || "Post Image"}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>

                  {/* Actions */}
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-">
                      <div className="flex gap-6 text-gray-700">
                        <button
                          onClick={() => handleLike(post._id)}
                          className="text-2xl"
                        >
                          {post.likes.includes("currentUserId") ? (
                            <FaHeart className="text-red-500" />
                          ) : (
                            <FaRegHeart />
                          )}
                        </button>
                        <Link to={`/comments/${post._id}`} className="text-2xl">
                          <FaComment />
                        </Link>
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
                    {/* Description */}
                    <p className="text-gray-800 mb-2">
                      <span className="font-medium">{post.username}:</span>{" "}
                      {post.description}
                    </p>
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
