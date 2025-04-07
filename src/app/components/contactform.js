"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";


export default function ContactForm({ title, className, padding }) {

    const [isRobotChecked, setIsRobotChecked] = useState(false);
    const [captchaValue, setCaptchaValue] = useState(false);

    const [isLoading, setIsLoading] = useState(false);
    const section1Ref = useRef(null);
    const reCaptchaRef = useRef(null);

    const handleCheckboxChange = () => {
        setIsLoading(true);
        setIsRobotChecked(false);
        setTimeout(() => {
            setIsLoading(false);
            setIsRobotChecked(true);
        }, 1000);
    };

    useEffect(() => {
        const sectionId = window.location.hash.replace('#', '');

        if (sectionId === 'section1' && section1Ref.current) {
            window.scrollTo({
                behavior: 'smooth',
            });
        }

    }, []);
    const handleCaptchaChange = (value) => {
        setCaptchaValue(value)
    }



    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('/api/captcha', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    captcha: captchaValue,
                }),
            });

            if (response.ok) {
                window.location.href = '/thank-you';
            } else {
                const data = await response.json();
                alert(data.message);
            }
        } catch (error) {
            console.log('Error during captcha verification:', error);
            alert('Something went wrong');
        }
    };

    // onSubmit={handleSubmit}

    return (
        <section ref={section1Ref} className={'container ' + padding ? padding : ''}>
            <h2 className={className}>{title ? title : 'Ready to take the next step? Let’s kick off your journey to operational excellence'} </h2>
            <form onSubmit={handleSubmit} action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00D8V000002Xglg" method="POST" className="space-y-4 mt-10">
                <input type="hidden" name="oid" value="00D8V000002Xglg" />
                <input type="hidden" name="retURL" value="http://rialtes.netlify.app/thank-you" />
                <div className='flex mt-5 gap-3 lg:flex-row flex-col'>
                    <input
                        id="first_name" maxLength="40" name="first_name" type="text" required
                        className="mt-1 block px-3 py-2 border lg:w-1/4 placeholder-slate-800 border-gray-700  shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="First Name*"
                    />
                    <input
                        id="last_name" maxLength="80" name="last_name" type="text" required
                        className="mt-1 block px-3 py-2 border lg:w-1/4 placeholder-slate-800 border-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Last Name*"
                    />
                </div>
                <div className='flex gap-3 lg:flex-row flex-col'>
                    <input
                        id="email" maxLength="80" name="email" type="text" required
                        className="mt-1 block px-3 py-2 border lg:w-1/4 placeholder-slate-800 border-gray-700  shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Email*"
                    />
                    <input
                        id="company" maxLength="40" name="company" type="text" required
                        className="mt-1 block px-3 py-2 border lg:w-1/4 placeholder-slate-800 border-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Company*"
                    />
                </div>

                <div className='flex gap-3 lg:flex-row flex-col'>
                    <input
                        id="title" maxLength="40" name="title" type="text"
                        className="mt-1 block px-3 py-2 lg:w-1/4 border placeholder-slate-800 border-gray-700  shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Role*"
                    />
                    <input
                        id="phone" maxLength="10" name="phone"

                        className="mt-1 block px-3 py-2 lg:w-1/4  border placeholder-slate-800 border-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Phone"
                    />
                </div>
                <div className="pb-5">
                    <textarea id="00NQh0000041tRZ" name="00NQh0000041tRZ" rows="3" wrap="soft"
                        className="mt-1 block px-3 py-2 border lg:w-[51%] w-full placeholder-slate-800 border-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Message*"
                        required
                    />
                </div>


                <input type="hidden" id="lead_source" name="lead_source" value="Web"></input>
                <div className='mt-5 flex gap-8 flex-col xl:flex-row md:flex-row'>
                     {/* <div
                        className={`flex items-center  gap-2 border p-4 border-gray-500 ${isRobotChecked ? "bg-[#0092E0]" : "bg-white"}`}
                    >  */}
                     {/* <div className="flex gap-3 items-center">
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
                        </div> */}
                     {/* </div>   */}
                    <ReCAPTCHA
                        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                        onChange={handleCaptchaChange}
                    />,
                    <button type="submit" name="submit" value="Submit" className="bg-[#134874] hover:bg-[#ffffff] hover:text-[#134874] border-[1px] border-[solid] border-[#134874] font-semibold text-white py-3 px-8 transition duration-300">
                        Let's Begin
                    </button>
                </div>
            </form>
        </section>
    )
}