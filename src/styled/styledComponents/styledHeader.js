import styled, { createGlobalStyle } from "styled-components";
import { ActiveLink } from "@/components/ActiveLink";
import {
  flexContainer,
  h1Container,
  btnContainer,
} from "../containers/styledContainers";
import { menuFadeIn } from "../animations/styledAnimations";

export const Global = createGlobalStyle`
body {
padding-top: 50px;
background-color: ${(props) => props.theme.backgroundColor};
color: ${(props) => props.theme.color};
}
`;

export const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.header};
  backdrop-filter: blur(2px);
  border-bottom: ${(props) => props.theme.border};
  color: ${(props) => props.theme.color};
  height: 50px;
  width: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 15;
  ${flexContainer}

  @media screen and (max-width: 600px) {
    justify-content: flex-end;
  }
`;

export const Div = styled.div`
  ${flexContainer}
  justify-content: flex-end;
  padding-right: 1.5rem;

  @media screen and (max-width: 600px) {
    display: ${(props) => (props.$menu ? "flex" : "none")};

    height: 100vh;
    width: 100vw;
    z-index: 20;
    position: fixed;
    top: 0px;
    left: 0px;

    background-color: ${(props) => props.theme.backgroundColor};

    flex-direction: column;

    justify-content: flex-start;
    align-items: flex-start;

    padding-top: 50px;
    padding-left: 2rem;
    gap: 2rem;
    overflow-y: auto;

    animation: ${menuFadeIn} 0.4s 0s ease-out 1;
  }
`;

export const Ul = styled.ul`
  ${flexContainer}

  @media screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 2rem;
  }
`;

export const StyledLink = styled(ActiveLink)`
  color: ${(props) => props.theme.color};
  font-size: 1rem;
  letter-spacing: 0.12em;
  transition: opacity 0.25s ease;
  &:hover {
    opacity: 0.6;
  }
`;

export const BtnLanguage = styled.button`
  font-size: 1rem;
  letter-spacing: 0.12em;
  background-color: ${(props) => props.theme.color};
  color: ${(props) => props.theme.backgroundColor};
  border: none;
  border-radius: 0.3rem;
  height: 20px;
  transition: transform 0.25s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const BtnTheme = styled.button`
  width: 50px;
  height: 25px;
  border-radius: 2rem;
  background-color: ${(props) => props.theme.color};
  border: none;
  transition: opacity 0.25s ease;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 2px;
    left: 1px;
    transform: ${(props) =>
      props.$active ? "translateX(0px)" : "translateX(27px)"};
    bottom: 2px;
    background-color: ${(props) => props.theme.backgroundColor};
    width: 20px;
    height: 20px;
    border-radius: 50%;
    transition: transform 0.25s ease;
  }

  &:hover {
    opacity: 0.8;
  }
`;

export const DivMenu = styled.div`
  display: none;

  z-index: 21;
  padding-right: 1rem;

  @media screen and (max-width: 600px) {
    display: block;
  }
`;

export const BtnMenu = styled.button`
  ${btnContainer}
  padding: 0.3rem;
  height: 35px;
`;
