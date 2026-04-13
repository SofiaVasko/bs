"use client";

import { useState, useContext, createContext, useEffect } from "react";

import { ThemeProvider } from "styled-components";
import { lightTheme } from "../styled/themes/lightTheme.js";
import { darkTheme } from "../styled/themes/darkTheme.js";

import { I18nextProvider } from "react-i18next";
import i18n from "../translation/i18n.js";

import { Global } from "@/styled/styledComponents/styledHeader.js";

// import ShopProvider from "./ShopProvider.js";

import dynamic from "next/dynamic";
const NoSSRShopProvider = dynamic(() => import("./ShopProvider.js"), {
  ssr: false,
});

const TLContext = createContext(null);

export function useTLContext() {
  return useContext(TLContext);
}

export default function Providers({ children }) {
  const [language, setLanguage] = useState("uk");
  const [theme, setTheme] = useState({ dark: false, currentTheme: lightTheme });

  function toggleLanguage() {
    const newLanguage = language === "uk" ? "en" : "uk";
    i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage);
  }

  function toggleTheme() {
    setTheme((prevState) => {
      return {
        ...prevState,
        dark: !prevState.dark,
        currentTheme: prevState.dark ? lightTheme : darkTheme,
      };
    });
  }
  return (
    <I18nextProvider i18n={i18n}>
      <TLContext.Provider
        value={{ language, toggleLanguage, theme, toggleTheme }}
      >
        {/* <ShopProvider> */}
        <NoSSRShopProvider>
          <ThemeProvider theme={theme.currentTheme}>
            <Global />
            {children}
          </ThemeProvider>
          {/* </ShopProvider> */}
        </NoSSRShopProvider>
      </TLContext.Provider>
    </I18nextProvider>
  );
}
