"use client";
import { useEffect } from "react";
import { Montserrat } from "next/font/google";
import Footer from "./components/footer";
import Header from "./components/header";
import "./globals.css";
import Head from "next/head";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export default function RootLayout({ children }) {
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
      </Head>
      <body className="font-sans bg-[#ffffff]">
        {/* GTM Body Snippet for noscript fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KM6HTT3"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <div className="w-full mx-auto max-w-[1920px]">
          <header>
            <Header />
          </header>
          <main className="xl:mt-[108px] lg:mt-[20px] md:mt-[20px] mt-0">
            {children}
          </main>
          <footer className="text-white bottom-0 left-0 w-full z-10 shadow-md">
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
