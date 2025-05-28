import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";

const WebinarForm = ({ redirectUrl, emailWebinarLink }) => {
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
    const formRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const captchaRes = await fetch('https://rialtes.netlify.app/.netlify/functions/captcha', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ captcha: captchaValue }),
            });

            const captchaData = await captchaRes.json();

            if (!captchaRes.ok) {
                alert(captchaData.message || 'CAPTCHA verification failed.');
                return;
            }

            await emailjs.sendForm(
                'service_af2ly7a',
                'template_0hotei9',
                formRef.current,
                'Snkm_XQ04-jspj9Ba'
            );

            formRef.current.reset();
            window.location.href = redirectUrl;
        } catch (error) {
            console.error('Form submission failed:', error);
            alert('Something went wrong. Please try again later.');
        }
    };

    return (
        <div className=" mt-10 bg-white">
            <h3 className="mb-4">Kindly fill the form to watch webinar</h3>

            <div className="grid grid-cols-6">
                <div className="col-span-6 md:col-span-3">
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">

                        <div className="grid grid-cols-2 gap-4">
                            <input
                                name="first_name"
                                placeholder="First Name*"
                                type="text"
                                required
                                className="w-full p-2 border rounded"
                            />
                            <input
                                name="surname"
                                placeholder="Last Name*"
                                type="text"
                                required
                                className="w-full p-2 border rounded"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <input
                                name="email"
                                placeholder="Email*"
                                type="email"
                                required
                                className="w-full p-2 border rounded"
                            />
                            <input
                                name="phone"
                                placeholder="Phone"
                                type="tel"
                                className="w-full p-2 border rounded"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <input
                                name="company"
                                placeholder="Company*"
                                type="text"
                                required
                                className="w-full p-2 border rounded"
                            />
                            <input
                                name="job_title"
                                placeholder="Role*"
                                type="text"
                                required
                                className="w-full p-2 border rounded"
                            />
                        </div>

                        <div className='flex xl:flex-row flex-col xl:gap-20 gap-5 !mt-10'>
                            <div>
                                <ReCAPTCHA
                                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                                    onChange={handleCaptchaChange}
                                />
                            </div>

                            <button
                                type="submit"
                                className="xl:w-1/2 w-full bg-blue-600 text-white py-2 px-4 text-[20px] rounded hover:bg-blue-700"
                            >
                                Watch Webinar
                            </button>
                        </div>
                        <input type="hidden" name="webinar_link" value={emailWebinarLink} />

                    </form>
                </div>

                <div className="hidden md:block md:col-span-3"></div>

            </div>
        </div>
    );
};

export default WebinarForm;
