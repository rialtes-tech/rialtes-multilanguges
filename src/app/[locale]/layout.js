import "./globals.css";
import { Montserrat } from "next/font/google";
import Header from "./components/header";
import Footer from "./components/footer";
import ClientLayout from "./clientLayout";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
 
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});
 
export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  const messages = await getMessages(locale);
  return (
    <html lang={locale} className={montserrat.variable}>
      <head>
        <link rel="icon" href="/Rialtes Symbol.jpg" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="font-sans bg-[#ffffff] relative">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KM6HTT3"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className="w-full mx-auto max-w-[1920px]">
              <Header /> 
            <main className="2xl:mt-[170px] lg:mt-[110px] md:mt-[60px] mt-[60px]">
              <ClientLayout>{children}</ClientLayout>
            </main>
 
            <footer className="text-white bottom-0 left-0 w-full z-10 shadow-md">
              <Footer />
            </footer>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
 
 