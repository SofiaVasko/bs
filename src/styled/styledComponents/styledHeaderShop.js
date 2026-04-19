import styled from "styled-components";
import { flexContainer, h1Container } from "../containers/styledContainers";
import { HeaderBooks, Ul } from "./styledHeaderBooks";
import { StyledLink } from "@/styled/styledComponents/styledHeader";

export const StyledLinkShop = styled(StyledLink)`
  position: relative;

  &:hover {
    opacity: 1;
  }
  &:hover > svg {
    opacity: 0.6;
  }
`;

export const HeaderShop = styled(HeaderBooks)`
  height: 40px;
`;

export const UlShop = styled(Ul)`
  justify-content: flex-end;
  padding: 0rem 1.5rem 0rem 0rem;
`;

export const QuantitySpan = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  transform: translate(100%, -70%);
  width: 24px;
  height: 24px;
  font-size: 0.8rem;
  font-variant-numeric: tabular-nums;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.color};
  color: ${(props) => props.theme.backgroundColor};
  border-radius: 50%;
`;
