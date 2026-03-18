"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React, { memo, useEffect, useState } from "react";

const Footer = () => {
  const t = useTranslations('footer')
  const t1 = useTranslations('header')


  const [isCentered, setIsCentered] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0); // Track previous scroll position
  const [scrollDirection, setScrollDirection] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    // Toggle visibility of the scroll button after 300px scroll
    if (currentScrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
    // Determine scroll direction (up or down)
    if (currentScrollY > prevScrollY) {
      setScrollDirection("down"); // Scrolling down
    } else if (currentScrollY < prevScrollY) {
      setScrollDirection("up"); // Scrolling up
    }
    setPrevScrollY(currentScrollY); // Update previous scroll position
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [prevScrollY]);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsCentered(true);
      } else {
        setIsCentered(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); 
  return (
    <footer
      className={`text-[#ffffff] bg-cover max-md:absolute bg-center bg-no-repeat flex flex-col custom-container lg:pt-[66px] pb-[40px] relative`}>
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/homepage/footer-Bg.webp"
          alt="Footer Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
        />
      </div>
      <div className={`flex flex-col md:flex-row border-b border-gray-300 justify-start md:justify-between gap-[41px] md:gap-10 pb-10 mt-4 w-full mx-auto`}>

        {/* Logo and Tagline */}
        <div className="flex lg:gap-[60px] gap-[26px] flex-col lg:flex-row  lg:items-start">
          <Image
            height="100"
            width="150"
            src="/images/homepage/rialtes-company-logo.webp"
            className="w-40 h-32"
            alt="Company Logo"
            href='/'
            priority
          />
          <div className="lg:text-left">
            <p className="mt-4">
              <span className="text-lg lg:text-xl font-bold">{t('Simplifying')}</span>{" "}
              <span className="opacity-50 text-lg lg:text-xl">{t('Problems')}</span>
            </p>
            <p className="mt-4">
              <span className="text-lg lg:text-xl font-bold">{t('Enabling')}</span>{" "}
              <span className="opacity-50 text-lg lg:text-xl">{t('Solutions')}</span>
            </p>
            <p className="mt-4">
              <span className="text-lg lg:text-xl font-bold">{t('Empowering')}</span>{" "}
              <span className="opacity-50 text-lg lg:text-xl">{t('Customers')}</span>
            </p>
          </div>
        </div>
        {/* Links Section and Socials */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-[42px]">
          {/* Links */}
          <div className="flex gap-[48px] md:gap- lg:gap-10  lg:justify-start md:mt-auto lg:mt-0">
            <div>
              <p>
                <Link href="/about-us">{t1('aboutusTitle')}</Link>
              </p>
              <p className="mt-3">
                <Link href="/industry">{t1('industriesTitle')}</Link>
              </p>
              <p className="mt-3">
                <Link href="/insights">{t1('insightTitle')}</Link>
              </p>
            </div>
            <div>
              <p>
                <Link href="/terms-of-use"> {t('Termsofuse')}</Link>
              </p>
              <p className="mt-3">
                <Link href="/privacy-policy"> {t('PrivacyNotice')}</Link>
              </p>
              <p className="mt-3">
                <Link href="/contact-us">{t1('contactTitle')}</Link>
              </p>
              {/* <p className="mt-3"><Link href="/cookie">Cookie Notice</Link></p> */}
            </div>
          </div>
          {/* Social Media Icons */}
          <div className="flex flex-row md:flex-col gap-4 items-center md:items-start md:mt-auto lg:mt-0" >
            <Link
              href="https://www.linkedin.com/company/rialtes-technologies-llc/"
              title="Visit our LinkedIn"
              className="lg:mt-0 mt-3">
              <Image
                className="h-8 w-10"
                alt="linkedin"
                src="/images/homepage/Asset5.svg"
                height={100}
                width={100}
                priority
              />
            </Link>
            {/* <Link href="/facebook" title="Follow us on Facebook" className="mt-3">
          <Image
            className="h-8 w-10"
            alt="facebook"
            src="/images/homepage/Asset1.svg"
            height={100}
            width={100}
          />
        </Link> */}
            <Link href="https://x.com/Rialtestech" title="Follow us on Twitter" className="mt-3 md:mt-0">
              <Image
                className="h-8 w-10"
                alt="twitter"
                src="/images/homepage/Asset2.svg"
                height={100}
                width={100}
                priority
              />
            </Link>
            <Link
              href="https://www.instagram.com/rialtes_technologies/"
              title="Follow us on Instagram"
              className="mt-3 md:mt-0"
            >
              <Image
                className="h-8 w-10"
                alt="instagram"
                src="/images/homepage/Asset3.svg"
                height={100}
                width={100}
                priority
              />
            </Link>
            <Link href="https://www.youtube.com/@rialtes" title="Follow us on YouTube" className="mt-3 md:mt-0">
              <Image
                className="h-8 w-10"
                alt="youtube"
                src="/images/homepage/Asset4.svg"
                height={100}
                width={100}
                priority
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <p className="mt-5 text-start 4xl:text-[20px] xl:text-[18px] text-[16px]">©2026 Rialtes, All rights reserved</p>

      {/* Scroll to Top Button */}
      {isVisible && (
        <div onClick={scrollToTop} className="fixed bottom-4 right-4 cursor-pointer">
          {scrollDirection === "up" ? (
            <Image
              src="/images/homepage/floting arrow gray.svg"
              className="w-16"
              alt="Up arrow"
              width={24}
              height={24}
              priority
            />
          ) : (
            <Image
              src="/images/homepage/floting arrow white.svg"
              alt="Up arrow"
              className="w-16"
              width={24}
              height={24}
              priority
            />
          )}
        </div>
      )}
    </footer>
  )
}
export default memo(Footer);
