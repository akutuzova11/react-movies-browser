import axios from "axios";
import { apiKey, apiUrl } from "../../../api/api";

export const getPersonCredits = async (personId) => {
  try {
    const response = await axios.get(
      `${apiUrl}/person/${personId}/movie_credits?language=en-US&api_key=${apiKey}`
    );
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch credits: ${error.message}`);
    throw error;
  }
};
