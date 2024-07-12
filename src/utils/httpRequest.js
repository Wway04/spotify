import axios from "axios";
const spotifyAPI = axios.create({
  baseURL: process.env.REACT_APP_SPOTIFY_API,
});

export const spotifyAPIGet = async (path, option = {}) => {
  try {
    const token = localStorage.getItem("token");
    spotifyAPI.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const response = await spotifyAPI.get(path, option);
    return response.data;
  } catch (error) {
    console.error("An error occurred:", error);
    throw error; // Rethrow the error to be handled by the caller
  }
};
export const spotifyAPIPut = async (path, option = {}) => {
  try {
    const token = localStorage.getItem("token");
    spotifyAPI.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const response = await spotifyAPI.put(path, option);
    return response.data;
  } catch (error) {
    console.error("An error occurred:", error);
    throw error; // Rethrow the error to be handled by the caller
  }
};
export const spotifyAPIDelete = async (path) => {
  try {
    const token = localStorage.getItem("token");
    spotifyAPI.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const response = await spotifyAPI.delete(path);
    return response.data;
  } catch (error) {
    console.error("An error occurred:", error);
    throw error; // Rethrow the error to be handled by the caller
  }
};
