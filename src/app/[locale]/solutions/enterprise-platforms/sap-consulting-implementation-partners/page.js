"use client";
import Image from "next/image";
import ContactForm from "../../../components/contactform";
import FeaturedCarousel from '../../../components/servicesFeaturedCarousel';
import CarouselComponent from "../../../components/useCarousel";
import Link from "next/link";
import Seo from "@/app/[locale]/components/Seo";
import UnorderedList from "@/app/[locale]/components/unorderedList";
import Script from "next/script";
import { useLocale, useTranslations } from "next-intl";
import enContent from '../../../../../../messages/en/solutions.json';
import esContent from '../../../../../../messages/es/solutions.json';
import frContent from '../../../../../../messages/fr/solutions.json';
import LearnMore from "@/app/[locale]/components/learnMore";
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";
import BreadCrumbs from '@/app/[locale]/components/BreadCrumbs'
import BreadcrumbSchema from "@/app/[locale]/components/BreadcrumbSchema";


export default function Page() {
    const t = useTranslations('sapConsulting')
    const locale = useLocale();
    const content = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
    const { solutionSuccess, schemaData } = content.sapConsulting;
    return (
        <div className="min-h-screen bg-white">
            <Seo
                title={t('seoTitle')}
                description={t('seoDescription')}
                keywords="home, website, welcome"
                canonical={`https://www.rialtes.com/${locale}/solutions/enterprise-platforms/sap-consulting-implementation-partners/`}
            />
            <Script
                id="schema-sap-consulting"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            {/* breadcrumbs schema */}
            <BreadcrumbSchema />
            {/* hero section */}
            <section className="relative group overflow-hidden h-[350px] md:h-[500px]  4xl:h-[650px] ">
                {/* Desktop Image */}
                <div className="hidden md:block">
                    <Image
                        src="/images/sap-consulting/sap-consulting-banner-desktop.webp"
                        alt={t('sapConsultingBannerAlt')}
                        fill
                        style={{ objectFit: "cover", objectPosition: "35% 20%" }}
                        priority
                        className="transform transition-transform duration-500 group-hover:scale-110"
                    />
                </div>
                {/* Mobile Image */}
                <div className="block md:hidden">
                    <Image
                        src="/images/sap-consulting/sap-consulting-logo-mobile.webp"
                        alt={t('sapConsultingBannerAlt')}
                        className="object-cover"
                        fill
                        priority
                    />
                </div>
                <div className="relative h-full custom-container max-[372px]:px-0 grid grid-cols-12 sm:items-center">
                    <div className="md:col-span-3 sm:col-span-1 col-span">
                    </div>
                    <div className="md:col-span-9 sm:col-span-11 col-span-12">
                        <div className="md:pl-[12rem] max-[372px]:pl-[85px] pl-[80px] max-[372px]:pr-[15px]  sm:pl-[200px] ">
                            <h3 className="text-[18px] md:text-[24px] font-bold  text-black leading-tight">{t('headerTitle')}</h3>
                            <h2 className="text-black leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px] md:w-full mt-[11.5px] md:mt-[28.5px] ">
                                {t('headerSubTitle1')}  <span className="block">{t('headerSubTitle2')} </span>
                            </h2>
                            <h3 className="text-[18px] xl:text-[24px] 4xl:text-[30px] text-black font-bold mt-[16px] xl:mt-[29.5px] w-[100%] xl:w-[75%] 2xl:w-[65%] 4xl:w-[70%] leading-tight">
                                {t('headerSubTitle3')}
                            </h3>
                            <Image
                                src="/images/sap-consulting/sap-partner-logo.webp"
                                alt={t('sapPartnerLogoAlt')}
                                width={0}
                                height={0}
                                priority
                                className="mt-5 w-[25%] sm:w-[16%] md:w-[14%] lg:w-[16%]"
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* breadcrumb */}
            <div className="custom-container">
                <BreadCrumbs />
            </div>
            {/* leverage sap section */}
            <section className="w-full custom-container xl:mt-[124px] mt-[53px] xl:mb-[0px] mb-[52px]">
                <div className="grid md:grid-cols-2 xl:gap-[40px] gap-[39px]">
                    <div>
                        <h1 className="leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px]  xl:w-[100%] w-[90%]">{t('pageDescTitle')}</h1>
                    </div>
                    <div className="w-full">
                        <p className="text-[16px] xl:text-[18px] 4xl:text-[20px]  font-normal leading-tight  xl:w-[90%] w-[96%]">{t('pageDesc')}</p>
                    </div>
                </div>
            </section>
            {/* our solutions to success section */}
            <section className="2xl:mt-[164px] xl:mt-[90px] mt-[64px] custom-container">
                <h2 className="leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px] font-Light">{t('ourSolutionTitle')}</h2>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-[44px]">
                    {solutionSuccess.map((product) => {
                        return (
                            <div key={product.id} className="border-2">
                                <div className="relative group overflow-hidden m-3">
                                    <Image
                                        src={product.imageUrl}
                                        alt={product.imageAlt}
                                        className="transform w-full h-full transition-transform duration-500 group-hover:scale-110"
                                        height={0} width={0}
                                        priority />
                                </div>
                                <div className="p-8">
                                    <h3 className=" xl:text-[22px] 4xl:text-[30px] font-bold text-[#1F3F69] leading-tight">{product.title}</h3>
                                    <p className="mt-5 text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight">{product.description}</p>
                                    <UnorderedList arrName={product?.productsDetails} ulClassName="mt-5 text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight" liClassName="font-medium flex mt-3 items-start before:content-['•'] before:text-[#0092E0] before:text-4xl before:font-bold before:mr-2 before:leading-[0.5]" />
                                    <h5 className="text-[#0092E0] mt-10 font-bold cursor-pointer xl:text-[20px] text-[16px]">
                                        <Link href={product?.knowMore}>{t('KnowMore')}</Link>
                                    </h5>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
            {/* sap industry section */}
            <section className="mt-[84px]">
                <div className="custom-container md:!pr-0">
                    <h2 className="text-black leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px] md:w-[60%] xl:w-[80%]">{t('sapInustryTitle')}</h2>
                    <div className="mt-[51px]">
                    </div>
                    <CarouselComponent />
                </div>
            </section>
            {/* get inspired section */}
            <section className="bg-[#F5F5F5] lg:mt-32 mt-10 pb-20 pt-20">
                <div className="custom-container md:!pr-0">
                    <FeaturedCarousel />
                </div>
            </section>
            {/*life science section */}
            <section className='mt-[113px] relative'>
                <div className='group overflow-hidden'>
                    <div>
                        <Image
                            quality={100}
                            layout="responsive"
                            alt={t('riseWithSapNavigationAlt')}
                            loading="lazy"
                            width='100'
                            height='100'
                            className='w-full 3xl:!h-[500px] 2xl:!h-[500px] xl:!h-[500px] lg:!h-[380px] md:!h-[384px] sm:!h-[360px] !h-[480px] object-cover transition-transform duration-500 transform group-hover:scale-110 object-[35%_80%]'
                            src='/images/services/rise-with-sap/rise-with-sap-page-navigation.webp' />
                    </div>
                </div>
                <div className="custom-container">
                    <div className='bg-[#1f5e91] absolute text-white w-[90%] max-w-[500px] pt-[52px] pb-[22px] px-[32px] top-[-10%] md:right-[40px] lg:right-[40px] xl:right-[40px] 2xl:right-[200px] left-1/2 md:left-auto -translate-x-1/2 md:translate-x-0'>
                        <h2 className="leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px] font-light">{t('riseWithSapTitle')}</h2>
                        <p className='text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight font-medium t mt-[23px]'>
                            {t('riseWithSapDesc')}
                        </p>
                        <LearnMore href="/services/business-transformation/rise-with-sap-services" arialabel="rise with sap btn" btnName={t('learnMore')} />
                    </div>
                </div>
            </section>
            {/* Contact Form */}
            <div className="pb-20 custom-container text-black xl:mt-[125px] mt-[80px]">
                <ContactForm title={t('contactTitle')} className="leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px] xl:w-[60%] 4xl:w-[80%]" />
            </div>
        </div>
    );
}