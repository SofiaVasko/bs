"use client";
import bookRecipe from "@/assets/iconsBooksRecipe/book.png";
import bookHear from "@/assets/iconsBooksBook/book.jpg";
import { useReducer } from "react";
import { createContext, useContext } from "react";

import { useEffect } from "react";
import { getCookie, setCookie } from "cookies-next";

let wishlistAndCartExist = getCookie("wishlistAndCart");
let initialState = wishlistAndCartExist
  ? JSON.parse(wishlistAndCartExist)
  : { cart: [], likes: [] };

export const data = [
  {
    id: "recipeBook",
    h1: "order.book",
    image: `${bookRecipe.src}`,
    imageContainer: "BookRecipeShop",
    width: 150,
    height: 223,
    h2: "book.h2",
    h3: "order.book.price",
    link: "/books/retsepty-lvivskoi-pani-z-berehiv-bosforu",
    price: 450,
  },
  {
    id: "hearBook",
    h1: "order.book",
    image: `${bookHear.src}`,
    imageContainer: "BookHearShop",
    width: 120,
    height: 170,
    h2: "books.h2",
    h3: "order.books.price",
    link: "/books/ty-pochuiesh-mene-teper",
    price: 400,
  },
  {
    id: "recipeEbook",
    h1: "order.eBook",
    image: `${bookRecipe.src}`,
    imageContainer: "BookRecipeShop",
    width: 150,
    height: 223,
    h2: "book.h2",
    h3: "order.eBook.price",
    link: "/books/retsepty-lvivskoi-pani-z-berehiv-bosforu",
    price: 250,
  },
];

const ShopContext = createContext(null);

export function useShopContext() {
  return useContext(ShopContext);
}

function shopReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_WISHLIST": {
      let itemToWishlist = data.find((item) => item.id === action.payload);
      if (!itemToWishlist) return state;
      let itemAlreadyExist = state.likes.find(
        (item) => item.id === action.payload,
      );
      console.log(state);
      if (itemAlreadyExist) {
        return {
          ...state,
          likes: state.likes.map((item) =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        };
      }
      return {
        ...state,
        likes: [...state.likes, { id: action.payload, quantity: 1 }],
      };
    }
    case "ADD_TO_CART": {
      let itemToCart = data.find((item) => item.id === action.payload);
      let itemAlreadyExist = state.cart.find(
        (item) => item.id === action.payload,
      );
      if (!itemToCart) return state;
      if (itemAlreadyExist) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        };
      }
      return {
        ...state,
        cart: [...state.cart, { id: action.payload, quantity: 1 }],
      };
    }
    case "REMOVE_FROM_WISHLIST": {
      let modifiedWishList = state.likes.filter(
        (item) => item.id !== action.payload,
      );
      return {
        ...state,
        likes: modifiedWishList,
      };
    }
    case "REMOVE_FROM_CART": {
      let removedItem = state.cart.find((item) => item.id === action.payload);
      if (!removedItem) return state;
      let modifiedCart = state.cart.filter(
        (item) => item.id !== action.payload,
      );
      if (removedItem.quantity > 1) {
        return {
          ...state,
          cart: state.cart.map((item) => {
            if (item.id === action.payload && item.quantity > 1) {
              return {
                ...item,
                quantity: item.quantity - 1,
              };
            }
            return item;
          }),
        };
      } else if (removedItem.quantity === 1) {
        return {
          ...state,
          cart: modifiedCart,
        };
      }
    }
    case "CLEAR_CART_AFTER_SUBMIT": {
      return {
        ...state,
        cart: [],
      };
    }
    default: {
      return state;
    }
  }
}

export default function ShopProvider({ children }) {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  useEffect(() => {
    setCookie("wishlistAndCart", JSON.stringify(state), {
      maxAge: 60 * 60 * 24 * 365,
      path: "/",
      sameSite: "lax",
      secure: true,
    });
  }, [state]);

  return (
    <ShopContext.Provider value={[state, dispatch]}>
      {children}
    </ShopContext.Provider>
  );
}
