import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Top1toto New",
  description: "Top1toto New Situs Togel Dan Slot Terpercaya Banyak Kemenangan Setiap Hari Hanya di Top1toto NEW",
  keywords: "Top1toto New",
  author: "Top1toto",
  icons: [
    {
      src: "/favicon.ico",
      sizes: "any",
      type: "image/x-icon",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
