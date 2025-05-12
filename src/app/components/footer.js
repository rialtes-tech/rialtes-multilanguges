"use client";
import Image from "next/image";
import Link from "next/link";
import React, { memo, useEffect, useState } from "react";

const Footer = () => {

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
      className={`${isCentered ? "flex" : "xl:px-0 lg:px-6 px-[35px]"
        } pt-10 h-auto footer-background pb-10 flex flex-col`}
    >        <div className="flex flex-col lg:flex-row md:flex-row border-b-[1px] custom-container xl:gap-[22rem] lg:gap-10 pb-10 mt-4 w-full xl:pr-0 lg:pr-[50px] xl:justify-start mx-auto">

        <div className="flex gap-5 lg:flex-row flex-col">
          <Image
            height="100"
            width="150"
            src="/images/homepage/Rialtes Logo_white.webp"
            className="w-40 h-32 mt-[25px]"
            alt="Company Logo"
            loading="lazy"
            href='/'
          />
          <div className="xl:mt-10">
            <h3><span className="text-lg lg:text-xl font-bold">Simplifying</span> <span className="opacity-50 text-lg lg:text-xl">Problems</span></h3>
            <h3><span className="text-lg lg:text-xl font-bold">Enabling</span> <span className="opacity-50 text-lg lg:text-xl">Solutions</span></h3>
            <h3><span className="text-lg lg:text-xl font-bold">Empowering</span> <span className="opacity-50 text-lg lg:text-xl">Customers</span></h3>
          </div>
        </div>

        <div className="flex gap-10 flex-col xl:flex-row md:flex-row">
          {/* Links Section */}
          <div className="flex md:gap-5 gap-5 xl:justify-start mt-5 lg:mt-0 xl:mt-10">
            <div>
              <p> <Link href="/about-us">About Us</Link></p>
              <p className="mt-3"><Link href="/industry">Industries</Link></p>
              <p className="mt-3"><Link href="/insights">Insights</Link></p>
            </div>
            <div>
              <div>
                <p><Link href="/terms-of-use">Terms of use</Link></p>
                <p className="mt-3"><Link href="/privacy-policy">Privacy Notice</Link></p>
                <p className="mt-3"><Link href="/contact-us">Contact Us</Link></p>

                {/* <p className="mt-3"><Link href="/cookie">Cookie Notice</Link></p> */}
              </div>
            </div>
          </div>

          {/* Social Media Links (for both mobile and desktop) */}
          <div className="flex flex-row xl:flex-col md:flex-col lg:justify-start xl:mt-10">
            <div className="xl:mt-0 mt-3">
              <Link href="https://www.linkedin.com/company/rialtes-technologies-llc/" title="Visit our LinkedIn">
                <Image className="h-8 w-10" alt="linkedin" src="/images/homepage/Asset5.svg" height={100} width={100} />
              </Link>
            </div>
            {/* <div className="mt-3">
                        <Link href="/facebook" title="Follow us on Facebook">
                            <Image className="h-8 w-10" alt="facebook" src="/images/homepage/Asset1.svg" height={100} width={100} />
                        </Link>
                    </div> */}
            <div className="mt-3">
              <Link href="https://x.com/Rialtestech" title="Follow us on Twitter">
                <Image className="h-8 w-10" alt="twitter" src="/images/homepage/Asset2.svg" height={100} width={100} />
              </Link>
            </div>
            <div className="mt-3">
              <Link href="https://www.instagram.com/rialtes_technologies/" title="Follow us on Instagram">
                <Image className="h-8 w-10" alt="instagram" src="/images/homepage/Asset3.svg" height={100} width={100} />
              </Link>
            </div>
            <div className="mt-3">
              <Link href="https://www.youtube.com/@rialtes" title="Follow us on YouTube">
                <Image className="h-8 w-10" alt="youtube" src="/images/homepage/Asset4.svg" height={100} width={100} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-5 text-start flex px-[35px] xl:px-[280px]">©2025 Rialtes Technology, All rights reserved</p>


      {/* Scroll to Top Button */}
      {isVisible && (
        <div
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 cursor-pointer"
        >
          {/* Change image based on scroll direction */}
          {scrollDirection === "up" ? (
            <Image src="/images/homepage/floting arrow gray.svg" className="w-16" alt="Up arrow" width={24} height={24} />
          ) : (
            <Image src="/images/homepage/floting arrow white.svg" alt="Up arrow" className="w-16" width={24} height={24} />
          )}
        </div>
      )}
      {/* Footer Text */}
    </footer>



  )
}
export default memo(Footer);
