import styled from "styled-components";
import {
  flexContainer,
  gridContainer,
  gridContainerMobile,
  h1Container,
  btnContainer,
} from "../containers/styledContainers";
import { ImgBook } from "./styledRecipe";
import { ImgBookHear } from "./styledHear";
import { LinkRecipe } from "./styledRecipe";

export const H1 = styled.h1`
  ${h1Container}
  text-transform: none;
  padding: 0.5rem 0rem;
  background-color: ${(props) => props.theme.color};
  color: ${(props) => props.theme.backgroundColor};
`;

export const DivShop = styled.div`
  ${gridContainer}
  ${gridContainerMobile}
`;

export const DivBook = styled.article`
  ${flexContainer}
  flex-direction: column;
  color: ${(props) => props.theme.color};
  ${h1Container}
  text-transform: none;
  width: 100%;
  height: 100%;
  padding: 1rem;
  box-shadow: ${(props) => props.theme.articleShadow};
`;

export const H1Content = styled.h1`
  border-bottom: 1px solid ${(props) => props.theme.color};
`;
export const H2Content = styled.h2`
  font-style: italic;
`;
export const H3Content = styled.h3`
  color: ${(props) => props.theme.accentColor};
`;

export const DivImage = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  ${flexContainer}
  gap: 0rem;
`;

export const BookRecipeShop = styled(ImgBook)`
  max-width: 150px;
  max-height: 223px;

  box-shadow: none;

  transform: perspective(800px) rotateY(-25deg) rotateX(0deg) scale(1.05);
  &:hover {
    transform: perspective(800px) rotateY(0deg) rotateX(0deg) scale(1.08);
  }
`;

export const BookHearShop = styled(ImgBookHear)`
  max-width: 120px;
  max-height: 170px;

  box-shadow: none;

  transform: perspective(800px) rotateY(-25deg) rotateX(0deg) scale(1.05);
`;
export const DivContent = styled.div`
  flex: 1;
  ${flexContainer}
  flex-direction: column;
`;

export const DivBtn = styled.div`
  ${flexContainer}
  flex-direction: column;
  margin-top: auto;
`;

export const BtnLink = styled(LinkRecipe)`
  padding: 0.3rem;
  ${flexContainer}
  gap: 0.2rem;
  font-size: 0.9rem;
`;

export const Btn = styled.button`
  ${btnContainer}
  ${flexContainer}
  gap: 0.2rem;
  padding: 0.3rem;

  &:disabled {
    opacity: 0.6;
    pointer-events: none;
  }
`;
