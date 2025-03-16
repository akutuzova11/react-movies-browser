import axios from "axios";
import { apiKey, apiUrl } from "../../api/api";

export const getGenres = async () => {
  try {
    const response = await axios.get(
      `${apiUrl}/genre/movie/list?language=en&api_key=${apiKey}`
    );
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch movie genres: ${error.message}`);
    throw error(`Error fetching movie genres: ${error.message}`);
  }
};
