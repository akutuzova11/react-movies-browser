import axios from "axios";
import { apiKey, apiUrl } from "../../../api/api";

export const getCredits = async (movieId) => {
  try {
    const response = await axios.get(
      `${apiUrl}/movie/${movieId}/credits?api_key=${apiKey}`
    );
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch credits: ${error.message}`);
    throw error;
  }
};
