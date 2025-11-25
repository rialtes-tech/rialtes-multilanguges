"use client";
import Image from "next/image";
import ContactForm from "../../../components/contactform";
import LearnMore from "@/app/[locale]/components/learnMore";
import Seo from "@/app/[locale]/components/Seo";
import UnorderedList from "@/app/[locale]/components/unorderedList";
import Script from "next/script";
import enContent from '../../../../../../messages/en/services.json';
import esContent from '../../../../../../messages/es/services.json';
import frContent from '../../../../../../messages/fr/services.json';
import { useLocale, useTranslations } from "next-intl";
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";
export default function Page() {
  const t = useTranslations('successPlus')
  const locale = useLocale();
  const homepageContent = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
  const { relatedData, agentData, ourWorkdayData, keyBenefitsData, ourZohoData, zohoBenefitsData, migratingBenefitsData, sapActivateData,
    sapSuccessFactorData, sapCpiData, extendData, sapJouleData,schemaData } = homepageContent.successPlus;
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title={t('seoTitle')} 
        description={t('seoDescription')}
        keywords="home, website, welcome"
        canonical={`https://www.rialtes.com/${locale}/services/hxm-transformation/successplus-successfactors-implementation-partner/`}
      />
      <Script
        id="schema-sucessfactor"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      {/* hero section */}
      <section className="relative 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] sm:h-[600px] h-[400px] md:h-[600px] overflow-hidden">
        <div className="md:block hidden">
          <Image
            src="/images/services/success-plus/successplus-successfactors-implementation-partner.webp"
            alt={t('bannerAlt')}
            fill
            style={{ objectFit: "cover", objectPosition: "75% 20%" }}
            priority
          />
        </div>
        <div className="md:hidden block">
          <Image
            src="/images/services/success-plus/Mobile/mobile-banner.webp"
            alt={t('bannerAlt')}
            fill
            style={{ objectFit: "cover", objectPosition: "75% 20%" }}
            priority
          />
        </div>
        <div
          className="custom-container h-full relative">
          <div className="h-full flex flex-col justify-center mt-[40px] lg:mt-0">
            <h3 className="text-white xl:text-[24px] text-[18px] font-bold mb-2">{t('headerTitle')}</h3>
            <h2 className="text-white 2xl:text-[56px] xl:text-[40px] 4xl:text-[60px] lg:text-[38px] leading-tight text-[24px] md:text-[32px] mt-[20.5px]">
              {t('headerSubTitlep1')}  <div className="" /> {t('headerSubTitlep2')}
              <div className="lg:mt-[20px] mt-[10px]" /><span className="text-[16px] font-bold lg:text-[36px] 4xl:text-[45px]"> {t('headerSubTitle2')} </span> <div className="2xl:mt-[-20px] lg:mt-[-5px] xl:mt-0 mt-[-10px]" /><span className="text-[16px] lg:text-[36px] 4xl:text-[45px]"> {t('headerSubTitle3')}</span>
            </h2>
            <div className="md:max-w-32 w-20 4xl:w-[160px] 2xl:w-[140px] lg:w-[100px] xl:w-[100px] mt-[44px] xl:mt-[62px]">
              <Image
                src="/images/services/success-plus/sap-partner-logo.webp"
                alt={t('sapPartnerLogoAlt')}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
        </div>
      </section>
      {/* page description */}
      <section className="custom-container xl:mt-[78px] mt-[51px]">
        <h1 className="xl:text-[40px] 4xl:text-[60px] leading-tight text-[26px] md:w-[80%] xl:w-[80%] 4xl:w-[94%] w-[96%]">
          {t('pageDescTitle')}
        </h1>
        <div className="grid lg:grid-cols-12 grid-cols-1 gap-[20px]">
          <div className="lg:col-span-8 col-span-12 order-2 lg:order-1">
            <p className="xl:text-[19px] 4xl:text-[22px] leading-tight text-[16px] xl:mt-[43px] mt-[20px] font-normal 4xl:w-[90%] w-[96%]">
              {t('pageDesc1')}
              <br /><br />
              {t('pageDesc2')}
            </p>
          </div>
          <div className="lg:col-span-4 col-span-12 lg:my-auto lg:ml-auto order-1 lg:order-2 mt-[40px]">
            <Image
              src="/images/services/success-plus/sap-successfactors-logo.jpg"
              alt={t('sapSuccessfacorAlt')}
              width={0}
              height={0}
              className="w-full h-full md:w-[50%] lg:w-full lg:h-full"
              priority
            />
          </div>
        </div>

      </section>
      {/* what is rialtes success section */}
      <section className="custom-container xl:mt-[112px] lg:mt-[82px] mt-[34px]">
        <div className="grid xl:grid-cols-12 grid-cols-1 4xl:gap-[70px] gap-y-[20px]">
          <div className="xl:col-span-8 col-span-12">
            <h2 className="xl:text-[40px] 4xl:text-[60px] leading-tight text-[26px] w-[92%] xl:w-full">
              {t('whyRialtesTitle')}
              <br />
              <span className="xl:text-[34px] 4xl:text-[45px] leading-tight text-[22px] font-semibold"> {t('whyRialtesSubTitle1')} <div className="4xl:mt-[-16px]" />{t('whyRialtesSubTitle2')}</span>
            </h2>
          </div>
          <div className="xl:col-span-4 col-span-12 md:w-[80%] w-[92%] xl:w-full">
            <p className="xl:text-[19px] 4xl:text-[22px] leading-tight text-[16px] font-normal">
              {t('whyRialtesDesc')}
            </p>
          </div>
        </div>
      </section>
      {/* success key image */}
      <section className="custom-container md:px-0 mt-[58px] md:mt-[90px] xl:mt-[173px]">
        <div className="md:block hidden">
          <Image
            src={t('keyServiceImg')}
            alt={t('keySerAlt')}
            className="w-full h-full object-cover"
            priority
            width={0}
            height={0}
          />
        </div>
        <div className="md:hidden block">
          <Image
            src={t('keyServiceImgMobile')}
            alt={t('keySerAlt')}
            className="w-full h-full object-cover"
            priority
            width={0}
            height={0}
          />
        </div>
      </section>
      {/* workday section */}
      <section className="text-white custom-container 4xl:pr-0 4xl:mt-[183px] 2xl:mt-[140px] xl:mt-[100px] mt-[87px] pt-[50px] 4xl:pt-[148] 2xl:pt-[100px] xl:pt-[100px] md:bg-[url('/images/services/success-plus/workday-bg-desk.webp')] bg-[url('/images/services/success-plus/Mobile/workday-bg-mob.webp')] bg-cover">
        <div>
          <div className="grid 4xl:pr-[280px] lg:grid-cols-12 grid-cols-1 lg:gap-[20px] xl:gap-[60px] gap-y-[29px]">
            <div className="lg:col-span-7 3xl:col-span-8 col-span-12 lg:order-1 order-2">
              <h2 className="xl:text-[40px] 4xl:text-[60px] leading-tight text-[26px] sm:w-[92%] xl:w-full">
                {t('workdayTitle1')}<div className="block lg:hidden" />{t('workdayTitle2')} <span className="xl:text-[34px] 4xl:text-[45px] leading-tight text-[22px] font-bold"> <div className="block lg:hidden" />{t('workdayTitle3')}</span>
              </h2>
              <p className="xl:text-[19px] 4xl:text-[22px] leading-tight text-[16px] font-medium xl:mt-[51px] mt-[17px] w-[96%] xl:w-[90%]">
                {t('workdayDesc')}
              </p>
            </div>
            <div className="lg:col-span-5 3xl:col-span-4 col-span-12 lg:order-2 order-1">
              <div className="lg:block hidden h-[180px] aspect-[19/9]">
                <Image
                  src="/images/services/success-plus/workday-desk.webp"
                  alt={t('workDayAlt')}
                  className="w-full h-full object-contain"
                  priority
                  width={0}
                  height={0}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={90}
                />
              </div>
              <div className="lg:hidden block h-[80px] w-[200px] md:h-[120px] md:w-[260px]">
                <Image
                  src="/images/services/success-plus/Mobile/workday-mob.webp"
                  alt={t('workDayAlt')}
                  className="w-full h-full object-cover"
                  priority
                  width={0}
                  height={0}
                />
              </div>
            </div>
          </div>
          <div className="relative grid lg:grid-cols-2 grid-cols-1 xl:mt-[58px] mt-[29px] lg:w-[90%] 4xl:w-[80%] gap-y-[56px] lg:gap-[60px] xl:mb-[80px] mb-[80px]">
            <div>
              <h3 className="xl:text-[26px] 4xl:text-[30px] leading-tight text-[22px] w-[92%] xl:w-full">
                {t('ourWorkdayTitle')}
              </h3>
              <UnorderedList arrName={ourWorkdayData} ulClassName="w-[92%] lg:w-full xl:mt-[39px] mt-[26px] xl:space-y-[27px] space-y-[19px] list-disc pl-[20px]" liClassName="xl:text-[19px] 4xl:text-[20px] leading-tight text-[16px] font-normal" />
            </div>
            <div>
              <h3 className="xl:text-[26px] 4xl:text-[30px] leading-tight text-[22px] w-[92%] xl:w-full">
                {t('ourWorkdayTitle2')}
              </h3>
              <UnorderedList arrName={keyBenefitsData} ulClassName="w-[92%] lg:w-full xl:mt-[39px] mt-[26px] xl:space-y-[27px] space-y-[19px] list-disc pl-[20px]" liClassName="xl:text-[19px] 4xl:text-[20px] leading-tight text-[16px] font-normal" />
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-gray-300"></div>

        <>
          <div className="grid lg:grid-cols-12 grid-cols-1 lg:gap-[20px] xl:gap-[60px] gap-y-[39px] xl:mt-[90px] mt-[60px] 4xl:pr-[280px]">
            <div className="lg:col-span-7 3xl:col-span-8 col-span-12 lg:order-1 order-2">
              <h2 className="xl:text-[40px] 4xl:text-[60px] leading-tight text-[26px] sm:w-[92%] xl:w-[92%]">
                {t('zohoTitle1')} <div className="block lg:hidden" /> {t('zohoTitle2')} <div className="xl:text-[34px] 4xl:text-[45px] leading-tight text-[22px] font-bold">{t('zohoTitle3')}</div>
              </h2>
              <p className="xl:text-[19px] 4xl:text-[22px] leading-tight text-[16px] font-medium xl:mt-[51px] mt-[17px] w-[94%] md:w-[80%] lg:w-full">
                {t('zohoDesc')}
              </p>
            </div>
            <div className="lg:col-span-5 3xl:col-span-4 col-span-12 lg:order-2 order-1">
              <div className="lg:block hidden h-[180px] aspect-[19/9]">
                <Image
                  src="/images/services/success-plus/zoho-desk.webp"
                  alt={t('zohoAlt')}
                  className="w-full h-full object-contain"
                  priority
                  width={0}
                  height={0}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={90}
                />
              </div>
              <div className="lg:hidden block h-[80px] w-[200px] md:h-[120px] md:w-[260px]">
                <Image
                  src="/images/services/success-plus/Mobile/zoho-mob.webp"
                  alt={t('zohoAlt')}
                  className="w-full h-full object-cover"
                  priority
                  width={0}
                  height={0}
                />
              </div>
            </div>
          </div>
          <div className="relative grid lg:grid-cols-2 grid-cols-1 xl:mt-[58px] mt-[29px] lg:w-[90%] 4xl:w-[80%] gap-y-[56px] lg:gap-[60px] xl:mb-[60px] mb-[40px]">
            <div>
              <h3 className="xl:text-[26px] 4xl:text-[30px] leading-tight text-[22px] w-[90%] xl:w-full">
                {t('ourZohoTitle')}
              </h3>
              <UnorderedList arrName={ourZohoData} ulClassName="w-[92%] lg:w-full xl:mt-[39px] mt-[26px] xl:space-y-[27px] space-y-[19px] list-disc pl-[20px]" liClassName="xl:text-[19px] 4xl:text-[20px] leading-tight text-[16px] font-normal" />
            </div>
            <div>
              <h3 className="xl:text-[26px] 4xl:text-[30px] leading-tight text-[22px] w-[90%] xl:w-full">
                {t('ourZohoSubTitle')}
              </h3>
              <UnorderedList arrName={zohoBenefitsData} ulClassName="w-[92%] lg:w-full xl:mt-[39px] mt-[26px] xl:space-y-[27px] space-y-[19px] list-disc pl-[20px]" liClassName="xl:text-[19px] 4xl:text-[20px] leading-tight text-[16px] font-normal" />
            </div>
          </div>
        </>
        <div className="4xl:mr-[280px] xl:shadow-lg border-b-2 border-white xl:mt-[100px] mt-[63px] bg-[#FFFFFF] pt-[40px]  pl-[24px]  xl:py-[83px] md:px-[60px] pb-6">
          <h2 className="text-black xl:text-[40px] 4xl:text-[60px] leading-tight text-[26px] sm:w-[92%] lg:w-[60%] xl:w-full max-sm:pr-5">
            {t('benefitsMigratingTitle')}
          </h2>
          <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-[40px] 2xl:gap-[60px] gap-y-[26px] sm:w-[90%] lg:w-full">
            {
              migratingBenefitsData.map((data, ind) => {
                return (
                  <div className="xl:mt-[48px] mt-[26px]" key={ind}>
                    <div>
                      <Image
                        src={data.img}
                        alt={`${data.alt}`}
                        className="xl:w-[120px] xl:h-[120px] object-cover h-[75px] w-[75px]"
                        priority
                        width={0}
                        height={0}
                      />
                    </div>
                    <h4 className="text-black leading-tight text-[20px] mt-[16px] xl:mt-[26px] w-[92%] xl:w-full font-semibold">
                      {data.title}
                    </h4>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>

      {/* process section */}
      <section className="custom-container xl:mt-[116px] mt-[55px]">
        <div className="grid xl:grid-cols-12 grid-cols-1 xl:gap-[60px] gap-y-[26px]">
          <div className="xl:col-span-8 col-span-12">
            <h2 className="xl:text-[40px] 4xl:text-[60px] leading-tight text-[26px] w-[92%] md:w-[76%] xl:w-[91%]">
              {t('processTitle')}
            </h2>
            <h3 className="xl:text-[34px] 4xl:text-[40px] leading-tight text-[22px] xl:mt-[72px] mt-[26px] font-normal">
              <span className="font-bold">{t('processSubTitle1')} </span> <div /> {t('processSubTitle2')}
            </h3>
          </div>
          <div className="xl:col-span-4 col-span-12">
            <p className="xl:text-[19px] 4xl:text-[22px] leading-tight text-[16px] font-normal w-[96%] md:w-[80%] xl:w-full">
              {t('processDesc')}
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:mt-[120px] mt-[40px] sm:w-[80%] md:w-[90%] xl:w-full 2xl:w-[90%] md:gap-x-[60px] lg:gap-0">
          {
            sapActivateData.map((data, ind) => {
              return (
                <div key={ind} className={`lg:first:py-0 max-lg:border-b max-lg:last:border-0 border-[#B9B9B9] py-[30px] md:py-[40px] lg:py-0
                                          ${(data.id === 5 || data.id === 6) && "md:border-0"}
                                          ${data.id === 2 && "lg:!py-0"}
                                          ${(data.id == 2 || data.id == 5) && "lg:mt-[60] xl:mt-[80px] lg:h-[250px] xl:h-[260px] 4xl:h-[330px] lg:px-[30px] xl:px-[40px] lg:border-l border-[#B9B9B9]"}
                                          ${(data.id == 3 || data.id == 6) && "lg:mt-[120] xl:mt-[140px] lg:pl-[40px] lg:border-l"}
                                          ${(data.id == 1 || data.id == 4) && "lg:pr-[40px]"}
                                          ${(data.id == 6) && "lg:pb-[80px] 4xl:pb-[110px]"} `}>
                  <h4 className="text-[#0C8AD4] xl:text-[27px] 4xl:text-[30px] leading-tight text-[24px] xl:mb-[28px] mb-[16px] flex">
                    <div className="xl:text-[60px] 4xl:text-[70px] leading-tight text-[50px] mr-[20px] font-extrabold">{data.id}</div> <div className="my-auto">{data.title}</div>
                  </h4>
                  <UnorderedList arrName={data.list} ulClassName="w-[88%] lg:w-full 4xl:w-[96%] xl:space-y-[30px] space-y-[19px] list-disc pl-[20px]" liClassName="xl:text-[19px] 4xl:text-[22px] leading-tight text-[16px] font-normal" />
                </div>
              )
            })
          }
        </div>
      </section>
      {/* sap success factor section */}
      <section className="custom-container relative lg:mt-[130px] xl:mt-[175px] mt-[38px] 4xl:!pr-[142px] 2xl:!pr-[90px] lg:!pr-[40px] md:!pr-0 max-lg:px-0">
        <div className="lg:pl-[59px] lg:pr-[60px]  px-[36px] bg-[#F2ECD9]">
          <div className="grid lg:grid-cols-12 grid-cols-1 lg:gap-[60px] gap-y-[30px]">
            <div className="lg:order-1 order-2 lg:col-span-5 4xl:col-span-5 lg:pt-[86px] xl:pb-[68px] pb-[54px]">
              <h2 className="xl:text-[30px] 4xl:text-[40px] leading-tight text-[22px] font-bold w-[90%] lg:w-full">
                {t('sapSuccessTitle1')} <div className="font-normal">{t('sapSuccessTitle2')}</div>
              </h2>
              <p className="xl:text-[19px] 4xl:text-[22px] leading-tight text-[16px] font-normal w-[92%] md:w-[80%] lg:w-full xl:mt-[42px] mt-[26px]">
                {t('sapSuccessDesc')}
              </p>
              <h3 className="xl:mt-[31px] mt-[26px] xl:text-[25px] 4xl:text-[30px] leading-tight text-[21px] font-semibold"> {t('keyTitle')}</h3>
              <UnorderedList arrName={sapSuccessFactorData} ulClassName="4xl:mt-[38px] mt-[22px] w-[88%] lg:w-full 4xl:w-[96%] xl:space-y-[24px] space-y-[19px] list-disc pl-[20px]" liClassName="xl:text-[18px] 4xl:text-[20px] leading-tight text-[16px] font-semibold" />
            </div>
            <div className="lg:order-2 order-1 lg:col-span-7 4xl:col-span-6 max-lg:pt-[45px]">
              <div className="lg:block hidden h-full 4xl:h-[800px] xl:h-[732px] lg:h-[620px] w-full lg:mt-[-60px]">
                <Image
                  src="/images/services/success-plus/successfactor-desk.webp"
                  alt={t('successFactorAlt')}
                  className="w-full h-full object-cover"
                  priority
                  width={0}
                  height={0}
                />
              </div>
              <div className="lg:hidden block">
                <Image
                  src="/images/services/success-plus/Mobile/successfactor-mob.webp"
                  alt={t('successFactorAlt')}
                  className="w-full h-full object-cover"
                  priority
                  width={0}
                  height={0}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* sap CPI section */}
      <section className="custom-container relative lg:mt-[130px] xl:mt-[175px] mt-[60px] 4xl:!pr-[142px] 2xl:!pr-[90px] lg:!pr-[40px] md:!pr-0 max-lg:px-0">
        <div className="absolute bg-[#EFE0CD] bottom-0 top-0 4xl:w-[120px] 4xl:ml-[-120px] 2xl:w-[90px] 2xl:ml-[-90px] lg:w-[26px] lg:ml-[-26px]"></div>
        <div className="lg:pr-[60px] max-lg:px-[36px] bg-[#EFE0CD]">
          <div className="grid lg:grid-cols-12 grid-cols-1 lg:gap-[60px] gap-y-[30px]">
            <div className="lg:order-2 order-2 lg:col-span-6 lg:pt-[86px] xl:pb-[68px] pb-[54px]">
              <h2 className="xl:text-[30px] 4xl:text-[40px] leading-tight text-[22px] font-bold w-[90%] lg:w-full">
                {t('sapCpiTitle1')} <div className="font-normal">{t('sapCpiTitle2')}</div>
              </h2>
              <p className="xl:text-[19px] 4xl:text-[22px] leading-tight text-[16px] font-normal w-[92%] md:w-[80%] lg:w-full xl:mt-[42px] mt-[26px]">
                {t('sapCpiDesc')}
              </p>
              <h3 className="xl:mt-[31px] mt-[26px] xl:text-[25px] 4xl:text-[30px] leading-tight text-[21px] font-semibold">{t('keyTitle')}</h3>
              <UnorderedList arrName={sapCpiData} ulClassName="4xl:mt-[38px] mt-[22px] w-[88%] lg:w-full 4xl:w-[96%] xl:space-y-[24px] space-y-[19px] list-disc pl-[20px]" liClassName="xl:text-[18px] 4xl:text-[20px] leading-tight text-[16px] font-semibold" />
            </div>
            <div className="lg:order-1 order-1 lg:col-span-6 max-lg:pt-[45px]">
              <div className="lg:block hidden h-full 4xl:h-[800px] xl:h-[710px] lg:h-[620px] w-full lg:mt-[-60px]">
                <Image
                  src="/images/services/success-plus/sap-cpi-desk.webp"
                  alt={t('sapCpiAlt')}
                  className="w-full h-full object-cover"
                  priority
                  width={0}
                  height={0}
                />
              </div>
              <div className="lg:hidden block">
                <Image
                  src="/images/services/success-plus/Mobile/sap-cpi-mob.webp"
                  alt={t('sapCpiAlt')}
                  className="w-full h-full object-cover"
                  priority
                  width={0}
                  height={0}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* sap joule section */}
      <section className="custom-container relative lg:mt-[130px] xl:mt-[175px] mt-[68px] 4xl:!pr-[142px] 2xl:!pr-[90px] xl:!pr-[40px] md:!pr-0 max-lg:px-0 ">
        <div className="lg:pl-[59px] lg:pr-[60px] lg:pb-[90px] xl:pb-[138px] px-[36px] bg-[#BEDDFC]">
          <div className="grid lg:grid-cols-12 grid-cols-1 lg:gap-[80px] gap-y-[30px]">
            <div className="lg:order-1 order-2 lg:col-span-6 lg:pt-[76px] pb-[54px]">
              <h2 className="xl:text-[30px] 4xl:text-[40px] leading-tight text-[22px] font-bold w-[90%] lg:w-full">
                {t('sapJouleTitle1')}<div className="font-normal">{t('sapJouleTitle2')}</div>
              </h2>
              <p className="xl:text-[19px] 4xl:text-[22px] leading-tight text-[16px] font-normal w-[92%] md:w-[80%] lg:w-full xl:mt-[42px] mt-[26px]">
                {t('sapJouleDesc')}
              </p>
              <h3 className="xl:mt-[31px] mt-[26px] xl:text-[25px] 4xl:text-[30px] leading-tight text-[21px] font-semibold">{t('capabilitiesTitle')}</h3>
              <UnorderedList arrName={sapJouleData} ulClassName="4xl:mt-[38px] mt-[22px] w-[94%] lg:w-full 4xl:w-[96%] xl:space-y-[24px] space-y-[19px] list-disc pl-[20px]" liClassName="xl:text-[18px] 4xl:text-[20px] leading-tight text-[16px] font-semibold" />
            </div>
            <div className="lg:order-2 order-1 lg:col-span-6 max-lg:pt-[45px]">
              <div className="lg:block hidden h-full w-full lg:mt-[-60px]">
                <Image
                  src="/images/services/success-plus/sap-desk.webp"
                  alt={t('sapJouleAlt')}
                  className="w-full h-full object-cover"
                  priority
                  width={0}
                  height={0}
                />
              </div>
              <div className="lg:hidden block">
                <Image
                  src="/images/services/success-plus/Mobile/sap-mob.webp"
                  alt={t('sapJouleAlt')}
                  className="w-full h-full object-cover"
                  priority
                  width={0}
                  height={0}
                />
              </div>
            </div>
          </div>
        </div>
        {/* blue box */}
        <div className="lg:mt-[-60px]">
          <div className="xl:py-[39px] xl:px-[54px] py-[27px] px-[36px] bg-[#068EDA] text-white lg:w-fit">
            <h4 className="xl:text-[20px] 4xl:text-[26px] leading-tight text-[18px] font-normal">{t('sapJouleBlueBox')}</h4>
          </div>
        </div>
      </section>
      {/* extend sap section */}
      <section className="custom-container relative lg:mt-[130px] xl:mt-[175px] mt-[68px] 4xl:!pr-[142px] 2xl:!pr-[90px] lg:!pr-[40px] md:!pr-0 max-lg:px-0">
        <div className="absolute bg-[#E4EAD2] bottom-0 top-0 4xl:w-[120px] 4xl:ml-[-120px] 2xl:w-[90px] 2xl:ml-[-90px] lg:w-[26px] lg:ml-[-26px]"></div>
        <div className="lg:pr-[60px] max-lg:px-[36px] bg-[#E4EAD2] relative">
          <div className="grid lg:grid-cols-12 grid-cols-1 lg:gap-[60px] gap-y-[30px]">
            <div className="lg:order-2 order-2 lg:col-span-6 lg:pt-[86px] xl:pb-[68px] pb-[54px]">
              <h2 className="xl:text-[30px] 4xl:text-[40px] leading-tight text-[22px] font-bold w-[90%] lg:w-full">
                {t('extendSapTitle1')} <div className="font-normal">{t('extendSapTitle2')}</div>
              </h2>
              <p className="xl:text-[19px] 4xl:text-[22px] leading-tight text-[16px] font-normal w-[92%] md:w-[80%] lg:w-full xl:mt-[42px] mt-[26px]">
                {t('extendSapDesc')}
              </p>
              <h3 className="xl:mt-[31px] mt-[26px] xl:text-[25px] 4xl:text-[30px] leading-tight text-[21px] font-semibold">{t('keyTitle')}</h3>
              <UnorderedList arrName={extendData} ulClassName="4xl:mt-[38px] mt-[22px] w-[88%] lg:w-full 4xl:w-[96%] xl:space-y-[24px] space-y-[19px] list-disc pl-[20px] lg:pb-[120px]" liClassName="xl:text-[18px] 4xl:text-[20px] leading-tight text-[16px] font-semibold" />
              {/* blue box desktop*/}
              <div className="lg:absolute lg:mt-[-20px] lg:ml-[-20px] mt-[40px] lg:block hidden">
                <div className="xl:py-[39px] xl:px-[54px] py-[27px] px-[36px] bg-[#068EDA] text-white lg:w-fit">
                  <h4 className="xl:text-[20px] 4xl:text-[26px] leading-tight text-[18px] font-normal">{t('extendBlueBox')}</h4>
                </div>
              </div>
            </div>
            <div className="lg:order-1 order-1 lg:col-span-6 max-lg:pt-[45px]">
              <div className="lg:block hidden h-full w-full lg:mt-[-60px]">
                <Image
                  src="/images/services/success-plus/extend-desk.webp"
                  alt={t('extendAlt')}
                  className="w-full h-full object-cover"
                  priority
                  width={0}
                  height={0}
                />
              </div>
              <div className="lg:hidden block">
                <Image
                  src="/images/services/success-plus/Mobile/extend-mob.webp"
                  alt={t('extendAlt')}
                  className="w-full h-full object-cover"
                  priority
                  width={0}
                  height={0}
                />
              </div>
            </div>
          </div>
        </div>
        {/* blue box mobile */}
        <div className="lg:hidden">
          <div className="xl:py-[39px] xl:px-[54px] py-[27px] px-[36px] bg-[#068EDA] text-white lg:w-fit">
            <h4 className="xl:text-[20px] 4xl:text-[26px] leading-tight text-[18px] font-normal">{t('extendBlueBoxMobile')} </h4>
          </div>
        </div>
      </section>
      {/* related section */}
      <section className="custom-container xl:mt-[205px] lg:mt-[125px] mt-[44px]">
        <h2 className="xl:text-[40px] 4xl:text-[60px] leading-tight text-[26px] w-[90%] lg:w-full">
          {t('relatedTitle1')}<div className="md:block hidden" /> {t('relatedTitle2')}
        </h2>
        <div className="grid md:grid-cols-2 grid-cols-1 sm:w-[76%] md:w-[84%] lg:w-[70%] md:gap-[34px] gap-y-[20px] xl:mt-[39px] mt-[22px]">
          {relatedData.map((item, ind) => (

            <div
              key={ind}
              className="py-[26px] px-[28px] xl:py-[49px] xl:px-[50px] border border-[#707070]">

              <h3 className="xl:text-[25px] 4xl:text-[30px] leading-tight text-[20px] font-semibold">
                {/* {item.link ? (
                  <Link
                    href={item.link}
                    className="hover:underline"
                  >
                    {item.text}
                  </Link>
                ) : (
                  item.text
                )} */}
                {item}
              </h3>
            </div>
          ))}
        </div>
      </section>
      {/* agentchat section */}
      <section className="xl:mt-[115px] mt-[59px] bg-[#184671] xl:pt-[120px] 2xl:pt-[140px] 4xl:pt-[176px] pt-[36px] 2xl:mt-[125px] 4xl:mt-[176px]">
        <div className="custom-container md:pr-0 relative">
          <div className="md:block hidden">
            <Image
              src="/images/services/success-plus/agentchat-desk.webp"
              alt={t('agentchatAlt')}
              className="w-full h-full object-cover"
              priority
              width={0}
              height={0}
            />
          </div>
          <div className="md:hidden block">
            <Image
              src="/images/services/success-plus/Mobile/agentchat-mob.webp"
              alt={t('agentchatAlt')}
              className="w-full h-full object-cover"
              priority
              width={0}
              height={0}
            />
          </div>
          <div className="md:absolute top-0">
            <div className="bg-[#FFFFFF] xl:pt-[52px] xl:px-[60px] xl:pb-[123px] pt-[30px] px-[26px] pb-[68px] md:w-[40%] md:ml-[48px]">
              <h3 className="xl:text-[36px] 4xl:text-[50px] leading-tight text-[26px] font-light">{t('agentChatTitle')}</h3>
              <div className="absolute">
                <Image
                  src="/images/services/success-plus/whatsapp-icon.webp"
                  alt="whatsapp-icon image"
                  className="xl:w-[150px] xl:h-[150px] lg:w-[96px] lg:h-[96px] w-[80px] h-[80px] object-cover xl:mt-[50px] mt-[20px]"
                  priority
                  width={0}
                  height={0}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="custom-container xl:mt-[60px] mt-[66px]">
          <div className="grid lg:grid-cols-12 grid-cols-1 text-white lg:gap-[80px] gap-y-[28px]">
            <div className="lg:col-span-6 lg:w-[88%]">
              <p className="xl:text-[19px] 4xl:text-[22px] leading-tight text-[16px] font-normal w-[90%] lg:w-full">
                {t('agentChatDesc')}
              </p>
            </div>
            <div className="lg:col-span-6">
              <h3 className="xl:text-[24px] 4xl:text-[30px] leading-tight text-[18px] font-semibold">{t('keyFeatureTitle')}</h3>
              <UnorderedList arrName={agentData} ulClassName="w-[92%] lg:w-full xl:mt-[37px] mt-[17px] xl:space-y-[27px] space-y-[19px] list-disc pl-[20px]" liClassName="xl:text-[19px] 4xl:text-[20px] leading-tight text-[16px] font-semibold" />
            </div>
          </div>
          <div className="xl:mt-[64px] mt-[49px]">
            <LearnMore bgcolor="#006FBE" bordercolor="#006FBE" btnName={t('knowMore')} href="https://www.rialtes.com/products/agentchat" />
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <div className="xl:mt-[118px] mt-[48px] xl:mb-[120px] mb-[120px] custom-container text-black">
        <ContactForm title={t('contactTitle')} subtitle={t('contactSubTitle')} className={'2xl:text-[56px] xl:text-[46px] xl:w-[1000px] 2xl:w-[1200px]  4xl:text-[60px] 4xl:w-[1200px] lg:text-[38px] lg:w-[900px] leading-tight text-[24px]  md:text-[32px] '} />
      </div >
      {/* empowering section */}
      <div className="custom-container bg-[#134874] xl:mt-[92px] mt-[48px] xl:py-[63px] py-[34px] text-white">
        <h2 className="xl:text-[30px] 4xl:text-[50px] leading-tight text-[25px] font-light w-[90%] xl:w-[70%] 2xl:w-[90%]">
          {t('empoweringTitle')}
        </h2>
      </div>
    </div >
  );
}
