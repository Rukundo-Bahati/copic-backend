import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaHeart, FaRegHeart, FaComment, FaShare } from "react-icons/fa";
import UserNavbar from "../components/usernavbar";
import { useDispatch, useSelector } from "react-redux";

export default function UserHome() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const currentUserId = useSelector((state) => state.user._id);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPostsData = async () => {
      try {
        const response = await axios.get("http://localhost:3250/api/post/posts");
        if (Array.isArray(response.data)) {
          setPosts(response.data);
        } else {
          console.error("Posts data is not an array:", response.data);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setLoading(false);
      }
    };
    fetchPostsData();
  }, []);

  const handleLike = async (postId) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      await axios.post(`/api/post/${postId}/like`, {}, config);
      setPosts((prev) =>
        prev.map((post) =>
          post._id === postId ? { ...post, liked: !post.liked } : post
        )
      );
    } catch (error) {
      console.error("Error liking post:", error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <UserNavbar />
      <div className="py-8 px-4">
        <h2 className="text-center text-3xl font-bold mb-8 text-black">
          Explore Photographers' Posts
        </h2>
        {loading ? (
          <p className="text-center text-gray-600">Loading posts...</p>
        ) : (
          <div className="flex flex-col gap-6 items-center">
            {Array.isArray(posts) && posts.length > 0 ? (
              posts.map((post) => (
                <div
                  key={post._id}
                  className="bg-white max-w-md w-full rounded-lg shadow-md overflow-hidden"
                >
                  {/* Header */}
                  <div className="flex items-center p-4">
                    <img
                      src={post.userAvatar || "default-avatar.jpg"}
                      alt={post.username}
                      className="w-10 h-10 rounded-full"
                    />
                    <h3 className="ml-3 font-medium text-gray-800">
                      {post.username}
                    </h3>
                  </div>

                  {/* Image */}
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover"
                  />

                  {/* Actions */}
                  <div className="p-4">
                    <div className="flex justify-between items-center">
                      <div className="flex gap-4 text-gray-700">
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
                        <Link
                          to={`/comments/${post._id}`}
                          className="text-2xl"
                        >
                          <FaComment />
                        </Link>
                        <button className="text-2xl">
                          <FaShare />
                        </button>
                      </div>
                      <span className="text-gray-500 text-sm">
                        {post.likes.length} likes
                      </span>
                    </div>
                    {/* Description */}
                    <p className="text-gray-800 mt-2">
                      <span className="font-medium">{post.username}:</span>{" "}
                      {post.description}
                    </p>
                    <Link
                      to={`/chat/${post.photographerId}`}
                      className="block mt-4 text-center text-white bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600"
                    >
                      Chat with Photographer
                    </Link>
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
