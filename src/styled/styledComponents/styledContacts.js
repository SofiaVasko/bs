import styled from "styled-components";
import { flexContainer, h1Container } from "../containers/styledContainers";
import Image from "next/image";

export const Section = styled.section`
  flex: 1;
  ${flexContainer}

  @media screen and (max-width: 600px) {
    flex-direction: column-reverse;
    gap: 5rem;
  }
`;
export const Div = styled.div`
  ${flexContainer}
  flex-direction: column;
  flex: 1;
  gap: 6rem;
  padding: 0.5rem;

  @media screen and (max-width: 600px) {
    gap: 2.5rem;
    padding: 1rem;
  }
`;

export const DivImg = styled.div`
  flex: 1;
  align-self: center;

  @media screen and (max-width: 600px) {
    padding-bottom: 3rem;
  }
`;

export const Img = styled(Image)`
  max-width: 720px;
  width: 100%;
  max-height: 540px;
  height: 100%;

  @media screen and (max-width: 600px) {
    max-width: 420px;
    max-height: 240px;
  }
`;

export const DivA = styled.div`
  ${flexContainer}
  gap: 2rem;
`;

export const H2 = styled.h2`
  ${h1Container}
  text-transform: none;
  text-align: center;

  @media screen and (max-width: 600px) {
    padding-top: 2rem;
  }
`;
