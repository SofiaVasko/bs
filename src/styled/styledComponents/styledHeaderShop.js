import styled from "styled-components";
import { flexContainer, h1Container } from "../containers/styledContainers";
import { HeaderBooks, Ul } from "./styledHeaderBooks";

export const HeaderShop = styled(HeaderBooks)`
  height: 40px;
`;

export const UlShop = styled(Ul)`
  justify-content: flex-end;
  padding: 0rem 1.5rem 0rem 0rem;
`;
