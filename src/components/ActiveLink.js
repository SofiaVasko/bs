"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
// import {StyledLink} from "@/styled/styledComponents/styledHeader";

export const ActiveLink = ({ href, children, className }) => {
  function getActivePath() {
    const path = usePathname();
    const activePath =
      href === "/"
        ? path === "/"
        : path.startsWith(href + "/") || path === href;
    return activePath;
  }
  const isActive = getActivePath();

  return (
    <Link href={href} className={`${className} ${isActive ? "active" : ""}`}>
      {children}
    </Link>
  );
};
