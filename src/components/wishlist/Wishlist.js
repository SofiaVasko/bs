"use client";

import {
  H1Content,
  DivImage,
  BookRecipeShop,
  BookHearShop,
  DivContent,
  H2Content,
  H3Content,
  DivBtn,
  Btn,
} from "@/styled/styledComponents/styledShop";

import {
  DivLikes,
  DivWithoutLikes,
  DivTitleWishlist,
  DivWishlist,
  DivBookWishlist,
  H1,
  StyledLink,
} from "@/styled/styledComponents/styledWishlist";

import { Toast } from "@/styled/styledComponents/styledCheckout";

import Link from "next/link";
import { useShopContext } from "@/providers/ShopProvider";

import { useTranslation } from "react-i18next";
import { data } from "@/providers/ShopProvider";
import { useState } from "react";

export default function Wishlist() {
  const [toast, setToast] = useState("");

  const [state, dispatch] = useShopContext();
  const [t, i18n] = useTranslation();

  const likesLength = state.likes.length;

  const limitIsReached = state.cart.filter((i) => i.quantity === 20);

  function removeFromWishlist(item) {
    dispatch({ type: "REMOVE_FROM_WISHLIST", payload: item.id });
  }

  function addToCart(item) {
    const itemIsExist = state.cart.find((i) => i.id === item.id);
    if (itemIsExist && itemIsExist.quantity === 19) {
      setToast(t("order.limit"));
    } else if (itemIsExist && itemIsExist.quantity === 20) {
      return;
    }
    dispatch({ type: "ADD_TO_CART", payload: item.id });
  }

  function handleToast() {
    setToast("");
  }

  const titleWishlist = (
    <DivTitleWishlist>
      <H1>{t("order.wishlist.h1")}</H1>
      <svg width="30px" height="30px">
        {" "}
        <use href="/sprite.svg#icons-wishlist"></use>
      </svg>
    </DivTitleWishlist>
  );

  return (
    <section
      className={likesLength !== 0 ? "wrapper" : "wrapper wrapperWishlist"}
    >
      {titleWishlist}
      {likesLength !== 0 ? (
        <DivLikes>
          <h2>{t("order.wishlist.thanks")}</h2>
          <h3>{t("order.wishlist.choices")}</h3>{" "}
        </DivLikes>
      ) : (
        <DivWithoutLikes>
          <h2>{t("order.wishlist.h2")}</h2>{" "}
          <StyledLink href="/shop">{t("order.books.back")}</StyledLink>{" "}
        </DivWithoutLikes>
      )}

      {likesLength !== 0 ? (
        <DivWishlist>
          {data.map((item) => {
            const findLikes = state.likes.find((like) => like.id === item.id);
            const isSomeCart = state.cart.some((cart) => cart.id === item.id);
            const cartQuantity = +state.cart.find((cart) => cart.id === item.id)
              ?.quantity;
            if (findLikes) {
              return (
                <DivBookWishlist key={item.id}>
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
                    <Btn onClick={() => removeFromWishlist(item)}>
                      <svg width="20px" height="20px">
                        <use href="/sprite.svg#icons-remove"></use>
                      </svg>{" "}
                      {t("order.books.wishlist.no")}
                    </Btn>
                    <Btn
                      onClick={() => addToCart(item)}
                      disabled={limitIsReached.some((i) => i.id === item.id)}
                    >
                      {" "}
                      <svg width="20px" height="20px">
                        <use href="/sprite.svg#icons-shopping"></use>
                      </svg>{" "}
                      {isSomeCart
                        ? `${t("order.books.shopping.yes")} ${cartQuantity}`
                        : t("order.books.shopping")}
                    </Btn>
                    <StyledLink href="/shop">
                      {t("order.books.back")}
                    </StyledLink>
                    {toast && <Toast onClick={handleToast}>{toast}</Toast>}
                  </DivBtn>
                </DivBookWishlist>
              );
            }
          })}
        </DivWishlist>
      ) : null}
    </section>
  );
}
