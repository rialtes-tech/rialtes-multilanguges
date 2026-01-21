"use client";
import Image from "next/image";
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import ContactForm from "../../components/contactform";
import { useLocale, useTranslations } from "next-intl";
import { useActiveLocale } from "../../components/activeLanguages";
import enContent from '../../../../../messages/en/aboutus.json';
import esContent from '../../../../../messages/es/aboutus.json'
import frContent from '../../../../../messages/fr/aboutus.json'
import { changeLocalization } from "../../components/changeLocalization";
import BreadCrumbs from '@/app/[locale]/components/BreadCrumbs'

export default function Page() {
  const t = useTranslations('impact')
  const { frActive, esActive } = useActiveLocale();
  const locale = useLocale();
  const content = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
  const { schemaData } = content.impact;

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title={t('seoTitle')}
        description={t('seoDescription')}
        keywords="home, website, welcome"
        canonical={`https://www.rialtes.com/${locale}/about-us/impact-and-social-responsibility/`}
      />
      <Script
        id="schema-impact"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      {/** hero section * */}
      <section className="relative group overflow-hidden h-[350px] md:h-[500px] 4xl:h-[650px]">
        <div className="hidden md:block">
          <Image
            src="/images/social-impact/hand-holding-digital-earth-globe-nature-sustainability.webp"
            alt={t('bannerAlt')}
            fill
            priority
            className="transform transition-transform duration-500 group-hover:scale-110 object-cover"
          />
        </div>
        {/* Mobile Image */}
        <div className="block md:hidden">
          <Image
            src="/images/social-impact/hand-holding-digital-earth-globe-nature-sustainability.webp"
            alt={t('bannerAlt')}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative h-full custom-container flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 w-full">
            <div className="col-span-12 md:mb-[140px]">
              <h1 className="text-[#FFFFFF] text-[18px] md:text-[20px] 4xl:text-[24px] xl:text-[20px] font-bold lg:w-full">
                {t('impactTitle')}
              </h1>
              <h2 className="text-white leading-tight xl:mt-10 4xl:text-[60px] xl:text-[40px] 
              md:text-[30px]  text-[26px] ">
                {t('impactSubtitle')}<br /> {t('impactSubtitleOne')}
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
        <div className="xl:py-[80px] pt-14 pb-10 bg-white ">
          <div className="xl:mb-0">
            <h2 className="text-black md:pb-0 font-bold 4xl:text-[42px] xl:text-[36px] md:text-[26px] text-[22px] leading-tight ">
              {t('rialtesTitle')}
            </h2>
          </div>
        </div>
        <h2 className="pb-6 4xl:text-[60px] xl:text-[40px] md:text-[30px] text-[26px] leading-tight"> {t('rialtesSubtitle')}</h2>
      </section>
      {/* we care we take actions section */}
      <section className="relative h-[500px] xl:h-[550px] overflow-hidden xl:block hidden">
        <Image
          src="/images/social-impact/hands-holding-puzzle-brain-autism-awareness.webp"
          alt={t('innovationAlt')}
          fill
          style={{ objectFit: "cover", objectPosition: "35% 20%" }}
          priority
        />
        <div className="h-full relative ml-[15px] xl:ml-[280px] 2xl:mr-[156px] xl:mr-[70px] md:ml-[100px]">
          <div className="bg-[#016FBE] absolute xl:p-12 p-6 w-[720px] 4xl:h-[510px]  text-white  xl:right-0 top-0">
            <h3 className="font-normal 4xl:text-[36px]  xl:text-[30px]  md:text-[26px] text-[22px]">
              {t('innovationTitle')}
            </h3>
            <p className="mt-5 4xl:text-[22px] xl:text-[18px] md:text-[18px] text-[16px] ">
              {t('innovationDesc')}
            </p>
            <p className="mt-4 4xl:text-[22px] xl:text-[18px] md:text-[18px] text-[16px] ">
              {t('innovationDescOne')}
            </p>
            <p className="mt-4 4xl:text-[22px] xl:text-[18px] md:text-[18px] text-[16px]">
              {t('innovationDescTwo')}
            </p>
          </div>
        </div>
      </section>
      <section className="relative h-[500px] xl:h-[550px] 4xl:h-[650px] overflow-hidden mt-5 xl:mt-0 xl:block hidden">
        <Image
          src="/images/social-impact/scenic-winding-road-lake-green-mountains.webp"
          alt={t('esgAlt')}
          fill
          style={{ objectFit: "cover", objectPosition: "35% 20%" }}
          priority
        />
        <div className="custom-container">
          <div className="relative p-6 w-[720px] 4xl:h-[530px]">
            <div className="absolute inset-0 bg-[#016FBE] mix-blend-multiply"></div>
            <div className="relative bg-opacity-80 text-white z-10 p-4 rounded-lg">
              <h3 className="font-normal 4xl:text-[36px] xl:text-[30px] md:text-[26px] text-[22px]"> {t('effortsTitle')}</h3>
              <p className="mt-5 4xl:text-[22px] xl:text-[18px] md:text-[18px] text-[16px]">
                {t('effortsDesc')}
              </p>
              <p className="mt-4 4xl:text-[22px] xl:text-[18px] md:text-[18px] text-[16px]">
                {t('effortsDescOne')}
              </p>
              <p className="mt-4 4xl:text-[22px] xl:text-[18px] md:text-[18px] text-[16px]">
                {t('effortsDescTwo')}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="relative h-[500px] xl:h-[550px] 4xl:h-[650px] overflow-hidden mt-5 xl:mt-0 xl:block hidden">
        <Image
          src="/images/social-impact/two-developers-collaborating-laptop-coding-project.webp"
          alt={t('aiAlt')}
          fill
          style={{ objectFit: "cover", objectPosition: "35% 20%" }}
          priority
        />
        <div className="h-full relative ml-[15px] xl:ml-[280px] 2xl:mr-[156px] xl:mr-[70px] md:ml-[100px]">
          <div className="flex justify-end">
            <div className={`relative p-6  ${(frActive || esActive) ? "w-[780px] 4xl:h-[520px]" : "w-[720px] h-[484px]"}`}>
              <div className="absolute inset-0 bg-[#016FBE] mix-blend-multiply"></div>
              <div className="relative bg-opacity-80 text-white z-10 p-4 rounded-lg">
                <h3 className="font-normal 4xl:text-[36px] xl:text-[30px] md:text-[26px] text-[22px]">
                  {t('aiTitle')}
                </h3>
                <p className="mt-5 4xl:text-[22px] xl:text-[18px] md:text-[18px] text-[16px]">
                  {t('aiDesc')}
                </p>
                <p className="mt-4 4xl:text-[22px] xl:text-[18px] md:text-[18px] text-[16px]">
                  {t('aiDescOne')}
                </p>
                <p className="mt-4 4xl:text-[22px] xl:text-[20px] md:text-[18px] text-[16px]">
                  {t('aiDescTwo')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* //for mobile section bg image and content */}
      <section className="relative xl:hidden block">
        {/* Image Section */}
        <div className="relative w-full h-[300px]">
          <Image
            src="/images/social-impact/hands-holding-puzzle-brain-autism-awareness-mobile.webp"
            alt={t('innovationAlt')}
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* Content Section */}
        <div
          className="relative p-8 xl:p-12 text-white bg-[#016FBE] pb-16 xl:absolute xl:w-[500px] xl:h-[410px] xl:right-0 xl:top-0">
          <h3 className="font-normal text-[26px] md:text-[30px]">
            {t('innovationTitle')}
          </h3>
          <p className="mt-5 text-[16px] xl:text-[22px] md:text-[18px]">
            {t('innovationDesc')}
          </p>
          <p className="mt-4 text-[16px] xl:text-[22px] md:text-[18px]">
            {t('innovationDescOne')}
          </p>
          <p className="mt-4 text-[16px] xl:text-[22px] md:text-[18px]">
            {t('innovationDescTwo')}
          </p>
        </div>
      </section>
      <section className="relative xl:hidden block">
        <div className="relative w-full h-[300px]">
          <Image
            src="/images/social-impact/scenic-winding-road-lake-green-mountains.webp"
            alt={t('esgAlt')}
            fill
            className="object-cover object-[40%_20%]"
            priority
          />
        </div>
        <div className="relative p-8 pb-16 xl:p-12 text-white bg-[#016FBE]">
          <h3 className="font-normal  text-[26px] md:text-[30px]"> {t('effortsTitle')}</h3>
          <p className="mt-5 text-[16px] xl:text-[22px] md:text-[18px]">
            {t('effortsDesc')}
          </p>
          <p className="mt-4 text-[16px] xl:text-[22px] md:text-[18px]">
            {t('effortsDescOne')}
          </p>
          <p className="mt-4 text-[16px] xl:text-[22px] md:text-[18px]">
            {t('effortsDescTwo')}
          </p>
        </div>
      </section>
      <section className="relative xl:hidden block">
        <div className="relative w-full h-[386px]">
          <Image
            src="/images/social-impact/two-developers-collaborating-laptop-coding-project-mobile.webp"
            alt={t('aiAlt')}
            fill
            className="object-cover object-[18%_20%]"
            priority
          />
        </div>
        <div className="relative p-8 pb-16 xl:p-12 text-white bg-[#016FBE] xl:absolute xl:w-[500px] xl:h-[410px] xl:right-0 xl:top-0">
          <h3 className="font-normal text-[26px] md:text-[30px]"> {t('aiTitle')}</h3>
          <p className="mt-5 text-[16px] xl:text-[22px] md:text-[18px]">
            {t('aiDesc')}
          </p>
          <p className="mt-4 text-[16px] xl:text-[22px] md:text-[18px]">
            {t('aiDescOne')}
          </p>
          <p className="mt-4 text-[16px] xl:text-[22px] md:text-[18px]">
            {t('aiDescTwo')}
          </p>
        </div>
      </section>
      {/* revenue section */}
      <div className="custom-container max-sm:px-0">
        <section className="bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-16 mt-16 xl:mt-20">
            {/* card 1 */}
            <div className="relative flex flex-col">
              <div className="bg-[#086CB9] text-white w-full px-8 py-12 xl:px-10 4xl:py-10 2xl:py-8 flex flex-col justify-center flex-grow">
                <h3 className="h3-bold line-clamp-2 4xl:text-[40px] xl:text-[36px] text-[35px]">
                  {t('revenueTitle')}
                </h3>
                <p className="md:mt-4 mt-0 4xl:text-[30px] xl:text-[26px] text-[26px]">
                  {t('revenueDesc')}
                </p>
              </div>
              <Image
                className="w-full object-cover"
                src="/images/social-impact/diverse-hands-stacked-together-teamwork-unity.webp"
                alt={t('revenueAlt')}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                priority
              />
            </div>
            {/* card 2 */}
            <div className="relative flex flex-col">
              <Image
                className="w-full object-cover"
                src="/images/social-impact/growth-and-sustainability-planting.webp"
                alt={t('plantAlt')}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                priority
              />
              <div className="bg-[#086CB9] text-white w-full px-8 py-12 xl:px-10 xl:py-10 flex flex-col justify-center flex-grow min-h-[220px] xl:min-h-[245px]">
                <p className="4xl:text-[30px] xl:text-[26px] text-[26px] pb-0 md:pb-2">
                  {t('treesDesc')}
                </p>
                <h3 className="h3-bold line-clamp-2 4xl:text-[40px] xl:text-[36px] text-[35px] leading-tight ">
                  {t('treesTitle')}
                </h3>
              </div>
            </div>
            {/* card 3 */}
            <div className="relative flex flex-col">
              <div className="bg-[#086CB9] text-white w-full px-8 py-12 xl:px-10 xl:py-10 flex flex-col justify-center flex-grow min-h-[220px]">
                <h3 className="h3-bold 4xl:text-[40px] xl:text-[36px] text-[35px]">
                  {t('certifiedTitle')}
                </h3>
                <p className="md:mt-4 mt-0 4xl:text-[30px] xl:text-[26px] text-[26px]">
                  {t('certifiedDesc')}
                </p>
              </div>
              <Image
                className="w-full object-cover"
                src="/images/social-impact/data-analytics-presentation.webp"
                alt={t('profesAlt')}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                priority
              />
            </div>
          </div>
        </section>
      </div>
      <div className="custom-container text-black pb-20">
        <ContactForm
          title={t('contactUs')}
          className={" leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[30px] text-[26px] max-[400px]:text-[24px]"}
        />
      </div>
    </div>
  );
}
