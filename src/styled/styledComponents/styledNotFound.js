import styled from "styled-components";
import { flexContainer, h1Container } from "../containers/styledContainers";
import Link from "next/link";

export const Section = styled.section`
  flex: 1;
  ${flexContainer}
  flex-direction: column;
  overflow-x: hidden;
`;

export const Div = styled.div`
  padding-top: 2rem;
`;
export const H1 = styled.h1`
  ${h1Container}
  color: ${(props) => props.theme.accentColor};
`;
export const H2 = styled.h2`
  ${h1Container}
  color: ${(props) => props.theme.accentColor};
`;
export const P = styled.p`
  ${h1Container}
  line-height: 1.4;
  font-size: 0.9rem;
`;

export const StyledLink = styled(Link)`
  margin: 2rem 0rem;
  ${h1Container}
  text-transform: lowercase;
  background-color: ${(props) => props.theme.color};
  color: ${(props) => props.theme.backgroundColor};
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: none;
  transition: transform 0.23s ease;
  font-size: 0.9rem;

  &:hover {
    transform: scale(1.1);
  }
`;
