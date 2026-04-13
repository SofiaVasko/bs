"use client";

import {
  H1,
  DivShop,
  DivBook,
  H1Content,
  H2Content,
  H3Content,
  DivImage,
  BookRecipeShop,
  BookHearShop,
  DivContent,
  DivBtn,
  BtnLink,
  Btn,
} from "@/styled/styledComponents/styledShop";
import { useTranslation } from "react-i18next";

import { data, useShopContext } from "@/providers/ShopProvider";

export default function Shop() {
  const [state, dispatch] = useShopContext();

  const { t, i18n } = useTranslation();

  function addToWishlist(item) {
    dispatch({ type: "ADD_TO_WISHLIST", payload: item.id });
  }

  function addToCart(item) {
    dispatch({ type: "ADD_TO_CART", payload: item.id });
  }

  return (
    <section className="wrapper">
      <H1>{t("order.title")}</H1>
      <DivShop>
        {data.map((item) => {
          const isSomeCart = state.cart.some((cart) => cart.id === item.id);
          const isSomeLikes = state.likes.some((like) => like.id === item.id);
          const cartQuantity = +state.cart.find((cart) => cart.id === item.id)
            ?.quantity;
          return (
            <DivBook key={item.id} style={{ height: "100%" }}>
              <H1Content>{t(`${item.h1}`)}</H1Content>
              <DivImage>
                {item.imageContainer === "BookRecipeShop" ? (
                  <BookRecipeShop
                    src={item.image}
                    width={item.width}
                    height={item.height}
                    loading="eager"
                    alt="the book"
                  />
                ) : (
                  <BookHearShop
                    src={item.image}
                    width={item.width}
                    height={item.height}
                    loading="eager"
                    alt="the book"
                  />
                )}
              </DivImage>
              <DivContent>
                <H2Content>{t(`${item.h2}`)}</H2Content>
                <H3Content>{t(`${item.h3}`)}</H3Content>
              </DivContent>
              <DivBtn>
                <BtnLink href={item.link}>
                  <svg width="20px" height="20px">
                    <use href="/sprite.svg#icons-details"></use>
                  </svg>
                  {t("order.books.details")}
                </BtnLink>
                <Btn onClick={() => addToWishlist(item)}>
                  <svg width="20px" height="20px">
                    <use href="/sprite.svg#icons-wishlist"></use>
                  </svg>{" "}
                  {isSomeLikes
                    ? t("order.books.wishlist.yes")
                    : t("order.books.wishlist")}{" "}
                </Btn>
                <Btn onClick={() => addToCart(item)}>
                  {" "}
                  <svg width="20px" height="20px">
                    <use href="/sprite.svg#icons-shopping"></use>
                  </svg>{" "}
                  {isSomeCart
                    ? `${t("order.books.shopping.yes")} ${cartQuantity}`
                    : t("order.books.shopping")}
                </Btn>
              </DivBtn>
            </DivBook>
          );
        })}
      </DivShop>
    </section>
  );
}
