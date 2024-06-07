import { Inter } from "next/font/google";
import Head from "next/head";
import "./style.css";
import "remixicon/fonts/remixicon.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "boxicons/css/boxicons.min.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Akeshya",
  description: "Created By Shweta Gatade",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
