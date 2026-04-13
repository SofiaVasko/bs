"use client";

import { useTLContext } from "@/providers/Providers.js";
import { useTranslation } from "react-i18next";

import {
  StyledHeader,
  Div,
  Ul,
  StyledLink,
  BtnLanguage,
  BtnTheme,
  DivMenu,
  BtnMenu,
  BlurDiv,
} from "@/styled/styledComponents/styledHeader";
import { useEffect, useState } from "react";

import { useMediaQuery } from "react-responsive";

export default function Header() {
  const { language, toggleLanguage, theme, toggleTheme } = useTLContext();
  const { t, i18n } = useTranslation();
  const [mobileMenu, setMobileMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(null);

  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  function handleMobileMenu() {
    setMobileMenu((prevState) => !prevState);
  }
  function handleResize() {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setMobileMenu(false);
  }, [windowWidth]);

  useEffect(() => {
    if (!isMobile) return;
    if (mobileMenu && isMobile) {
      document.body.classList.add("lock");
    } else {
      document.body.classList.remove("lock");
    }
  }, [mobileMenu]);

  return (
    <StyledHeader>
      <DivMenu>
        <BtnMenu onClick={handleMobileMenu}>
          {mobileMenu ? (
            <svg width="25px" height="25px">
              <use href="/sprite.svg#icons-remove"></use>
            </svg>
          ) : (
            t("header.mobile.menu")
          )}
        </BtnMenu>
      </DivMenu>
      <Div onClick={handleMobileMenu} $menu={mobileMenu} className="wrapper">
        <nav>
          <Ul>
            <li>
              <StyledLink href="/">{t("header.about")}</StyledLink>
            </li>
            <li>
              <StyledLink href="/books">{t("header.books")}</StyledLink>
            </li>
            <li>
              <StyledLink href="/shop">{t("header.shop")}</StyledLink>
            </li>
            <li>
              <StyledLink href="/contacts">{t("header.contacts")}</StyledLink>
            </li>
          </Ul>
        </nav>
        <BtnLanguage onClick={toggleLanguage}>
          {language === "uk" ? "EN" : "UK"}
        </BtnLanguage>
        <BtnTheme onClick={toggleTheme} $active={theme.dark}></BtnTheme>
      </Div>
    </StyledHeader>
  );
}
