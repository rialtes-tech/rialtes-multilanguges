"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

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
        ml-[280px] w-[calc(100%-280px)] mr-0

        xl:ml-[200px] xl:w-[calc(100%-200px)]
        lg:ml-[150px] lg:w-[calc(100%-150px)]
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
        ml-[280px] w-[calc(100%-280px)] mr-0
        xl:ml-[200px] xl:w-[calc(100%-200px)]
        lg:ml-[150px] lg:w-[calc(100%-150px)]
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
        ml-[280px] w-[calc(100%-280px)] mr-0
        xl:ml-[200px] xl:w-[calc(100%-200px)]
        lg:ml-[150px] lg:w-[calc(100%-150px)]
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
        ml-[280px] w-[calc(100%-280px)] mr-0
        
        xl:ml-[200px] xl:w-[calc(100%-200px)]
        lg:ml-[150px] lg:w-[calc(100%-150px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
      >
        <section className="py-16 lg:max-w-[800px]  xl:max-w-[1600px]">
          <div className="container max-w-3xl">
            <h2 className="text-gray-800 mb-4 md:mb-8">
              Take the next step to operational excellence with us.
            </h2>

            <form className="max-w-3xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <input
                    type="text"
                    placeholder="Name*"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Surname*"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email*"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Company*"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Job Title*"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone*"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <textarea
                  placeholder="Message*"
                  rows="6"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                ></textarea>
              </div>

              <div>
                <button className="bg-[#134874] hover:bg-[#ffffff] hover:text-[#134874] border-[1px] border-[solid] border-[#134874] font-semibold text-white py-3 px-8 transition duration-300">
                  Let's Begin
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
