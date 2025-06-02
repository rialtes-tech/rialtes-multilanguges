"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    return { num1, num2, sum: num1 + num2 };
};

export default function ContactForm({ title, subtitle, subtitle1, className, padding }) {
    const [captcha, setCaptcha] = useState(generateCaptcha());
    const [userAnswer, setUserAnswer] = useState('');
    const [error, setError] = useState('');
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const formRef = useRef(null);

    const refreshCaptcha = () => {
        setCaptcha(generateCaptcha());
        setUserAnswer('');
        setError('');
    };

    const validateForm = (form) => {
        const errors = {};
        const firstName = form.first_name.value.trim();
        const lastName = form.last_name.value.trim();
        const email = form.email.value.trim();
        const message = form['00NQh0000041tRZ'].value.trim();

        // Validate first name
        if (!firstName) {
            errors.first_name = "First name is required.";
        } else if (!/^[A-Za-z\s'-]+$/.test(firstName)) {
            errors.first_name = "First name contains invalid characters.";
        } else if (firstName.length > 40) {
            errors.first_name = "First name should not exceed 40 characters.";
        }

        // Validate last name
        if (!lastName) {
            errors.last_name = "Last name is required.";
        } else if (!/^[A-Za-z\s'-]+$/.test(lastName)) {
            errors.last_name = "Last name contains invalid characters.";
        } else if (lastName.length > 40) {
            errors.last_name = "Last name should not exceed 40 characters.";
        }

        // Validate email (you already have this, keep as is)
        if (!email) {
            errors.email = "Email is required.";
        } else if (!/^\S+@\S+\.\S+$/.test(email)) {
            errors.email = "Invalid email address.";
        }

        // Validate message length
        if (!message) {
            errors.message = "Message is required.";
        } else if (message.length < 10) {
            errors.message = "Message should be at least 10 characters long.";
        } else if (message.length > 1000) {
            errors.message = "Message should not exceed 1000 characters.";
        }

        // Validate captcha (your existing code)
        if (!userAnswer.trim()) {
            errors.captcha = "Captcha is required.";
        } else if (parseInt(userAnswer) !== captcha.sum) {
            errors.captcha = "Wrong captcha answer. Please try again.";
        }

        return errors;
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget; // safer way to get the form element

        const errors = validateForm(form);

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            setError(errors.captcha || '');
            setIsSubmitting(false);
            return;
        }

        setError('');
        setFormErrors({});
        setIsSubmitting(true);

        form.submit();
    };





    return (
        <section className={'container ' + (padding ? padding : '')}>
            <h2 className={className}>
                {title ? title : 'Ready to take the next step? Let’s kick off your journey to operational excellence'}
            </h2>

            {subtitle && (
                <p className="mt-8 leading-tight xl:text-[20px] text-[16px] xl:w-[50%] font-regular">
                    {subtitle}
                </p>
            )}
            {subtitle1 && (
                <p className="mt-4 xl:text-[20px] text-[16px] xl:w-[50%] xl:mt-[24px] font-regular">
                    {subtitle1}
                </p>
            )}

            <form ref={formRef} onSubmit={handleSubmit} action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00D8V000002Xglg" method="POST" className="space-y-4 mt-10">
                <input type="hidden" name="oid" value="00D8V000002Xglg" />
                <input type="hidden" name="retURL" value="https://www.rialtes.com/thank-you" />

                <div className='flex mt-5 gap-3 lg:flex-row flex-col'>
                    <div className="lg:w-1/4">
                        <input id="first_name" maxLength="40" name="first_name" type="text" className="mt-1 block w-full px-3 py-2 border placeholder-slate-800 border-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="First Name*" />
                        {formErrors.first_name && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-600 text-sm mt-1">{formErrors.first_name}</motion.p>}
                    </div>
                    <div className="lg:w-1/4">
                        <input id="last_name" maxLength="80" name="last_name" type="text" className="mt-1 block w-full px-3 py-2 border placeholder-slate-800 border-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Last Name*" />
                        {formErrors.last_name && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-600 text-sm mt-1">{formErrors.last_name}</motion.p>}
                    </div>
                </div>

                <div className='flex gap-3 lg:flex-row flex-col'>
                    <div className="lg:w-1/4">
                        <input id="email" maxLength="80" name="email" type="text" className="mt-1 block w-full px-3 py-2 border placeholder-slate-800 border-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Email*" />
                        {formErrors.email && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-600 text-sm mt-1">{formErrors.email}</motion.p>}
                    </div>
                    <input id="company" maxLength="40" name="company" type="text" required className="mt-1 block px-3 py-2 border lg:w-1/4 placeholder-slate-800 border-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Company*" />
                </div>

                <div className='flex gap-3 lg:flex-row flex-col'>
                    <input id="title" maxLength="40" name="title" type="text" className="mt-1 block px-3 py-2 lg:w-1/4 border placeholder-slate-800 border-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Role*" />
                    <input id="phone" maxLength="10" name="phone" className="mt-1 block px-3 py-2 lg:w-1/4 border placeholder-slate-800 border-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Phone" />
                </div>

                <div className="pb-5">
                    <textarea id="00NQh0000041tRZ" name="00NQh0000041tRZ" rows="3" wrap="soft" className="mt-1 block px-3 py-2 border lg:w-[51%] w-full placeholder-slate-800 border-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Message*" required />
                </div>
                {formErrors.message && (
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-600 text-sm mt-1">
                        {formErrors.message}
                    </motion.p>
                )}

                <input type="hidden" id="lead_source" name="lead_source" value="Web" />

                <div className='mt-5 flex flex-col xl:flex-row md:flex-row gap-6 items-start'>
                    <div className="flex items-center space-x-4">
                        <span className="font-semibold text-lg text-gray-800">{captcha.num1} + {captcha.num2} = ?</span>
                        <button type="button" onClick={refreshCaptcha} title="Refresh Captcha" className="text-blue-600 hover:text-blue-800 text-xl font-bold">
                            ↻
                        </button>
                    </div>
                    <input
                        type="number"
                        value={userAnswer}
                        onChange={(e) => setUserAnswer(e.target.value)}
                        placeholder="Enter Captcha"
                        className="border border-gray-400 px-3 py-2 rounded shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        required
                    />



                    <button
                        type="submit"
                        name="submit"
                        value="Submit"
                        disabled={isSubmitting}
                        className={`bg-[#134874] border border-[#134874] font-semibold py-3 px-8 transition duration-300 ${isSubmitting ? 'bg-opacity-50 cursor-not-allowed' : 'text-white hover:bg-[#ffffff] hover:text-[#134874]'
                            }`}
                    >
                        {isSubmitting ? "Submitting..." : "Let's Begin"}
                    </button>
                </div>
                <div>Enter the sum of digits shown in above image e.g (2+3=5)</div>

                <div>
                    <AnimatePresence>
                        {error && (
                            <motion.p
                                initial={{ opacity: 0, y: -5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -5 }}
                                className="text-red-600 font-medium text-sm mt-1"
                            >
                                {error}
                            </motion.p>
                        )}
                    </AnimatePresence>
                </div>
            </form>
        </section>
    );
}