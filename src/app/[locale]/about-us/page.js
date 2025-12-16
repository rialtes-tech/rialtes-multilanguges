import Image from "next/image";
import Link from "next/link";
import ContactForm from "../components/contactform";
import Seo from "../components/Seo";
import Script from "next/script";
import { useLocale, useTranslations } from "next-intl";
import enContent from '../../../../messages/en/aboutus.json';
import esContent from '../../../../messages/es/aboutus.json';
import frContent from '../../../../messages/fr/aboutus.json'
import { changeLocalization } from "../components/changeLocalization";


export default function About() {
    const t = useTranslations('aboutUs')
    const locale = useLocale();
    const aboutUsContent = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
    const { latestServices, brandStories, corePrinciples, missionCards ,schemaData} = aboutUsContent.aboutUs;

    const ServicesCard = ({ services }) => (
        <div className="border border-[#707070] p-10 transition ease-out duration-300 hover:bg-[#D9F2FF] hover:border-[#D9F2FF] flex flex-col min-h-[400px]">
            <div className="flex-grow">
                <h3 className="mb-[15px] md:mb-[25px] font-normal line-clamp-4 text-[#1F3F69] 4xl:text-[35px] xl:text-[30px] text-[26px] leading-tight">
                    {services.title}
                </h3>
                <p className="md:mb-[15px] mb-0 4xl:text-[27px] xl:text-[22px] text-[20px]">{services.description}</p>
            </div>
            <div className="mt-auto xl:mt-7 max-sm:mt-3">
                <button className="bg-[#134874] hover:bg-[#ffffff] hover:text-[#134874] border-[1px] border-[solid] border-[#134874] font-semibold text-white py-3 px-8 transition duration-300 text-[20px]">
                    <Link href={services.url}> {t('learnMore')} </Link>
                </button>
            </div>
        </div>
    );
    const Services = () => {
        return (
            <div className="custom-container mx-auto text-black 4xl:px-0 2xl:px-0 xl:px-0">
                <h2 className="text-black xl:mt-20 mt-10 leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px] "> {t('ourTitle')}</h2>
                <h3 className="mt-5 font-bold 4xl:text-[45px] 2xl:text-[36px] xl:text-[32px] text-[23px]"> {t('ourDesc')}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-6 mt-10">
                    {latestServices.map((services) => (
                        <ServicesCard key={services.id} services={services} />
                    ))}
                </div>
            </div>
        );
    };
    return (
        <div className="min-h-screen">
            <Seo
              title={t('seoTitle')}
                description={t('seoDescription')}
                keywords="home, website, welcome"
                canonical={`https://www.rialtes.com/${locale}/about-us/`}
            />
            <Script
                id="schema-about"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <section className="relative">
                <div className="custom-container lg:!pr-0 overflow-hidden max-md:px-0 h-[350px] md:h-[500px]  4xl:h-[650px] ">
                    {/* Image Element */}
                    <Image
                        src="/images/about-us/futuristic-ai-technology-digital-faces-visualization.webp"
                        alt={t("bannerAlt")}
                        className="w-full h-[400px] xl:h-[650px] object-cover xl:object-right"
                        width={0}
                        height={0}
                    />
                    {/* Content Box */}
                    <div className="flex bg-[#01335B] xl:flex-row flex-col  xl:gap-7 gap-5 xl:p-14 p-7 text-white absolute max-md:left-[9%] xl:w-[63%]  w-[82%] bottom-[-140px] xl:bottom-[-150px] xl:h-[270px] 4xl:h-[340px] justify-center xl:items-center">
                        <div className="text-left xl:w-[60%]">
                            <p className="font-bold 4xl:text-[24px] xl:text-[18px] text-[16px] leading-tight">{t('aboutusTitle')}</p>
                            <div className="4xl:text-[50px] xl:text-[31px] 2xl:text-[36px] text-[22px] leading-tight mt-3">{t('aboutusSubtitle')}</div>
                        </div>
                        <div className="4xl:text-[33px] xl:text-[22px] text-[18px] leading-tight xl:w-[50%]">{t('aboutusSubtitleone')}</div>
                    </div>
                </div>
            </section>
            {/* Mission & Vision Section */}
            <div className="mt-40 custom-container">
                <h1 className="py-14 leading-tight 4xl:text-[60px] xl:text-[40px] text-[26px]  xl:w-[76%] 4xl:w-[100%]">
                    {t('worldTitle')}
                </h1>
                <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 xl:mr-[211px]">
                    {brandStories.map((story, index) => (
                        <div key={index} className="relative overflow-hidden">
                            <Image
                                src={story.image}
                                alt={story.alt}
                                width={100}
                                height={100}
                                priority
                                className="w-full h-full transition-transform duration-300 hover:scale-105"
                            />
                            <div className="absolute top-0 text-white pt-10 pl-10 pr-10 4xl:text-[25px] xl:text-[22px] text-[20px]">
                                {story.description}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* over section */}
            <section className="xl:py-14 py-10 bg-gray-100 mt-20">
                <div className="custom-container">
                    <div className="mx-auto">
                        <h3 className="text-[#000000] mb-8 font-semibold w-full 4xl:text-[43px] 2xl:text-[36px] xl:text-[32px] text-[23px] leading-tight">
                            {t('overTitle')}</h3>
                       <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-16 mb-8 place-items-baseline">
                            {corePrinciples.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex-col"
                                >
                                    <Image
                                        src={item.image}
                                        alt={item.alt}
                                        width={120}
                                        height={120}
                                        priority
                                        style={{
                                            width: item.width.base,
                                            height: item.height.base,
                                        }}
                                    />

                                    <p className="mt-5 4xl:text-[35px] xl:text-[30px] text-[22px]">
                                        {item.label}
                                    </p>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>
            {/* what we do section*/}
            <section className="xl:py-16 pt-10">
                <div className="custom-container">
                    <div className="mx-auto">
                        <h2 className="text-[#000000] leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px]">{t('whatTitle')}</h2>
                        <p className="my-10 text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight">{t('whatDesc')}</p>
                        <div className="grid md:grid-cols-2 xl:grid-cols-3 xl:gap-4 gap-20 mb-20 mt-20 grid-cols-1">
                            {missionCards.map((card, index) => (
                                <div key={index}>
                                    <div className="relative border-b border-l border-r border-gray-300 p-12 h-[360px] md:h-[350px]  xl:mt-[40px]">
                                        <div className="absolute -top-px left-0 w-10 border-t-2 border-gray-300 bg-white"></div>
                                        <div className="absolute -top-px right-0 xl:w-[12rem] w-[8rem] border-t-2 border-gray-300 bg-white"></div>
                                        <h2 className="4xl:text-[40px] 2xl:text-[36px] xl:text-[30px] text-[30px] font-bold text-[#0C8AD4] 4xl:mt-[-110px] 2xl:mt-[-108px] xl:mt-[-95px] max-lg:mt-[-97px]">
                                            {card.headingBold} <br />
                                            <span className="font-normal">{card.headingLight}</span>
                                        </h2>
                                        <p className="mt-3 4xl:text-[30px] xl:text-[22px] text-[22px] leading-tight font-medium text-gray-900">
                                            {card.subheading}
                                        </p>
                                        <p className="mt-4 text-gray-600 text-[16px] xl:text-[18px] 4xl:text-[22px] leading-tight">
                                            {card.description}
                                        </p>
                                        <div className={`absolute  w-12 border-t border-gray-400
                                          ${locale === "es"
                                    ? "bottom-[1.5rem]"
                                    : locale === "fr"
                                        ? "bottom-[0.5rem] xl:bottom-[1.5rem]"
                                        : "bottom-[1.5rem]"
                                }`}
                                        
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>
            {/* welcome section */}
            <section className="relative sm:h-[750px] md:h-[500px] xl:h-[765px] overflow-hidden mt-5 xl:mt-0">
                <Image
                    src="/images/about-us/professional-woman-digital-transformation-future-business.webp"
                    alt={t("welcomeAlt")}
                    fill
                    style={{ objectFit: "cover", objectPosition: "35% 20%" }}
                    priority
                />
                <div className=" h-full relative xl:ml-[280px] xl:mr-[156px] md:ml-[290px]">
                    <div className="flex justify-end">
                        <div className={`relative p-10 4xl:w-[720px]  xl:w-[535px]
                          ${locale === "es"
                                    ? "4xl:h-[620px] xl:h-[550px] max-md:h-[750px] 2xl:h-[560px]"
                                    : locale === "fr"
                                        ? "4xl:h-[620px] xl:h-[550px] max-md:h-[750px] 2xl:h-[560px]"
                                        : "4xl:h-[620px] xl:h-[500px] max-md:h-[750px]"
                                }`}
                        >
                            <div className="absolute inset-0 bg-[#016FBE] mix-blend-multiply"></div>
                            <div className="relative bg-opacity-80 text-white z-10  rounded-lg">
                                <h3 className="4xl:text-[45px] xl:text-[38px] text-[34px] leading-tight font-bold">{t('welcomeTitle')}</h3>
                                <p className='mt-5 4xl:text-[32px] xl:text-[24px] text-[22px] leading-tight'>{t('welcomeDesc')}</p>
                                <p className="mt-5 4xl:text-[32px] xl:text-[24px] text-[22px] leading-tight"> {t('welcomeDescOne')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="mt-[3rem] xl:mt-0 custom-container max-md:px-0">
                <section className="pb-16 bg-white">
                    <Services />
                </section>
            </div>
            {/* Contact Form Section */}
            <div className="custom-container text-black xl:pt-16 pb-20">
                <ContactForm className="xl:w-[85%] w-full leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px]" />
            </div>
        </div>
    );
}