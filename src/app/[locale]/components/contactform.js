"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
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
            if (num2 > num1) [num1, num2] = [num2, num1]; // non-negative result
            question = `${num1} - ${num2}`;
            answer = num1 - num2;
            break;
        case '*':
            question = `${num1} × ${num2}`;
            answer = num1 * num2;
            break;
        case '/':
            answer = num1; // set as quotient
            num1 = num1 * num2; // so that num1 / num2 = answer (clean integer)
            question = `${num1} ÷ ${num2}`;
            break;
    }
    return { question, answer };
};
export default function ContactForm({ title, subtitle, subtitle1, className, padding }) {
    const t = useTranslations('contactForm')
    const [captcha, setCaptcha] = useState(generateCaptcha());
    const [userAnswer, setUserAnswer] = useState('');
    const [error, setError] = useState('');
    const [formErrors, setFormErrors] = useState({});
    const formRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
        generateCaptcha(); // generate on client only
    }, []);
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
            errors.first_name = t('fnameError1');
        } else if (!/^[A-Za-z\s'-]+$/.test(firstName)) {
            errors.first_name = t('fnameError2');
        } else if (firstName.length > 40) {
            errors.first_name = t('fnameError3');
        }
        // Validate last name
        if (!lastName) {
            errors.last_name = t('lnameError1');
        } else if (!/^[A-Za-z\s'-]+$/.test(lastName)) {
            errors.last_name = t('lnameError2');
        } else if (lastName.length > 40) {
            errors.last_name = t('lnameError3');
        }
        // Validate email (you already have this, keep as is)
        if (!email) {
            errors.email = t('emailError1');
        } else if (!/^\S+@\S+\.\S+$/.test(email)) {
            errors.email = t('emailError2');
        }
        // Validate message length
        if (!message) {
            errors.message = t('messageError1');
        } else if (message.length < 10) {
            errors.message = t('messageError2');
        } else if (message.length > 1000) {
            errors.message = t('messageError3');
        }
        if (!userAnswer.trim()) {
            errors.captcha = "Captcha is required.";
        } else if (parseInt(userAnswer) !== captcha.answer) {
            errors.captcha = "Wrong captcha answer. Please try again.";
        }
        return errors;
    };
    const isSpam = (form) => {
        const honeypot = form.website.value;
        const email = form.email.value;
        const message = form['00NQh0000041tRZ'].value;
        if (honeypot) return true;
        if (/godaddy|yopmail|10minutemail/i.test(email)) return true;
        if (/http|www|<a\s/i.test(message)) return true;
        return false;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const errors = validateForm(form);
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            setError(errors.captcha || '');
            return;
        }
        if (isSpam(form)) {
            setError("Submission blocked due to suspected spam.");
            return;
        }
        setError('');
        setFormErrors({});
        form.submit();
        setUserAnswer('');
        setCaptcha(generateCaptcha());
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

    if (!mounted) return null;
    return (
        <section className={(padding ? padding : '')}>
            <div className={`font-light leading-tight 4xl:text-[60px] xl:text-[45px] text-[26px] ${className}`}>
                {title ? title : t('contactUsTitle')}
            </div>
            {subtitle && (
                <p className="mt-8 leading-tight xl:text-[20px] text-[16px] xl:w-[60%] font-regular">
                    {subtitle}
                </p>
            )}
            {subtitle1 && (
                <p className="mt-4 xl:text-[20px] text-[16px] xl:w-[60%] xl:mt-[24px] font-regular">
                    {subtitle1}
                </p>
            )}

            <form ref={formRef} onSubmit={handleSubmit} action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST" className="space-y-4 mt-10">
                <input type="hidden" name="oid" value="00D8V000002Xglg" />
                <input type="hidden" name="retURL" value="https://www.rialtes.com/thank-you" />
                <input type="text" name="website" id="website" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

                <div className='flex mt-5 gap-3 lg:flex-row flex-col'>
                    <div className="lg:w-1/4">
                        <input id="first_name" maxLength="40" name="first_name" type="text" className="mt-1 block w-full px-3 py-2 border placeholder-slate-800 border-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder={t('fname')} />
                        {formErrors.first_name && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-600 text-sm mt-1">{formErrors.first_name}</motion.p>}
                    </div>
                    <div className="lg:w-1/4">
                        <input id="last_name" maxLength="80" name="last_name" type="text" className="mt-1 block w-full px-3 py-2 border placeholder-slate-800 border-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder={t('lname')} />
                        {formErrors.last_name && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-600 text-sm mt-1">{formErrors.last_name}</motion.p>}
                    </div>
                </div>

                <div className='flex gap-3 lg:flex-row flex-col'>
                    <div className="lg:w-1/4">
                        <input id="email" maxLength="80" name="email" type="text" className="mt-1 block w-full px-3 py-2 border placeholder-slate-800 border-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder={t('email')} />
                        {formErrors.email && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-600 text-sm mt-1">{formErrors.email}</motion.p>}
                    </div>
                    <input id="company" maxLength="40" name="company" type="text" required className="mt-1 block px-3 py-2 border lg:w-1/4 placeholder-slate-800 border-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder={t('company')} />
                </div>

                <div className='flex gap-3 lg:flex-row flex-col'>
                    <input id="title" maxLength="40" name="title" type="text" className="mt-1 block px-3 py-2 lg:w-1/4 border placeholder-slate-800 border-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder={t('role')} />
                    <input id="phone" maxLength="10" name="phone" className="mt-1 block px-3 py-2 lg:w-1/4 border placeholder-slate-800 border-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder={t('phone')} />
                </div>

                <div className="pb-5">
                    <textarea id="00NQh0000041tRZ" name="00NQh0000041tRZ" rows="3" wrap="soft" className="mt-1 block px-3 py-2 border lg:w-[51%] w-full placeholder-slate-800 border-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder={t('message')} required />
                </div>
                {formErrors.message && (
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-600 text-sm mt-1">
                        {formErrors.message}
                    </motion.p>
                )}

                <input type="hidden" id="lead_source" name="lead_source" value="Web" />

                <div className='mt-5 flex flex-col items-center xl:flex-row md:flex-row gap-6'>
                    <div className="flex items-center space-x-4">
                        <span className={`font-semibold text-lg text-[${beginBtnBg ? "white":"gray-800"}]`}> {captcha.question} = ?</span>
                        <button type="button" onClick={refreshCaptcha} title="Refresh Captcha" className="text-blue-600 hover:text-blue-800 text-xl font-bold">
                            ↻
                        </button>
                    </div>
                    <input
                        type="number"
                        value={userAnswer}
                        onChange={(e) => setUserAnswer(e.target.value)}
                        placeholder={t('enterCaptcha')}
                        className="border border-gray-400 px-3 py-2 rounded shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        required
                    />
                    <input type="hidden" name="form_submit" value="Submit" />
                    <button
                        type="submit"
                        value="Submit"
                        className="bg-[#134874] border border-[#134874] font-semibold py-3 px-8 transition duration-300 text-white hover:bg-[#ffffff] hover:text-[#134874]">
                        {t('letsBegin')}
                    </button>


                </div>
                <div>{t('captchaMsg')} (e.g., 2 + 3 = 5, 6 ÷ 2 = 3, 4 × 2 = 8, 4 - 2= 2)</div>
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