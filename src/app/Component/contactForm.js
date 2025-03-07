"use client";

import { useState } from "react";

export default function ContactForm() {
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
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Form submitted!');
    };

    const handleCheckboxChange = () => {
        setIsRobotChecked(!isRobotChecked);
      };
    return (
        <section className='mt-20 xl:px-[280px]  md:px-[100px] px-6'>
            <h2>Ready to take the next step? Let’s kick off</h2>
            <h2>your journey to operational excellence</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className='flex mt-5 gap-3 lg:flex-row md:flex-row flex-col'>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-1 block px-3 py-2 border lg:w-1/4 md:w-1/2 border-gray-300  shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Name*"
                        required
                    />
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.surname}
                        onChange={handleInputChange}
                        className="mt-1 block px-3 py-2 border lg:w-1/4 md:w-1/2 border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Surname*"
                        required
                    />
                </div>
                <div className='flex gap-3 lg:flex-row md:flex-row flex-col'>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-1 block px-3 py-2 border lg:w-1/4 md:w-1/2 border-gray-300  shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Email*"
                        required
                    />
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="mt-1 block px-3 py-2 border lg:w-1/4 md:w-1/2 border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Company*"
                        required
                    />
                </div>
                <div className='flex gap-3 lg:flex-row flex-col md:flex-row'>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.jobTitle}
                        onChange={handleInputChange}
                        className="mt-1 block px-3 py-2 lg:w-1/4 md:w-1/2 border border-gray-300  shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="JOb Title*"
                        required
                    />
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-1 block px-3 py-2 lg:w-1/4 md:w-1/2  border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                        className="mt-1 block px-3 py-2 border lg:w-[51%] w-full border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your message"
                        rows="4"
                        required
                    />
                </div>
                <div className='mt-5 flex gap-5'>
                    <button
                        type="submit"
                        className="py-3 px-5 text-white bg-[#134874] focus:outline-none focus:ring-2 font-medium focus:ring-blue-500"
                        disabled={!isRobotChecked}
                    >
                        Let’s Begin
                    </button>

                    <div className="flex items-center gap-2 border p-2 border-gray-500">
          <input
            type="checkbox"
            id="robotCheck"
            checked={isRobotChecked}
            onChange={handleCheckboxChange}
            className="h-5 w-5"
          />
          <h4 htmlFor="robotCheck" className="text-sm text-[#134874]">
            I'm not a robot
          </h4>
        </div>
                </div>
               
            </form>
        </section>
    )
}
