import axios from "axios";
import { apiKey, apiUrl } from "../../../api/api";

export const getPersonDetails = async (personId) => {
  try {
    const response = await axios.get(
      `${apiUrl}/person/${personId}?language=en-US&api_key=${apiKey}`
    );
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch person details: ${error.message}`);
    throw error;
  }
};
