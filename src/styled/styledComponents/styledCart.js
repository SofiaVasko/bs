import styled, { css } from "styled-components";
import { flexContainer } from "../containers/styledContainers";
import { StyledLink } from "./styledWishlist";
import { DivBook } from "./styledShop";
import { cartMovement } from "../animations/styledAnimations";

export const DivOrderBtn = styled.div`
  ${flexContainer}
  padding: 1rem 1rem 3rem;
`;

export const OrderBtn = styled(StyledLink)`
  max-width: 300px;
  width: 100%;
  padding: 0.5rem;
`;

export const gridItemCart = css`
  content: "";
  position: absolute;
  background: url("/cart.webp") no-repeat center center / 80%;
  border: ${(props) => props.theme.border};
  border-radius: 50%;
  top: 0;
  left: 0;
  width: 50px;
  height: 50px;
  z-index: -1;
  transform: rotate(0deg);
`;

export const DivBookCart = styled(DivBook)`
  overflow: hidden;
  position: relative;

  &:nth-child(even)::after {
    ${gridItemCart}

    animation: ${cartMovement} 2s 0s ease-in-out 1;
  }

  &:nth-child(odd)::after {
    ${gridItemCart}
    animation: ${cartMovement} 1.5s 0s ease-in-out 1;
  }

  &:nth-child(3n + 3)::after {
    ${gridItemCart}
    animation: ${cartMovement} 1s 0s ease-in-out 1;
  }
`;
