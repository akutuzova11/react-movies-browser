import axios from "axios";
import { apiKey, apiUrl } from "../../../api/api";

export const getMovieDetails = async (movieId) => {
  try {
    const response = await axios.get(
      `${apiUrl}/movie/${movieId}?language=en-US&api_key=${apiKey}`
    );
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch movie details: ${error.message}`);
    throw error;
  }
};
