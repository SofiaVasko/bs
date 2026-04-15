"use client";

import { useTranslation } from "react-i18next";

import {
  StyledFooter,
  Div,
  DevContact,
} from "@/styled/styledComponents/styledFooter";

export default function Footer() {
  const { t, i18n } = useTranslation();
  const getYear = new Date().getFullYear();
  
  return (
    <StyledFooter>
      <Div className="wrapper">
        <h3>&copy; {getYear} {t("footer.h")}</h3>
        <span>{t("footer.span")}</span>
        <DevContact
          href="https://sofiavasko.netlify.app/contacts"
          target="_blank"
          rel="noopener noreferrer"
        >
          Website by SV Dev
        </DevContact>
      </Div>
    </StyledFooter>
  );
}
