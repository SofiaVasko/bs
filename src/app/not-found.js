"use client";

import { useTranslation } from "react-i18next";
import {
  Section,
  Div,
  H1,
  H2,
  P,
  StyledLink,
} from "@/styled/styledComponents/styledNotFound";

export default function NotFound() {
  const { t, i18n } = useTranslation();
  return (
    <Section className="wrapper">
      <Div>
        <svg width="60px" height="60px">
          <use href="/sprite.svg#icons-error"></use>
        </svg>
        <svg width="60px" height="60px">
          <use href="/sprite.svg#icons-404"></use>
        </svg>
      </Div>
      <H1>404</H1>
      <H2>{t("not.title")}</H2>
      <P>{t("not.p")}</P>
      <StyledLink href="/">{t("not.link")}</StyledLink>
    </Section>
  );
}
