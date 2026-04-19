"use client";

import {
  DivFullH2,
  FullH2,
  H2ContentCheckout,
  TitleCheckout,
  DivPrice,
  PriceCheckout,
  DivBookCheckout,
  BookRecipeCheckout,
  BookHearCheckout,
  DivShopCheckout,
  Form,
  DivCustomer,
  InputCustomer,
  FieldsetDelivery,
  LabelDelivery,
  InputDelivery,
  TextareaComment,
  LabelConfirm,
  InputConfirm,
  BtnSubmit,
  PhoneInputCustomer,
  Toast,
} from "@/styled/styledComponents/styledCheckout";
import { useTranslation } from "react-i18next";
import { useShopContext } from "@/providers/ShopProvider";
import { data } from "@/providers/ShopProvider";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import {
  H1Content,
  DivImage,
  DivContent,
  H2Content,
  H3Content,
  DivBtn,
  Btn,
} from "@/styled/styledComponents/styledShop";

import "react-phone-number-input/style.css";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";

export default function Checkout() {
  const router = useRouter();

  const [t, i18n] = useTranslation();
  const [state, dispatch] = useShopContext();
  const [form, setForm] = useState({
    firstName: "",
    isCorrectFirstName: false,
    lastName: "",
    isCorrectLastName: false,
    email: "",
    isCorrectEmail: false,
    tel: "",
    isCorrectTel: false,
    delivery: "",
    comment: "",
    confirm: false,
    totalPrice: 0,
    company: "",
  });

  const [toast, setToast] = useState({
    type: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const totalPrice = state.cart.reduce((acc, stateItem) => {
    const product = data.find((dataItem) => dataItem.id === stateItem.id);
    return product ? acc + product.price * stateItem.quantity : acc;
  }, 0);

  const orderData = {
    order: state.cart.map((item) => item),
    totalPrice: totalPrice,
    firstName: form.firstName,
    lastName: form.lastName,
    email: form.email,
    tel: form.tel,
    delivery: form.delivery,
    comment: form.comment,
    confirm: form.confirm,
    company: form.company,
  };

  const submitOrder = async (e) => {
    e.preventDefault();

    if (!form.isCorrectFirstName || !form.isCorrectLastName) {
      setToast((prevState) => {
        return {
          ...prevState,
          message: t("form.error.name"),
        };
      });
      return;
    } else if (!form.isCorrectEmail) {
      setToast((prevState) => {
        return {
          ...prevState,
          message: t("form.error.email"),
        };
      });
      return;
    } else if (!form.isCorrectTel) {
      setToast((prevState) => {
        return {
          ...prevState,
          message: t("form.error.phone"),
        };
      });
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      const orderResponse = await res.json();
      console.log(orderResponse);

      if (res.ok) {
        setToast((prevState) => {
          return {
            ...prevState,
            type: "ok",
            message: t("form.submit.success"),
          };
        });
        setTimeout(() => {
          dispatch({ type: "CLEAR_CART_AFTER_SUBMIT" });
        }, 4000);
      } else {
        console.error(orderResponse, res.status);
        setToast((prevState) => {
          return {
            ...prevState,
            message: t("form.submit.error"),
          };
        });
      }
    } catch (e) {
      console.error(e);
      setToast((prevState) => {
        return {
          ...prevState,
          message: t("form.submit.error"),
        };
      });
    } finally {
      setLoading(false);
    }
  };

  function handleToast() {
    setToast((prevState) => {
      return {
        ...prevState,
        error: "",
        message: "",
      };
    });
  }

  const cartLength = state.cart.length;

  const redirect = cartLength === 0;
  useEffect(() => {
    if (redirect && toast.type === "ok") {
      router.push("/");
    } else if (redirect && !toast.type) {
      router.push("/not-found");
    }
  }, [redirect]);

  const nameRegexpEn = /^[A-Za-z]+$/;
  const nameRegexpUk = /^[А-Яа-яЄєІіЇїҐґ]+(['’][А-Яа-яЄєІіЇїҐґ]+)*$/u;

  function handleFirstName(e) {
    const firstName = e.target.value;
    const isValidFirstName =
      firstName !== "" && firstName.length >= 3
        ? nameRegexpEn.test(firstName) || nameRegexpUk.test(firstName)
        : false;

    setForm((prevState) => {
      return {
        ...prevState,
        firstName: firstName,
        isCorrectFirstName: isValidFirstName,
      };
    });
  }

  function handleLastName(e) {
    const lastName = e.target.value;
    const isValidLastName =
      lastName !== "" && lastName.length >= 3
        ? nameRegexpEn.test(lastName) || nameRegexpUk.test(lastName)
        : false;

    setForm((prevState) => {
      return {
        ...prevState,
        lastName: lastName,
        isCorrectLastName: isValidLastName,
      };
    });
  }

  function handleEmail(e) {
    const emailRegexp =
      /^[A-Za-z0-9]+([._-]?[A-Za-z0-9]+)*@[A-Za-z0-9]+([.]?[A-Za-z0-9]+)*\.[A-Za-z]{2,}$/;
    const email = e.target.value;
    const isValidEmail = email !== "" && emailRegexp.test(email);
    console.log(isValidEmail);

    setForm((prevState) => {
      return {
        ...prevState,
        email: email,
        isCorrectEmail: isValidEmail,
      };
    });
  }

  function handleTel(value) {
    const tel = value;

    const isValidTel =
      tel && typeof tel === "string" && tel.length !== 0
        ? isValidPhoneNumber(tel)
        : false;

    setForm((prevState) => {
      return {
        ...prevState,
        tel: tel || "",
        isCorrectTel: isValidTel,
      };
    });
  }

  function handleDelivery(e) {
    const delivery = e.target.value;

    console.log(delivery);

    setForm((prevState) => {
      return {
        ...prevState,
        delivery: delivery,
      };
    });
  }

  function handleComment(e) {
    const comment = e.target.value.slice(0, 100);

    setForm((prevState) => {
      return {
        ...prevState,
        comment: comment,
      };
    });
  }

  function handleConfirm() {
    setForm((prevState) => {
      return {
        ...prevState,
        confirm: !prevState.confirm,
      };
    });
  }

  function handleCompany(e) {
    const company = e.target.value;
    console.log(company);
    setForm((prevState) => {
      return {
        ...prevState,
        company: company,
      };
    });
  }

  function removeFromCart(item) {
    dispatch({ type: "REMOVE_FROM_CART", payload: item.id });
  }
  return (
    <section className="wrapper">
      {cartLength !== 0 ? (
        <>
          <TitleCheckout>{t("form.order")}</TitleCheckout>
          <div style={{ maxWidth: "600px", width: "100%", margin: "0 auto" }}>
            <DivShopCheckout>
              {data.map((item) => {
                const findCart = state.cart.find((cart) => cart.id === item.id);
                const cartQuantity = +state.cart.find(
                  (cart) => cart.id === item.id,
                )?.quantity;
                const price = +(t(`${item.h3}`).slice(0, 4) * cartQuantity);
                if (findCart) {
                  return (
                    <DivBookCheckout key={item.id}>
                      <H1Content>{t(`${item.h1}`)}</H1Content>
                      <DivImage>
                        {item.imageContainer === "BookRecipeShop" ? (
                          <BookRecipeCheckout
                            src={item.image}
                            width={item.width}
                            height={item.height}
                            loading="eager"
                            alt="the book"
                          />
                        ) : (
                          <BookHearCheckout
                            src={item.image}
                            width={item.width}
                            height={item.height}
                            loading="eager"
                            alt="the book"
                          />
                        )}
                      </DivImage>
                      <DivContent>
                        <DivFullH2>
                          <H2ContentCheckout>
                            {t(`${item.h2}`)}
                          </H2ContentCheckout>{" "}
                          <FullH2>{t(`${item.h2}`)}</FullH2>
                        </DivFullH2>
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
                      </DivBtn>
                    </DivBookCheckout>
                  );
                }
              })}
            </DivShopCheckout>
            {totalPrice !== 0 ? (
              <DivPrice>
                <PriceCheckout>
                  {t("form.order.total", { price: totalPrice })}
                </PriceCheckout>
                <svg width="25px" height="25px">
                  <use href="/sprite.svg#icons-error"></use>
                </svg>
              </DivPrice>
            ) : null}
          </div>
          <Form onSubmit={submitOrder}>
            <fieldset>
              <legend>{t("form.customer")}</legend>
              <DivCustomer>
                <label htmlFor="firstName">{t("form.firstname")}</label>
                <InputCustomer
                  $correct={form.isCorrectFirstName}
                  value={form.firstName}
                  onChange={handleFirstName}
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Name"
                  autoComplete="given-name"
                  required
                />
                <label htmlFor="lastName">{t("form.lastname")}</label>
                <InputCustomer
                  $correct={form.isCorrectLastName}
                  value={form.lastName}
                  onChange={handleLastName}
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Surname"
                  autoComplete="family-name"
                  required
                />
              </DivCustomer>
              <DivCustomer>
                <label htmlFor="email">{t("form.email")}</label>
                <InputCustomer
                  $correct={form.isCorrectEmail}
                  value={form.email}
                  onChange={handleEmail}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="nickname@gmail.com"
                  autoComplete="email"
                  required
                />
                <label htmlFor="phoneNumber">{t("form.tel")}</label>
                <PhoneInput
                  $correct={form.isCorrectTel}
                  inputComponent={InputCustomer}
                  defaultCountry="UA"
                  international
                  withCountryCallingCode
                  value={form.tel}
                  onChange={handleTel}
                  id="phoneNumber"
                  required
                  maxLength="17"
                />
              </DivCustomer>
            </fieldset>

            <FieldsetDelivery>
              <legend>{t("form.delivery")}</legend>
              <LabelDelivery htmlFor="novaposhta">
                <InputDelivery
                  checked={form.delivery === "Nova Poshta"}
                  onChange={handleDelivery}
                  type="radio"
                  id="novaposhta"
                  name="delivery"
                  value="Nova Poshta"
                  required
                />
                {t("form.np")}
              </LabelDelivery>
              <LabelDelivery htmlFor="ukrposhta">
                <InputDelivery
                  checked={form.delivery === "Ukrposhta"}
                  onChange={handleDelivery}
                  type="radio"
                  id="ukrposhta"
                  name="delivery"
                  value="Ukrposhta"
                />
                {t("form.ukrp")}
              </LabelDelivery>
            </FieldsetDelivery>
            <fieldset>
              <legend>{t("form.comment")}</legend>
              <TextareaComment
                value={form.comment}
                onChange={handleComment}
                id="comment"
                name="comment"
                placeholder="Your comment..."
                maxLength="100"
              ></TextareaComment>
            </fieldset>
            <input
              type="text"
              name="company"
              style={{ display: "none" }}
              autoComplete="off"
              value={form.company}
              onChange={handleCompany}
            />
            <div>
              <LabelConfirm htmlFor="checkbox">
                <InputConfirm
                  checked={form.confirm}
                  onChange={handleConfirm}
                  type="checkbox"
                  id="checkbox"
                  name="confirmOrder"
                  required
                />
                {t("form.confirm")}
              </LabelConfirm>
            </div>
            <BtnSubmit type="submit" disabled={loading}>
              {loading ? t("form.loading") : t("form.submit")}
            </BtnSubmit>
          </Form>
          {toast.message && (
            <Toast onClick={handleToast}>{toast.message}</Toast>
          )}
        </>
      ) : null}
    </section>
  );
}
