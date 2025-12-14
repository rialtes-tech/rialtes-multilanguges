"use client";
import Image from "next/image";
import Seo from "@/app/[locale]/components/Seo";
import Link from "next/link";
import Script from "next/script";
import { useLocale, useTranslations } from "next-intl";
import enContent from "../../../../../../messages/en/blogs.json";
import esContent from "../../../../../../messages/es/blogs.json";
import frContent from "../../../../../../messages/fr/blogs.json";
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";
import UnorderedList from "@/app/[locale]/components/unorderedList";
import useUrl from "@/app/[locale]/components/useUrl";
import FilteredBlogCarousel from "@/app/[locale]/components/FilteredLatestBlogCarousel";
import BlogSocialIcons from "@/app/[locale]/components/blogSocialIcons";

export default function Page() {
  const t = useTranslations("sapDataCloud");
  const locale = useLocale();
  const content = changeLocalization(locale, {
    en: enContent,
    es: esContent,
    fr: frContent,
  });
  const { scenario1Data ,schemaData} = content.sapDataCloud;
  const fullUrl = "https://www.rialtes.com/insights/blogs/sap-business-data-cloud-the-intelligent-data-foundation-for-ai-driven-business-success";
  const currUrl = useUrl();

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title={t("seoTitle")}
        description={t("seoDescription")}
        canonical={`https://www.rialtes.com/${locale}/insights/blogs/sap-business-data-cloud-the-intelligent-data-foundation-for-ai-driven-business-success/`}
      />

      <Script
        id="schema-datasphere"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="relative 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden">
        <div className="hidden xl:block">
          <Image
            src="/images/blog/digital-wave-data-flow-transformation-visualization.webp"
            alt={t('bannerAlt')}
            fill
            style={{ objectFit: "cover", objectPosition: "50% 20%" }}
            priority
          />
        </div>
        <div className="block xl:hidden">
          <Image
            src="/images/blog/digital-wave-data-flow-transformation-visualization-carousel.webp"
            alt={t('bannerAlt')}
            height={0}
            width={0}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </section>

      <section className="custom-container 4xl:mt-[80px] xl:mt-[60px] mt-[40px]">
        <div className="grid lg:grid-cols-12">
          <div className="4xl:col-span-10 xl:col-span-10 lg:col-span-11">
            {/* date and icons */}
            <BlogSocialIcons
              fullUrl={fullUrl}
              topic="SAP BDC"
              date="22 April 2025"
            />

            <div className=" pl-0 ">
              <div className="xl:mt-[60px] mt-[42px]">
                <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">
                  {t("blogTitle")}
                </h1>
                <p className="xl:mt-[38px] mt-[33px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t("blogMainData1")}{" "}
                  <Link
                    className="text-[#0092E0] underline transition duration-300 ease-out hover:text-gray-400"
                    href="https://news.sap.com/2025/02/sap-business-data-cloud-databricks-turbocharge-business-ai/"
                  >
                    {t("blogMainDataLink")}
                  </Link>{" "}
                  {t("blogMainData2")}{" "}
                </p>
                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t("blogMainData3")}
                </p>
              </div>
              {/* understanding sap business data cloud */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                  {t("understandingTitle")}
                </h2>
                <p className="mt-[29px] xl:mt-[34px] 4xl:text-[20px] xl:text-[17px] text-[16px]">
                  {t("understandingDesc")}
                </p>
                <Image
                  src={t('sapImage')}
                  alt={t('sapAlt')}
                  fill
                  priority
                  className="!w-full !h-full !relative"
                />

              </div>
              {/* whats new section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                  {t("whatsNewTitle")}
                </h2>
                <p className="mt-[29px] xl:mt-[34px] 4xl:text-[20px] xl:text-[17px] text-[16px]">
                  {t("whatsNewDesc")}
                </p>
                <p className="mt-5 4xl:text-[20px] xl:text-[17px] text-[16px]">
                  {t("whatsNewDesc2")}
                </p>

                {/* sap bdc section */}
                <h3 className="4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] mt-5 font-bold">
                  {t("sapBdcTitle")}
                </h3>

                <p className="mt-4 4xl:text-[20px]    xl:text-[17px] text-[16px]">
                  {t("sapBdcDesc")}
                </p>
                <p className="4xl:text-[20px] mt-4 xl:text-[17px] text-[16px]">
                  {t("sapBdcDesc2")}
                </p>

                {/* creating unified place section */}
                <h3 className="4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] mt-5 font-bold">
                  {t("creatingTitle")}
                </h3>

                <p className="mt-4 4xl:text-[20px] xl:text-[17px] text-[16px]">
                  {t("creatingDesc")}
                </p>

                {/* delivering section */}
                <h3 className="4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] mt-5 font-bold">
                  {t("deliveringTitle")}
                </h3>
                <p className="mt-4 4xl:text-[20px] xl:text-[17px] text-[16px]">
                  {t("deliveringDesc")}
                </p>

                {/* how BDC works section */}
                <div className="md:mt-[50px] mt-[40px]">
                  <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                    {t("howBdcTitle")}
                  </h2>
                  <p className="mt-[29px] xl:mt-[34px] 4xl:text-[20px] xl:text-[17px] text-[16px]">
                    {t("howBdcDesc")}
                  </p>

                  {/* scenario 1 */}
                  <h3 className="4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] mt-5 font-bold">
                    {t("scenario1Title")}
                  </h3>
                  <p className="mt-4 4xl:text-[20px] xl:text-[17px] text-[16px]">
                    {t("scenario1Desc")}
                  </p>

                  <UnorderedList
                    arrName={scenario1Data}
                    ulClassName="pl-[36px] lg:pl-[56px] space-y-3 list-disc  4xl:text-[20px] text-[16px] xl:text-[17px] font-medium mt-4"
                  />

                  <p className="4xl:text-[20px] xl:text-[17px] text-[16px] pt-4">
                    {t("scenario1Desc2")}
                  </p>

                  {/* scenario 2 */}
                  <h3 className="4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] mt-5 font-bold">
                    {t("scenario2Title")}
                  </h3>

                  <p className="text-black 4xl:text-[20px] text-[16px] xl:text-[17px] mt-4">
                    {t("scenario2Desc")}
                  </p>
                </div>
              </div>
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                  {t("whyExcitedTitle")}
                </h2>
                <p className="4xl:text-[20px] text-[16px] xl:text-[17px] mt-[29px] xl:mt-[34px] ">
                  {t("whyExcitedDesc")}
                </p>
              </div>
              {/* sap bdc accelerates section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                  {t("acceleratesTitle")}
                </h2>
                <p className="mt-[29px] xl:mt-[34px] 4xl:text-[20px] text-[16px] xl:text-[17px]">
                  {t("acceleratesDesc")}
                </p>
                <p className="mt-5 4xl:text-[20px] text-[16px] xl:text-[17px]">
                  {t("acceleratesDesc2")}{" "}
                  <Link
                    className="text-[#0092E0] underline"
                    href="https://www.rialtes.com/contact-us/?utm_source=blog&utm_medium=internal"
                  >
                    {t("acceleratesLink")}
                  </Link>{" "}
                  {t("acceleratesDesc3")}{" "}
                </p>
              </div>{" "}
            </div>
          </div>
        </div>
      </section>

      {/* blog carousel */}
      <section className="custom-container lg:pr-0 xl:my-[80px] my-[60px]">
        <FilteredBlogCarousel url={currUrl} />
      </section>
    </div>
  );
}
