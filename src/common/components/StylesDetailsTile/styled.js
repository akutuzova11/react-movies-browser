import styled from "styled-components";

export const Wrapper = styled.article`
  background: ${({ theme }) => theme.color.white};
  padding: 40px;
  box-shadow: ${({ theme }) => theme.shadow.elevation};
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  column-gap: 40px;
  margin-bottom: 64px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 16px;
    column-gap: 16px;
    margin-bottom: ${({ $personDetailsSize }) =>
        $personDetailsSize ? "24px" : "0px"};
  }
`;

export const PosterWrapper = styled.div`
  width: ${({ $personDetailsSize }) => ($personDetailsSize ? "399px" : "312px")};
  height: ${({ $personDetailsSize }) => ($personDetailsSize ? "564px" : "464px")};
  grid-row-end: span 2;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: ${({ $personDetailsSize }) =>
        $personDetailsSize ? "116px" : "114px"};
    height: ${({ $personDetailsSize }) =>
        $personDetailsSize ? "163px" : "169px"};
  }
`;

export const Poster = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.15);
  background-color: ${({ theme }) => theme.color.lightgrey};
  mix-blend-mode: multiply;
`;

export const TileContent = styled.div`
  display: grid;
  grid-area: 1 / 2;
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-row-gap: 8px;
  }
`;

export const TileTitle = styled.h1`
  font-weight: 600;
  font-size: 36px;
  line-height: 1.2;
  margin: 8px 0px -4px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-weight: 500;
    font-size: ${({ $personDetailsSize }) =>
        $personDetailsSize ? "14px" : "16px"};
    margin: ${({ $personDetailsSize }) =>
        $personDetailsSize ? "0px 0px 8px 0px" : "0px 0px -4px 0px"};
    line-height: 1.3;
  }
`;

export const ReleaseDate = styled.div`
  font-size: 22px;
  line-height: 1.2;
  margin-bottom: -4px;
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    color: ${({ theme }) => theme.color.darkergrey};
    font-size: 13px;
    line-height: 1.3;
    margin: 0px;
  }
`;
