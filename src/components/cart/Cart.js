"use client";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { useShopContext } from "@/providers/ShopProvider";

import { data } from "@/providers/ShopProvider";

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
  H1,
  StyledLink,
} from "@/styled/styledComponents/styledWishlist";

import {
  DivOrderBtn,
  OrderBtn,
  DivBookCart,
} from "@/styled/styledComponents/styledCart";

export default function Cart() {
  const [t, i18n] = useTranslation();
  const [state, dispatch] = useShopContext();

  const cartLength = state.cart.length;

  function removeFromCart(item) {
    dispatch({ type: "REMOVE_FROM_CART", payload: item.id });
  }

  const titleCart = (
    <DivTitleWishlist>
      <H1>{t("order.cart.h1")}</H1>
      <svg width="30px" height="30px">
        {" "}
        <use href="/sprite.svg#icons-shopping"></use>
      </svg>
    </DivTitleWishlist>
  );

  return (
    <section className={cartLength !== 0 ? "wrapper" : "wrapper wrapperCart"}>
      {titleCart}
      {cartLength !== 0 ? (
        <DivLikes>
          <h2>{t("order.cart.thanks")}</h2>
          <h3>{t("order.cart.choices")}</h3>{" "}
        </DivLikes>
      ) : (
        <DivWithoutLikes>
          <h2>{t("order.cart.h2")}</h2>{" "}
          <StyledLink href="/shop">{t("order.books.back")}</StyledLink>{" "}
        </DivWithoutLikes>
      )}
      {cartLength !== 0 ? (
        <>
          <DivWishlist>
            {data.map((item) => {
              const findCart = state.cart.find((cart) => cart.id === item.id);
              const cartQuantity = +state.cart.find(
                (cart) => cart.id === item.id,
              )?.quantity;
              if (findCart) {
                return (
                  <DivBookCart key={item.id}>
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
                      <H3Content>
                        {t("order.cart.quantity")} {cartQuantity}
                      </H3Content>
                      <H3Content>
                        {t("order.cart.sum")}{" "}
                        {t(`${item.h3}`).slice(0, 4) * cartQuantity}
                      </H3Content>
                    </DivContent>
                    <DivBtn>
                      <Btn onClick={() => removeFromCart(item)}>
                        <svg width="20px" height="20px">
                          <use href="/sprite.svg#icons-remove"></use>
                        </svg>
                        {t("order.books.wishlist.no")}
                      </Btn>
                      <StyledLink href="/shop">
                        {t("order.books.back")}
                      </StyledLink>
                    </DivBtn>
                  </DivBookCart>
                );
              }
            })}
          </DivWishlist>{" "}
          <DivOrderBtn>
            {" "}
            <OrderBtn href="/checkout">{t("order.make")}</OrderBtn>
          </DivOrderBtn>
        </>
      ) : null}
    </section>
  );
}
