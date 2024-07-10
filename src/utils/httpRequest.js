import axios from "axios";
const spotifyAPI = axios.create({
  baseURL: process.env.REACT_APP_SPOTIFY_API,
});

export const spotifyAPIGet = async (path, option = {}) => {
  try {
    const token = localStorage.getItem("token");
    spotifyAPI.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const response = await spotifyAPI.get(path, option);
    console.log("🚀 ~ get ~ response:", response);
    return response.data;
  } catch (error) {
    console.error("An error occurred:", error);
    throw error; // Rethrow the error to be handled by the caller
  }
};
