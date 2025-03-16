import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";
import { Wrapper } from "../../../styles/Wrapper";
import { Section } from "../../../common/components/Section";
import { Content } from "../../movies/MovieList/styled";
import { PersonDetailsTile } from "../../../common/tiles/people/PersonDetailsTile";
import { MovieTile } from "../../../common/tiles/movies/MovieTile";
import {
  fetchPersonDetails,
  selectPersonDetails,
  selectPeopleState,
} from "../peopleSlice";
import { Article } from "../../../common/components/Article";
import { useIsMobile } from "../../../hooks/useIsMobile";
import {
  selectCast,
  selectCastError,
  selectCastLoading,
  selectCrew,
  selectCrewError,
  selectCrewLoading,
} from "../../creditsSlice";
import { Loading } from "../../../common/components/Loading";
import { Error } from "../../../common/components/Error";
import { groupCrewMovies } from "../../groupedCrew";

function PersonPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const personDetails = useSelector(selectPersonDetails);
  const { loading, error } = useSelector(selectPeopleState);
  const cast = useSelector(selectCast);
  const crew = useSelector(selectCrew);
  const castError = useSelector(selectCastError);
  const crewError = useSelector(selectCrewError);
  const castLoading = useSelector(selectCastLoading);
  const crewLoading = useSelector(selectCrewLoading);

  useEffect(() => {
    dispatch(fetchPersonDetails(id));
  }, [dispatch, id]);

  const isMobile = useIsMobile();
  const groupedCrewList = groupCrewMovies(crew);

  const castCount = cast ? cast.length : 0;
  const crewCount = crew ? crew.length : 0;

  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        <Wrapper>
          <Section
            sectionHeader=""
            body={
              <>
                {personDetails && (
                  <PersonDetailsTile
                    personDetailsSize
                    profilePath={personDetails.profile_path}
                    name={personDetails.name}
                    birthday={personDetails.birthday}
                    placeOfBirth={personDetails.place_of_birth}
                    biography={personDetails.biography}
                  />
                )}

                {personDetails && (
                  <Article
                    articleHeader={
                      cast && cast.length > 0
                        ? `Movies - cast (${castCount})`
                        : null
                    }
                    body={
                      castLoading ? (
                        <Loading />
                      ) : castError || !cast || cast.length === 0 ? null : (
                        <Content>
                          {cast.map(
                            (
                              {
                                id,
                                poster_path,
                                title,
                                release_date,
                                genre_ids,
                                vote_average,
                                vote_count,
                                character,
                              },
                              index
                            ) => (
                              <MovieTile
                                key={`${id}-${character}-${index}`}
                                id={id}
                                posterPath={poster_path}
                                title={title}
                                castCharacter={isMobile ? undefined : character}
                                releaseDate={
                                  isMobile
                                    ? release_date?.slice(0, 4)
                                    : release_date
                                }
                                genreIds={genre_ids}
                                voteAverage={vote_average}
                                voteCount={vote_count}
                              />
                            )
                          )}
                        </Content>
                      )
                    }
                  />
                )}

                {personDetails && (
                  <Article
                    articleHeader={
                      crew && crew.length > 0
                        ? `Movies - crew (${crewCount})`
                        : null
                    }
                    body={
                      crewLoading ? (
                        <Loading />
                      ) : crewError || !crew || crew.length === 0 ? null : (
                        <Content>
                          {groupedCrewList.map(
                            (
                              {
                                credit_id,
                                poster_path,
                                title,
                                release_date,
                                genre_ids,
                                vote_average,
                                vote_count,
                                jobs,
                              },
                              index
                            ) => (
                              <MovieTile
                                key={`${id}-${jobs.join(", ")}-${index}`}
                                id={credit_id}
                                posterPath={poster_path}
                                title={title}
                                crewJob={isMobile ? undefined : jobs.join(", ")}
                                releaseDate={
                                  isMobile
                                    ? release_date?.slice(0, 4)
                                    : release_date
                                }
                                genreIds={genre_ids}
                                voteAverage={vote_average}
                                voteCount={vote_count}
                              />
                            )
                          )}
                        </Content>
                      )
                    }
                  />
                )}
              </>
            }
          />
        </Wrapper>
      )}
    </>
  );
}

export default PersonPage;
