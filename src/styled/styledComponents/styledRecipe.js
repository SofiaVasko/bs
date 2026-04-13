import styled, { css } from "styled-components";
import {
  flexContainer,
  h1Container,
  btnContainer,
} from "../containers/styledContainers";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";

export const Div = styled.div`
  ${flexContainer}

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const DivBook = styled.div`
  flex: 1;
  ${flexContainer}

  @media screen and (max-width: 800px) {
    flex-basis: 35%;
    padding: 0rem 1rem;
  }

  @media screen and (max-width: 600px) {
    flex: 1;
    padding: 1rem 0rem;
  }
`;

export const ImgBook = styled(Image)`
  max-width: 280px;
  max-height: 353px;
  width: 100%;
  height: 100%;
  transform: perspective(800px) rotateY(35deg) rotateX(5deg) scale(1.05);
  transform-style: preserve-3d;
  box-shadow: ${(props) => props.theme.bookShadow};
  transition:
    transform 0.23s ease,
    box-shadow 0.23s ease;

  &:hover {
    transform: perspective(800px) rotateY(0deg) rotateX(0deg) scale(1.08);
  }
`;

export const DivRecipe = styled.div`
  flex: 1;
  ${flexContainer}
  flex-direction: column;
  // gap: 6rem;
  gap: 3rem;
  padding-bottom: 4rem;

  @media screen and (max-width: 800px) {
    flex-basis: 65%;
  }

  @media screen and (max-width: 600px) {
    flex: 1;
  }
`;

export const DivWithIcon = styled.div`
  padding-top: 4rem;
  ${flexContainer}
  position: relative;
`;

export const H1 = styled.h1`
  ${h1Container}
  z-index: 2;
`;
export const Svg = styled.svg`
  z-index: -1;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  transform: translate(50%, -8%);
`;

export const H2 = styled.h2`
  ${h1Container}
  text-transform: none;
  font-style: italic;
`;

export const P = styled.p`
  ${h1Container}
  text-transform: none;
  text-align: justify;
  padding: 0rem 4rem;
  line-height: 1.44;

  @media screen and (max-width: 1100px) {
    padding: 0rem 1rem;
  }
`;

export const A = styled.a`
  ${btnContainer}
`;
export const LinkRecipe = styled(Link)`
  ${btnContainer}
`;

export const Block = styled.div`
  ${flexContainer}

  @media screen and (max-width: 800px) {
    padding: 0rem 1rem;
    flex-direction: column;
  }
`;
export const DivImg = styled.div`
  flex: 1;
  ${flexContainer}

  @media screen and (max-width: 800px) {
    flex-shrink: 0;
    width: 100%;
  }
`;

export const Img = styled(Image)`
  max-width: 512px;
  max-height: 615px;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 800px) {
    max-width: 412px;
    max-height: 515px;
  }
`;

export const DivPolaroids = styled.div`
  flex: 1;
  ${flexContainer}
  gap: 0rem;

  padding: 0.5rem 1rem;

  @media screen and (max-width: 800px) {
    padding: 0.5rem 0rem 0.5rem 1rem;
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const Figure = styled.figure`
  max-width: 200px;
  max-height: 400px;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.figureBackground};
  backdrop-filter: ${(props) => props.theme.figureBlur};
  box-shadow: ${(props) => props.theme.figureShadow};
  ${flexContainer}
  flex-direction: column;
  transform: translateX(15px) rotate(15deg);

  @media screen and (max-width: 500px) {
    max-height: 300px;
  }

  @media screen and (max-width: 360px) {
    transform: translateX(0px) rotate(0deg);
  }
`;

export const FigureSecond = styled(Figure)`
  transform: translateX(-15px) rotate(0deg);

  @media screen and (max-width: 500px) {
    transform: translateX(-15px) rotate(-15deg);
  }
`;

export const FigureThird = styled(Figure)`
  transform: translateX(-35px) rotate(-15deg);

  @media screen and (max-width: 500px) {
    transform: translateX(-15px) rotate(15deg);
  }
`;

export const ImgPin = styled.img`
  filter: drop-shadow(0px 20px 10px rgba(0, 0, 0, 0.25));
  width: 25px;
  height: 50px;
  transform: rotate(25deg);
`;

export const FigureImg = styled(Image)`
  max-width: 150px;
  max-height: 200px;
  width: 100%;
  height: 100%;
`;

export const Figcaption = styled.figcaption`
  padding: 1.5rem 0.5rem;

  ${h1Container}
  font-style: italic;
  color: ${(props) => props.theme.color};
  text-transform: none;
`;

export const DivReviews = styled.div`
  padding: 2rem 0rem;
`;

export const H2Reviews = styled.h2`
  ${h1Container}
  padding: 0rem 0rem 4rem;
`;

export const StyledSwiper = styled(Swiper)`
  .swiper-navigation-icon path {
    fill: ${(props) => props.theme.color};
  }

  .swiper-navigation-icon {
    width: 75%;
    height: 75%;
  }

  .swiper-pagination .swiper-pagination-bullet {
    background-color: ${(props) => props.theme.color};
  }
`;
