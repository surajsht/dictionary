import "./globals.css";
import { Inter } from "next/font/google";
import Context from "./Context/Context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dictionary app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Context>{children}</Context>
      </body>
    </html>
  );
}
