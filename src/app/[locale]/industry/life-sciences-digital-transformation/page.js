import ContactForm from "@/app/[locale]/components/contactform";
import LearnMore from "@/app/[locale]/components/learnMore";
import Seo from "@/app/[locale]/components/Seo";
import Image from "next/image";
import Script from "next/script";
import UnorderedList from "@/app/[locale]/components/unorderedList";
import { useLocale, useTranslations } from "next-intl";
import enContent from '../../../../../messages/en/industry.json';
import esContent from '../../../../../messages/es/industry.json';
import frContent from '../../../../../messages/fr/industry.json';
import { changeLocalization } from "../../components/changeLocalization";
import { useActiveLocale } from "../../components/activeLanguages";
export default function page() {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Life Sciences Digital Transformation and IT Solutions",
        "url": "https://www.rialtes.com/industry/life-sciences-digital-transformation/",
        "description": "Empowering digital transformation in life sciences with connected data, AI insights, and cloud solutions for Pharma, MedTech, providers, and public health.",
        "publisher": {
            "@type": "Organization",
            "name": "Rialtes",
            "url": "https://www.rialtes.com",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.rialtes.com/images/homepage/logo.svg"
            },
            "sameAs": [
                "https://www.linkedin.com/company/rialtes-technologies-llc/",
                "https://www.youtube.com/@rialtes"
            ]
        },
        "mainEntity": {
            "@type": "Service",
            "name": "Life Sciences Digital Transformation and IT Solutions",
            "areaServed": [
                { "@type": "Country", "name": "United States" },
                { "@type": "Country", "name": "Canada" },
                { "@type": "Country", "name": "India" },
                { "@type": "Country", "name": "Singapore" }
            ],
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Life Sciences Digital Transformation Services",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Patient Interaction Platform",
                            "description": "Deliver end-to-end patient engagement journeys with real-time communication and AI personalization."
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Body Map Visualization",
                            "description": "Interactive visualization for patient medical history, clinical insights, and personalized treatment planning."
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Clinical Trial Management Solutions",
                            "description": "Accelerate clinical trials with AI-powered recruitment, compliance tools, and real-world evidence insights."
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Salesforce for Life Sciences",
                            "description": "Implement Salesforce Health Cloud for payer-provider collaboration, patient support programs, and remote monitoring."
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "MedTech Device Lifecycle Management",
                            "description": "Manage connected devices, predictive maintenance, and field service operations for better patient outcomes."
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Public Health Analytics and Outreach",
                            "description": "Drive data-driven public health programs with SDOH analysis, case tracking, and behavioral outreach."
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "AI-Driven Pharma Innovation",
                            "description": "Enhance patient access, drug safety, and regulatory compliance using AI, Data Cloud, and intelligent workflows."
                        }
                    }
                ]
            }
        }
    }
    const t = useTranslations('lifeScience')
    const locale = useLocale();
    const content = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
    const { frActive, esActive } = useActiveLocale();
    const { whyRialtesData, seamlessData, thoughLeadershipData, prebuiltData, commonSectionData, commonSectionData1 } = content.lifeScience
    return (
        <section className="min-h-screen">
            <Seo
                title="Life Sciences Digital Transformation with AI | Rialtes"
                description=" Empowering digital transformation in life sciences with connected data, AI insights, and cloud solutions for Pharma, MedTech, public health, and providers."
                canonical="https://www.rialtes.com/industry/life-sciences-digital-transformation/"
            />
            <Script
                id="schema-life-science"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            {/* herosection */}
            <section className="relative group overflow-hidden h-[350px] md:h-[500px]  4xl:h-[650px]  ">
                <div className="hidden md:block">
                    <Image
                        src="/images/industry/life-science/hero-desk-banner.webp"
                        alt="desktop banner"
                        fill
                        style={{ objectFit: "cover", objectPosition: "55% 20%" }}
                        priority
                        className="transform transition-transform duration-500 group-hover:scale-110"
                    />
                </div>
                {/* Mobile Image */}
                <div className="block md:hidden">
                    <Image
                        src="/images/industry/life-science/Mobile/hero-mob-banner.webp"
                        alt="mobile banner"
                        fill
                        style={{ objectFit: "cover", objectPosition: "5% 40%" }}
                        priority
                    />
                </div>
                <div className="relative h-full custom-container flex items-center">
                    <div className="grid grid-cols-1 lg:grid-cols-12 w-full text-[#ffffff]">
                        <div className="col-span-12">
                            <h3 className="text-[18px] lg:text-[24px] font-bold">
                                {t('headerTitle')}
                            </h3>
                            <h1 className="text-[26px] leading-tight xl:text-[40px] 4xl:text-[60px] mt-[11.5px] md:mt-[28.5px] w-[67%] sm:w-full">
                                {t('headerSubTitle1')}    <div className="sm:block hidden" />{t('headerSubTitle2')}
                            </h1>
                            <h4 className="text-[20px] leading-tight xl:text-[28px] 4xl:text-[35px] font-bold xl:mt-[23px] mt-[15px]">
                                {t('headerSubTitle3')}  <div /> {t('headerSubTitle4')} <div /> {t('headerSubTitle5')}
                            </h4>
                        </div>
                        <div className="col-span-12 lg:col-span-3 xl:col-span-5">
                        </div>
                    </div>
                </div>
            </section>
            {/* page description section */}
            <section className="custom-container xl:mt-[119px] mt-[44px]">
                <div className="">
                    <h2 className="4xl:text-[60px] xl:text-[40px] text-[26px] leading-tight font-light w-[90%] md:w-[90%] lg:w-[60%] xl:w-[66%] 2xl:w-[60%] 4xl:w-[80%]">
                        {t('pageDescTitle')}
                    </h2>
                    <p className="xl:text-[19px] 4xl:text-[22px] text-[16px] leading-tight mt-[19px] xl:mt-[49px] w-[90%] sm:w-[80%] lg:w-[60%] xl:w-[70%]">
                        {t('pageDesc')}
                    </p>
                </div>
            </section>
            {/* did u know section */}
            <section className="custom-container xl:mt-[124px] mt-[56px]">
                <div className="grid md:grid-cols-12 grid-cols-1 border border-[#707070]">
                    <div className="md:col-span-7 col-span-12 border-r border-[#707070]">
                        <div className="relative pt-[33px] pb-[26px] pl-[26px] pr-[23px] xl:pt-[58px] xl:pb-[50px] xl:pl-[49px] xl:pr-[44px]">
                            <p className="xl:text-[36px] 4xl:text-[50px] text-[26px] max-[340px]:text-[22px] leading-tight text-[#038EF4] italic w-fit bg-[#ffffff] px-[14px] top-[-20px] 4xl:top-[-30px] absolute">{t('diduKnowTitle')}</p>
                            <p className="xl:text-[22px] 4xl:text-[28px] text-[18px] leading-tight w-[90%] sm:w-full">
                                {t('diduknowSubTitle1')}    <span className="xl:text-[28px] 4xl:text-[35px] text-[22px] text-[#038EF4] font-bold">{t('diduknowSubTitle2')} </span>
                            </p>
                        </div>
                        <div className="pt-[30px] pb-[23px] pl-[26px] pr-[22px] xl:pt-[31px] xl:pb-[30px] xl:pl-[49px] xl:pr-[44px] border-t border-[#707070]">
                            <p className="xl:text-[22px] 4xl:text-[28px] text-[18px] leading-tight">
                                <span className="xl:text-[28px] 4xl:text-[35px] text-[22px] text-[#038EF4] font-bold">{t('diduknowSubTitle3')}  </span>{t('diduknowSubTitle4')}
                            </p>
                        </div>
                    </div>
                    <div className="md:col-span-5 col-span-12">
                        <div className="pt-[29px] pb-[25px] pl-[26px] pr-[26px] xl:pt-[57px] xl:pb-[68px] xl:pl-[57px] xl:pr-[57px] max-md:border-t max-md:border-[#707070]">
                            <p className="xl:text-[22px] 4xl:text-[28px] text-[18px] leading-tight w-[90%] sm:w-full">
                                <span className="xl:text-[28px] 4xl:text-[35px] text-[22px] text-[#038EF4] font-bold">{t('diduknowSubTitle5')} </span> - {t('diduknowSubTitle6')}
                            </p>
                        </div>
                    </div>
                </div>
                <p className="xl:text-[19px] 4xl:text-[22px] text-[16px] leading-tight mt-[31px] xl:mt-[54px]">
                    {t('diduknowDesc')}
                </p>
            </section>
            {/* why rialtes */}
            <section className={`custom-container relative ${(frActive || esActive) ? "max-[450px]:h-[1280px] max-[409px]:h-[1450px] max-[375px]:h-[1600px] max-[345px]:h-[1600px] h-[1250px] sm:h-[1200px] md:h-[1050px] lg:h-[880px] xl:h-[1180px] 2xl:h-[1250px] 3xl:h-[1150px] 4xl:h-[1300px] " : " max-[450px]:h-[1180px] max-[409px]:h-[1250px] max-[375px]:h-[1350] max-[345px]:h-[1390] h-[1150px] sm:h-[1100px] md:h-[890px] lg:h-[780px] xl:h-[1050px] 2xl:h-[1100px] 3xl:h-[950px] 4xl:h-[1100px]"}  max-md:px-0 lg:pr-0 xl:mt-[100px] mt-[54px] text-white`}>
                <div className="relative max-md:px-[36px] md:pl-[61px] lg:pt-[76px] pt-[38px] h-full">
                    <div className="absolute inset-0 -z-10">
                        {/* Desktop Image */}
                        <div className="hidden md:block w-full h-full">
                            <Image
                                src="/images/industry/life-science/why-rialtes-desk.webp"
                                alt="why-rialtes-desk-Image"
                                fill
                                style={{ objectFit: "cover" }}
                                priority
                            />
                        </div>
                        {/* Mobile Image */}
                        <div className="block md:hidden w-full h-full">
                            <Image
                                src="/images/industry/life-science/Mobile/why-rialtes-mob.webp"
                                alt="why-rialtes-mob-Image"
                                fill
                                style={{ objectFit: "cover" }}
                                priority
                            />
                        </div>
                    </div>

                    <h2 className="2xl:text-[50px] xl:text-[38px] text-[24px] leading-tight font-light sm:w-[85%] md:w-[50%] lg:w-[40%] xl:w-[48%] 2xl:w-[56%] 4xl:w-[47%]">
                        {t('whyRialtesTitle')}
                    </h2>

                    <p className="xl:text-[30px] 4xl:text-[42px] text-[18px] leading-tight mt-[16px] xl:mt-[28px]">
                        {t('whyRialtesSubTitle')}   <br />{t('whyRialtesSubTitle2')}
                    </p>

                    <div className="absolute bottom-[-80px] md:bottom-[-80px] max-sm:mr-[36px]">
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-[20px] gap-y-[23px] xl:mt-[85px] mt-[68px] w-[100%] sm:w-[70%] md:w-[80%] lg:w-[80%] xl:w-[90%] 2xl:w-[80%] 3xl:w-[80%] 4xl:w-[80%]">
                            {whyRialtesData.map((data, ind) => (
                                <div key={ind} className="bg-white pt-[40px] pb-[31px] pl-[32px] pr-[22px] xl:pt-[51px] xl:pb-[47px] xl:px-[36px] border border-[#707070]">
                                    <p className="xl:text-[26px] 4xl:text-[30px] text-[22px] leading-tight text-[#038EF4]">
                                        {data.title}
                                    </p>
                                    <p className="xl:text-[20px] 4xl:text-[24px] text-[16px] leading-tight xl:mt-[28px] mt-[16px] text-black">
                                        {data.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {/* thought leadership */}
            <section className="lg:pl-0 lg:mt-[226px] md:mt-[156px] mt-[184px]">
                <div className="bg-[#2C5F74] text-[#ffffff] xl:pt-[83px] xl:pb-[86px] pt-[59px] pb-[77px] relative z-0">
                    <div className="custom-container lg:pr-0">
                        <div className="grid lg:grid-cols-12 grid-cols-1 lg:gap-[60px] gap-y-[31px]">
                            <div className="lg:col-span-5 col-span-12">
                                <h2 className="4xl:text-[60px] xl:text-[40px] text-[26px] leading-tight font-light w-[80%] md:w-full lg:w-[70%] xl:w-full">
                                    {t('thoughtLeadershipTitle')}
                                </h2>
                                <h3 className="xl:text-[30px] 4xl:text-[42px] text-[18px] leading-tight font-semibold xl:mt-[35px] mt-[16px] w-[68%] md:w-full lg:w-[76%] xl:w-full">
                                    {t('thoughtLeadershipSubTitle')}
                                </h3>
                                <div className="relative z-30 lg:hidden block mt-[31px]">
                                    {/* Mobile Image */}
                                    <Image
                                        src="/images/industry/life-science/Mobile/thought-leadership-mob.webp"
                                        alt="thought leadership Mobile"
                                        className="object-cover h-full md:h-[400px] w-full md:w-[80%]"
                                        priority
                                        width={0}
                                        height={0}
                                    />
                                </div>
                                <UnorderedList arrName={thoughLeadershipData} ulClassName="list-disc xl:mt-[35px] mt-[31px] ml-[20px] space-y-[19px] xl:space-y-[24px] 4xl:w-[80%]  lg:w-[90%] xl:w-full" liClassName="xl:text-[19px] 4xl:text-[20px] text-[16px] leading-tight" />
                            </div>
                            <div className="lg:col-span-7 col-span-12">
                                <div className="w-full h-full relative z-30 lg:block hidden">
                                    {/* Desktop Image */}
                                    <Image
                                        src="/images/industry/life-science/thought-leadership-desk.webp"
                                        alt="thought leadership Desktop"
                                        className="w-full h-full object-cover"
                                        priority
                                        width={0}
                                        height={0}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="absolute bottom-[-20px]">
                            <LearnMore btnName={t('learnMoreBtn')} />
                        </div>
                    </div>
                    {/* white extension for right side */}
                    <div className="absolute top-0 bottom-0 right-0 4xl:w-[280px] xl:w-[120px] lg:w-[80px] bg-[#ffffff] z-20"></div>
                </div>
            </section>
            {/* prebuilt section */}
            <section className="xl:mt-[94px] mt-[109px]">
                <div className="custom-container 4xl:!px-[142px] xl:!px-[52px] lg:!px-[32px] max-lg:px-0">
                    <div>
                        <Image
                            src="/images/industry/life-science/Mobile/pre-build-mob.webp"
                            alt="prebuilt Mobile"
                            className="w-full h-full object-cover md:hidden"
                            priority
                            width={0}
                            height={0}
                        />
                        {/* Desktop Image */}
                        <Image
                            src="/images/industry/life-science/pre-build-desk.webp"
                            alt="prebuilt Desktop"
                            className="w-full h-[800px] object-cover hidden md:block"
                            priority
                            width={0}
                            height={0}
                        />
                    </div>
                </div>
                <div className="custom-container mt-[-120px] sm:mt-[-210px] relative z-20">
                    <div className={`bg-[#006FBE] text-[#ffffff] lg:pt-[83px] 4xl:px-[86px] md:px-[66px] md:pb-[128px] pt-[31px] px-[42px] ${(frActive || esActive) ? " max-[430px]:pb-[240px] pb-[180px] sm:pb-[140px]" : " max-[430px]:pb-[160px] pb-[110px]"} max-[430px]:px-[30px] relative `}>
                        <div className="grid md:grid-cols-2 grid-cols-1 xl:gap-[60px] gap-y-[19px]">
                            <div>
                                <h2 className="4xl:text-[60px] xl:text-[40px] text-[26px] leading-tight font-light md:w-[80%] xl:w-full">
                                    {t('prebuiltTitle')}
                                </h2>
                                <div className="xl:mt-[77px] mt-[29px] md:block hidden">
                                    <LearnMore btnName={t('learnMoreBtn')} />
                                </div>
                            </div>
                            <div>
                                <h3 className="xl:text-[30px] 4xl:text-[42px] text-[18px] leading-tight font-semibold">
                                    {t('prebuiltSubTitle')}
                                </h3>
                                <UnorderedList arrName={prebuiltData} ulClassName="list-disc xl:mt-[37px] mt-[19px] ml-[20px] space-y-[19px] xl:space-y-[24px]" liClassName="xl:text-[19px] 4xl:text-[20px] text-[16px] leading-tight" />
                                <div className="xl:mt-[77px] mt-[29px] md:hidden block">
                                    <LearnMore btnName={t('learnMoreBtn')} />
                                </div>
                            </div>
                        </div>
                        <div className={`absolute bottom-[-50px] right-0 bg-[#163055] xl:py-[38px] xl:px-[48px] pt-[27px] px-[42px] pb-[32px] ${(frActive || esActive) ? "md:w-[94%]" : "md:w-[94%]"}`}>
                            <p className="xl:text-[22px] 4xl:text-[26px] text-[18px] leading-tight">
                                {t('prebuiltBlueBox')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* common section */}
            <section className="custom-container xl:mt-[81px] mt-[109px]">
                {
                    commonSectionData.map((data, ind) => {
                        return (
                            ind % 2 == 0 ?
                                <div className="grid md:grid-cols-12 grid-cols-1 md:gap-[40px] lg:gap-[0px] xl:gap-0 xl:mt-[137px] mt-[180px] border border-[#707070] relative" key={ind}>
                                    <div className="md:col-span-6 lg:col-span-5 xl:col-span-6 col-span-12 xl:pt-[79px] xl:px-[58px] xl:pb-[115px] md:pb-[110px] pt-[35px] px-[26px] pb-[35px] md:order-1 order-2">
                                        <h2 className={`4xl:text-[54px] xl:text-[40px] text-[26px] leading-tight font-light`}>
                                            {data.title}
                                        </h2>
                                        <h3 className={`xl:text-[30px] 4xl:text-[42px] text-[18px] leading-tight font-semibold xl:mt-[11px] mt-[19px] ${ind == 4 || ind == 6 ? "xl:w-full" : " xl:w-[86%] "}`}>
                                            {data.subtitle}
                                        </h3>
                                        <UnorderedList arrName={data.dataList} ulClassName={`list-disc xl:mt-[32px] mt-[19px] ml-[20px] space-y-[19px] xl:space-y-[24px] w-[90%] sm:w-full 4xl:w-[86%]`} liClassName="xl:text-[19px] 4xl:text-[20px] text-[16px] leading-tight" />
                                        <div className={`mt-[22px] xl:mt-[59px] ${(frActive || esActive) && ind === 0 ? "xl:mb-[40px]" : ""}`}>
                                            <LearnMore btnName={t('learnMoreBtn')} />
                                        </div>
                                        <div className={`absolute z-20 max-md:w-full max-md:left-0 max-md:top-[100%] md:bottom-[-50px] text-[#ffffff] bg-[#163055] xl:py-[38px] xl:px-[48px] pt-[27px] px-[22px] pb-[32px] max-[320px]:pb-[15px] ${(frActive || esActive) && ind === 0 ? "md:w-[90%]" : "md:w-[90%] lg:w-auto"}`}>
                                            <p className="xl:text-[22px] 4xl:text-[26px] text-[18px] leading-tight sm:w-full font-normal">
                                                {data.blueCard}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="md:col-span-6 lg:col-span-7 xl:col-span-6 col-span-12 md:order-2 order-1">
                                        <div className="w-full h-full md:block hidden">
                                            <Image
                                                src={data.deskImg}
                                                alt="common section Desktop"
                                                className="w-full h-full object-cover lg:h-[560px] xl:h-full"
                                                priority
                                                width={0}
                                                height={0}
                                            />
                                        </div>
                                        <div className="md:hidden block">
                                            {/* Mobile Image */}
                                            <Image
                                                src={data.mobImg}
                                                alt="common section Mobile"
                                                className="object-cover h-full w-full"
                                                priority
                                                width={0}
                                                height={0}
                                            />
                                        </div>
                                    </div>
                                </div>
                                :
                                <div className="grid md:grid-cols-12 grid-cols-1 md:gap-[40px] lg:gap-[0px] xl:mt-[137px] mt-[180px] border border-[#707070] relative" key={ind}>
                                    <div className="md:col-span-6 lg:col-span-7 xl:col-span-6 col-span-12">
                                        <div className="w-full h-full md:block hidden">
                                            {/* Desktop Image */}
                                            <Image
                                                src={data.deskImg}
                                                alt="common section Desktop"
                                                className="w-full h-full object-cover lg:h-[560px] xl:h-full"
                                                priority
                                                width={0}
                                                height={0}
                                            />
                                        </div>

                                        <div className="md:hidden block">
                                            {/* Mobile Image */}
                                            <Image
                                                src={data.mobImg}
                                                alt="common section Mobile"
                                                className="object-cover h-full w-full"
                                                priority
                                                width={0}
                                                height={0}
                                            />
                                        </div>
                                        <div className="absolute max-md:top-[100%] max-md:w-full md:bottom-[-50px] md:left-[26px] lg:left-[58px] text-[#ffffff] bg-[#163055] xl:py-[38px] xl:px-[48px] pt-[27px] px-[22px] pb-[32px] md:w-[90%] xl:w-auto">
                                            <p className="xl:text-[22px] 4xl:text-[26px] text-[18px] leading-tight w-[90%] sm:w-full font-normal">
                                                {data.blueCard}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="md:col-span-6 lg:col-span-5 xl:col-span-6 col-span-12 xl:pt-[79px] xl:px-[58px] md:pb-[115px] pt-[35px] px-[26px] pb-[35px]">
                                        <h2 className={`4xl:text-[54px] xl:text-[40px] text-[26px] leading-tight font-light`}>
                                            {data.title}
                                        </h2>
                                        <h3 className={`xl:text-[30px] 4xl:text-[42px] text-[18px] leading-tight font-semibold xl:mt-[11px] mt-[19px] w-[88%] sm:w-full ${ind == 5 && "4xl:text-[39px]"}`}>
                                            {data.subtitle}
                                        </h3>
                                        <UnorderedList arrName={data.dataList} ulClassName={`list-disc xl:mt-[32px] mt-[19px] ml-[20px] space-y-[19px] xl:space-y-[24px] w-[90%] sm:w-full 4xl:w-[86%]`} liClassName="xl:text-[19px] 4xl:text-[20px] text-[16px] leading-tight" />
                                        <div className="mt-[22px] xl:mt-[59px]">
                                            <LearnMore btnName={t('learnMoreBtn')} />
                                        </div>
                                    </div>
                                </div>
                        )
                    })
                }
            </section>
            {/* seamless section */}
            <section className="bg-[#EAEAEA] relative z-0 xl:pt-[145px] lg:pt-[115px] lg:pb-[42px] md:pb-[120px] xl:pb-[52px] pt-[56px] pb-[172px] 4xl:pr-[162px] lg:pr-[62px] max-lg:px-[36px] max-lg:mt-[100px] max-[450px]:mt-[130px] ">
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-y-[35px] lg:gap-[40px] xl:gap-[60px] 4xl:gap-[80px]">
                    <div>
                        <div className="w-full h-full lg:block hidden">
                            {/* Desktop Image */}
                            <Image
                                src="/images/industry/life-science/seamless-desk.webp"
                                alt="seamless section Desktop"
                                className="w-full h-full object-cover"
                                priority
                                width={0}
                                height={0}
                            />
                        </div>
                        <div className="lg:hidden block">
                            {/* Mobile Image */}
                            <Image
                                src="/images/industry/life-science/Mobile/seamless-mob.webp"
                                alt="seamless section Mobile"
                                className="object-cover h-full w-full md:h-[600px]"
                                priority
                                width={0}
                                height={0}
                            />
                        </div>
                        {/* blue card */}
                        <div className="custom-container max-lg:px-0">
                            <div className="absolute bottom-0 max-lg:mr-[36px] text-[#ffffff] bg-[#163055] xl:py-[38px] xl:px-[48px] pt-[27px] px-[22px] pb-[32px]">
                                <p className="xl:text-[22px] 4xl:text-[26px] text-[18px] leading-tight font-normal w-[90%] sm:w-full">
                                    {t('seamlessTitleBlueBox')}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <h2 className={`4xl:text-[54px] xl:text-[40px] text-[26px] leading-tight font-light 4xl:w-[90%] w-[90%] sm:w-full`}>
                            {t('seamlessTitle')}
                        </h2>
                        <h3 className={`xl:text-[30px] 4xl:text-[42px] text-[18px] leading-tight font-semibold xl:mt-[46px] mt-[29px]`}>
                            {t('seamlessSubTitle')}
                        </h3>
                        <UnorderedList arrName={seamlessData} ulClassName="list-disc xl:mt-[46px] mt-[28px] ml-[20px] space-y-[19px] xl:space-y-[24px] w-[90%] sm:w-full 4xl:w-[86%]" liClassName="xl:text-[19px] 4xl:text-[20px] text-[16px] leading-tight" />
                        <div className="mt-[41px] xl:mt-[55px] xl:mb-[167px] lg:mb-[97px]">
                            <LearnMore btnName={t('learnMoreBtn')} />
                        </div>
                    </div>
                </div>
            </section>
            {/* common section 2 */}
            <section className="custom-container">
                {
                    commonSectionData1.map((data, ind) => {
                        return (
                            ind % 2 == 0 ?
                                <div className="grid md:grid-cols-12 grid-cols-1 md:gap-[40px] lg:gap-[0px] xl:gap-0 xl:mt-[137px] first:mt-[80px] mt-[180px] border border-[#707070] relative" key={ind}>
                                    <div className="md:col-span-6 lg:col-span-5 xl:col-span-6 col-span-12 xl:pt-[79px] xl:px-[58px] md:pb-[115px] pt-[35px] px-[26px] pb-[35px] md:order-1 order-2">
                                        <h2 className={`4xl:text-[54px] xl:text-[40px] text-[26px] leading-tight font-light`}>
                                            {data.title}
                                        </h2>
                                        <h3 className={`xl:text-[30px] 4xl:text-[42px] text-[18px] leading-tight font-semibold xl:mt-[39px] mt-[19px]`}>
                                            {data.subtitle}
                                        </h3>
                                        <UnorderedList arrName={data.dataList} ulClassName="list-disc xl:mt-[32px] mt-[28px] ml-[20px] space-y-[19px] xl:space-y-[24px] w-[90%] sm:w-full 4xl:w-[86%]" liClassName="xl:text-[19px] 4xl:text-[20px] text-[16px] leading-tight" />
                                        <div className="mt-[22px] xl:mt-[59px]">
                                            <LearnMore btnName={t('learnMoreBtn')} />
                                        </div>
                                        <div className="absolute max-md:left-0 max-md:top-[100%] md:bottom-[-50px] text-[#ffffff] bg-[#163055] xl:py-[38px] xl:px-[48px] pt-[27px] px-[22px] pb-[32px]">
                                            <p className="xl:text-[22px] 4xl:text-[26px] text-[18px] leading-tight w-[90%] sm:w-full font-normal">
                                                {data.blueCard}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="md:col-span-6 lg:col-span-7 xl:col-span-6 col-span-12 md:order-2 order-1">
                                        <div className="w-full h-full md:block hidden">
                                            {/* Desktop Image */}
                                            <Image
                                                src={data.deskImg}
                                                alt="Why Rialtes Desktop"
                                                className="w-full h-full object-cover lg:h-[560px] xl:h-full md:object-[85%_25%] xl:object-[35%_25%]"
                                                priority
                                                width={0}
                                                height={0}
                                            />
                                        </div>
                                        <div className="md:hidden block">
                                            {/* Mobile Image */}
                                            <Image
                                                src={data.mobImg}
                                                alt="Why Rialtes Mobile"
                                                className="object-cover h-full w-full"
                                                priority
                                                width={0}
                                                height={0}
                                            />
                                        </div>
                                    </div>
                                </div>
                                :
                                <div className="grid md:grid-cols-12 grid-cols-1 md:gap-[40px] lg:gap-[0px] xl:mt-[137px] mt-[180px] border border-[#707070] relative" key={ind}>
                                    <div className="md:col-span-6 lg:col-span-7 xl:col-span-6 col-span-12">
                                        <div className="w-full h-full md:block hidden">
                                            {/* Desktop Image */}
                                            <Image
                                                src={data.deskImg}
                                                alt="Why Rialtes Desktop"
                                                className="w-full h-full object-cover lg:h-[560px] xl:h-full"
                                                priority
                                                width={0}
                                                height={0}
                                            />
                                        </div>
                                        <div className="md:hidden block">
                                            {/* Mobile Image */}
                                            <Image
                                                src={data.mobImg}
                                                alt="Why Rialtes Mobile"
                                                className="object-cover h-full w-full"
                                                priority
                                                width={0}
                                                height={0}
                                            />
                                        </div>
                                        <div className="absolute max-md:top-[100%] md:bottom-[-50px] lg:left-[58px] md:left-[26px] text-[#ffffff] bg-[#163055] xl:py-[38px] xl:px-[48px] pt-[27px] px-[22px] pb-[32px]">
                                            <p className="xl:text-[22px] 4xl:text-[26px] text-[18px] leading-tight w-[90%] sm:w-full font-normal">
                                                {data.blueCard}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="md:col-span-6 lg:col-span-5 xl:col-span-6 col-span-12 xl:pt-[79px] xl:px-[58px] md:pb-[115px] pt-[35px] px-[26px] pb-[35px]">
                                        <h2 className={`4xl:text-[54px] xl:text-[40px] text-[26px] leading-tight font-light`}>
                                            {data.title}
                                        </h2>
                                        <h3 className={`xl:text-[30px] 4xl:text-[40px] text-[18px] leading-tight font-semibold xl:mt-[39px] mt-[18px] w-[88%] sm:w-full 4xl:w-[98%]`}>
                                            {data.subtitle}
                                        </h3>
                                        <UnorderedList arrName={data.dataList} ulClassName="list-disc xl:mt-[32px] mt-[19px] ml-[20px] space-y-[19px] xl:space-y-[24px] w-[90%] sm:w-full 4xl:w-[82%]" liClassName="xl:text-[19px] 4xl:text-[20px] text-[16px] leading-tight" />
                                        <div className="mt-[22px] xl:mt-[59px]">
                                            <LearnMore btnName={t('learnMoreBtn')} />
                                        </div>
                                    </div>
                                </div>
                        )
                    })
                }
            </section>
            {/* Contact Form */}
            < div className="custom-container xl:mt-[167px] xl:mb-[104px] mt-[164px] mb-[45px]">
                <ContactForm title={t('contactTitle')} subtitle={t('contactSubTitle')} subtitle1={t('contactSubTitle2')} className="sm:w-[66%] 2xl:w-[60%] 4xl:w-[80%] 4xl:text-[60px] xl:text-[40px] text-[26px]" />
            </div >
        </section >
    )
}