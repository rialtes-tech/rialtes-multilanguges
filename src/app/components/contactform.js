"use client";

import { useEffect, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";


export default function ContactForm({ title, subtitle, subtitle1, className, padding }) {
    const [captchaValue, setCaptchaValue] = useState(false);
    const section1Ref = useRef(null);
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

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://rialtes.netlify.app/.netlify/functions/captcha', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ captcha: captchaValue }),
            });

            const data = await response.json();

            if (response.ok) {
                window.location.href = '/thank-you';
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error('Captcha verification failed:', error);
            alert('Error occurred');
        }
    };

    return (
        <section ref={section1Ref} className={'container ' + padding ? padding : ''}>

            <h2 className={className}>
                {title ? title : 'Ready to take the next step? Let’s kick off your journey to operational excellence'}
            </h2>

            {subtitle && (
                <p className="mt-8 leading-tight xl:text-[20px] text-[16px] xl:w-[50%]  font-regular">
                    {subtitle}
                </p>
            )}
            {subtitle1 && (
                <p className="mt-4 xl:text-[20px] text-[16px] xl:w-[50%] font-light xl:mt-[24px]">
                    {subtitle1}
                </p>
            )}
            <form onSubmit={handleSubmit} action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00D8V000002Xglg" method="POST" className="space-y-4 mt-10">
                <input type="hidden" name="oid" value="00D8V000002Xglg" />
                <input type="hidden" name="retURL" value="https://www.rialtes.com/thank-you" />
                <div className=' flex mt-5 gap-3 lg:flex-row flex-col'>
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
{/*                  
                         <ReCAPTCHA
                        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                        onChange={handleCaptchaChange}
                    />       */}
                    <button type="submit" name="submit" value="Submit" className="bg-[#134874] hover:bg-[#ffffff] hover:text-[#134874] border-[1px] border-[solid] border-[#134874] font-semibold text-white py-3 px-8 transition duration-300">
                        Let's Begin
                    </button>
                </div>
            </form>
        </section>
    )
}