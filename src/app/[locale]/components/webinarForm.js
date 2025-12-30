import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from 'next-intl';

const generateCaptcha = () => {
    const operators = ['+', '-', '*', '/'];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    let num1 = Math.floor(Math.random() * 10) + 1; 
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
    const t = useTranslations("webinarForm");

    // --- HYDRATION FIX ---
    const [isMounted, setIsMounted] = useState(false);
    const [captcha, setCaptcha] = useState({ question: "", answer: null });

    const [userAnswer, setUserAnswer] = useState('');
    const [error, setError] = useState('');
    const [formErrors, setFormErrors] = useState({});

    const formRef = useRef();

    // Ensure client-side rendering
    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Generate captcha only on client
    useEffect(() => {
        if (isMounted) {
            setCaptcha(generateCaptcha());
        }
    }, [isMounted]);

    if (!isMounted) return null; // Prevent SSR render → avoids hydration mismatch

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
            errors.first_name = t('fnameError1');
        } else if (!/^[A-Za-z\s'-]+$/.test(firstName)) {
            errors.first_name = t('fnameError2');
        } else if (firstName.length > 40) {
            errors.first_name = t('fnameError3');
        }

        if (!lastName) {
            errors.surname = t('lnameError1');
        } else if (!/^[A-Za-z\s'-]+$/.test(lastName)) {
            errors.surname = t('lnameError2');
        } else if (lastName.length > 40) {
            errors.surname = t('lnameError3');
        }

        if (!email) {
            errors.email = t('emailError1');
        } else if (!/^\S+@\S+\.\S+$/.test(email)) {
            errors.email = t('emailError2');
        }

        if (!userAnswer.trim()) {
            errors.captcha = t('captchaError1');
        } else if (parseInt(userAnswer) !== captcha.answer) {
            errors.captcha = t('captchaError2');
        }

        return errors;
    };

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
                'service_uvlqqwr',
                'template_kws7xco',
                formRef.current,
                'Zp2xQO0KmJeXSFk-S'
            );

            form.reset();
            setUserAnswer('');
            setCaptcha(generateCaptcha());
            window.location.href = redirectUrl;

        } catch (err) {
            setError("There was a problem submitting the form. Please try again.");
        }
    };

    return (
        <div className=" mt-10 bg-white">
            <h3 className="mb-4 text-[20px] md:text-[22px] xl:text-[24px] 4xl:text-[30px]">{t('formTitle')}</h3>
            <div className="grid grid-cols-6">
                <div className="col-span-8 xl:col-span-4 md:col-span-6">
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">

                        {/* FIRST + LAST NAME */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <input
                                    name="first_name"
                                    placeholder={t('fname')}
                                    type="text"
                                    className="w-full p-2 border border-gray-400 placeholder-slate-800"
                                    id="first_name"
                                />
                                {formErrors.first_name && (
                                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-600 text-sm mt-1">
                                        {formErrors.first_name}
                                    </motion.p>
                                )}
                            </div>

                            <div>
                                <input
                                    name="surname"
                                    placeholder={t('lname')}
                                    type="text"
                                    className="w-full p-2 border border-gray-400 placeholder-slate-800"
                                />
                                {formErrors.surname && (
                                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-600 text-sm mt-1">
                                        {formErrors.surname}
                                    </motion.p>
                                )}
                            </div>
                        </div>

                        {/* EMAIL + PHONE */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <input
                                    name="email"
                                    placeholder={t('email')}
                                    type="email"
                                    className="w-full p-2 border border-gray-400 placeholder-slate-800"
                                />
                                {formErrors.email && (
                                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-600 text-sm mt-1">
                                        {formErrors.email}
                                    </motion.p>
                                )}
                            </div>

                            <div>
                                <input
                                    name="phone"
                                    placeholder={t('phone')}
                                    type="tel"
                                    className="w-full p-2 border border-gray-400 placeholder-slate-800"
                                />
                            </div>
                        </div>

                        {/* COMPANY + JOB TITLE */}
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                name="company"
                                placeholder={t('company')}
                                type="text"
                                required
                                className="w-full p-2 border border-gray-400 placeholder-slate-800"
                            />
                            <input
                                name="job_title"
                                placeholder={t('role')}
                                type="text"
                                required
                                className="w-full p-2 border border-gray-400 placeholder-slate-800"
                            />
                        </div>

                        {/* CAPTCHA + BUTTON */}
                        <div className='flex xl:flex-row flex-col xl:gap-20 gap-5 !mt-10'>
                            <div className='mt-5 flex flex-col items-center xl:flex-row md:flex-row gap-6'>
                                <div className="flex space-x-4">
                                    <span className="font-semibold text-lg text-gray-800">
                                        {captcha.question} = ?
                                    </span>

                                    <button
                                        type="button"
                                        onClick={refreshCaptcha}
                                        title="Refresh Captcha"
                                        className="text-blue-600 hover:text-blue-800 text-xl font-bold"
                                    >
                                        ↻
                                    </button>
                                </div>
                                
                                 <input
                        type="number"
                        value={userAnswer}
                        onChange={(e) => setUserAnswer(e.target.value)}
                        placeholder="Enter Captcha"
                        className="border border-gray-400 w-fit px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none
             [appearance:textfield]
             [&::-webkit-outer-spin-button]:appearance-none
             [&::-webkit-inner-spin-button]:appearance-none placeholder-slate-800"
                        required
                    />
                                <button
                                    type="submit"
                                    name="submit"
                                    value="Submit"
                                    className="bg-[#134874] border border-[#134874] font-semibold py-3 px-8 transition duration-300 text-white hover:bg-[#ffffff] hover:text-[#134874]"
                                >
                                    {t('watchWebinar')}
                                </button>
                            </div>
                        </div>

                        {/* ERROR MSG */}
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

                        <div className='mt-5'>
                            {t('captchaMsg')} (e.g., 2 + 3 = 5, 6 ÷ 2 = 3, 4 × 2 = 8, 4 - 2 = 2)
                        </div>

                        <input type="hidden" name="webinar_link" value={emailWebinarLink} />
                    </form>
                </div>

                <div className="hidden md:block md:col-span-3"></div>
            </div>
        </div>
    );
}

export default WebinarForm;
