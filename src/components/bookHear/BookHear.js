"use client";
import { useTranslation } from "react-i18next";

import {
  Div,
  DivBook,
  DivRecipe,
  DivWithIcon,
  H1,
  Svg,
  H2,
  P,
  A,
  LinkRecipe,
  Block,
  DivImg,
  DivReviews,
  H2Reviews,
  StyledSwiper,
} from "@/styled/styledComponents/styledRecipe";

import book from "@/assets/iconsBooksBook/book.jpg";

import {
  ImgBookHear,
  H3,
  ImgHear,
  DivPolaroidsHear,
  DivTitle,
  H3Title,
  DivPresentation,
  DivTextPresentation,
  H2Presentation,
} from "@/styled/styledComponents/styledHear";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";

import MapLibreExample from "../../app/books/ty-pochuiesh-mene-teper/map";

import hero from "@/assets/heroHear.jpg";

import review1 from "@/assets/reviewsHear/review1.jpg";
import review2 from "@/assets/reviewsHear/review2.jpg";
import review3 from "@/assets/reviewsHear/review3.jpg";
import review4 from "@/assets/reviewsHear/review4.jpg";
import review5 from "@/assets/reviewsHear/review5.jpg";
import review6 from "@/assets/reviewsHear/review6.jpg";
import review7 from "@/assets/reviewsHear/review7.jpg";
import review8 from "@/assets/reviewsHear/review8.jpg";
import review9 from "@/assets/reviewsHear/review9.jpg";
import review10 from "@/assets/reviewsHear/review10.jpg";
import review11 from "@/assets/reviewsHear/review11.jpg";
import review12 from "@/assets/reviewsHear/review12.jpg";
import review13 from "@/assets/reviewsHear/review13.jpg";
import review14 from "@/assets/reviewsHear/review14.jpg";
import review15 from "@/assets/reviewsHear/review15.jpg";
import review16 from "@/assets/reviewsHear/review16.jpg";
import review17 from "@/assets/reviewsHear/review17.jpg";
import review18 from "@/assets/reviewsHear/review18.jpg";
import review19 from "@/assets/reviewsHear/review19.jpg";
import review20 from "@/assets/reviewsHear/review20.jpg";
import review21 from "@/assets/reviewsHear/review21.jpg";

import { useMediaQuery } from "react-responsive";

export default function BookHear() {
  const { t, i18n } = useTranslation();
  const reviews = [
    review1,
    review2,
    review3,
    review4,
    review5,
    review6,
    review7,
    review8,
    review9,
    review10,
    review11,
    review12,
    review13,
    review14,
    review15,
    review16,
    review17,
    review18,
    review19,
    review20,
    review21,
  ];
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    <section className="wrapper">
      <Div>
        {isMobile && (
          <>
            {" "}
            <DivWithIcon>
              <H1>{t("book.h")}</H1>

              <Svg width="100px" height="100px">
                <use href="/sprite.svg#icons-book"></use>
              </Svg>
            </DivWithIcon>
            <H2>{t("books.h2")}</H2>{" "}
          </>
        )}
        <DivBook>
          <ImgBookHear
            src={book}
            width={250}
            height={370}
            loading="eager"
            alt="the book"
          />
        </DivBook>
        <DivRecipe>
          {!isMobile && (
            <>
              {" "}
              <DivWithIcon>
                <H1>{t("book.h")}</H1>

                <Svg width="100px" height="100px">
                  <use href="/sprite.svg#icons-book"></use>
                </Svg>
              </DivWithIcon>
              <H2>{t("books.h2")}</H2>{" "}
            </>
          )}
          <H3>
            {t("books.title")} <br /> {t("books.title.author")}
          </H3>
          <P>{t("books.p")}</P>
          <A
            href="https://brustury.com.ua/wp-content/uploads/2025/07/Ty-pochuiesh-mene_uryvok.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("book.a")}
          </A>
          <LinkRecipe href="/shop">{t("book.link")}</LinkRecipe>
        </DivRecipe>
      </Div>
      <Block>
        <DivImg>
          <ImgHear
            src={hero}
            width={560}
            height={880}
            loading="eager"
            alt="The cat"
          />
        </DivImg>
        <DivPolaroidsHear>
          <DivTitle>
            <H3Title>
              <i>{t("books.h3")}</i>
            </H3Title>
          </DivTitle>
          <DivTitle>
            <H3Title>
              <i>{t("books.h3.second")}</i>
            </H3Title>
          </DivTitle>
          <DivTitle>
            <H3Title>
              <i>{t("books.h3.third")}</i>
            </H3Title>
          </DivTitle>
        </DivPolaroidsHear>
      </Block>
      <DivPresentation>
        <DivTextPresentation>
          <H2Presentation>{t("books.presentation")}</H2Presentation>
          <A
            href="https://www.ukrinform.ua/rubric-diaspora/4065160-u-stambuli-ukrainska-pismennica-prezentuvala-novelu-pro-zinocu-svobodu.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("books.presentation.btn")}
          </A>
        </DivTextPresentation>
        <MapLibreExample />
      </DivPresentation>
      <DivReviews>
        <H2Reviews>{t("book.reviews")}</H2Reviews>
        <StyledSwiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          centeredSlides
          loop
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          slidesPerView={2}
          spaceBetween={16}
          breakpoints={{
            800: { slidesPerView: 3 },
            1100: { slidesPerView: 4 },
            1440: { slidesPerView: 5 },
          }}
        >
          {reviews.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <img src={item.src} alt={`review ${index + 1}`} />
              </SwiperSlide>
            );
          })}
        </StyledSwiper>
      </DivReviews>
    </section>
  );
}
