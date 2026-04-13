import "./globals.css";

import Header from "@/components/Header.js";
import Footer from "@/components/Footer.js";
import Providers from "@/providers/Providers.js";
import StyledComponentsRegistry from "@/providers/SCProvider.js";

import { Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin", "cyrillic"],
  weight: ["500"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "Ірина Окур",
    template: "%s | Ірина Окур",
  },
  description:
    "Вебсайт Ірини Окур — письменниці, філологині, поліглотки та інфлюенсерки, авторки книжок і україномовного медіаконтенту.",
  alternates: {
    canonical: "https://irynaokur.vercel.app",
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Ірина Окур",
    description: "Письменниця, філологиня та інфлюенсерка.",
    type: "website",
    url: "https://irynaokur.vercel.app",
    siteName: "Ірина Окур",
    images: [
      {
        url: "https://irynaokur.vercel.app/og.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ірина Окур",
    description: "Письменниця, філологиня та інфлюенсерка.",
    images: ["https://irynaokur.vercel.app/og.jpg"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body className={lora.className}>
        <StyledComponentsRegistry>
          <Providers>
            <Header />
            <main>{children}</main>
            <Footer />
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
