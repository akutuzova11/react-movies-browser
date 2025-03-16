import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";
import { MovieDetailsTile } from "../../../common/tiles/movies/MovieDetailsTile";
import { PersonTile } from "../../../common/tiles/people/PersonCardTile/PersonTile";
import { PersonContent } from "../../../common/tiles/people/PersonCardTile/styled";
import { Section } from "../../../common/components/Section";
import { MovieBanner } from "../../../common/tiles/movies/MovieDetailsTile/banner/MovieBanner";
import { SectionBanner } from "../../../common/tiles/movies/MovieDetailsTile/banner/SectionBanner";
import { Wrapper } from "../../../styles/Wrapper";
import {
  fetchMovieDetails,
  selectMovieDetails,
  selectMoviesState,
} from "../moviesSlice";
import {
  selectCastError,
  selectCast,
  selectCastLoading,
  selectCrew,
  selectCrewError,
  selectCrewLoading,
} from "../../creditsSlice";
import { Loading } from "../../../common/components/Loading";
import { Error } from "../../../common/components/Error";
import { Article } from "../../../common/components/Article";
import { groupCrewPeople } from "../../groupedCrew";
import { selectGenresError } from "../genresSlice";

function MoviePage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const movieDetails = useSelector(selectMovieDetails);
  const cast = useSelector(selectCast);
  const crew = useSelector(selectCrew);
  const { loading, error } = useSelector(selectMoviesState);
  const genresError = useSelector(selectGenresError);
  const castError = useSelector(selectCastError);
  const crewError = useSelector(selectCrewError);
  const castLoading = useSelector(selectCastLoading);
  const crewLoading = useSelector(selectCrewLoading);

  useEffect(() => {
    dispatch(fetchMovieDetails(id));
  }, [dispatch, id]);

  const groupedCrew = groupCrewPeople(crew);

  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        <>
          {movieDetails && (
            <SectionBanner as Section
              body={
                movieDetails.backdrop_path ? (
                  <MovieBanner
                    backdropPath={movieDetails.backdrop_path}
                    title={movieDetails.title}
                    voteAverage={movieDetails.vote_average}
                    voteCount={movieDetails.vote_count}
                  />
                ) : null
              }
            />
          )}
          <Wrapper>
            <Section
              sectionHeader=""
              body={
                <>
                  {movieDetails && (
                    <MovieDetailsTile
                      posterPath={movieDetails.poster_path}
                      title={movieDetails.title}
                      productionCountries={movieDetails.production_countries}
                      releaseDate={movieDetails.release_date}
                      voteAverage={movieDetails.vote_average}
                      voteCount={movieDetails.vote_count}
                      overview={movieDetails.overview}
                      genres={movieDetails.genres}
                      genresError={genresError}
                    />
                  )}

                  {movieDetails && (
                    <Article
                      articleHeader={
                        cast && cast.length > 0 ? "Cast" : null
                      }
                      body={
                        castLoading ? (
                          <Loading />
                        ) : castError || !cast || cast.length === 0 ? null : (
                          <PersonContent>
                            {cast.map((castMember, index) => (
                              <PersonTile
                                key={`${castMember.id}-${castMember.character}-${index}`}
                                id={castMember.id}
                                showSubtitle={true}
                                profilePath={castMember.profile_path}
                                name={castMember.name}
                                character={castMember.character}
                              />
                            ))}
                          </PersonContent>
                        )
                      }
                    />
                  )}

                  {movieDetails && (
                    <Article
                      articleHeader={
                        groupedCrew && groupedCrew.length > 0
                          ? "Crew"
                          : null
                      }
                      body={
                        crewLoading ? (
                          <Loading />
                        ) : crewError ||
                          !groupedCrew ||
                          groupedCrew.length === 0 ? null : (
                          <PersonContent>
                            {groupedCrew.map((crewMember, index) => (
                              <PersonTile
                                key={`${crewMember.id}-${crewMember.jobs}-${index}`}
                                id={crewMember.id}
                                profilePath={crewMember.profile_path}
                                name={crewMember.name}
                                jobs={crewMember.jobs}
                              />
                            ))}
                          </PersonContent>
                        )
                      }
                    />
                  )}
                </>
              }
            />
          </Wrapper>
        </>
      )}
    </>
  );
}
export default MoviePage;
