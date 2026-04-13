"use client";
import { StyledLink } from "@/styled/styledComponents/styledHeader";
import { HeaderShop, UlShop } from "@/styled/styledComponents/styledHeaderShop";

export default function Header() {
  return (
    <HeaderShop>
      <nav className="wrapper">
        <UlShop>
          <li>
            <StyledLink href="/shop/wishlist" className="activeSvg">
              <svg width="35px" height="35px">
                <use href="/sprite.svg#icons-wishlist"></use>
              </svg>
            </StyledLink>
          </li>
          <li>
            <StyledLink href="/shop/cart" className="activeSvg">
              <svg width="35px" height="35px">
                <use href="/sprite.svg#icons-shopping"></use>
              </svg>
            </StyledLink>
          </li>
        </UlShop>
      </nav>
    </HeaderShop>
  );
}
