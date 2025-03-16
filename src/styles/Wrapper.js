import styled from "styled-components";

export const Wrapper = styled.main`
  max-width: 1400px;
  margin: 0 auto;
  overflow-wrap: anywhere;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 94px);
  overflow-y: auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    min-height: calc(100vh - 142px);
  }
`;
