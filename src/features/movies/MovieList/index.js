import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Section } from "../../../common/components/Section";
import { Wrapper } from "../../../styles/Wrapper";
import { Content } from "./styled";
import { MovieTile } from "../../../common/tiles/movies/MovieTile";
import {
  selectMovies,
  selectMoviesState,
  fetchSearchResults,
  fetchPopularMovies,
  selectTotalPages,
  selectTotalResults,
} from "../moviesSlice";
import { Loading } from "../../../common/components/Loading";
import { Error } from "../../../common/components/Error";
import { useQueryParameter } from "../../../common/components/Navigation/Search/queryParameters";
import { Pagination } from "../../../common/components/Pagination";
import { NoResults } from "../../../common/components/NoResults";
import {
  pageQueryParamName,
  searchQueryParamName,
} from "../../../common/QueryParamName";
import { selectGenresError } from "../genresSlice";

function MovieList() {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);
  const movieCount = movies?.results?.length || 0;
  const { loading, error } = useSelector(selectMoviesState);
  const genresError = useSelector(selectGenresError);

  const searchQuery = (useQueryParameter(searchQueryParamName) || "")
    .trim()
    .toLowerCase();
  const page = Number(useQueryParameter(pageQueryParamName)) || 1;

  const totalPages = useSelector(selectTotalPages);
  const totalResults = useSelector(selectTotalResults);

  useEffect(() => {
    if (searchQuery) {
      dispatch(
        fetchSearchResults({
          page,
          searchQuery,
          searchType: "movie",
        })
      );
    } else {
      dispatch(fetchPopularMovies(page));
    }
  }, [dispatch, page, searchQuery]);

  return (
    <Wrapper>
      {loading && searchQuery ? (
        <Section
          sectionHeader={`Search results for "${searchQuery}"`}
          body={<Loading />}
        />
      ) : loading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : movieCount > 0 ? (
        <>
          <Section
            sectionHeader={
              searchQuery
                ? `Search results for "${searchQuery}" (${totalResults})`
                : "Popular movies"
            }
            body={
              <Content>
                {movies.results.map(
                  ({
                    id,
                    poster_path,
                    title,
                    release_date,
                    genre_ids,
                    vote_average,
                    vote_count,
                  }) => (
                    <MovieTile
                      key={id}
                      id={id}
                      posterPath={poster_path}
                      title={title}
                      releaseDate={release_date}
                      genreIds={genre_ids}
                      voteAverage={vote_average}
                      voteCount={vote_count}
                      genresError={genresError}
                    />
                  )
                )}
              </Content>
            }
          />
          <Pagination page={page} totalPages={totalPages} />
        </>
      ) : (
        <Section
          sectionHeader={
            searchQuery
              ? `Sorry, there are no results for "${searchQuery}"`
              : "No movies available"
          }
          body={<NoResults />}
        />
      )}
    </Wrapper>
  );
}

export default MovieList;
