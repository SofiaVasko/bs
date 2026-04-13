import styled, { css } from "styled-components";
import {
  flexContainer,
  gridContainer,
  gridContainerMobile,
  h1Container,
  btnContainer,
} from "../containers/styledContainers";
import {
  heartFallSpin,
  heartFallSpinSecond,
} from "../animations/styledAnimations";
import Link from "next/link";

import { DivBook } from "@/styled/styledComponents/styledShop";

export const DivLikes = styled.div`
  ${flexContainer}
  gap: 0.5rem;
  flex-direction: column;
  ${h1Container}
  text-transform: none;
`;

export const DivWithoutLikes = styled.div`
  ${flexContainer}
  flex-direction: column;
  gap: 2rem;
  ${h1Container}
  text-transform: none;

  > h2 {
    padding: 0rem 0.5rem;
  }
`;

export const DivTitleWishlist = styled.div`
  ${flexContainer}
  gap: 0.2rem;
  background-color: ${(props) => props.theme.color};
  color: ${(props) => props.theme.backgroundColor};
  width: 100%;
  ${h1Container}
  text-transform: none;
`;

export const H1 = styled.h1`
  padding: 0.5rem 0rem;
`;

export const StyledLink = styled(Link)`
  ${btnContainer}
  padding: 0.3rem;
`;

export const DivWishlist = styled.div`
  ${gridContainer}
  ${gridContainerMobile}
`;

export const gridItem = css`
  content: "";
  position: absolute;
  background: url("/heart.webp") no-repeat top center / 100%;
  width: 20px;
  height: 20px;
  z-index: -1;
`;

export const DivBookWishlist = styled(DivBook)`
  overflow: hidden;
  position: relative;

  &:nth-child(even)::after {
    ${gridItem}
    top: 30%;
    left: 0;
    animation: ${heartFallSpinSecond} 1s 0s 1;
    transform: rotate(25deg);
  }

  &:nth-child(odd)::after {
    ${gridItem}
    top: 20%;
    left: 0;
    transform: rotate(25deg);
    animation: ${heartFallSpinSecond} 1.5s 0s 1;
  }

  &:nth-child(3n + 3)::after {
    ${gridItem}
    top: 10%;
    left: 0;
    transform: rotate(25deg);
    animation: ${heartFallSpinSecond} 2s 0s 1;
  }

  &:nth-child(even)::before {
    ${gridItem}
    bottom: 30%;
    right: 0;
    transform: rotate(-25deg);
    animation: ${heartFallSpin} 3s 0s 1;
  }

  &:nth-child(odd)::before {
    ${gridItem}
    bottom: 20%;
    right: 0;
    transform: rotate(-25deg);
    animation: ${heartFallSpin} 2.5s 0s 1;
  }

  &:nth-child(3n + 3)::before {
    ${gridItem}
    bottom: 10%;
    right: 0;
    transform: rotate(-25deg);
    animation: ${heartFallSpin} 2s 0s 1;
  }
`;
