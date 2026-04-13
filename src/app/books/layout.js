import HeaderBooks from "@/components/HeaderBooks.js";

export default function RootLayout({ children }) {
  return (
    <>
      <HeaderBooks />
      {children}
    </>
  );
}
