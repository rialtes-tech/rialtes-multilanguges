import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from "framer-motion";
const generateCaptcha = () => {
    const operators = ['+', '-', '*', '/'];
    const operator = operators[Math.floor(Math.random() * operators.length)];

    let num1 = Math.floor(Math.random() * 10) + 1; // Ensure non-zero for division
    let num2 = Math.floor(Math.random() * 10) + 1;
    let question = '';
    let answer = 0;

    switch (operator) {
        case '+':
            question = `${num1} + ${num2}`;
            answer = num1 + num2;
            break;
        case '-':
            if (num2 > num1) [num1, num2] = [num2, num1];
            question = `${num1} - ${num2}`;
            answer = num1 - num2;
            break;
        case '*':
            question = `${num1} × ${num2}`;
            answer = num1 * num2;
            break;
        case '/':
            answer = num1;
            num1 = num1 * num2;
            question = `${num1} ÷ ${num2}`;
            break;
    }

    return { question, answer };
};
const WebinarForm = ({ redirectUrl, emailWebinarLink }) => {
    const [captcha, setCaptcha] = useState(generateCaptcha());
    const [userAnswer, setUserAnswer] = useState('');
    const [error, setError] = useState('');
    const [formErrors, setFormErrors] = useState({});

    const refreshCaptcha = () => {
        setCaptcha(generateCaptcha());
        setUserAnswer('');
        setError('');
    };

    const validateForm = (form) => {
        const errors = {};
        const firstName = form.first_name.value.trim();
        const lastName = form.surname.value.trim();
        const email = form.email.value.trim();
        if (!firstName) {
            errors.first_name = "First name is required.";
        } else if (!/^[A-Za-z\s'-]+$/.test(firstName)) {
            errors.first_name = "First name contains invalid characters.";
        } else if (firstName.length > 40) {
            errors.first_name = "First name should not exceed 40 characters.";
        }

        if (!lastName) {
            errors.surname = "Last name is required.";
        } else if (!/^[A-Za-z\s'-]+$/.test(lastName)) {
            errors.surname = "Last name contains invalid characters.";
        } else if (lastName.length > 40) {
            errors.surname = "Last name should not exceed 40 characters.";
        }

        if (!email) {
            errors.email = "Email is required.";
        } else if (!/^\S+@\S+\.\S+$/.test(email)) {
            errors.email = "Invalid email address.";
        }

        if (!userAnswer.trim()) {
            errors.captcha = "Captcha is required.";
        } else if (parseInt(userAnswer) !== captcha.answer) {
            errors.captcha = "Wrong captcha answer. Please try again.";
        }

        return errors;
    };



    useEffect(() => {
        if (formRef.current) {
            formRef.current.reset();
        }
        setUserAnswer('');
        setCaptcha(generateCaptcha());
        setError('');
        setFormErrors({});
    }, []);

    const formRef = useRef();
    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.currentTarget;
        const errors = validateForm(form);

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            setError(errors.captcha || '');
            return;
        }

        setError('');
        setFormErrors({});

        try {
            await emailjs.sendForm(
                'service_af2ly7a',
                'template_0hotei9',
                formRef.current,
                'Snkm_XQ04-jspj9Ba'
            );

            form.reset();
            setUserAnswer('');
            setCaptcha(generateCaptcha());

            window.location.href = redirectUrl;

        } catch (err) {
            // console.error("Form submission failed", err);
            setError("There was a problem submitting the form. Please try again.");
        }
    };

    return (
        <div className=" mt-10 bg-white">
            <h3 className="mb-4">Kindly fill the form to watch webinar</h3>

            <div className="grid grid-cols-6">
                <div className="col-span-8 xl:col-span-4 md:col-span-6">
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <input
                                    name="first_name"
                                    placeholder="First Name*"
                                    type="text"
                                    className="w-full p-2 border rounded"
                                    id="first_name"
                                />
                                {formErrors.first_name && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-600 text-sm mt-1">{formErrors.first_name}</motion.p>}
                            </div>

                            <div>
                                <input
                                    name="surname"
                                    placeholder="Last Name*"
                                    type="text"
                                    className="w-full p-2 border rounded"
                                />
                                {formErrors.surname && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-600 text-sm mt-1">{formErrors.surname}</motion.p>}
                            </div>


                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <input
                                    name="email"
                                    placeholder="Email*"
                                    type="email"
                                    className="w-full p-2 border rounded"
                                />
                                {formErrors.email && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-600 text-sm mt-1">{formErrors.email}</motion.p>}
                            </div>

                            <div>
                                <input
                                    name="phone"
                                    placeholder="Phone"
                                    type="tel"
                                    className="w-full p-2 border rounded"
                                />
                            </div>

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
                            <div className='mt-5 flex flex-col items-center xl:flex-row md:flex-row gap-6'>
                                <div className="flex  space-x-4">
                                    <span className="font-semibold text-lg text-gray-800"> {captcha.question} = ?</span>
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
                                />
                                <button
                                    type="submit"
                                    name="submit"
                                    value="Submit"
                                    className="bg-[#134874] border border-[#134874] font-semibold py-3 px-8 transition duration-300 text-white hover:bg-[#ffffff] hover:text-[#134874]"
                                >
                                    Watch Webinar
                                </button>
                            </div>


                        </div>
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
                        <div className='mt-5'>Enter the result of the equation shown above (e.g., 2 + 3 = 5, 6 ÷ 2 = 3, 4 × 2 = 8, 4 - 2= 2)</div>
                        <input type="hidden" name="webinar_link" value={emailWebinarLink} />
                    </form>
                </div>
                <div className="hidden md:block md:col-span-3"></div>
            </div>

        </div>
    );
}

export default WebinarForm;
