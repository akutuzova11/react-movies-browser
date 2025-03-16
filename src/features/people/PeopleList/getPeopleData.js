import { apiKey, apiUrl } from "../../../api/api";

export const getPopularPeople = async (page) => {
  try {
    const response = await fetch(
      `${apiUrl}/person/popular?language=en-US&page=${page}&api_key=${apiKey}`
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch popular people: ${response.statusText}`);
    }
    const data = await response.json();

    if (!data || !data.results) {
      throw new Error("Invalid API response");
    }
    return {
      page: data.page,
      results: data.results,
      total_results: data.total_results,
      total_pages: data.total_pages,
    };
  } catch (error) {
    console.error("Error fetching popular people:", error);
    throw new Error(`Error fetching popular people: ${error.message}`);
  }
};
