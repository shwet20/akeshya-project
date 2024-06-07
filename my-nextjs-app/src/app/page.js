import React from "react";
import Head from "next/head";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Clients from "@/components/client";
import AboutUs from "@/components/about";
import Counts from "@/components/counts";
import Services from "@/components/service";
import MoreServices from "@/components/moreService";
import Features from "@/components/features";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import "./script.js";

const Page = () => {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/style.css" />
        <link href="/assets/logo.png" rel="icon" />
        <link href="/assets/logo.png" rel="apple-touch-icon" />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
          rel="stylesheet"
        />
        <link href="/assets/vendor/aos/aos.css" rel="stylesheet" />
        <link
          href="/assets/vendor/bootstrap/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon/fonts/remixicon.css"
          rel="stylesheet"
        />
        <script
          src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"
          defer
        ></script>
        <script src="/assets/vendor/aos/aos.js" defer></script>
        <script
          src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"
          defer
        ></script>
        <script
          src="/assets/vendor/glightbox/js/glightbox.min.js"
          defer
        ></script>
        <script
          src="/assets/vendor/isotope-layout/isotope.pkgd.min.js"
          defer
        ></script>
        <script src="/assets/vendor/purecounter/purecounter.js" defer></script>
        <script src="/assets/vendor/swiper/swiper-bundle.min.js" defer></script>
        <script src="/script.js" defer></script>
      </Head>
      {/* Components  */}
      <Header />
      <Hero />
      <Clients />
      <AboutUs />
      <Counts />
      <Services />
      <MoreServices />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
};

export default Page;
