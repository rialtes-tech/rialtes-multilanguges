import { Montserrat } from "next/font/google";
import Footer from "./components/footer";
import Header from "./components/header";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.variable}>
     
      <body className="font-sans bg-[#ffffff]">
        <div className="w-full mx-auto max-w-[1920px]">
          <header>
            <Header />
          </header>
          <main className="lg:mt-[103px] md:mt-[96px] mt-[56px]">{children}</main>
          <footer className="text-white bottom-0 left-0 w-full z-10 shadow-md">
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
