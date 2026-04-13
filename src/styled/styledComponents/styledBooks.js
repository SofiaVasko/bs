import styled, { css } from "styled-components";
import {
  flexContainer,
  stopAnimationContainer,
} from "../containers/styledContainers";
import Image from "next/image";
import {
  spin,
  anotherSpin,
  slideDown,
  fade,
} from "@/styled/animations/styledAnimations";

export const Section = styled.section`
  flex: 1;
  ${flexContainer}

  @media screen and (max-width: 650px) {
    gap: 0.5rem;
  }
`;

export const DivRecipe = styled.div`
  background-color: ${(props) => props.theme.color};
  border-radius: 0.5rem;
  height: 345px;

  z-index: 4;
  overflow: hidden;
  margin: 2rem;

  ${flexContainer}

  flex: 1;

  height: 345px;

  @media screen and (max-width: 650px) {
    margin: 1rem 0rem 1rem 0.5rem;
    height: 285px;
  }
`;

export const DivIcons = styled.div`
  z-index: -1;
  ${flexContainer}
  flex-direction: column;
  animation: ${slideDown} 3s linear 0.3s infinite;

  ${stopAnimationContainer}

  @media screen and (max-width: 650px) {
    padding-left: 0.2rem;
  }
`;

export const Icon = styled.img`
  max-width: 50px;
  width: 100%;
  max-height: 50px;
  height: 100%;

  &:nth-child(even) {
    animation: ${spin} 3s linear 0.3s infinite;
  }
  &:nth-child(odd) {
    animation: ${anotherSpin} 3s linear 0.3s infinite;
  }

  @media screen and (max-width: 650px) {
    max-width: 35px;
    max-height: 35px;
  }
`;

export const DivBook = styled.div`
  flex: 1;
  ${flexContainer}
  gap: 0.5rem;
  background-color: red;
  border-radius: 0.5rem;
  margin: 2rem;

  height: 345px;

  @media screen and (max-width: 650px) {
    margin: 1rem 0.5rem 1rem 0rem;
    height: 285px;
  }
`;

export const Img = styled(Image)`
  max-width: 160px;
  width: 100%;
  max-height: 245px;
  height: 100%;
  align-self: flex-end;

  @media screen and (max-width: 650px) {
    max-width: 100px;
    max-height: 185px;

    max-height: 165px;
  }
`;

export const attributesImgParts = css`
  max-width: 59px;
  width: 100%;
  max-height: 345px;
  height: 100%;

  @media screen and (max-width: 650px) {
    max-width: 40px;
    max-height: 285px;
  }
`;

export const PartOne = styled(Image)`
  ${attributesImgParts}
  animation: ${fade} 3s ease 0.3s infinite;
  ${stopAnimationContainer}
`;
export const PartTwo = styled(Image)`
  ${attributesImgParts}
  animation: ${fade} 3s ease-in 0.3s infinite;
  ${stopAnimationContainer}
`;

export const PartThree = styled(Image)`
  ${attributesImgParts}
  animation: ${fade} 3s ease 0.3s infinite;
  ${stopAnimationContainer}
`;
