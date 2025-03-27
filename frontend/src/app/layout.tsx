import type { Metadata } from "next";
import { Montserrat} from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portifolio Pessoal",
};

const fonte = Montserrat({
  subsets: ["latin"],
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fonte.className}`}
      >
        {children}
      </body>
    </html>
  );
}
