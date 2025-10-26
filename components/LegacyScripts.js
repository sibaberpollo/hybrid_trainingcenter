import Script from "next/script";

const LegacyScripts = () => (
  <>
    <Script src="/js/vendor/modernizr-2.8.3.min.js" strategy="beforeInteractive" />
    <Script src="/js/vendor/jquery-1.11.3.min.js" strategy="beforeInteractive" />
    <Script src="/js/bootstrap.min.js" strategy="beforeInteractive" />
    <Script src="/js/bootstrap-tabcollapse.js" strategy="beforeInteractive" />
    <Script src="/js/jquery.meanmenu.min.js" strategy="afterInteractive" />
    <Script src="/vendor/OwlCarousel/owl.carousel.min.js" strategy="afterInteractive" />
    <Script src="/css/custom-slider/js/jquery.nivo.slider.js" strategy="afterInteractive" />
    <Script src="/css/custom-slider/home.js" strategy="afterInteractive" />
    <Script src="/js/jquery.zoom.js" strategy="afterInteractive" />
    <Script src="/js/isotope.pkgd.js" strategy="afterInteractive" />
    <Script src="/js/waypoints.min.js" strategy="afterInteractive" />
    <Script src="/js/jquery.counterup.min.js" strategy="afterInteractive" />
    <Script src="/js/jquery.magnific-popup.min.js" strategy="afterInteractive" />
    <Script src="/js/wow.min.js" strategy="afterInteractive" />
    <Script src="/js/plugins.js" strategy="lazyOnload" />
    <Script src="/js/main.js" strategy="lazyOnload" />
  </>
);

export default LegacyScripts;
