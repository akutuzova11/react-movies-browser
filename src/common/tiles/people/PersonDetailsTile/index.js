import { formatDate } from "../../../../features/utils.js";
import { BirthInfo } from "./BirthInfo/index.js";
import { PersonDescription } from "../../movies/MovieDetailsTile/Description";
import {
  Poster,
  PosterWrapper,
  TileContent,
  TileTitle,
  Wrapper,
} from "../../../components/StylesDetailsTile/styled.js";
import { PersonMissingPoster } from "../../people/PersonMissingPoster";

export const PersonDetailsTile = ({
  personDetailsSize,
  profilePath,
  name,
  birthday,
  placeOfBirth,
  biography,
}) => {
  return (
    <Wrapper $personDetailsSize={personDetailsSize}>
      <PosterWrapper $personDetailsSize={personDetailsSize}>
        {profilePath ? (
          <Poster
            src={`https://image.tmdb.org/t/p/h632${profilePath}`}
            alt={`poster of ${name}`}
          />
        ) : (
          <PersonMissingPoster />
        )}
      </PosterWrapper>
      <TileContent>
        {name ? (
          <TileTitle $personDetailsSize={personDetailsSize}>{name}</TileTitle>
        ) : (
          <TileTitle>N/A</TileTitle>
        )}
        <BirthInfo
          $personDetailsSize={personDetailsSize}
          info={{
            dateOfBirth: formatDate(birthday),
            placeOfBirth: placeOfBirth,
          }}
        />
      </TileContent>
      <PersonDescription personDescription={{ biography }} />
    </Wrapper>
  );
};
