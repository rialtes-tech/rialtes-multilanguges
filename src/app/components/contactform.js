"use client";

import { useState } from "react";

export default function ContactForm({ title }) {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        company: '',
        jobTitle: '',
        phone: '',
        message: '',
    });
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
        // Here you would typically send the form data to an API or backend
        alert('Form submitted!');
    };
    return (
        <section className='container px-6'>
            <h2>{title ? title : 'Ready to take the next step? Let’s kick off your journey to operational excellence'}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className='flex mt-5 gap-3 lg:flex-row flex-col'>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-1 block px-3 py-2 border lg:w-1/4 border-gray-300  shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Name*"
                        required
                    />
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.surname}
                        onChange={handleInputChange}
                        className="mt-1 block px-3 py-2 border lg:w-1/4 border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                        className="mt-1 block px-3 py-2 border lg:w-1/4 border-gray-300  shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Email*"
                        required
                    />
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="mt-1 block px-3 py-2 border lg:w-1/4 border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                        className="mt-1 block px-3 py-2 lg:w-1/4 border border-gray-300  shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Job Title*"
                        required
                    />
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-1 block px-3 py-2 lg:w-1/4  border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                        placeholder="Message*"
                        rows="4"
                        required
                    />
                </div>
                <div className='mt-5'>
                    <button
                        type="submit"
                        className="py-2 px-4 text-white bg-[#134874] focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Let’s Begin
                    </button>
                </div>
            </form>
        </section>
    )
}