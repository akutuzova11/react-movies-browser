import { toPersonPage } from "../../../../../core/routes";
import { PersonMissingPoster } from "../../PersonMissingPoster";
import {
  ContentPerson,
  PersonImage,
  PersonName,
  PersonSubtitle,
  PersonTileWrapper,
} from "./styled";

export const PersonTile = ({
  id,
  profilePath,
  name,
  extraMargin,
  showSubtitle = true,
  character,
  jobs = [],
}) => {
  const jobText = jobs.join(", ");
  return (
    <PersonTileWrapper to={toPersonPage({ id: id })}>
      {profilePath ? (
        <PersonImage
          src={`https://image.tmdb.org/t/p/h632${profilePath}`}
          alt={`poster of ${name}`}
        />
      ) : (
        <PersonMissingPoster />
      )}
      <ContentPerson $extraMargin={extraMargin}>
        {name && <PersonName>{name}</PersonName>}
        {showSubtitle && (
          <PersonSubtitle>{character || jobText}</PersonSubtitle>
        )}
      </ContentPerson>
    </PersonTileWrapper>
  );
};
