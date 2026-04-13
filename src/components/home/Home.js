"use client";

import { useTranslation } from "react-i18next";

import hero from "@/assets/hero.webp";

import {
  Section,
  Div,
  DivImg,
  Img,
  DivA,
  Svg,
  H1,
  P,
} from "@/styled/styledComponents/styledHome";

import { useMediaQuery } from "react-responsive";

export default function Home() {
  const { t, i18n } = useTranslation();

  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });

  return (
    <Section className="wrapper">
      {!isMobile && (
        <>
          <Div>
            <DivA>
              <a
                href="https://www.instagram.com/iryna.okur/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Svg width="45px" height="45px">
                  <use href="/sprite.svg#icons-instagram"></use>
                </Svg>
              </a>
              <H1>{t("about.h")}</H1>
            </DivA>
            <P>{t("about.p")}</P>
          </Div>
          <DivImg>
            <Img
              src={hero.src}
              width={679}
              height={666}
              loading="eager"
              alt="Iryna Okur"
            />
          </DivImg>
        </>
      )}

      {isMobile && (
        <>
          <DivA>
            <a
              href="https://www.instagram.com/iryna.okur/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Svg width="45px" height="45px">
                <use href="/sprite.svg#icons-instagram"></use>
              </Svg>
            </a>
            <H1>{t("about.h")}</H1>
          </DivA>
          <DivImg>
            <Img
              src={hero.src}
              width={379}
              height={366}
              loading="eager"
              alt="Iryna Okur"
            />
          </DivImg>
          <Div>
            <P>{t("about.p")}</P>
          </Div>
        </>
      )}
    </Section>
  );
}
