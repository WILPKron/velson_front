import { useEffect } from "react";
import TagManager from "react-gtm-module";

import axios from "axios";
import Layout from "../components/NavBar";

import { BACKEND_URL } from "./api/config";

import "../styles/globals.scss";
import { Helmet } from "react-helmet";
import Head from "next/head";
function MyApp({ Component, pageProps, api }) {
  useEffect(() => {
    localStorage.setItem("cookie", true);
    if (
      typeof document.getElementById("widget") != "undefined" &&
      document.getElementById("widget") != null
    ) {
      document.getElementById("widget").classList.remove("order-now-bottom");
    }

    TagManager.initialize({ gtmId: "GTM-599BLX2" });
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{api.meta.title}</title>
        <meta property="og:title" content={api.meta.metaTitle} />
        <meta name="keywords" content={api.meta.metaKeywords} />
        <meta property="og:description" content={api.meta.metaDescription} />
        <meta
          property="og:image"
          content="https://velson24.ru/static/media/logo.02e9d37e77a8a49ce2563077a23b98ef.svg"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://velson24.ru" />
        <meta property="og:site_name" content="Велсон" />
      </Helmet>

      <Layout data={api}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

MyApp.getInitialProps = async (ctx) => {
  try {
    const res = await axios.get(
      `${BACKEND_URL}/layout/?` +
        new URLSearchParams({
          code: ctx.router.asPath,
        })
    );
    console.log(res.data.popupInfo, 'res.data1')
    const data = res.data;

    return { api: data };
  } catch (error) {
    return { error };
  }
};
export default MyApp;
