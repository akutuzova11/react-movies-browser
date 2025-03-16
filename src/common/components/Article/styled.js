import styled from "styled-components";

export const Wrapper = styled.article`
  margin: 64px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin: 21px 0;
  }
`;

export const Header = styled.h2`
  margin: 0;
  font-size: 36px;
  font-weight: 600;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 20px;
  }
`;
