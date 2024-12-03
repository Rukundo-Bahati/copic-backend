import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CreatePost() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image || !title || !description) {
      toast.error("Please fill in all fields.");
      return;
    }

    const formData = new FormData();
    formData.append("photographerId", user._id);
    formData.append("image", image);
    formData.append("title", title);
    formData.append("description", description);

    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const config = { headers: { Authorization: `Bearer ${token}` } };

      const response = await axios.post(
        "http://localhost:3250/api/post/create",
        formData,
        config
      );

      if (response && response.data) {
        toast.success("Post created successfully!");
        navigate("/user");  
      } else {
        toast.error("Failed to create the post.");
      }

      // Reset fields
      setImage(null);
      setPreview(null);
      setTitle("");
      setDescription("");

    } catch (error) {
      console.error("Error creating post:", error.message);
      toast.error("Failed to create post. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Create a Post
        </h2>

        {/* Image Preview */}
        {preview ? (
          <div className="mb-4">
            <img
              src={preview}
              alt="Preview"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        ) : (
          <div className="mb-4 text-gray-500 text-center border-dashed border-2 border-gray-300 rounded-lg p-6">
            Image preview will appear here
          </div>
        )}

        {/* Image Upload */}
        <div className="mb-4">
          <label
            htmlFor="image"
            className="block text-gray-700 font-medium mb-2"
          >
            Upload Image
          </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            className="block w-full px-3 py-2 border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-500"
          />
        </div>

        {/* Title */}
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-gray-700 font-medium mb-2"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="block w-full px-3 py-2 border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-500"
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-medium mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
            className="block w-full px-3 py-2 border rounded-md resize-none focus:ring focus:ring-indigo-300 focus:border-indigo-500"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Create Post"}
        </button>
      </form>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
}
