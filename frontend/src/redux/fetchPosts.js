// utils/fetchPosts.js
import axios from "axios";

export const fetchPosts = async () => {
  try {
    console.log("Fetching posts...");
    const response = await axios.get("http://localhost:3250/api/post/posts");
    console.log("API Response:", response.data);

    if (Array.isArray(response.data)) {
      return response.data;
    } else {
      console.error("Invalid API response:", response.data);
      return [];
    }
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};
