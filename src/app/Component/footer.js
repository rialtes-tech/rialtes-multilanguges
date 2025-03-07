"use client";
import Image from "next/image";
import Link from "next/link";
import React, { memo, useEffect, useState } from "react";

const Footer = () => {

    const [isCentered, setIsCentered] = useState(false);

    const [isVisible, setIsVisible] = useState(false);
    const handleScroll = () => {
        if (typeof window !== 'undefined' && window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };


   

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);


    
    
    useEffect(() => {
        const handleResize = () => {
          // Check if window width is less than a threshold (e.g., 1024px) to center-align content
          if (window.innerWidth < 1024) {
            setIsCentered(true);
          } else {
            setIsCentered(false);
          }
        };
    
        // Initial check and event listener for resizing
        handleResize();
        window.addEventListener("resize", handleResize);
    
        // Clean up the event listener when the component is unmounted
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);
    
    return (
        <footer
        className={`${
          isCentered ? "flex justify-center items-center" : "xl:px-0 lg:px-6 px-6"
        } pt-10 h-auto footer-background pb-10 flex flex-col items-center justify-center`}
      >        <div className="flex flex-col xl:pl-[17%] lg:flex-row md:flex-row border-b-[1px] xl:gap-24 lg:gap-10 pb-10 mt-4 w-full xl:pr-0 lg:pr-[200px] xl:justify-start mx-auto">
    
            <div className="flex gap-5 lg:flex-row flex-col">
                <Image
                    height="100"
                    width="150"
                    src="/images/homepage/footerlogo.png"
                    className="w-40 h-32"
                    alt="Company Logo"
                    loading="lazy"
                    href='/'
                />
                <div className="xl:mt-10">
                    <h3><span className="text-lg lg:text-2xl">Simplifying</span> <span className="opacity-50 text-lg lg:text-2xl">Problems</span></h3>
                    <h3><span className="text-lg lg:text-2xl">Enabling</span> <span className="opacity-50 text-lg lg:text-2xl">Solutions</span></h3>
                    <h3><span className="text-lg lg:text-2xl">Empowering</span> <span className="opacity-50 text-lg lg:text-2xl">Customers</span></h3>
                </div>
            </div>
    
            <div className="flex gap-10 flex-col xl:flex-row md:flex-row">
                {/* Links Section */}
                <div className="flex md:gap-5 gap-5 xl:justify-start mt-5 lg:mt-0 xl:mt-10">
                    <div className="opacity-60">
                        <Link href="/about-us">About Us</Link>
                        <p className="mt-3"><Link href="/service">Services</Link></p>
                        <p className="mt-3"><Link href="/industry">Industries</Link></p>
                        <p className="mt-3"><Link href="/insights">Insights</Link></p>
                        <p className="mt-3"><Link href="/contact-us">Contact Us</Link></p>
                    </div>
                    <div className="opacity-60">
                        <div>
                            <p><Link href="/sitemap">Sitemap</Link></p>
                            <p className="mt-3"><Link href="/terms">Terms of use</Link></p>
                            <p className="mt-3"><Link href="/privacy">Privacy Notice</Link></p>
                            <p className="mt-3"><Link href="/cookie">Cookie Notice</Link></p>
                        </div>
                    </div>
                </div>
    
                {/* Social Media Links (for both mobile and desktop) */}
                <div className="flex flex-row xl:flex-col md:flex-col lg:justify-start xl:mt-10">
                    <div className="mt-3">
                        <Link href="https://www.linkedin.com/company/rialtes-technologies-llc/" title="Visit our LinkedIn">
                            <Image className="h-8 w-10" alt="linkedin" src="/images/homepage/Asset5.svg" height={100} width={100} />
                        </Link>
                    </div>
                    <div className="mt-3">
                        <Link href="/facebook" title="Follow us on Facebook">
                            <Image className="h-8 w-10" alt="facebook" src="/images/homepage/Asset1.svg" height={100} width={100} />
                        </Link>
                    </div>
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
    
        {/* Scroll to Top Button */}
        {isVisible && (
            <div
                onClick={scrollToTop}
                className="fixed bottom-4 right-4 h-10 w-10 flex justify-center items-center p-2 rounded-full shadow-md text-blue-600 border border-blue-300 cursor-pointer"
            >
                ^
            </div>
        )}
    
        {/* Footer Text */}
        <p className="mt-3 xl:text-start text-center">©2025 Rialtes Technology, All rights reserved</p>
    </footer>
    


    )
}
export default memo(Footer);
