import Image from "next/image";
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import { changeLocalization } from "../../components/changeLocalization";
import { useLocale, useTranslations } from "next-intl";
import enContent from '../../../../../messages/en/aboutus.json';
import esContent from '../../../../../messages/es/aboutus.json'
import frContent from '../../../../../messages/fr/aboutus.json'
import BreadCrumbs from '@/app/[locale]/components/BreadCrumbs'
import BreadcrumbSchema from "../../components/BreadcrumbSchema";

export default function Contact() {
    const t = useTranslations('globalAlliance')
    const locale = useLocale();
    const globalAllianceContent = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
    const { approachData, schemaData } = globalAllianceContent.globalAlliance;


    const keyPartners = [
        { src: "/images/partners/salesforce-logo.webp", alt: "salesforce logo" },
        { src: "/images/partners/SAP-logo.webp", alt: "SAP logo" },
        { src: "/images/partners/Adobe-Sign-logo.webp", alt: "Adobe Sign logo" },
        { src: "/images/partners/amazon-logo.webp", alt: "amazon logo" },
        { src: "/images/partners/Automation-Anywhere-logo.png", alt: "Automation Anywherelogo" },
        { src: "/images/partners/Azure-Deveops-logo.png", alt: "Azure Deveops logo" },
        { src: "/images/partners/Azure-logo.webp", alt: "Azure logo" },
        { src: "/images/partners/congo-logo.png", alt: "congo logo" },
        { src: "/images/partners/CallidusCloud-logo.png", alt: "CallidusCloud logo" },
        { src: "/images/partners/Bitbucket-logo.png", alt: "Bitbucket logo" },
    ];
    const regionalPartners = [
        { src: "/images/partners/GitHub-logo.webp", alt: "GitHub logo" },
        { src: "/images/partners/Qlik-logo.webp", alt: "Qlik-logo" },
        { src: "/images/partners/rapidminer-logo.png", alt: "rapidminer logo" },
        { src: "/images/partners/workato-logo.webp", alt: "workato-logo" },
        { src: "/images/partners/Confluence-logo.webp", alt: "Confluence logo" },
        { src: "/images/partners/boomi-logo.png", alt: "boomi logo" },
        { src: "/images/partners/COPADO-logo.webp", alt: "COPADO logo" },
        { src: "/images/partners/docusign-logo.png", alt: "docusign logo" },
        { src: "/images/partners/Informatica-logo.png", alt: "Informatica logo" },
        { src: "/images/partners/SAP-SuccessFactors-logo.png", alt: "SAP SuccessFactors logo" },
    ];
    const allPartnerships = [
        { src: "/images/partners/GitHub-logo.webp", alt: "GitHub logo" },
        { src: "/images/partners/Qlik-logo.webp", alt: "Qlik-logo" },
        { src: "/images/partners/rapidminer-logo.png", alt: "rapidminer logo" },
        { src: "/images/partners/workato-logo.webp", alt: "workato-logo" },
        { src: "/images/partners/Confluence-logo.webp", alt: "Confluence logo" },
        { src: "/images/partners/boomi-logo.png", alt: "boomi logo" },
        { src: "/images/partners/COPADO-logo.webp", alt: "COPADO logo" },
        { src: "/images/partners/docusign-logo.png", alt: "docusign logo" },
        { src: "/images/partners/Informatica-logo.png", alt: "Informatica logo" },
        { src: "/images/partners/SAP-SuccessFactors-logo.png", alt: "SAP SuccessFactors logo" },
        { src: "/images/partners/Ms-Dynamics-365-logo.png", alt: "Microsoft Dynamics 365 logo" },
        { src: "/images/partners/Power-BI-logo.webp", alt: "Power BI logo" },
        { src: "/images/partners/MuleSoft-logo.webp", alt: "MuleSoft logo" },
        { src: "/images/partners/salesforce-pardot.png", alt: "salesforce pardot" },
        { src: "/images/partners/CallidusCloud-logo.png", alt: "CallidusCloud logo" },
        { src: "/images/partners/SAP-Ariba-logo.png", alt: "SAP Ariba logo" },
        { src: "/images/partners/smartsheet-logo.png", alt: "smartsheet logo" },
        { src: "/images/partners/tableau-logo.png", alt: "tableau logo" },
        { src: "/images/partners/Ui-Path-logo.webp", alt: "Ui Path logo" },
        { src: "/images/partners/Windows-logo.webp", alt: "Windows logo" },
        { src: "/images/partners/Vistex-logo.webp", alt: "Vistex logo" },
    ];
    const renderImageSection = (images) => (
        <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 border-0 gap-10">
            {images.map((data, index) => (
                <Image
                    key={index}
                    src={data.src}
                    alt={data.alt}
                    className="h-full"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                    priority
                />
            ))}
        </div>
    );
    const OurApproachSection = () => (
        <section>
            <div className="bg-[#EDEDED] lg:py-16 py-10">
                <h2 className="custom-container text-[26px] md:text-[30px] xl:text-[40px] 4xl:text-[60px] leading-tight"> {t('approachTitle')}</h2>
                <div className="grid justify-center xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-2 custom-container mt-12 lg:gap-[12%] gap-5">
                    {approachData.map((data, index) => (
                        <div key={index}>
                            <Image
                                src={data.src}
                                alt={data.alt}
                                width={0}
                                height={0}
                                className="mb-5 h-20 w-20"
                                sizes="100vw"
                                style={{
                                    objectFit: "cover",
                                }}
                                priority
                            />
                            {data.texts.map((text, idx) => (
                                <p className="4xl:text-[20px] md:text-[18px] text-[16px] leading-tight" key={idx}>{text}</p>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
    const KeyPartnerships = () => (
        <section className="custom-container mt-16 px-6">
            <h2 className="mb-16 text-[26px] md:text-[30px] xl:text-[40px] 4xl:text-[60px] leading-tight"> {t('keyTitle')}</h2>
            {renderImageSection(keyPartners)}
        </section>
    );
    const RegionalPartnerships = () => (
        <section className="custom-container px-6 mt-[90px] xl:mt-[140px]">
            <h2 className="mb-16 text-[26px] md:text-[30px] xl:text-[40px] 4xl:text-[60px] leading-tight"> {t('regionalTitle')}</h2>
            {renderImageSection(regionalPartners)}
        </section>
    );
    const AllPartnerships = () => (
        <section className="custom-container px-6 mt-[90px] xl:mt-[140px]">
            <h2 className="mb-16 text-[26px] md:text-[30px] xl:text-[40px] 4xl:text-[60px] leading-tight"> {t('allTitle')}</h2>
            {renderImageSection(allPartnerships)}
        </section>
    );
    return (
        <div>
            <Seo
                title={t('seoTitle')}
                description={t('seoDescription')}
                keywords="Partners, website, welcome"
                canonical={`https://www.rialtes.com/${locale}/about-us/global-alliances/`}
            />
            <Script
                id="schema-partners"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            {/* breadcrumbs schema */}
            <BreadcrumbSchema />
            {/** hero section * */}
            <section className="relative group overflow-hidden h-[399px] 4xl:h-[650px] xl:h-[550px]">
                <div className="hidden md:block">
                    <Image
                        src="/images/partners/digital-handshake-partnership-technology.webp"
                        alt={t('bannerAlt')}
                        fill
                        priority
                        className="transform transition-transform duration-500 group-hover:scale-110 "
                        style={{ objectFit: "cover" }}

                    />
                </div>
                {/* Mobile Image */}
                <div className="block md:hidden">
                    <Image
                        src="/images/partners/digital-handshake-partnership-technology-mobile.webp"
                        alt={t('bannerAlt')}
                        fill
                        style={{ objectFit: "cover", objectPosition: "70% 50%" }}

                        priority
                    />
                </div>
                <div className="relative h-full custom-container flex items-center">
                    <div className="grid grid-cols-1 lg:grid-cols-12 w-full">
                        <div className="col-span-12">
                            <h1 className="text-[#FFFFFF] text-[18px] md:text-[24px] font-bold lg:w-full">
                                {t('headerTitle')}
                            </h1>
                            <h2 className="text-white xl:mt-2 mt-1 leading-tight text-[26px] md:text-[30px] xl:text-[40px] 4xl:text-[60px]">
                                {t('headerSubTitle')}
                            </h2>
                        </div>
                        <div className="col-span-12 lg:col-span-3 xl:col-span-5">
                        </div>
                    </div>
                </div>
            </section>
            {/* breadcrumb */}
            <section className="custom-container">
                <BreadCrumbs />
            </section>
            {/* page description */}
            <section className="custom-container">
                <div className="grid lg:grid-cols-12 xl:grid-cols-12 mt-16 mb-16">
                    <div className="lg:col-span-6 xl:col-span-6">
                        <h2 className="xl:w-[60%]  w-full text-[26px] md:text-[30px] xl:text-[40px] 4xl:text-[60px] leading-tight"> {t('ourTitle')}</h2>
                    </div>
                    <div className="lg:col-span-6 xl:col-span-6">
                        <p className="mt-5 xl:w-[75%] w-full 4xl:text-[20px] md:text-[18px] text-[16px] leading-tight"> {t('ourDesc')}</p>
                    </div>
                </div>
            </section>
            <div className="pb-20">
                <OurApproachSection />
                <KeyPartnerships />
                <RegionalPartnerships />
                <AllPartnerships />
            </div>
        </div>
    )
}
