import HeaderShop from "@/components/HeaderShop.js";

export default function RootLayout({ children }) {
  return (
    <>
      <HeaderShop />
      {children}
    </>
  );
}
