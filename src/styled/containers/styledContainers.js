import { css } from "styled-components";

export const flexContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const gridContainer = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  align-items: flex-start;
  grid-gap: 1rem;
  padding: 1rem 0.5rem 1rem;

  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const gridContainerMobile = css`
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;

    > article {
      border: ${(props) => props.theme.border};
    }
  }
`;

export const h1Container = css`
  font-size: 1rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  text-align: center;
  line-height: 1.44;
`;

export const btnContainer = css`
  background-color: ${(props) => props.theme.color};
  color: ${(props) => props.theme.backgroundColor};
  padding: 0.5rem;
  border-radius: 0.4rem;
  ${h1Container}
  text-transform: none;
  transition:
    background-color 0.23s ease,
    color 0.23s ease;
  border: none;
  font-size: 0.9rem;

  &:hover {
    background-color: ${(props) => props.theme.accentColor};
  }
`;

export const stopAnimationContainer = css`
  cursor: pointer;
  &:hover {
    animation-play-state: paused;
  }
`;
