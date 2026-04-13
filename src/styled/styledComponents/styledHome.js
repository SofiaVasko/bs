import styled from "styled-components";
import { flexContainer, h1Container } from "../containers/styledContainers";
import Image from "next/image";

export const Section = styled.section`
  ${flexContainer}
  flex-direction: row-reverse;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const Div = styled.div`
  flex: 1;
`;

export const DivImg = styled.div`
  flex: 1;
  align-self: center;
`;

export const Img = styled(Image)`
  max-width: 679px;
  max-height: 666px;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 800px) {
    max-width: 379px;
    max-height: 366px;
  }
`;

export const DivA = styled.div`
  ${flexContainer}
  padding: 5rem 0rem;

  flex-basis: calc((100%-15px) / 2);

  @media screen and (max-width: 800px) {
    padding: 1rem 0rem 0rem;
  }
`;

export const Svg = styled.svg`
  fill: ${(props) => props.theme.color};

  &:hover {
    fill: ${(props) => props.theme.accentColor};
    transform: scale(1.1);
  }
`;

export const H1 = styled.h1`
  color: ${(props) => props.theme.color};
  ${h1Container}
`;

export const P = styled.p`
  ${h1Container}
  text-transform: none;
  text-align: justify;
  padding: 0rem 2rem 3rem;

  @media screen and (max-width: 800px) {
    padding-top: 1rem;
  }
`;
