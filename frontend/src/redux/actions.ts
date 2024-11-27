import axios from "axios";

export const fetchPosts = () => async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3250/api/post/posts");
      dispatch({ type: "FETCH_POSTS_SUCCESS", payload: response.data });
    } catch (error) {
      console.error("Error fetching posts", error);
      dispatch({ type: "FETCH_POSTS_ERROR", error: error });
    }
  };
  

// In your Redux action (e.g., userActions.js):
export const fetchUser = () => async (dispatch) => {
  try {
    const response = await axios.get("/api/user/profile");  // Endpoint to get user profile
    dispatch({ type: "SET_USER", payload: response.data });
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};
