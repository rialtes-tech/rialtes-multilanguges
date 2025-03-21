"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ContactForm({ title, className, padding }) {

    const [isRobotChecked, setIsRobotChecked] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleCheckboxChange = () => {
        setIsLoading(true);
        setIsRobotChecked(false);
        setTimeout(() => {
            setIsLoading(false);
            setIsRobotChecked(true);
        }, 1000);
    };

    return (
        <section className={'container ' + padding ? padding : ''}>
            <h2 className={className}>{title ? title : 'Ready to take the next step? Let’s kick off your journey to operational excellence'} </h2>
            <form action="https://test.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00DEk00000M4fsj" method="POST" className="space-y-4 mt-10">
                <input type="hidden" name="oid" value="00DEk00000M4fsj" />
                <input type="hidden" name="retURL" value="/thank-you" />
                <div className='flex mt-5 gap-3 lg:flex-row flex-col'>
                    <input
                        id="first_name" maxlength="40" name="first_name" type="text" required
                        className="mt-1 block px-3 py-2 border lg:w-1/4 placeholder-slate-800 border-gray-700  shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Name*"
                    />
                    <input
                        id="last_name" maxlength="80" name="last_name" type="text" required
                        className="mt-1 block px-3 py-2 border lg:w-1/4 placeholder-slate-800 border-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Surname*"
                    />
                </div>
                <div className='flex gap-3 lg:flex-row flex-col'>
                    <input
                        id="email" maxlength="80" name="email" type="text" required
                        className="mt-1 block px-3 py-2 border lg:w-1/4 placeholder-slate-800 border-gray-700  shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Email*"
                    />
                    <input
                        id="company" maxlength="40" name="company" type="text" required
                        className="mt-1 block px-3 py-2 border lg:w-1/4 placeholder-slate-800 border-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Company*"
                    />
                </div>
                <div className='flex gap-3 lg:flex-row flex-col'>
                    <input
                        id="title" maxlength="40" name="title" type="text"
                        className="mt-1 block px-3 py-2 lg:w-1/4 border placeholder-slate-800 border-gray-700  shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Job Title*"
                    />
                    <input
                        id="phone" maxlength="40" name="phone" type="tel"
                        className="mt-1 block px-3 py-2 lg:w-1/4  border placeholder-slate-800 border-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Phone*"
                    />
                </div>
                <div className="pb-5">
                    <textarea
                        id="comments" name="00NQh000000s2Al" rows="3" wrap="soft"
                        className="mt-1 block px-3 py-2 border lg:w-[51%] w-full placeholder-slate-800 border-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Message*"
                        required
                    />
                </div>
                <div className='mt-5 flex gap-8 flex-col xl:flex-row md:flex-row'>
                    <div
                        className={`flex items-center  gap-2 border p-4 border-gray-500 ${isRobotChecked ? "bg-[#0092E0]" : "bg-white"}`}
                    >
                        <div className="flex gap-3 items-center">
                            <div className="relative">
                                <input
                                    type="checkbox"
                                    id="robotCheck"
                                    checked={isRobotChecked}
                                    onChange={handleCheckboxChange}
                                    className={`h-8 w-8 border-2 flex rounded-sm transition-all 
                                        ${isRobotChecked ? 'border-green-500 bg-white' : 'border-gray-300 bg-white'}`} />


                                {isLoading && (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-[32px] h-[32px] border-4 border-t-4 border-gray-300 border-t-[#71acdb] rounded-full animate-spin"></div>
                                    </div>
                                )}
                            </div>

                            <label
                                htmlFor="robotCheck"
                                className={`text-sm font-bold ${isRobotChecked ? "text-white" : "text-[#134874]"}`}
                            >
                                I'm not a robot
                            </label>

                            <Image
                                src={isRobotChecked ? '/images/homepage/recaptcha_blue.svg' : '/images/partners/recaptcha.svg'}
                                className="w-[30px]"
                                alt="captcha"
                                width={30}
                                height={30}
                                sizes="100vw"
                                style={{
                                    objectFit: "cover",
                                }}
                                priority
                            />
                        </div>
                    </div>
                    <button disabled={!isRobotChecked} type="submit" name="submit" value="Submit" className="bg-[#134874] hover:bg-[#ffffff] hover:text-[#134874] border-[1px] border-[solid] border-[#134874] font-semibold text-white py-3 px-8 transition duration-300">
                        Let's Begin
                    </button>
                </div>
            </form>
        </section>
    )
}