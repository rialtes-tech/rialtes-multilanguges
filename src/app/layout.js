"use client";
import { useEffect, useState } from "react";
import { Montserrat } from "next/font/google";
import Footer from "./components/footer";
import Header from "./components/header";
import "./globals.css";
import Head from "next/head";
import Loader from "./Loader";
import CookieConsentWrapper from "./components/cookieConsentWrapper";
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // This will ensure the GTM script is loaded only on the client-side
    if (typeof window !== "undefined") {
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://www.googletagmanager.com/gtm.js?id=GTM-KM6HTT3";
      document.head.appendChild(script);

      // GTM initialization (pushing to the dataLayer)
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: "gtm.js", start: new Date().getTime() });
    }
  }, []);
  useEffect(() => {

    if (typeof window !== "undefined") {
      const handleLoad = () => {
        setTimeout(() => setIsLoading(false), 300);
      };

      if (document.readyState === "complete") {
        handleLoad();
      } else {
        window.addEventListener("load", handleLoad);
        return () => window.removeEventListener("load", handleLoad);
      }
    }
  }, []);

  return (
    <html lang="en" className={montserrat.variable}>
      <Head>
        {/* GTM Head Snippet: Include GTM script that loads async */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0], j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KM6HTT3');
            `,
          }}
        />
        <link rel="icon" href="/Rialtes Symbol.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <body className="font-sans bg-[#ffffff] relative">
        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KM6HTT3"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {/* Main page content always rendered */}
        <div className="w-full mx-auto max-w-[1920px]">
          <header>
            <Header />
          </header>
          <main className="xl:mt-[100px] lg:mt-[98px] md:mt-[100px] mt-[80px]">
            {children}
             <CookieConsentWrapper />
          </main>
          <footer className="text-white bottom-0 left-0 w-full z-10 shadow-md">
            <Footer />
          </footer>
        </div>

        {isLoading && (
          <div className="fixed inset-0 z-[9999] w-screen h-screen bg-white flex items-center justify-center">
            <Loader />
          </div>
        )}
      </body>
    </html>
  );
}
