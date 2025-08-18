'use client';
import usFlag from '../../../../public/images/flags/us-flag.png'
import spainFlag from "../../../../public/images/flags/spain-flag.png"
import franceFlag from "../../../../public/images/flags/france-flag.png"
import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

export default function LanguageSwitcher({ arrowImg }) {
    const router = useRouter();
    const pathname = usePathname();
    const currentLocale = useLocale();
    const [showFlags, setShowFlags] = useState(false);
    const dropdownRef = useRef(null);


    const locales = [
        { code: 'en', label: 'En', flag: usFlag, subtitle: "US-EN" },
        { code: 'es', label: 'Es', flag: spainFlag, subtitle: "US-ES" },
        { code: 'fr', label: 'FR', flag: franceFlag, subtitle: "CN-FR" },
    ];

    const handleChange = (code) => {
        const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}(\/|$)/, '/');
        const newPath = `/${code}${pathWithoutLocale}`;
        router.replace(newPath);
        setShowFlags(false);
    };


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowFlags(false);
            }
        };

        if (showFlags) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showFlags]);

    return (
        <div ref={dropdownRef}>
            <div
                className="md:font-bold font-normal flex gap-2 4xl:text-[17px] xl:text-[15px] text-[13px] cursor-pointer mt-1"
                onClick={() => setShowFlags((prev) => !prev)}>
                {(() => {
                    const current = locales.find(l => l.code === currentLocale);
                    return (
                        <>
                            <Image
                                src={current.flag}
                                alt={`${current.label} flag`}
                                className="w-[20px] h-[20px] lg:w-[24px] lg:h-[24px] object-cover rounded"
                                width={24}
                                height={24}
                                priority
                            />
                            {current.subtitle}
                        </>
                    );
                })()}

                <Image
                    src={arrowImg}
                    alt="arrow"
                    className="w-[24px] h-[24px] lg:w-[30px] lg:h-[30px] object-cover"
                    priority
                    width={30}
                    height={30}
                />

            </div>

            {showFlags && (
                <ul className='absolute lg:top-[103px] top-[80px] bg-white py-4 px-4 space-y-4 border'>
                    {locales.map((data) => (
                        <li
                            key={data.code}
                            onClick={() => handleChange(data.code)}
                            className='flex gap-4 md:font-bold font-normal 4xl:text-[17px] xl:text-[15px] text-[13px] cursor-pointer'
                        >
                            <Image
                                src={data.flag}
                                alt={`${data.label} flag`}
                                className="w-[20px] h-[20px] lg:w-[24px] lg:h-[24px] object-cover"
                                priority
                                width={30}
                                height={30}
                            />
                            {data.subtitle}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
