import Footer from "@/components/navfoot/footer";
import Navbar from "@/components/navfoot/navbar";
import "@/styles/globals.css";
import SEO from "@bradgarropy/next-seo";
import Head from "next/head";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", "G-ZTQ3FTMZGR");
  });
  return (
    <>
      <SEO
        title="beware / home"
        description="creating awarness fot not to use online loan apps and effects using them"
        keywords={["loan app", "awarness", "beware", "beware-sigma"]}
        icon="/logo3.png"
      />
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-ZTQ3FTMZGR"
        ></script>
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
