import {
  Wrapper,
  Content,
  NameItemDisplay,
  ContentItem,
} from "../../../movies/MovieDetailsTile/ProductionInfo/styled";
import { useIsMobile } from "../../../../../hooks/useIsMobile";

export const BirthInfo = ({ info, personDetailsSize }) => {
  const isMobile = useIsMobile();

  return (
    <Wrapper>
      <Content>
        <NameItemDisplay>
          {isMobile ? "Birth:" : "Date of birth:"}
        </NameItemDisplay>
        <ContentItem $personDetailsSize={personDetailsSize}>
          {info.dateOfBirth || "N/A"}
        </ContentItem>
      </Content>
      <Content>
        <NameItemDisplay>Place of birth:</NameItemDisplay>
        <ContentItem $personDetailsSize={personDetailsSize}>
          {info.placeOfBirth || "N/A"}
        </ContentItem>
      </Content>
    </Wrapper>
  );
};
