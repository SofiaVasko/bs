import styled from "styled-components";
import { flexContainer } from "../containers/styledContainers";
import { StyledLink } from "@/styled/styledComponents/styledHeader";

export const HeaderBooks = styled.header`
  background-color: ${(props) => props.theme.header};
  backdrop-filter: blur(2px);
  border-bottom: ${(props) => props.theme.border};
  color: ${(props) => props.theme.backgroundColor};
  width: 100%;
  ${flexContainer}
  z-index: 10;
  top: 50px;
  position: sticky;

  // height: 40px;

  height: auto;
`;
export const Ul = styled.ul`
  ${flexContainer}
  justify-content: space-evenly;
  padding: 0.5rem 1rem;
`;

export const Li = styled.li`
  flex: 1;
  text-align: center;
`;

export const StyledAnotherLink = styled(StyledLink)`
  text-align: center;
  line-height: 1.44;
`;
