import styled from "styled-components";
import {
  flexContainer,
  gridContainer,
  h1Container,
  btnContainer,
} from "../containers/styledContainers";
import { DivBook } from "./styledShop";
import {
  BookRecipeShop,
  BookHearShop,
  DivShop,
} from "@/styled/styledComponents/styledShop";

import { H2Content } from "@/styled/styledComponents/styledShop";

export const DivFullH2 = styled.div`
  position: relative;

  &:hover > h2 {
    opacity: 1;
  }
`;
export const FullH2 = styled.h2`
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: black;
  color: white;
  border-radius: 0.5rem;
  padding: 0.2rem;
  ${h1Container}
  font-size: 0.8rem;
  text-transform: none;
  background-color: ${(props) => props.theme.color};
  color: ${(props) => props.theme.backgroundColor};
  opacity: 0;
`;

export const H2ContentCheckout = styled(H2Content)`
  max-width: 150px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TitleCheckout = styled.h1`
  background-color: ${(props) => props.theme.color};
  color: ${(props) => props.theme.backgroundColor};
  ${h1Container}
  text-transform: none;
  padding: 0.5rem 0rem;
`;
export const DivPrice = styled.div`
  ${flexContainer}
  gap: 0.1rem;
  justify-content: flex-end;
  color: red;
  box-shadow: ${(props) => props.theme.articleShadow};
  padding: 0.5rem 1rem;
`;

export const PriceCheckout = styled.h2`
  color: ${(props) => props.theme.color};
  ${h1Container}
  text-align: right;
`;

export const DivBookCheckout = styled(DivBook)`
  // box-shadow: none;
`;

export const BookHearCheckout = styled(BookHearShop)`
  max-width: 90px;
  max-height: 120px;
`;
export const BookRecipeCheckout = styled(BookRecipeShop)`
  max-width: 100px;
  max-height: 150px;
`;
export const DivShopCheckout = styled(DivShop)`
  ${gridContainer}

  @media screen and (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

export const Form = styled.form`
  margin: 0 auto;
  max-width: 500px;
  width: 100%;
  padding: 0rem 1rem 3rem;
  ${h1Container}
  text-transform: none;

  > fieldset > legend {
    color: red;
    padding: 0.25rem 0rem;
    padding: 1rem 0rem 2rem;
  }

  input,
  textarea,
  input::placeholder,
  textarea::placeholder {
    ${h1Container}
    text-transform: none;
    text-align: left;
    font-size: 0.9rem;
  }
`;

export const DivCustomer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0.25rem;
`;

export const InputCustomer = styled.input`
  padding: 0.5rem;

  border-radius: 0.2rem;
  border: none;
  background-color: transparent;
  color: ${(props) => props.theme.color};
  border: 1px solid ${(props) => props.theme.color};

  &::placeholder {
    color: ${(props) => props.theme.placeholder};
  }

  &:focus,
  &:active {
    border: ${(props) =>
      props.$correct ? "1px solid green" : "1px solid red"};
    outline: ${(props) =>
      props.$correct ? "1px solid green" : "1px solid red"};
  }
`;

export const FieldsetDelivery = styled.fieldset`
  ${flexContainer}
  justify-content: space-evenly;
`;

export const LabelDelivery = styled.label`
  ${flexContainer}
  gap: 0rem;
`;

export const InputDelivery = styled.input`
  margin-right: 0.25rem;
`;

export const TextareaComment = styled.textarea`
  resize: none;

  width: 100%;
  padding: 1rem;

  border-radius: 0.2rem;
  border: none;
  background-color: transparent;
  color: ${(props) => props.theme.color};
  border: 1px solid ${(props) => props.theme.color};

  &::placeholder {
    color: ${(props) => props.theme.placeholder};
  }

  &:focus,
  &:active {
    border: 1px solid ${(props) => props.theme.color};
    outline: 1px solid ${(props) => props.theme.color};
  }
`;

export const LabelConfirm = styled(LabelDelivery)`
  justify-content: flex-start;
  padding: 2rem 0rem 0.5rem;
`;

export const InputConfirm = styled(InputDelivery)``;

export const BtnSubmit = styled.button`
  max-width: 300px;
  width: 100%;
  margin-top: 1rem;
  ${btnContainer}

  &:disabled {
    opacity: 0.5;

    &:hover {
      background-color: ${(props) => props.theme.color};
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`;

export const Toast = styled.div`
  max-width: 300px;
  width: 100%;
  max-height: 100px;
  height: 100%;
  background-color: ${(props) => props.theme.color};
  color: ${(props) => props.theme.backgroundColor};
  border: 1px solid ${(props) => props.theme.backgroundColor};
  ${flexContainer}
  ${h1Container}
  text-transform: none;
  padding: 0.5rem;
  position: fixed;
  top: 100px;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 0.5rem;
  z-index: 15;
  cursor: pointer;

  &::after {
    content: "";
    width: 20px;
    height: 2px;
    position: absolute;
    top: 12px;
    right: 5px;
    border-top: 5px solid red;
    transform: rotate(140deg);
  }

  &::before {
    content: "";
    width: 20px;
    height: 2px;
    position: absolute;
    top: 12px;
    right: 5px;
    border-bottom: 5px solid red;
    transform: rotate(-140deg);
  }
`;
