"use client";
import Image from "next/image";
import Link from "next/link";
import React, { memo, useEffect, useState } from "react";
 
export const HeroSection = ({ title, subtitle, mobimg, deskimg, extraImg, txtColor }) => {
    return (
        <section className="relative group overflow-hidden h-[399px] lg:h-[650px] ">
            {/* Desktop Image */}
            <div className="hidden md:block">
                <Image
                    src={deskimg}
                    alt="desktop banner"
                    fill
                    style={{ objectFit: "cover", objectPosition: "35% 20%" }}
                    priority
                    className="transform transition-transform duration-500 group-hover:scale-110"
                />
            </div>
 
            {/* Mobile Image */}
            <div className="block md:hidden">
                <Image
                    src={mobimg}
                    alt="mobile banner"
                    fill
                    priority
                />
            </div>
 
            <div className="relative h-full custom-container flex items-center">
                <div className="grid grid-cols-1 lg:grid-cols-12 w-full">
                    <div className="col-span-12 xl:col-span-7 lg:col-span-9">
                        <h3 className={`${txtColor ? `text-[${txtColor}]` : "text-white"} text-[18px] md:text-[24px] font-bold`}>
                            {subtitle}
                        </h3>
                        <h1 className={`${txtColor ? `text-[${txtColor}]` : "text-white"}   text-[26px] leading-[38px] md:text-[36px] md:leading-[50px] lg:text-[60px] lg:leading-[73px] w-[90%] lg:w-[92%] mt-[11.5px] md:mt-[28.5px]`}>
                            {title}
                        </h1>
 
                        {
                            extraImg &&
                            <Image
                                src={extraImg}
                                alt="SAP Partner Logo"
                                width={0}
                                height={0}
                                priority
                                className="mt-5 w-[25%] sm:w-[16%] md:w-[14%] lg:w-[16%]"
                            />
                        }
                    </div>
 
                    <div className="col-span-12 lg:col-span-3 xl:col-span-5">
                    </div>
                </div>
            </div>
        </section>
 
    )
}