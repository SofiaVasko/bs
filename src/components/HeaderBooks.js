"use client";
import {
  HeaderBooks,
  Ul,
  Li,
  StyledAnotherLink,
} from "@/styled/styledComponents/styledHeaderBooks";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t, i18n } = useTranslation();
  return (
    <HeaderBooks>
      <nav className="wrapper">
        <Ul>
          <Li>
            <StyledAnotherLink href="/books/retsepty-lvivskoi-pani-z-berehiv-bosforu">
              {t("book.h2")}
            </StyledAnotherLink>
          </Li>
          <Li>
            <StyledAnotherLink href="/books/ty-pochuiesh-mene-teper">
              {t("books.h2")}
            </StyledAnotherLink>
          </Li>
        </Ul>
      </nav>
    </HeaderBooks>
  );
}
