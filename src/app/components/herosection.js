"use client";
import Image from "next/image";
import Link from "next/link";
import React, { memo, useEffect, useState } from "react";

export const HeroSection = ({ title, subtitle, mobimg, deskimg }) => {
    return (
        <section className="relative group overflow-hidden h-[399px] lg:h-[650px]">
            <div className="lg:block hidden">
                <Image
                    src={deskimg}
                    alt="desktop banner"
                    fill
                    style={{ objectFit: "cover", objectPosition: "35% 20%" }}
                    priority
                />
            </div>
            {/* mob image */}
            <div className="lg:hidden block">
                <Image
                    src={mobimg}
                    alt="mobile banner"
                    fill
                    priority
                />
            </div>

            <div className="h-full relative custom-container">
                <div className="grid grid-cols-1 lg:grid-cols-12 mt-[32px] sm:mt-[78px] md:mt-[115.5px] lg:mt-[131.5px] xl:mt-[68.5px] 2xl:mt-[131.5px]">

                    <div className="col-span-12 xl:col-span-7 lg:col-span-9">
                        <h3 className="text-white text-[18px] md:text-[24px] font-bold">{subtitle}</h3>
                        <h1 className="text-white text-[26px] leading-[38px] lg:text-[60px] lg:leading-[73px] md:text-[36px] md:leading-[50px] lg:w-[96%] w-[60%] mt-[11.5px] md:mt-[28.5px]">
                            {title}
                        </h1>
                    </div>


                    <div className="col-span-12 lg:col-span-3 xl:col-span-5">

                    </div>

                </div>
            </div>

        </section>
    )
}