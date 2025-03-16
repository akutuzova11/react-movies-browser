import { apiKey, apiUrl } from "../../../api/api";

export const getPopularMovies = async (page) => {
  try {
    const response = await fetch(
      `${apiUrl}/movie/popular?language=en-US&page=${page}&api_key=${apiKey}`
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch popular movies: ${response.statusText}`);
    }
    const data = await response.json();

    if (!data || !data.results) {
      throw new Error("Invalid API response");
    }

    return {
      page: data.page,
      results: data.results,
      total_pages: data.total_pages,
      total_results: data.total_results,
    };
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    throw new Error(`Error fetching popular movies: ${error.message}`);
  }
};
