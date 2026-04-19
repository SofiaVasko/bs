"use client";
import {
  StyledLinkShop,
  HeaderShop,
  UlShop,
  QuantitySpan,
} from "@/styled/styledComponents/styledHeaderShop";

import { useShopContext } from "@/providers/ShopProvider";

export default function Header() {
  const [state, dispatch] = useShopContext();
  const quantityInCart =
    state.cart.length !== 0
      ? state.cart.reduce((acc, item) => acc + item.quantity, 0)
      : null;

  return (
    <HeaderShop>
      <nav className="wrapper">
        <UlShop>
          <li>
            <StyledLinkShop href="/shop/wishlist" className="activeSvg">
              <svg width="35px" height="35px">
                <use href="/sprite.svg#icons-wishlist"></use>
              </svg>
              {state.likes.length !== 0 ? (
                <QuantitySpan>{state.likes.length}</QuantitySpan>
              ) : null}
            </StyledLinkShop>
          </li>
          <li>
            <StyledLinkShop href="/shop/cart" className="activeSvg">
              <svg width="35px" height="35px">
                <use href="/sprite.svg#icons-shopping"></use>
              </svg>
              {state.cart.length !== 0 ? (
                <QuantitySpan>{quantityInCart}</QuantitySpan>
              ) : null}
            </StyledLinkShop>
          </li>
        </UlShop>
      </nav>
    </HeaderShop>
  );
}
