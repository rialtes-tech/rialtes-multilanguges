"use client";

import Image from "next/image";
import { useState } from "react";

export default function ContactForm({ title, className, padding }) {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        company: '',
        jobTitle: '',
        phone: '',
        message: '',
    });



    const [isRobotChecked, setIsRobotChecked] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleCheckboxChange = () => {
        setIsLoading(true); 
        setIsRobotChecked(false);
        setTimeout(() => {
            // After 1 second, mark the checkbox as checked
            setIsLoading(false); // Stop the loader
            setIsRobotChecked(true);
        }, 1000); // You can adjust the timeout duration
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Form submitted!');
    };
    return (
        <section className={'container '+ padding ? padding : ''}>
            <h2 className={className}>{title ? title : 'Ready to take the next step? Let’s kick off your journey to operational excellence'} </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className='flex mt-5 gap-3 lg:flex-row flex-col'>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-1 block px-3 py-2 border lg:w-1/4 placeholder-slate-800 border-gray-700  shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Name*"
                        required
                    />
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.surname}
                        onChange={handleInputChange}
                        className="mt-1 block px-3 py-2 border lg:w-1/4 placeholder-slate-800 border-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Surname*"
                        required
                    />
                </div>
                <div className='flex gap-3 lg:flex-row flex-col'>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-1 block px-3 py-2 border lg:w-1/4 placeholder-slate-800 border-gray-700  shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Email*"
                        required
                    />
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="mt-1 block px-3 py-2 border lg:w-1/4 placeholder-slate-800 border-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Company*"
                        required
                    />
                </div>
                <div className='flex gap-3 lg:flex-row flex-col'>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.jobTitle}
                        onChange={handleInputChange}
                        className="mt-1 block px-3 py-2 lg:w-1/4 border placeholder-slate-800 border-gray-700  shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Job Title*"
                        required
                    />
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-1 block px-3 py-2 lg:w-1/4  border placeholder-slate-800 border-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Phone*"
                        required
                    />
                </div>
                <div className="pb-5">
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="mt-1 block px-3 py-2 border lg:w-[51%] w-full placeholder-slate-800 border-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Message*"
                        rows="4"
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
                                        ${isRobotChecked ? 'border-green-500 bg-white' : 'border-gray-300 bg-white'}`}                                />
                              

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
                    <button disabled={!isRobotChecked} className="bg-[#134874] hover:bg-[#ffffff] hover:text-[#134874] border-[1px] border-[solid] border-[#134874] font-semibold text-white py-3 px-8 transition duration-300">
                        Let's Begin
                    </button>
                </div>
            </form>
        </section>
    )
}