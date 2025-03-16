import { formatDate } from "../../../../features/utils.js";
import {
  Poster,
  Wrapper,
  TileTitle,
  ReleaseDate,
  TileContent,
  PosterWrapper,
} from "../../../components/StylesDetailsTile/styled.js";
import { ProductionInfo } from "./ProductionInfo/index.js";
import { Ratings } from "./Ratings/index.js";
import { MovieDescription } from "./Description/index.js";
import { Genre } from "./Genre/index.js";
import { theme } from "../../../../core/theme.js";
import { useEffect, useState } from "react";
import { MovieMissingPoster } from "../MovieMissingPoster/index.js";

export const MovieDetailsTile = ({
  posterPath,
  title,
  productionCountries,
  releaseDate,
  genres,
  voteAverage,
  voteCount,
  overview,
  genresError,
}) => {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= theme.breakpoint.mobileMax
  );

  const handleResize = () =>
    setIsMobile(window.innerWidth <= theme.breakpoint.mobileMax);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getCountries = (countries) => {
    if (!countries || countries.length === 0) return "N/A";

    return countries
      .map((country) => {
        if (isMobile && country.name?.includes(" ")) {
          return country.iso_3166_1;
        } else {
          return country.name || "N/A";
        }
      })
      .join(", ");
  };

  return (
    <Wrapper>
      <PosterWrapper>
        {posterPath ? (
          <Poster
            src={`https://image.tmdb.org/t/p/w500${posterPath}`}
            alt={`poster of ${title}`}
          />
        ) : (
          <MovieMissingPoster />
        )}
      </PosterWrapper>
      <TileContent>
        {title ? <TileTitle>{title}</TileTitle> : <TileTitle>N/A</TileTitle>}
        {releaseDate ? (
          <ReleaseDate>{releaseDate.slice(0, 4)}</ReleaseDate>
        ) : (
          <ReleaseDate>N/A</ReleaseDate>
        )}
        <ProductionInfo
          info={{
            productionCountries: getCountries(productionCountries),
            date: formatDate(releaseDate),
          }}
        />
        <Genre genres={genres} genresError={genresError} />
        <Ratings
          ratings={{ rate: voteAverage, maxRate: "/ 10", votes: voteCount }}
        />
      </TileContent>
      <MovieDescription movieDescription={{ description: overview }} />
    </Wrapper>
  );
};
