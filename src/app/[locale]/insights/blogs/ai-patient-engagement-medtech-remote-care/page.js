"use client";
import Image from "next/image";
import BlogsCarousel from "../../../components/latestBlogCarousel";
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import UnorderedList from "@/app/[locale]/components/unorderedList";
import FAQAccordion from "@/app/[locale]/components/faqAccordion";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import enContent from "../../../../../../messages/en/blogs.json";
import esContent from "../../../../../../messages/es/blogs.json";
import frContent from "../../../../../../messages/fr/blogs.json";
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";
import BlogSocialIcons from "@/app/[locale]/components/blogSocialIcons";
import FilteredBlogCarousel from "@/app/[locale]/components/FilteredLatestBlogCarousel";
import useUrl from "@/app/[locale]/components/useUrl";
export default function Page() {
  const t = useTranslations("aiPatient");
  const locale = useLocale();
  const blogsContent = changeLocalization(locale, {
    en: enContent,
    es: esContent,
    fr: frContent,
  });
  const { rolesData, commonData, benefitsData, faqs,schemaData } = blogsContent.aiPatient;
  const fullUrl = "https://www.rialtes.com/insights/blogs/ai-patient-engagement-medtech-remote-care";
  const currUrl = useUrl();

  return (
    <div className="min-h-screen">
      <Seo
        title={t("seoTitle")}
        description={t("seoDescription")}
        keywords="Partners, website, welcome"
        canonical={`https://www.rialtes.com/${locale}/insights/blogs/ai-patient-engagement-medtech-remote-care/`}
      />

      <Script
        id="schema-copilots"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="relative 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden">
        <div className="xl:block hidden">
          <Image
            src="/images/blog/futuristic-medical-technology-innovation.webp"
            alt={t("bannerAlt")}
            fill
            priority
          />
        </div>
        <div className="xl:hidden block">
          <Image
            src="/images/blog/futuristic-medical-technology-innovation-mobile.webp"
            alt={t("bannerAlt")}
            priority
            height={0}
            width={0}
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      <section className="custom-container 4xl:mt-[80px] xl:mt-[60px] mt-[40px]">
        <div className="grid lg:grid-cols-12">
          <div className="4xl:col-span-9 xl:col-span-10 lg:col-span-11">
            {/* date and icons */}

            <BlogSocialIcons fullUrl={fullUrl} topic="Salesforce Agentforce" date="09 September 2025" />


            <div className="xl:mt-[60px] mt-[42px]">
              <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">
                {t("blogTitle")}
              </h1>
              <div className="xl:mt-[38px] mt-[33px]">
                <p className="mt-5  4xl:text-[20px] xl:text-[17px] text-[16px]">
                  {t("blogMainData")}
                </p>
                <p className="mt-5 4xl:text-[20px] xl:text-[17px] text-[16px]">
                  {t("blogMainData2")}
                </p>
              </div>
              {/* Role of AI section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold mt-10 text-[#0092E0] 2xl:text-[26px] 4xl:text-[32px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                  {t("aiRoleTitle")}
                </h2>
                <p className="mt-[29px] xl:mt-[34px]   4xl:text-[20px] xl:text-[17px] text-[16px]">
                  {t("aiRoleDesc")}
                </p>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[26px] gap-y-[84px] sm:w-[70%] md:w-[90%] lg:w-[900px] xl:w-[1090px] 3xl:w-[1150px] mt-[83px]">
                  {rolesData.map((data, ind) => {
                    return (
                      <div
                        key={ind}
                        className="px-[36px] max-[360px]:pt-[80px] pt-[46px] sm:pt-[60px] lg:pt-[70px] pb-[40px] relative border border-[#707070] flex flex-col items-center"
                      >
                        <p className="text-[16px] 2xl:text-[18px] xl:text-[18px] 4xl:text-[20px] font-bold bg-[#006FBE] text-white py-3 px-6 absolute -top-8 4xl:-top-12 left-1/2 transform -translate-x-1/2 w-[76%] text-center">
                          <span
                            className={`${ind == 1 && " block md:py-0 mx-auto"
                              } ${ind == 2 && "py-2 block"}`}
                          >
                            {" "}
                            {data.title}
                          </span>
                        </p>

                        <p className="mt-9  4xl:text-[20px] xl:text-[17px] text-[16px]">
                          {data.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <p className="mt-10 4xl:text-[20px] xl:text-[17px] text-[16px]">
                  {t("aiRoleDesc2")}
                </p>

                <h3 className="font-semibold mt-10 text-[#0092E0] 24xl:text-[24px]  2xl:text-[21px]  xl:text-[20px] text-[20px] leading-tight ">
                  {t("turningTitle")}
                </h3>

                <p className="mt-5 4xl:text-[20px] xl:text-[17px] text-[16px]">
                  {t("turningDesc")}
                </p>
                <p className="mt-6 4xl:text-[20px] xl:text-[17px] text-[16px]">
                  {t("turningDesc2")}
                </p>
                <p className="mt-6 4xl:text-[20px] xl:text-[17px] text-[16px]">
                  <strong>{t("turningDescStrong")} </strong>
                  {t("turningDesc3")}{" "}
                </p>
                <p className="mt-6 4xl:text-[20px] xl:text-[17px] text-[16px]">
                  {t("turningDesc4")}
                </p>

                {commonData.map((data, ind) => {
                  return (
                    <div key={ind}>
                      <h3 className="font-semibold mt-10 text-[#0092E0] 4xl:text-[24px]  2xl:text-[21px]  xl:text-[20px] text-[20px] leading-tight">
                        {data.title}
                      </h3>
                      <p className="mt-5 4xl:text-[20px] xl:text-[17px] text-[16px]">
                        {data.desc1}
                      </p>
                      <p className="mt-5 4xl:text-[20px] xl:text-[17px] text-[16px]">
                        {data.desc2}
                      </p>
                      <UnorderedList
                        arrName={data.list}
                        ulClassName="list-disc 4xl:text-[20px] xl:text-[17px] text-[16px] pl-[36px] lg:pl-[56px] mt-3 font-medium"
                      />
                      {data.desc3 && (
                        <p className="mt-5 4xl:text-[20px] xl:text-[17px] text-[16px]">
                          {data.desc3}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>{" "}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                  {t("benefitsTitle")}
                </h2>
                <p className="mt-[29px] xl:mt-[34px] 4xl:text-[20px] xl:text-[17px] text-[16px] lg:w-[90%]">
                  {t("benefitsDesc")}
                </p>

                <div className="grid md:grid-cols-2 grid-cols-1 gap-[26px] mt-[47px] sm:w-[70%] md:w-[90%] lg:w-[900px] xl:w-[1090px] 3xl:w-[1150px]">
                  {benefitsData.map((data, ind) => {
                    return (
                      <div
                        key={ind}
                        className="border border-[#707070] p-[28px] md:p-[34px]"
                      >
                        <h3 className="mt-5 4xl:text-[22px] xl:text-[19px] text-[18px] leading-tight text-[#0092E0] font-bold pb-4 border-b border-[#707070]">
                          {data.title}
                        </h3>
                        <p className="mt-5 4xl:text-[20px] xl:text-[17px] text-[16px]">
                          {data.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>{" "}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                  {t("turnRemoteTitle")}
                </h2>
                <p className="mt-[29px] xl:mt-[34px] 4xl:text-[20px] xl:text-[17px] text-[16px]">
                  {t("turnDesc")}
                </p>
                <p className="mt-5 4xl:text-[20px] xl:text-[17px] text-[16px]">
                  {t("turnDesc2")}{" "}
                  <Link
                    href={
                      `https://www.rialtes.com/${locale}/solutions/artificial-intelligence/salesforce-agentforce-consulting/`
                    }
                  >
                    <span className="text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline">
                      {t("turnDescLink")}
                    </span>
                  </Link>{" "}
                  {t("turnDesc3")}{" "}
                  <Link
                    href={
                      `https://www.rialtes.com/${locale}/industry/life-sciences/home-health-ai-tech-solutions/`
                    }
                  >
                    <span className="text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline">
                      {" "}
                      {t("turnDescLink2")}
                    </span>
                  </Link>{" "}
                  {t("turnDesc4")}{" "}
                </p>
              </div>
              {/* faq section */}
              <div className="xl:mt-[80px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                  {t("faqTitle")}
                </h2>
                <div className="mt-[29px] xl:mt-[34px]">
                  <FAQAccordion faqData={faqs} />
                </div>
              </div>
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
