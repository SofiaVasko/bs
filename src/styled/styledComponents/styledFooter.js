import styled from "styled-components";
import { flexContainer, h1Container } from "../containers/styledContainers";

export const StyledFooter = styled.footer`
  background-color: ${(props) => props.theme.backgroundColor};
  width: 100%;
  height: 35px;
  ${flexContainer}
`;
export const Div = styled.div`
  ${flexContainer}
  ${h1Container}
justify-content: space-between;
  font-size: 0.9rem;
  text-transform: none;
  padding: 0.5rem;
  color: ${(props) => props.theme.color};
  border-top: ${(props) => props.theme.border};

  @media screen and (max-width: 540px) {
    padding: 0.2rem;
  }

  @media screen and (max-width: 340px) {
    font-size: 0.8rem;
  }
`;

export const DevContact = styled.a`
  color: ${(props) => props.theme.color};
  transition: transform 0.23s ease;

  &:hover {
    opacity: 0.8;
    transform: scale(0.9);
  }
`;
