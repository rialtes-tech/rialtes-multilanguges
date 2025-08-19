"use client";
import React, { useRef } from "react";
import Image from "next/image";
import WebinarForm from "@/app/[locale]/components/webinarForm";
import Script from "next/script";
import { changeLocalization } from "../../components/changeLocalization";
import UnorderedList from "@/app/[locale]/components/unorderedList";
import Link from "next/link";
import { useTranslations } from "next-intl";
export default function ({ fullUrl, seoData, schemaData, deskImg, mobImg, webinarTitle, speakerName, speakerDesignation, speakerImg, speakerImgAlt, webinarInfo, webinarAdvantages, whoShouldAttend, dateNumber, monthYear, CstIstTime, estPstTime, redirectUrl, emailWebinarLink }) {
    const t = useTranslations("webinarComponent");
    const sectionRef = useRef(null);
    const handleScroll = () => {
        if (!sectionRef.current) return;
        const getOffset = () => {
            const width = window.innerWidth;
            if (width > 1536) return 160; // 2xl+
            if (width > 1280) return 120; // xl
            if (width > 768) return 100;  // md
            return 80; // sm and below
        };
        const offset = getOffset();
        const elementPosition = sectionRef.current.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
            top: elementPosition - offset,
            behavior: 'smooth',
        });
    };
    return (
        <div className="min-h-screen">
            {seoData}
            <Script
                id="webinar-schema-sap"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            {/* hero section */}
            <section className="relative custom-container h-full w-full lg:!pr-0 max-md:px-0">
                <div className="hidden md:block">
                    <Image
                        src={deskImg}
                        alt="desktop banner"
                        width={0}
                        height={0}
                        priority
                        style={{ objectFit: "cover", objectPosition: "75% 20%" }}
                        className="w-full h-[650px]"
                    />
                </div>
                <div className="block md:hidden">
                    <Image
                        src={mobImg ? mobImg : deskImg}
                        alt="mobile banner"
                        width={0}
                        height={0}
                        className="w-full h-[399px]"
                        style={{ objectFit: "cover", objectPosition: "75% 20%" }}
                        priority
                    />
                </div>
            </section>
            <div className="grid lg:grid-cols-12 grid-cols-1 custom-container lg:gap-[60px] gap-y-[40px] 4xl:!pr-[142px] 2xl:!pr-[90px] lg:!pr-[40px]">
                <div className="lg:col-span-6 4xl:col-span-7 col-span-12">
                    {/* social icons */}
                    <div className="flex flex-row gap-6 xl:mt-[60px] mt-[40px]">
                        <Link href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(fullUrl)}&title=A%20public%20housing%20in%20US&summary=Summary%20of%20the%20case%20study&source=LinkedIn`}
                            target="_blank">
                            <Image
                                src="/images/case-studies/linkedin.svg"
                                alt="LinkedIn"
                                width={0}
                                height={0}
                                style={{ objectFit: 'cover' }}
                                priority
                                className="w-[40px] h-[40px]"
                            />
                        </Link>
                        <Link
                            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(fullUrl)}&text=Check%20out%20this%20blog%20on%20Agriculture%204.0!`}
                            target="_blank">
                            <Image
                                src="/images/case-studies/twitter.svg"
                                alt="Twitter"
                                width={0}
                                height={0}
                                style={{ objectFit: 'cover' }}
                                priority
                                className="w-[40px] h-[40px]"
                            />
                        </Link>
                    </div>
                    <h1 className="leading-tight font-normal xl:text-[40px] 4xl:text-[60px] text-[26px] xl:mt-[60px] mt-[20px]">{webinarTitle}</h1>
                    {/* speaker details */}
                    <div className="flex flex-col sm:flex-row xl:mt-[54px] mt-[30px] gap-y-[20px] md:gap-0">
                        {/* Speaker Image */}
                        <div className="4xl:w-[256px] 4xl:h-[256px] sm:w-[180px] sm:h-[180px] border shrink-0">
                            <Image
                                src={speakerImg}
                                alt={speakerImgAlt}
                                priority
                                className="w-full h-full object-cover"
                                width={0}
                                height={0}
                            />
                        </div>
                        {/* Speaker Details */}
                        <div className="sm:ml-[40px]">
                            <h3 className="4xl:text-[24px] xl:text-[21px] text-[18px] text-[#0092E0]">{t('speakerTitle')}</h3>
                            <h3 className="4xl:text-[29px] xl:text-[26px] text-[22px] font-bold xl:mt-[12px] mt-[10px]">
                                {speakerName}
                                <div className="4xl:text-[24px] xl:text-[20px] text-[18px] font-normal">
                                    {speakerDesignation}
                                </div>
                            </h3>
                        </div>
                    </div>
                    <p className="text-[16px] xl:text-[18px] 4xl:text-[20px] font-normal lg:mt-[60px] mt-[40px] 4xl:w-[90%]">
                        {webinarInfo}
                    </p>
                    <h3 className="text-[20px] xl:text-[24px] 4xl:text-[30px] text-[#0092E0] lg:mt-[60px] mt-[40px]">{t('inThisWebinarTitle')}</h3>
                    <ul className="list-disc marker:text-black text-black pl-4 marker:font-bold font-medium text-[16px] xl:text-[18px] 4xl:text-[20px] space-y-[16px] xl:mt-[36px] mt-[22px] xl:w-[90%] 4xl:w-[86%]">
                        {
                            webinarAdvantages.map((list, ind) => {
                                return (
                                    <li key={ind}><strong>{list.title}</strong> {list.data}</li>
                                )
                            })
                        }
                    </ul>
                    <h3 className="text-[20px] xl:text-[24px] 4xl:text-[30px] text-[#0092E0] lg:mt-[60px] mt-[40px]">{t('whotShouldAttendTitle')}</h3>
                    <UnorderedList arrName={whoShouldAttend} ulClassName="list-disc marker:text-black text-black pl-4 pb-6 4xl:text-[20px] xl:text-[18px] text-[16px] marker:font-bold font-medium space-y-2 xl:mt-[30px] mt-[18px] 4xl:w-[80%]" liClassName="" />
                </div>
                <div className="lg:col-span-6 4xl:col-span-5 col-span-12 sm:w-[70%] lg:w-full">
                    <div className="bg-[#0092E0] text-white xl:px-[58px] px-[24px] xl:pt-[119px] xl:pb-[61px] pt-[60px] pb-[36px]">
                        <h2 className="font-extrabold xl:text-[40px] 4xl:text-[60px] text-[26px]">{dateNumber}</h2>
                        <h3>{monthYear}</h3>
                        <h3 className="font-medium mt-8">{CstIstTime}</h3>
                        <h3 className="font-medium mt-3">{estPstTime}</h3>
                        <div onClick={handleScroll}>
                            <button className="text-[#0092E0] xl:text-[20px] text-[16px] font-bold p-5 bg-white lg:mt-[40px] mt-[20px]">{t('watchNowBtn')}</button>
                        </div>
                    </div>
                    <h3 className="mt-10">{t('howToJoinTitle')}</h3>
                    <p className="xl:mt-[16px] mt-[10px]">{t('howToJoinData1')}</p>
                    <h3 className="xl:mt-[32px] mt-[18px]">{t('howToJoinData2')}</h3>
                    <p className="mt-3">{t('howToJoinData3')}</p>
                    <p className="xl:mt-[32px] mt-[18px]">{t('howToJoinData4')}</p>
                </div>
            </div>
            <div className="custom-container xl:my-[78px] my-[60px]" ref={sectionRef}>
                <WebinarForm
                    redirectUrl={redirectUrl}
                    emailWebinarLink={emailWebinarLink}
                />
            </div>
        </div>
    );
}