"use client";
import { useTranslation } from "react-i18next";
import {
  Div,
  DivBook,
  ImgBook,
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
  Img,
  DivPolaroids,
  Figure,
  FigureSecond,
  FigureThird,
  ImgPin,
  FigureImg,
  Figcaption,
  DivReviews,
  H2Reviews,
  StyledSwiper,
} from "@/styled/styledComponents/styledRecipe";

import { H3 } from "@/styled/styledComponents/styledHear";
import hero from "@/assets/heroRecipe.webp";
import book from "@/assets/iconsBooksRecipe/book.png";

import img1 from "@/assets/iconsRecipe/1.webp";
import img2 from "@/assets/iconsRecipe/2.webp";
import img3 from "@/assets/iconsRecipe/3.webp";

import review1 from "@/assets/reviewsRecipe/review1.jpg";
import review2 from "@/assets/reviewsRecipe/review2.jpg";
import review3 from "@/assets/reviewsRecipe/review3.jpg";
import review4 from "@/assets/reviewsRecipe/review4.jpg";
import review5 from "@/assets/reviewsRecipe/review5.jpg";
import review6 from "@/assets/reviewsRecipe/review6.jpg";
import review7 from "@/assets/reviewsRecipe/review7.jpg";
import review8 from "@/assets/reviewsRecipe/review8.jpg";
import review9 from "@/assets/reviewsRecipe/review9.jpg";
import review10 from "@/assets/reviewsRecipe/review10.jpg";
import review11 from "@/assets/reviewsRecipe/review11.jpg";
import review12 from "@/assets/reviewsRecipe/review12.jpg";
import review13 from "@/assets/reviewsRecipe/review13.jpg";
import review14 from "@/assets/reviewsRecipe/review14.jpg";
import review15 from "@/assets/reviewsRecipe/review15.jpg";
import review16 from "@/assets/reviewsRecipe/review16.jpg";
import review17 from "@/assets/reviewsRecipe/review17.jpg";
import review18 from "@/assets/reviewsRecipe/review18.jpg";
import review19 from "@/assets/reviewsRecipe/review19.jpg";
import review20 from "@/assets/reviewsRecipe/review20.jpg";
import review21 from "@/assets/reviewsRecipe/review21.jpg";
import review22 from "@/assets/reviewsRecipe/review22.jpg";
import review23 from "@/assets/reviewsRecipe/review23.jpg";
import review24 from "@/assets/reviewsRecipe/review24.jpg";
import review25 from "@/assets/reviewsRecipe/review25.jpg";
import review26 from "@/assets/reviewsRecipe/review26.jpg";

import { useMediaQuery } from "react-responsive";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function BookRecipe() {
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
    review22,
    review23,
    review24,
    review25,
    review26,
  ];
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    <section className="wrapper">
      <Div>
        {isMobile && (
          <>
            <DivWithIcon>
              <H1>{t("book.h")}</H1>

              <Svg width="100px" height="100px">
                <use href="/sprite.svg#icons-book"></use>
              </Svg>
            </DivWithIcon>
            <H2>{t("book.h2")}</H2>{" "}
          </>
        )}

        <DivBook>
          <ImgBook
            src={book.src}
            width={280}
            height={353}
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
              <H2>{t("book.h2")}</H2>{" "}
            </>
          )}
          <H3>
            {t("book.title")} <br /> {t("book.title.author")}
          </H3>
          <P>{t("book.p")}</P>
          <A
            href="https://brustury.com.ua/wp-content/uploads/2024/02/Uryvok_recepty.pdf"
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
          <Img
            src={hero.src}
            width={512}
            height={615}
            loading="eager"
            alt="The cat"
          />
        </DivImg>
        <DivPolaroids>
          <Figure>
            <ImgPin src="/pin.webp" alt="icon" />
            <FigureImg
              src={img1.src}
              width={150}
              height={200}
              loading="eager"
              alt="icon"
            />
            <Figcaption>
              <i>{t("book.figcapture")}</i>
            </Figcaption>
          </Figure>
          <FigureSecond>
            <ImgPin src="/pin.webp" alt="icon" />
            <FigureImg
              src={img2.src}
              width={150}
              height={200}
              loading="eager"
              alt="icon"
            />
            <Figcaption>
              <i>{t("book.figcapture.second")}</i>
            </Figcaption>
          </FigureSecond>
          <FigureThird>
            <ImgPin src="/pin.webp" alt="icon" />
            <FigureImg
              src={img3.src}
              width={150}
              height={200}
              loading="eager"
              alt="icon"
            />
            <Figcaption>
              <i>{t("book.figcapture.third")}</i>
            </Figcaption>
          </FigureThird>
        </DivPolaroids>
      </Block>
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
