"use client";
import Image from "next/image";
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import { changeLocalization } from "../../components/changeLocalization";
import ContactForm from "../../components/contactform";
import { useLocale, useTranslations } from "next-intl";
import enContent from '../../../../../messages/en/aboutus.json';
import esContent from '../../../../../messages/es/aboutus.json'
import frContent from '../../../../../messages/fr/aboutus.json'

const schemaData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Our Values - Empowering People with Trust & Inclusion | Rialtes",
    "url": "https://www.rialtes.com/about-us/our-values/",
    "description": "At Rialtes, we celebrate people. From women in tech to LGBTQ+ and veterans, we drive impact through equal opportunity and unwavering commitment.",
    "headline": "Our Value System",
    "mainEntity": {
        "@type": "Organization",
        "name": "Rialtes",
        "url": "https://www.rialtes.com"
    },
    "about": [
        {
            "@type": "Thing",
            "name": "Equal Opportunity",
            "description": "We foster a culture of fairness, inclusion, and growth where everyone has an equal chance to thrive."
        },
        {
            "@type": "Thing",
            "name": "LGBTQ+ Inclusion",
            "description": "Creating a safe and empowering workplace where LGBTQ+ individuals are valued and supported."
        },
        {
            "@type": "Thing",
            "name": "Veteran Support",
            "description": "Honoring the contributions of veterans by supporting their growth and inclusion in our workforce."
        },
        {
            "@type": "Thing",
            "name": "Women in Tech",
            "description": "Driving impact through mentorship, leadership development, and equal opportunities for women in technology."
        },
        {
            "@type": "Thing",
            "name": "Trust & Transparency",
            "description": "Building lasting relationships through open communication, integrity, and accountability."
        },
        {
            "@type": "Thing",
            "name": "Growth Mindset",
            "description": "Encouraging continuous learning, innovation, and personal development across the organization."
        }
    ]
}

export default function Page() {
    const t = useTranslations('ourValue')
    const locale = useLocale();
    const ourValueContent = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
    const { growLatestServices, principleItems } = ourValueContent.ourValue;

    const GrowServicesCard = ({ services }) => (
        <div className="w-full h-full">
            <div className="relative overflow-hidden">
                <Image
                    className="w-full transition-transform duration-300 hover:scale-105"
                    src={services.image}
                    alt={services.title}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    priority
                />
            </div>
            <div className="flex flex-col pt-8">
                <h3 className="md:mb-[15px] font-medium h3-bold text-[22px] xl:text-[30px] 4xl:text-[35px] line-clamp-2 min-h-[60px] leading-tight">{services.title}</h3>
            </div>
            <p className='mb-[15px] 4xl:text-[22px] xl:text-[18px] text-[16px] leading-tight'>{services.description1}</p>
            <p className='mb-[15px] 4xl:text-[22px] xl:text-[18px] text-[16px] leading-tight'>{services.description2}</p>
        </div>
    );
    const GrowServices = () => {
        return (
            <div className="mx-auto text-black ">
                <h2 className="pb-16 text-black 4xl:text-[60px] xl:text-[40px] text-[26px] leading-tight">{t('employeeTitle')}</h2>
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
                title="Our Values - Empowering People with Trust & Inclusion | Rialtes"
                description="At Rialtes, we celebrate people. From women in tech to LGBTQ+ and veterans, we drive impact through equal opportunity and unwavering commitment."
                keywords="home, website, welcome"
                canonical={"https://www.rialtes.com/about-us/our-values/"}
            />
            <Script
                id="schema-our"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            {/* hero section */}
            <section className="relative group overflow-hidden h-[399px] lg:h-[650px] ">
                {/* Desktop Image */}
                <div className="hidden md:block">
                    <Image
                        src="/images/culture/culture header.webp"
                        alt="desktop banner"
                        fill
                        style={{ objectFit: "cover", objectPosition: "35% 20%" }}
                        priority
                        className="transform transition-transform duration-500 group-hover:scale-110"
                    />
                </div>
                {/* Mobile Image */}
                <div className="block md:hidden">
                    <Image
                        src="/images/culture/AdobeStock_1016285553.webp"
                        style={{ objectFit: "cover", objectPosition: "0% 20%" }}
                        alt="mobile banner"
                        fill
                        priority
                    />
                </div>
                <div className="relative h-full custom-container flex items-center">
                    <div className="grid grid-cols-1 lg:grid-cols-12 w-full">
                        <div className="col-span-12 xl:col-span-7 lg:col-span-9 text-white ">
                            <h3 className="text-[18px] 4xl:text-[24px] xl:text-[20px] ] font-bold sm:text-[#01335B] max-sm:text-[#02182A]">
                                {t('cultureTitle')}
                            </h3>
                            <h2 className="text-[26px] xl:text-[40px] 4xl:text-[60px] leading-tight mt-[10px] md:mt-[22px] sm:text-[#01335B] max-sm:text-[#02182A] "  >
                                {t('growthTitleOne')}<br />  {t('growthTitleTwo')}
                            </h2>
                        </div>
                        <div className="col-span-12 lg:col-span-3 xl:col-span-5">
                        </div>
                    </div>
                </div>
            </section>
            {/* our value section */}
            <section className="xl:py-16 py-10">
                <div className="custom-container">
                    <div className=" mx-auto">
                        <h1 className="4xl:text-[60px] xl:text-[40px] md:text-[35px] text-[26px]"> {t('valueTitle')}</h1>
                        <p className="mt-3 4xl:text-[35px] xl:text-[28px] text-[20px] "> {t('valueSubtitle')}</p>
                        <div className="flex flex-col md:flex-row mb-8 mt-16 lg:gap-52 gap-10 md:gap-28">
                            {principleItems.map((item, index) => (
                                <div key={index} className="grid">
                                    <Image
                                        src={item.image}
                                        alt={item.alt}
                                        width={100}
                                        height={100}
                                        priority
                                        className={`${item.className} max-md:m-auto xl:m-0`}
                                    />
                                    <p className="mt-5 lg:text-center max-md:text-center 4xl:text-[35px] xl:text-[28px] text-[26px]">{item.label}</p>
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
                        src="/images/culture/commitments.webp"
                        alt="commitments image"
                        fill
                        priority
                        sizes="100vw"
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/culture/AdobeStock_458959285.webp"
                        alt="commitments image"
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
                            <h2 className="xl:text-white text-black max-w-2xl 4xl:mt-10 xl:text-[45px] pr-[3rem] xl:pr-0 leading-tight text-[30px] font-medium xl:font-normal mt-[5rem] 4xl:text-[55px] xl:mt-[30px] absolute">
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
                <ContactForm title={t('contactUs')} className={"4xl:w-[65%] xl:w-[58%] 4xl:text-[60px] xl:text-[40px] text-[26px] leading-tight"} />
            </div>
        </div>
    );
}