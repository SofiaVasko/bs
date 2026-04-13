import styled from "styled-components";
import { flexContainer, h1Container } from "../containers/styledContainers";

import {
  ImgBook,
  Img,
  DivPolaroids,
} from "@/styled/styledComponents/styledRecipe";

import book from "@/assets/iconsBooksBook/book.jpg";

export const ImgBookHear = styled(ImgBook)`
  max-width: 250px;
  max-height: 370px;

  transform: perspective(800px) rotateY(-35deg) rotateX(2deg) scale(1.05);

  @media screen and (max-width: 600px) {
    max-width: 190px;
    max-height: 230px;
  }
`;

export const H3 = styled.h3`
  margin-right: 0.5rem;
  ${h1Container}
  text-transform: none;
  text-align: right;
  line-height: 1.44;
  border: ${(props) => props.theme.border};
  max-width: 500px;
  align-self: flex-end;
  border-radius: 1rem;

  @media screen and (max-width: 600px) {
    margin: 0rem 0.5rem;
  }
`;

export const ImgHear = styled(Img)`
  max-width: 560px;
  max-height: 880px;

  @media screen and (max-width: 800px) {
    max-width: 360px;
    max-height: 680px;
  }
`;

export const DivPolaroidsHear = styled(DivPolaroids)`
  flex-direction: column;
  gap: 4rem;

  @media screen and (max-width: 800px) {
    flex-direction: row;
    gap: 0.5rem;
    padding: 1rem 0.2rem;
  }

  @media screen and (max-width: 600px) {
    gap: 1rem;
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;
    gap: 3rem;
    padding: 0.5rem 1rem;
  }
`;

export const DivTitle = styled.div`
  &:nth-child(even) {
    position: relative;
  }

  &:nth-child(even) > h3 {
    background-color: ${(props) => props.theme.color};
    color: ${(props) => props.theme.backgroundColor};
  }

  &:nth-child(odd) {
    box-shadow: ${(props) => props.theme.figureShadow};
    background-color: ${(props) => props.theme.backgroundColor};
  }

  max-width: 300px;
  max-height: 200px;
  width: 100%;
  height: 100%;
  transition:
    background-color 0.23s ease,
    color 0.23s ease,
    box-shadow 0.23s ease;
  padding: 2rem;

  &:nth-child(even):before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background: url(${book.src}) center / 100% no-repeat;
    filter: blur(5px);
    z-index: -1;
  }

  @media screen and (max-width: 800px) {
    height: 200px;
    padding: 1.5rem;
  }

  @media screen and (max-width: 600px) {
    max-width: 150px;
  }

  @media screen and (max-width: 500px) {
    max-width: 300px;
    max-height: 200px;
    width: 100%;
    height: 100%;
    padding: 2rem;
  }
`;
export const DivPresentation = styled.div`
  padding-top: 2rem;
  ${flexContainer}
  flex-direction: column;
  gap: 2rem;
`;

export const DivTextPresentation = styled.div`
  ${flexContainer}
  flex-direction: column;
  gap: 2rem;
`;

export const H2Presentation = styled.h2`
  ${h1Container}
  font-style: normal;
  padding: 0rem 4rem;
  text-transform: none;

  @media screen and (max-width: 600px) {
    padding: 0rem 2rem;
  }
`;

export const H3Title = styled.h3`
  padding: 1rem 1rem 2rem;
  ${h1Container}
  font-style: italic;
  line-height: 1.44;
  text-transform: none;
  text-align: justify;
  color: ${(props) => props.theme.color};

  @media screen and (max-width: 800px) {
    text-align: center;
    padding: 1rem;
  }

  @media screen and (max-width: 600px) {
    padding: 0.5rem;
  }

  @media screen and (max-width: 500px) {
    padding: 1rem 1rem 2rem;
  }
`;
