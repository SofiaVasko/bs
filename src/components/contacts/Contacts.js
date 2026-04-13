"use client";
// import Image from "next/image";
import { useTranslation } from "react-i18next";
import hero from "@/assets/heroContacts.webp";

import {
  Section,
  DivImg,
  Div,
  Img,
  DivA,
  H2,
} from "@/styled/styledComponents/styledContacts";
import { Svg } from "@/styled/styledComponents/styledHome";

export default function Contacts() {
  const { t, i18n } = useTranslation();
  return (
    <Section className="wrapper">
      <DivImg>
        <Img
          src={hero.src}
          width={720}
          height={540}
          loading="eager"
          alt="Iryna Okur"
        />
      </DivImg>
      <Div>
        <H2>{t("contacts.h")}</H2>
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
          <a
            href="https://t.me/irynapolonyna"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Svg width="45px" height="45px">
              <use href="/sprite.svg#icons-telegram"></use>
            </Svg>
          </a>
          <a
            href="mailto:knygyirynaokur@gmail.com?subject=Співпраця&body=Вітаю Ірино,"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Svg width="45px" height="45px">
              <use href="/sprite.svg#icons-gmail"></use>
            </Svg>
          </a>
          <a
            href="https://www.facebook.com/iryna.vasko.1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Svg width="45px" height="45px">
              <use href="/sprite.svg#icons-facebook"></use>
            </Svg>
          </a>
        </DivA>
      </Div>
    </Section>
  );
}
