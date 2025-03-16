import axios from "axios";
import { apiKey, apiUrl } from "../api/api";

export const getSearchResults = async (page, searchQuery, searchType) => {
  try {
    const response = await axios.get(
      `${apiUrl}/search/${searchType}?query=${searchQuery}&
             include_adult=false&language=en-US&page=${page}&api_key=${apiKey}`
    );
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch search results: ${error.message}`);
    throw error;
  }
};
