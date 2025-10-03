"use client";
import Image from "next/image";
import ContactForm from "../../components/contactform";
import LearnMore from "@/app/[locale]/components/learnMore";
import Seo from "@/app/[locale]/components/Seo";
import { useLocale, useTranslations } from "next-intl";
import enContent from '../../../../../messages/en/products.json';
import esContent from '../../../../../messages/es/products.json';
import frContent from '../../../../../messages/fr/products.json';
import { changeLocalization } from "../../components/changeLocalization";
import Script from "next/script";
const schemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "AgentChat",
    "image": "https://www.rialtes.com/images/industry/rialchat/AgentChat%20logo.svg",
    "description": "AgentChat is a bi-directional WhatsApp conversational app natively built on Salesforce, offering seamless Salesforce WhatsApp integration. It enables real-time messaging, supports all Salesforce Clouds, and allows teams to engage, support, and close deals through WhatsApp without leaving Salesforce.",
    "brand": {
        "@type": "Organization",
        "name": "Rialtes",
        "url": "https://www.rialtes.com",
        "logo": "https://www.rialtes.com/images/homepage/logo.svg"
    },
    "url": "https://www.rialtes.com/products/agentchat/",
    "category": "Salesforce WhatsApp Messaging App",
    "isRelatedTo": {
        "@type": "SoftwareApplication",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Cloud",
        "softwareRequirements": "Salesforce platform"
    },
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.rialtes.com/products/agentchat/"
    },
    "additionalProperty": [
        {
            "@type": "PropertyValue",
            "name": "Salesforce Integration",
            "value": "Works with Leads, Cases, Opportunities, Work Orders, and Custom Objects."
        },
        {
            "@type": "PropertyValue",
            "name": "Real-Time Bi-Directional Messaging",
            "value": "Synchronizes messages in real time between WhatsApp and Salesforce."
        },
        {
            "@type": "PropertyValue",
            "name": "Multi-Team Support",
            "value": "Supports Sales, Service, Field, Education, and Nonprofit teams."
        },
        {
            "@type": "PropertyValue",
            "name": "Role-Based Access Control",
            "value": "Advanced permissions using Salesforce’s native security model."
        },
        {
            "@type": "PropertyValue",
            "name": "GDPR & HIPAA Ready",
            "value": "Built on Salesforce’s secure and compliant platform."
        }
    ]
}
export default function Page() {
    const t = useTranslations("agentChat");
    const locale = useLocale();
    const homepageContent = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
    const { features, tableData } = homepageContent.agentChat;


    return (
        <div className="min-h-screen bg-white">
            <Seo
                title={t('seoTitle')}
                description={t('seoDescription')}
                keywords="Contact, website, welcome"
                canonical="https://www.rialtes.com/products/agentchat/"
            />
            <Script
                id="schema-agentchat"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            {/* hero section */}
            <div className="relative bg-[#E8E8E8] pb-20 ">
                <div className="relative  custom-container xl:!pr-0 max-xl:pr-0">
                    <div className="overflow-hidden relative z-0 ">
                        <div className="w-full h-full xl:block hidden ">
                            <Image
                                src="/images/industry/real-estate/newAgentchat.webp"
                                alt="agentchat banner"
                                className=" w-full bg-cover xl:object-contain"
                                width={0}
                                height={0}
                                objectPosition="right"
                                priority
                                sizes="100vw"
                            />
                        </div>
                        <div className="w-full h-full xl:hidden block">
                            <Image
                                src="/images/industry/real-estate/agentchat header mobile.webp"
                                alt="agentchat banner"
                                className=" h-full w-full object-cover object-right"
                                width={0}
                                height={0}
                                objectPosition="right"
                                priority
                                sizes="100vw"
                            />
                        </div>
                        <div className="absolute bg-[#134874] text-white  w-[256px] h-[205px] md:w-[332px] md:h-[255px]  xl:w-[400px] xl:h-[290px] 2xl:w-[420px] 2xl:h-[310px] 4xl:w-[478px] 4xl:h-[355px] lg:left-[6%] top-0 ">
                            <div className=" xl:mx-[58px] xl:my-6 my-6 md:my-0 mx-[30px] md:mx-[40px]">
                                <h1><span className=" font-light  text-[17px] md:text-[20px] xl:text-[26px] 4xl:text-[30px] leading-tight ">{t('headerTitle')} </span>
                                    <span className="font-light block text-[33px] md:text-[40px]  xl:text-[46px]  leading-tight 4xl:text-[60px] mt-[-12px]">{t('headerSubTitle')} </span>
                                    <span className="text-[17px] md:text-[20px] xl:text-[26px]  4xl:text-[30px] font-light leading-tight block">{t('headerOne')}</span></h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="custom-container">
                    <div className="relative">
                        <div className="absolute z-30 xl:right-16 right-0 md:right-10 mt-[-121px] xl:mt-[-180px] 4xl:mt-[-200px] ">
                            <Image
                                className=" w-[137px] h-[180px] md:w-[220px] md:h-[170px] xl:w-[246px] xl:h-[249px] 4xl:w-[276px] 4xl:h-[249px] "
                                src='/images/industry/rialchat/AgentChat logo.svg'
                                alt="AgentChat logo"
                                width={0}
                                height={0}
                                sizes="100vw"
                                priority
                            />
                        </div>
                    </div>
                </div>
                <div className="custom-container grid lg:grid-cols-12 grid-cols-1  lg:gap-[60px] xl:gap-[80px] mt-[100px] xl:mt-[100px] 4xl:mt-[150px]">
                    <div className="lg:col-span-5 col-span-12 ">
                        <h2 className="leading-tight text-[28px] md:text-[30px] pb-4 lg:text-[28px] xl:text-[30px] 2xl:text-[36px] 4xl:text-[40px] ">{t('engageHeader')}</h2>
                    </div>
                    <div className="lg:col-span-7 col-span-12">
                        <p className="text-[16px] md:text-[18px] lg:text-[17px] xl:text-[16px] 2xl:text-[18px] 4xl:text-[20px]">{t('engageDescOne')}</p>
                        <p className="mt-5 text-[16px] md:text-[18px] lg:text-[17px] xl:text-[16px] 2xl:text-[18px] 4xl:text-[20px] ">{t('engageDescTwo')}</p>
                    </div>
                </div>
            </div>

            {/* why agent chat section */}
            <div className="xl:mt-20 md:mt-[2rem] xl:!pr-[142px] custom-container text-black py-6">
                <h2 className="text-[28px] md:text-[40px] lg:text-[40px] xl:text-[46px] 2xl:text-[54px] 4xl:text-[60px] ">{t('whyHeader')}</h2>
            </div>
            <div className="text-black custom-container max-md:px-0 mb-20">
                <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 md:mt-10 ">
                    <div className="relative group overflow-hidden w-full">
                        <Image
                            className="w-full h-full transform transition-transform duration-500 group-hover:scale-110"
                            src='/images/industry/rialchat/Why AgentChat.webp'
                            alt="Instant WhatsApp Conversations"
                            width={0}
                            height={0}
                            sizes="100vw"
                            priority
                        />
                    </div>
                    <div>
                        <div className="group flex flex-col justify-between border p-8 4xl:p-[54px] h-full hover:bg-[#134874]">
                            <div>
                                <h3 className="font-semibold 4xl:text-[35px] text-[26px] 2xl:text-[32px] xl:text-[26px] lg:text-[28px] md:text-[28px] leading-tight 4xl:w-[375px] 2xl:w-[350px] xl:w-[300px] text-black group-hover:text-white">
                                    {t('whySubHeader')}
                                </h3>
                                <p className="mt-5 xl:mt-10 text-[16px] md:text-[18px] lg:text-[18px] xl:text-[16px] 2xl:text-[19px] 4xl:text-[20px] 4xl:w-[358px] 2xl:w-[340px] xl:w-[300px] lg:w-[300px] text-black group-hover:text-white">
                                    {t('whyDesc')} </p>
                            </div>
                            <Image className="w-[50px] 4xl:w-[75px] 2xl:w-[70px] md:mt-20 mt-10 group-hover:invert group-hover:brightness-200"
                                src="/images/industry/rialchat/Instant WhatsApp .svg"
                                alt="Connect and respond"
                                width={0}
                                height={0}
                                sizes="100vw"
                                priority
                            />
                        </div>
                    </div>
                    <div>
                        <div className="group flex flex-col justify-between border p-8 4xl:p-[54px]  h-full hover:bg-[#134874] hover:text-white">
                            <div>
                                <h3 className="font-semibold 4xl:text-[35px] text-[26px] 2xl:text-[32px] xl:text-[26px] lg:text-[28px] md:text-[28px]  leading-tight 4xl:w-[358px] 2xl:w-[350px] xl:w-[300px]  ">{t('rapidTitle')}</h3>
                                <p className=" mt-5 xl:mt-20  text-[16px] md:text-[18px] lg:text-[18px] xl:text-[16px] 2xl:text-[19px] 4xl:text-[20px] 4xl:w-[358px] 2xl:w-[330px] xl:w-[300px] lg:w-[300px] ">{t('rapidDesc')}</p>
                            </div>
                            <Image
                                className="w-[50px] 4xl:w-[83px]  2xl:w-[76px] mt-20 group-hover:invert group-hover:brightness-200"
                                src='/images/industry/rialchat/Rapid Setup.svg'
                                alt="Bi-Directional image"
                                width={0}
                                height={0}
                                sizes="100vw"
                                priority
                            />
                        </div>
                    </div>
                </div>
                <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1">
                    <div>
                        <div className="group flex flex-col justify-between border p-8 4xl:p-[54px] h-full hover:bg-[#134874] hover:text-white">
                            <div>
                                <h3 className="font-semibold 4xl:text-[35px] text-[26px] 2xl:text-[33px] xl:text-[26px] lg:text-[28px] md:text-[28px]  leading-tight 4xl:w-[380px] 2xl:w-[350px]  xl:w-[300px]">{t('realTitle')}</h3>
                                <p className="mt-5 xl:mt-20  text-[16px] md:text-[18px] lg:text-[18px] xl:text-[16px] 2xl:text-[19px] 4xl:text-[20px] 4xl:w-[358px] 2xl:w-[340px] xl:w-[300px] lg:w-[300px]">{t('realDeac')}</p>
                            </div>
                            <Image
                                className="w-[50px] 4xl:w-[67px] 2xl:w-[64px] xl:mt-40 mt-5 group-hover:invert group-hover:brightness-200"
                                src='/images/industry/rialchat/Real-Time Messaging.svg'
                                alt="Our Solution to Success"
                                width={0}
                                height={0}
                                sizes="100vw"
                                priority
                            />
                        </div>
                    </div>
                    <div>
                        <div className="group flex flex-col justify-between border p-8 4xl:p-[54px] h-full hover:bg-[#134874] hover:text-white">
                            <div>
                                <h3 className="font-semibold 4xl:text-[35px] text-[26px] 2xl:text-[32px] xl:text-[26px] lg:text-[28px] md:text-[28px] leading-tight 4xl:w-[391px] 2xl:w-[340px] xl:w-[300px]">{t('delegateTitle')}</h3>
                                <p className="mt-5 xl:mt-10  text-[16px] md:text-[18px] lg:text-[18px] xl:text-[16px] 2xl:text-[19px] 4xl:text-[20px] 4xl:w-[358px] 2xl:w-[340px] xl:w-[300px] lg:w-[300px]" >{t('delegateDesc')}</p>
                            </div>
                            <Image
                                className="w-[50px] 4xl:w-[74px] 2xl:w-[70px] xl:mt-20 md:mt-20 mt-5 group-hover:invert group-hover:brightness-200"
                                src='/images/industry/rialchat/Delegate Messages.svg'
                                alt="Delegate Messages"
                                width={0}
                                height={0}
                                sizes="100vw"
                                priority
                            />
                        </div>
                    </div>
                    <div>
                        <div className="group border p-8 4xl:p-[54px] h-full hover:bg-[#134874] hover:text-white">
                            <h3 className="font-semibold 4xl:text-[35px] text-[26px] 2xl:text-[32px] xl:text-[26px] lg:text-[28px] md:text-[28px] leading-tight 4xl:w-[370px] 2xl:w-[346px] xl:w-[300px]">{t('roleTitle')}</h3>
                            <p className="mt-5 xl:mt-20  text-[16px] md:text-[18px] lg:text-[18px] xl:text-[16px] 2xl:text-[19px] 4xl:text-[20px] 4xl:w-[358px] 2xl:w-[340px] xl:w-[300px] lg:w-[300px]">{t('roleDesc')}</p>
                            <Image
                                className="w-[50px] 4xl:w-[83px]  2xl:w-[76px] xl:mt-20 md:mt-20 mt-5 group-hover:invert group-hover:brightness-200"
                                src='/images/industry/rialchat/Rapid Setup.svg'
                                alt="Built-in Role-Based Access and Security"
                                width={0}
                                height={0}
                                sizes="100vw"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* key features section */}
            <div className="xl:mt-20 mb-20 custom-container text-black">
                <h2 className="text-[28px]  md:text-[40px] lg:text-[40px] xl:text-[46px] 2xl:text-[54px] 4xl:text-[60px] leading-tight ">{t('keyTitle')}</h2>
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="flex flex-col-reverse md:grid md:grid-cols-2 mt-10 border-b-2 hover:bg-gray-100 hover:p-5 hover:shadow-lg transition-all duration-500 ease-in-out origin-left">
                        <div className="pb-8">
                            <h3 className="font-semibold text-[22px] md:text-[28px] lg:text-[28px] xl:text-[30px] 2xl:text-[32px] 4xl:text-[35px] leading-tight md:mt-20">
                                {feature.title}
                            </h3>
                            <ul className="list-disc mt-8 text-[16px] md:text-[18px] lg:text-[18px] xl:text-[18px] 2xl:text-[19px] 4xl:text-[20px] 4xl:w-[570px] 2xl:w-[550px] xl:w-[520px] lg:w-[500px] px-2">
                                {feature.points.map((point, i) => (
                                    <li
                                        key={i}
                                        className={`marker:text-blue-500 ${i > 0 ? "mt-3" : ""}`}
                                        dangerouslySetInnerHTML={{ __html: point }}
                                    />
                                ))}
                            </ul>
                            <LearnMore btnName={t('learnMoreBtn')}/>
                        </div>
                        <div className="mt-10 xl:mt-0">
                            <Image
                                className="xl:w-[75%] w-full"
                                src={feature.image}
                                alt={feature.alt}
                                width={0}
                                height={0}
                                sizes="100vw"
                                priority
                            />
                        </div>
                    </div>
                ))}
            </div >
            {/* use cases section */}
            <section>
                <div className="mt-20 lg:mt-40 custom-container text-black">
                    <h2 className="text-[28px] md:text-[40px] lg:text-[40px] xl:text-[46px] 2xl:text-[54px] 4xl:text-[60px] leading-tight "> {t('agentChatTitle')}</h2>
                </div>
                <div className="custom-container max-md:px-0 mb-20">
                    <div className="overflow-x-auto mt-10 max-md:px-0">
                        <table className="w-full border-collapse ">
                            <thead>
                                <tr className="bg-[#D0EEFF] text-left">
                                    <th className="p-4 text-[16px] md:text-[24px] lg:text-[24px] xl:text-[22px] 2xl:text-[28px] 4xl:text-[30px] font-bold">{t('tableTitleOne')}</th>
                                    <th className="p-4 text-[16px] md:text-[24px] lg:text-[24px] xl:text-[22px] 2xl:text-[28px] 4xl:text-[30px]  font-bold">{t('tableTitleTwo')}</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y ">
                                {
                                    tableData.map((item, index) => (
                                        <tr key={index} className={`${index % 2 === 0 ? "bg-[#F2F2F2]" : "bg-white"} text-left mt-5`}>
                                            <td className="p-4 text-[16px] md:text-[22px] lg:text-[20px] xl:text-[20px] 2xl:text-[24px] 4xl:text-[26px]">{item.title}</td>
                                            <td className="p-4 text-[16px] md:text-[22px] lg:text-[20px] xl:text-[20px] 2xl:text-[24px] 4xl:text-[26px]">{item.desc}</td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            {/* quick setup section */}
            <div className={`bg-[url('/images/industry/rialchat/bg2.png')] bg-cover bg-right overflow-hidden
             ${locale === "es"
                                    ? "xl:h-[400px] 4xl:h-[580px] 2xl:h-[510px]"
                                    : locale === "fr"
                                        ? "xl:h-[400px] 4xl:h-[580px] 2xl:h-[510px]"
                                        : "xl:h-[400px] 4xl:h-[520px] 2xl:h-[480px]"
                                }`}
            
            
            >
                <div className="mt-16 text-white custom-container xl:!pr-[142px] pt-6">
                    <h2 className="text-[28px] md:text-[40px] max-lg:pb-6 lg:text-[40px] xl:pb-10 xl:text-[46px] 2xl:text-[54px] 4xl:text-[60px] leading-tight">{t('setupTitle')}</h2>
                    <div className="flex flex-col xl:flex-row  4xl:gap-34px 2xl:gap-40 xl:gap-48">
                        <div className="relative">
                            <Image
                                className="w-[194px] 4xl:w-[188px] 2xl:w-[120px] xl:w-[400px] md:w-[220px] "
                                src='/images/industry/rialchat/Group 380.svg'
                                alt="Our Solution to Success"
                                width={0}
                                height={0}
                                priority
                            />
                            <p className="absolute 4xl:left-[60px] leading-tight 4xl:top-[100px] 2xl:top-[60px] 2xl:left-[40px] xl:top-[60px] xl:left-[20px]  left-[55px] top-[100px] text-[24px]  md:text-[24px] lg:text-[18px] xl:text-[16px] 2xl:text-[20px] 4xl:text-[24px] md:top-[130px]  md:left-[90px] 4xl:w-[203px] 2xl:w-[170px] xl:w-[160px] lg:w-[170px] md:w-[250px]">{t('descOne')}</p>
                        </div>
                        <div className="relative">
                            <Image
                                className="w-[194px]  4xl:w-[188px] 2xl:w-[120px] xl:w-[400px] md:w-[220px]"
                                src='/images/industry/rialchat/Group 381.svg'
                                alt="agent chat image"
                                width={0}
                                height={0}
                                sizes="100vw"
                                priority
                            />
                            <p className="absolute mb-14 pb-10 leading-tight 4xl:left-[60px] 4xl:top-[100px] 2xl:top-[60px] 2xl:left-[40px]  xl:top-[60px] xl:left-[20px]  left-[55px] top-[100px] text-[22px] md:text-[24px] lg:text-[18px] xl:text-[16px] 2xl:text-[22px] 4xl:text-[24px]  md:top-[130px] md:left-[90px] 4xl:w-[222px] 2xl:w-[200px] xl:w-[180px] lg:w-[170px] md:w-[260px]">{t('descTwo')}</p>
                        </div>
                        <div className="relative">
                            <Image
                                className="w-[194px]  4xl:w-[188px] 2xl:w-[120px] xl:w-[400px] md:w-[220px]"
                                src='/images/industry/rialchat/Group 382.svg'
                                alt="agent chat image"
                                width={0}
                                height={0}
                                sizes="100vw"
                                priority
                            />
                            <p className="absolute leading-tight 4xl:left-[60px] 4xl:top-[100px] 2xl:top-[60px] 2xl:left-[40px]  xl:top-[60px] xl:left-[20px] left-[55px] top-[100px] text-[20px] md:text-[24px] lg:text-[18px] xl:text-[16px] 2xl:text-[22px] 4xl:text-[24px] md:top-[130px] md:left-[90px] 4xl:w-[230px] 2xl:w-[210px] xl:w-[180px] lg:w-[170px] md:w-[310px] ">{t('descThree')}</p>
                        </div>

                        <div className="relative">
                            <Image
                                className="w-[194px] 4xl:w-[188px] 2xl:w-[120px] xl:w-[400px] md:w-[220px]"
                                src='/images/industry/rialchat/Group 383.svg'
                                alt="agent chat image"
                                width={0}
                                height={0}
                                sizes="100vw"
                                priority
                            />
                            <p className="absolute leading-tight  4xl:left-[60px] 4xl:top-[100px] 2xl:top-[60px] 2xl:left-[40px]  xl:top-[60px] xl:left-[20px] left-[55px] top-[100px] text-[22px] md:text-[24px] lg:text-[18px] xl:text-[16px] 2xl:text-[22px] 4xl:text-[24px] md:top-[130px] md:left-[90px] 4xl:w-[190px] 2xl:w-[190px] xl:w-[180px] lg:w-[170px] md:w-[260px]">{t('descFour')}</p>
                        </div>

                        <div className="relative">
                            <Image
                                className="w-[194px] 4xl:w-[188px] 2xl:w-[120px] xl:w-[400px] md:w-[220px]"
                                src='/images/industry/rialchat/Group 384.svg'
                                alt="agent chat image"
                                width={0}
                                height={0}
                                sizes="100vw"
                                priority
                            />
                            <p className="absolute leading-tight 4xl:left-[60px] 4xl:top-[100px] 2xl:top-[60px] 2xl:left-[40px]  xl:top-[60px] xl:left-[20px] left-[55px] top-[100px] text-[22px] md:text-[24px] lg:text-[18px] xl:text-[16px] 2xl:text-[22px] 4xl:text-[24px]  md:top-[130px] md:left-[90px] 4xl:w-[190px] 2xl:w-[190px] xl:w-[180px] lg:w-[170px] md:w-[260px]">{t('descFive')}</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* ready to super charge section */}
            <div className="bg-[#134874] text-white xl:py-8 overflow-hidden">
                < div className="mb-10 custom-container xl:pr-10 2xl:pr-20 4xl:pr-[100px] py-8">
                    <div className="grid xl:grid-cols-12 grid-cols-1 items-center">
                        <div className="xl:col-span-4">
                            <Image
                                className="w-[60%] md:w-[44%] "
                                src='/images/industry/rialchat/CTA (1).svg'
                                alt="Ready to Supercharge WhatsApp Engagement in Salesforce?"
                                width={0}
                                height={0}
                                sizes="100vw"
                                priority
                            />
                        </div>
                        <div className="xl:col-span-8">
                            <h2 className="text-[26px] md:text-[40px] lg:text-[40px] xl:text-[40px] 2xl:text-[50px] 4xl:text-[60px] leading-tight max-w-[1081px] w-full">{t('readyTitle')}</h2>
                            <p className="mt-10 font-light text-[18px] md:text-[22px] lg:text-[22px] xl:text-[22px] 2xl:text-[26px] 4xl:text-[28px] max-w-[1000px] w-full leading-tight">{t('readyDesc')}</p>
                            <div className="xl:flex xl:flex-row md:flex-row flex-col mt-16 items-center gap-10 4xl:gap-[34px] ">
                                <div className="flex flex-col lg:flex-row gap-4 w-full h-[105px] max-lg:p-4">
                                    <div className="flex flex-row items-center gap-4 ">
                                        <Image
                                            className="w-[50px] md:w-[60px] xl:w-[50px]"
                                            src='/images/industry/rialchat/get started now (1).svg'
                                            alt="Ready to Supercharge WhatsApp Engagement in Salesforce?"
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            priority
                                        />
                                        <p className="pr-4 font-light text-[22px] md:text-[24px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] 4xl:text-[22px] leading-tight 4xl:w-[152px] 2xl:w-[200px] xl:w-[180px] lg:w-[120px] md:w-[160px]">{t('getStart')}</p>
                                    </div>
                                    <div className="hidden lg:block border-r-2  self-stretch border-gray-300 mx-4"></div>
                                    <div className="block lg:hidden w-full border-b border-gray-300 "></div>
                                </div>
                                <div className="flex flex-col lg:flex-row  gap-4 w-full h-[105px] max-lg:p-4">
                                    <div className="flex flex-row items-center gap-4   ">
                                        <Image
                                            className="w-[50px] md:w-[60px] xl:w-[50px]"
                                            src='/images/industry/rialchat/contact us (1).svg'
                                            alt="agent chat images"
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            priority
                                        />
                                        <p className="pr-4 font-light text-[22px] md:text-[24px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] 4xl:text-[22px] leading-tight 4xl:w-[152px] 2xl:w-[190px] xl:w-[180px] lg:w-[120px] md:w-[180px]">{t('contactUs')}</p>
                                    </div>
                                    <div className="hidden lg:block border-r-2 self-stretch border-gray-300 mx-4"></div>
                                    <div className="block lg:hidden w-full border-b border-gray-300 mt-4"></div>
                                </div>

                                <div className="flex flex-col lg:flex-row  gap-4 w-full h-[105px] max-lg:p-4 ">
                                    <div className="flex flex-row items-center gap-4  ">
                                        <Image
                                            className="w-[50px] md:w-[60px] xl:w-[50px] "
                                            src='/images/industry/rialchat/demo (1).svg'
                                            alt="agent chat images"
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            priority
                                        />
                                        <p className="font-light text-[22px] md:text-[24px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] 4xl:text-[22px] leading-tight 4xl:w-[152px] 2xl:w-[140px] xl:w-[130px] lg:w-[120px] md:w-[110px]">{t('scheduled')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Form */}
            <div className="custom-container text-black py-10">
                <ContactForm title={t('contactTitle')} className={' font-light leading-tight text-[26px] md:text-[40px] lg:text-[40px] xl:text-[46px] 2xl:text-[54px] 4xl:text-[60px] 4xl:w-[1222px] 2xl:w-[1100px] xl:w-[800px] '} />
            </div>
        </div>
    );
}