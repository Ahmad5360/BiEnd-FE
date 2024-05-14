import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./components/common/header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-variable",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "BiEnd",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>
        <Header />
        <div className="w-[calc(100%-50px)] mx-auto">{children}</div>
      </body>
      <ToastContainer />
    </html>
  );
}
