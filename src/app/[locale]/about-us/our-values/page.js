"use client";
import Image from "next/image";
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import { changeLocalization } from "../../components/changeLocalization";
import ContactForm from "../../components/contactform";
import { useLocale, useTranslations } from "next-intl";
import enContent from '../../../../../messages/en/aboutus.json';
import esContent from '../../../../../messages/es/aboutus.json';
import frContent from '../../../../../messages/fr/aboutus.json';
import BreadCrumbs from '@/app/[locale]/components/BreadCrumbs'
import BreadcrumbSchema from "../../components/BreadcrumbSchema";

export default function Page() {
    const t = useTranslations('ourValue')
    const locale = useLocale();
    const ourValueContent = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
    const { growLatestServices, principleItems, schemaData } = ourValueContent.ourValue;

    const GrowServicesCard = ({ services }) => (
        <div className="w-full h-full">
            <div className="relative overflow-hidden">
                <Image
                    className="w-full transition-transform duration-300 hover:scale-105"
                    src={services.image}
                    alt={services.alt}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    priority
                />
            </div>
            <div className="flex flex-col pt-8">
                <h3 className="md:mb-[15px] font-medium h3-bold text-[22px] xl:text-[30px] 4xl:text-[36px] line-clamp-2 min-h-[60px] leading-tight mb-3">{services.title}</h3>
            </div>
            <p className='mb-[15px] 4xl:text-[22px] md:text-[18px] text-[16px] leading-tight'>{services.description1}</p>
            <p className='mb-[15px] 4xl:text-[22px] md:text-[18px] text-[16px] leading-tight'>{services.description2}</p>
        </div>
    );
    const GrowServices = () => {
        return (
            <div className="mx-auto text-black ">
                <h2 className="pb-16 text-black text-[26px] md:text-[30px] xl:text-[40px] 4xl:text-[60px] leading-tight">{t('employeeTitle')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 xl:gap-32 gap-10 pb-10">
                    {growLatestServices.map((services) => (
                        <GrowServicesCard key={services.id} services={services} />
                    ))}
                </div>
            </div>
        );
    };
    return (
        <div className="min-h-screen bg-white">
            <Seo
                title={t('seoTitle')}
                description={t('seoDescription')}
                keywords="home, website, welcome"
                canonical={`https://www.rialtes.com/${locale}/about-us/our-values/`}
            />
            <Script
                id="schema-our"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            {/* breadcrumbs schema */}
            <BreadcrumbSchema />
            {/* hero section */}
            <section className="relative group overflow-hidden h-[350px] md:h-[500px] 4xl:h-[650px]">
                {/* Desktop Image */}
                <div className="hidden md:block">
                    <Image
                        src="/images/culture/mountain-hiker-growth-mindset-culture-values.webp"
                        alt={t("bannerAlt")}
                        fill
                        style={{ objectFit: "cover", objectPosition: "50% 20%" }}
                        priority
                        className="transform transition-transform duration-500 group-hover:scale-110"
                    />
                </div>

                {/* Mobile Image */}
                <div className="block md:hidden">
                    <Image
                        src="/images/culture/mountain-hiker-growth-mindset-culture-values-mobile.webp"
                        style={{ objectFit: "cover", objectPosition: "0% 20%" }}
                        alt={t("bannerAlt")}
                        fill
                        priority
                    />
                </div>

                {/* Mobile-only Overlay */}
                <div className="absolute inset-0 bg-black/40 md:hidden"></div>

                {/* Content */}
                <div className="relative h-full custom-container flex items-center">
                    <div className="grid grid-cols-1 lg:grid-cols-12 w-full">
                        <div className="col-span-12 xl:col-span-7 lg:col-span-9 text-white">
                            <h3 className="text-[18px] 4xl:text-[24px] xl:text-[20px] font-bold sm:text-[#01335B] max-sm:text-[#fff]">
                                {t("cultureTitle")}
                            </h3>
                            <h2 className="text-[26px] md:text-[30px] xl:text-[40px] 4xl:text-[60px] leading-tight mt-[10px] md:mt-[22px] sm:text-[#01335B] max-sm:text-[#fff]">
                                {t("growthTitleOne")}
                                <br />
                                {t("growthTitleTwo")}
                            </h2>
                        </div>
                        <div className="col-span-12 lg:col-span-3 xl:col-span-5"></div>
                    </div>
                </div>
            </section>

            {/* breadcrumb */}
            <section className="custom-container">
                <BreadCrumbs />
            </section>
            {/* our value section */}
            <section className="xl:py-16 py-10">
                <div className="custom-container">
                    <div className=" mx-auto">
                        <h1 className="text-[26px] md:text-[30px] xl:text-[40px] 4xl:text-[60px]"> {t('valueTitle')}</h1>
                        <p className="mt-3 text-[20px] xl:text-[30px] 4xl:text-[36px]"> {t('valueSubtitle')}</p>
                        <div className="grid xl:grid-cols-4 md:grid-cols-2 mb-8 mt-16 lg:gap-40 gap-10 ">
                            {principleItems.map((item, index) => (
                                <div key={index} className="grid">
                                    <Image
                                        src={item.image}
                                        alt={item.alt}
                                        width={100}
                                        height={100}
                                        priority
                                    />
                                    <p className="mt-5  text-[22px] xl:text-[30px] 4xl:text-[36px]">
                                        {item.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {/* only image section */}
            <section className="relative h-[800px] xl:h-[650px]">
                <div className="xl:block hidden">
                    <Image
                        src="/images/culture/athlete-pole-vault-trust-transparency-commitment.webp"
                        alt={t("commitmentAlt")}
                        fill
                        priority
                        sizes="100vw"
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/culture/athlete-pole-vault-trust-transparency-commitment-mobile.webp"
                        alt={t("commitmentAlt")}
                        fill
                        priority
                        className="object-cover"
                    />
                </div>

                <div
                    className="custom-container">
                    <div className="flex flex-col justify-center">
                        <div className="flex flex-col">
                            <div className="xl:hidden block">
                                <Image
                                    src="/images/culture/quote mark.svg"
                                    alt="GROW with SAP"
                                    fill
                                    priority
                                    className="object-cover !w-[140px] !h-[60px] pl-[35px] absolute"
                                />
                            </div>
                            <h2 className="xl:text-white text-black max-w-2xl 4xl:mt-10 pr-[3rem] xl:pr-0 leading-tight font-medium xl:font-normal mt-[5rem] xl:mt-[30px] absolute text-[26px] md:text-[30px] xl:text-[40px] 4xl:text-[60px]">
                                {t('businessTitleOne')}<br /> {t('businessTitleTwo')}<br /> {t('businessTitleThree')}
                            </h2>
                        </div>

                    </div>
                </div>
            </section>
            {/* We Help You Grow and Thrive */}
            <div className="xl:mt-10 mt-16  custom-container">
                <section className="xl:py-16 bg-white">
                    <GrowServices />
                </section>
            </div>
            {/* Contact Form */}
            <div className="custom-container text-black pb-10">
                <ContactForm title={t('contactUs')} className={"4xl:w-[65%] xl:w-[58%] text-[26px] md:text-[30px] xl:text-[40px] 4xl:text-[60px] leading-tight"} />
            </div>
        </div>
    );
}