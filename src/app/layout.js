import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./common/header";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "BiEnd",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} w-[calc(100%-50px)] mx-auto`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
