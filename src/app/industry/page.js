"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ContactForm from "../components/contactform";

export default function Industry() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Industry | Rialtes</title>
        <meta name="description" content="About our company" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="relative h-[250px] sm:h-[500px] lg:h-[650px] overflow-hidden">
        <Image
          src="/images/industry/industry-header.webp"
          alt="Webinar Header"
          fill
          style={{ objectFit: "cover", objectPosition: "70% 20%" }}
          priority
        />
        <div
          className="
        container h-full relative
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
        >
          <div className="container mx-auto h-full flex flex-col justify-center">
            <h3 className="text-white text-[300] font-medium mb-2">
              Industries
            </h3>
            <h1 className="text-[#ffffff] max-w-sm">
              Transform how you engage with your clients
            </h1>
          </div>
        </div>
      </section>

      <div
        className="
        container
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
      >
        <section className="pt-16 bg-white">
          <div className="flex flex-col md:flex-row gap-8 mb-16 max-w-7xl">
            <div className="w-full md:w-1/3 mr-6">
              <h1 className="text-[#000000] mb-4 ">
                Different Industries, Different Mindsets
              </h1>
            </div>
            <div className="w-full md:w-1/2">
              <p className="mb-6">
                We specialize in various industries, enabling us to offer
                comprehensive solutions tailored to meet your specific industry
                needs. With our expertise and support, clients can respond to
                evolving industry conditions and leverage emerging trends for
                their business.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div
        className="
        container
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
      >
        <section className="bg-white">
          <div className="max-w-3xl">
            <h2 className="text-[#000000] mb-4">Industries we serve</h2>
            <p className="mb-8">
              Achieving goals using a simplified patient care solution
            </p>
          </div>
        </section>
      </div>

{/* Contact Form Section */}
      <div
        className="
        container
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]
        text-black py-6"
      >
        <ContactForm title={'Take the next step to operational excellence with us.'} className={'max-w-4xl'} />
      </div>
    </div>
  );
}
