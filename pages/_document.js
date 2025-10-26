import { Html, Head, Main, NextScript } from "next/document";

const Document = () => (
  <Html className="no-js" lang="">
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="stylesheet" href="/css/bootstrap.min.css" />
      <link rel="stylesheet" href="/css/font-awesome.min.css" />
      <link rel="stylesheet" href="/vendor/OwlCarousel/owl.carousel.min.css" />
      <link rel="stylesheet" href="/vendor/OwlCarousel/owl.theme.default.min.css" />
      <link rel="stylesheet" href="/css/meanmenu.min.css" />
      <link rel="stylesheet" href="/css/normalize.css" />
      <link rel="stylesheet" href="/css/main.css" />
      <link rel="stylesheet" href="/css/custom-slider/css/nivo-slider.css" type="text/css" />
      <link rel="stylesheet" href="/css/custom-slider/css/preview.css" type="text/css" media="screen" />
      <link rel="stylesheet" type="text/css" href="/css/flaticon.css" />
      <link rel="stylesheet" type="text/css" href="/css/animate.css" />
      <link rel="stylesheet" type="text/css" href="/css/site.css" />
      <link rel="stylesheet" href="/css/hover-min.css" />
      <link rel="stylesheet" href="/css/magnific-popup.css" />
      <link rel="stylesheet" href="/style.css" />
      <link rel="stylesheet" href="/css/responsive.css" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
