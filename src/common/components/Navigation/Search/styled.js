import styled from "styled-components";
import { ReactComponent as IconSearch } from "../../../../images/Search.svg";

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  border-radius: 33px;
  width: 432px;
  height: 48px;
  background-color: ${({ theme }) => theme.color.white};
  padding: 12px 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 100%;
    min-width: 288px;
    height: 44px;
    gap: 8px;
    padding: 14px 16px;
    margin-bottom: 16px;
  }
`;

export const SearchIcon = styled(IconSearch)`
  height: 24px;
  min-width: 24px;
  color: ${({ theme }) => theme.color.darkergrey};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    height: 16px;
    width: 16px;
  }
`;

export const Input = styled.input`
  border: none;
  outline: none;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 13px;
    line-height: 1.3;
  }
`;
