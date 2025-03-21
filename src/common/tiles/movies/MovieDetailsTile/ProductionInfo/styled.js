import styled from "styled-components";

export const Wrapper = styled.div`
  list-style: none;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin: 0px;
  }
`;

export const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        gap: 4px;
    }
`;

export const NameItem = styled.p`
  color: ${({ theme }) => theme.color.darkergrey};
  margin: 0px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: none;
  }
`;

export const NameItemDisplay = styled(NameItem)`
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        display: block;
        font-size: 12px;
        line-height: 1.2;
    }
`;

export const ContentItem = styled.span`
    line-height: 1.2;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        line-height: ${({ $personDetailsSize }) => $personDetailsSize ? '1.2' : '1.3'};  
        font-size: 12px;
    }
`;
