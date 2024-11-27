import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaHeart, FaRegHeart, FaComment, FaShare } from "react-icons/fa";
import UserNavbar from "../components/usernavbar";
import { useDispatch, useSelector } from "react-redux"; // Import hooks for Redux

export default function UserHome() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const currentUserId = useSelector((state) => state.user._id); // Adjust based on your Redux state shape
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPostsData = async () => {
      try {
        const response = await axios.get("http://localhost:3250/api/post/posts");
        console.log("Received posts: ", response.data);
        
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
    <div className="bg-black bg-opacity-100">
      <UserNavbar />
      <div className="py-16 px-8 bg-gray-100">
        <h2 className="text-center text-3xl font-bold mb-8 text-black">
          Explore Photographers' Posts
        </h2>
        {loading ? (
          <p className="text-center text-white">Loading posts...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {Array.isArray(posts) && posts.length > 0 ? (
              posts.map((post) => (
                <div
                  key={post._id}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-40 object-cover rounded-md"
                  />
                  <h3 className="text-xl font-semibold mt-4 text-gray-800">{post.title}</h3>
                  <p className="text-gray-500 text-sm mt-2">{post.description}</p>
                  <div className="flex items-center mt-4 gap-6">
                    <button
                      className="flex items-center text-sm text-gray-600 hover:text-red-500"
                      onClick={() => handleLike(post._id)}
                    >
                      {post.likes.includes(currentUserId) ? (
                        <FaHeart className="text-red-500" />
                      ) : (
                        <FaRegHeart />
                      )}
                      <span className="ml-2">{post.likes.length}</span>
                    </button>
                    <Link
                      to={`/comments/${post._id}`}
                      className="flex items-center text-sm text-gray-600 hover:text-blue-500"
                    >
                      <FaComment />
                      <span className="ml-2">{post.comments?.length}</span>
                    </Link>
                    <button className="flex items-center text-sm text-gray-600 hover:text-green-500">
                      <FaShare />
                    </button>
                  </div>
                  <Link
                    to={`/chat/${post.photographerId}`}
                    className="block mt-4 text-center text-white bg-red-500 px-4 py-2 rounded-md hover:bg-red-600 transition-all"
                  >
                    Chat with Photographer
                  </Link>
                </div>
              ))
            ) : (
              <p className="text-center text-white">No posts available</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
