"use client";
import Image from "next/image";
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import UnorderedList from "@/app/[locale]/components/unorderedList";
import FAQAccordion from "@/app/[locale]/components/faqAccordion";
import { useLocale, useTranslations } from "next-intl";
import enContent from "../../../../../../messages/en/blogs.json";
import esContent from "../../../../../../messages/es/blogs.json";
import frContent from "../../../../../../messages/fr/blogs.json";
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";
import BlogSocialIcons from "@/app/[locale]/components/blogSocialIcons";
import FilteredBlogCarousel from "@/app/[locale]/components/FilteredLatestBlogCarousel";
import useUrl from "@/app/[locale]/components/useUrl";

export default function Page() {
  const t = useTranslations("beyondRobotics");
  const locale = useLocale();
  const blogsContent = changeLocalization(locale, {
    en: enContent,
    es: esContent,
    fr: frContent,
  });
  const {
    blogMainData,
    whyNeedShiftData,
    agentforceData,
    manufacturingAreasData,
    agentforceTable,
    agenticData,
    readyToUpgradeData,
    faqData,
    readyDesc,
    schemaData,
  } = blogsContent.beyondRobotics;
  const fullUrl =
    "https://www.rialtes.com/insights/blogs/why-ai-agents-are-the-future-of-smart-manufacturing/";
  const currUrl = useUrl();

  return (
    <div className="min-h-screen">
      <Seo
        title={t("seoTitle")}
        description={t("seoDescription")}
        keywords="Partners, website, welcome"
        canonical={`https://www.rialtes.com/${locale}/insights/blogs/why-ai-agents-are-the-future-of-smart-manufacturing/`}
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
            src="/images/blog/industrial-digital-twin-factory-planning.webp"
            alt={t("bannerAlt")}
            fill
            priority
          />
        </div>
        <div className="xl:hidden block">
          <Image
            src="/images/blog/industrial-digital-twin-factory-planning-mobile.webp"
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
          <div className="4xl:col-span-10 xl:col-span-10 lg:col-span-11">
            {/* date and icons */}
            <BlogSocialIcons
              fullUrl={fullUrl}
              topic={t("blogTopic")}
              date="01 September 2025"
            />
            {/* main blog */}
            <div className="xl:mt-[60px] mt-[42px]">
              <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">
                {t("blogTitle")}
              </h1>
              <div className="xl:mt-[38px] mt-[33px]">
                <h3 className="4xl:text-[24px]  2xl:text-[21px]  xl:text-[20px] text-[20px] leading-tight font-bold max-[335px]:mr-[30px]">
                  {t("roboticTitle")}
                </h3>
                {blogMainData.map((data, ind) => {
                  return (
                    <p
                      key={ind}
                      className="mt-5 4xl:text-[20px] xl:text-[17px] text-[16px]"
                      dangerouslySetInnerHTML={{ __html: data }}
                    />
                  );
                })}
              </div>
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                  {t("whyNeedTitle")}
                </h2>
                <p className="mt-[29px] xl:mt-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t("whyNeedDesc")}
                </p>
                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t("whyNeedDesc2")}
                </p>
                <UnorderedList
                  arrName={whyNeedShiftData}
                  ulClassName="mt-3 list-disc 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px]  text-[16px] pl-[36px] lg:pl-[56px]  space-y-2 font-medium max-[335px]:mr-[30px]"
                  liClassName=""
                />
                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t("whyNeedDesc3")}
                </p>
              </div>
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                  {t("agentforceTitle")}
                </h2>
                <p className="mt-[29px] xl:mt-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t("agentforceDesc")}
                </p>
                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t("agentforceDesc2")}, 
                  {t("agentforceDesc3")}
                </p>
                <UnorderedList
                  arrName={agentforceData}
                  ulClassName="mt-3 list-disc 4xl:text-[20px] xl:text-[17px] text-[16px] pl-[36px] lg:pl-[56px] space-y-2 font-medium max-[335px]:mr-[30px]"
                  liClassName=""
                />
                <p className="mt-4  4xl:text-[20px] xl:text-[17px] text-[16px]">
                  {t("manufacturingTitle")}
                </p>
                {manufacturingAreasData.map((data, ind) => {
                  return (
                    <div className="xl:pl-[15px]" key={ind}>
                      <h3 className="4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] text-[20px] leading-tight mt-8 font-bold max-[335px]:mr-[30px]">
                        {ind + 1}. {data.title}
                      </h3>
                      <p className="mt-5 4xl:text-[20px] xl:text-[17px] text-[16px]">
                        {data.desc}
                      </p>
                      {data.desc3 && (
                        <p className="mt-5 4xl:text-[20px] xl:text-[17px] text-[16px]">
                          {data.desc3}
                        </p>
                      )}
                      {data.list && (
                        <UnorderedList
                          arrName={data.list}
                          ulClassName="mt-5  list-disc font-medium 4xl:text-[20px] xl:text-[17px] text-[16px] pl-[36px] lg:pl-[56px]  space-y-2 max-[335px]:mr-[30px]"
                          liClassName=""
                        />
                      )}
                      {data.desc2 && (
                        <p
                          className="mt-5 4xl:text-[20px] xl:text-[17px] text-[16px]"
                          dangerouslySetInnerHTML={{ __html: data.desc2 }}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                  {t("whatAgentforceTitle")}
                </h2>
                <p className="mt-[29px] xl:mt-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t("whatAgentforceDesc")}
                </p>
                <div className="w-full max-w-3xl mx-auto py-10">
                  <div className="overflow-x-auto">
                    <table className="w-full border border-gray-300 text-left text-sm md:text-base ">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="border border-gray-300 max-[335px]:p-[9px] p-3 font-semibold">
                            {t("tableTitle")}
                          </th>
                          <th className="border border-gray-300 p-3 max-[335px]:p-[9px] font-semibold">
                            {t("tableTitle2")}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {agentforceTable.map((row, idx) => (
                          <tr key={idx}>
                            <td className="border border-gray-300 p-3 max-[335px]:p-[9px]">
                              {row.robotic}
                            </td>
                            <td className="border border-gray-300 p-3 max-[335px]:p-[9px]">
                              {row.agents}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t("whatAgentforceDesc2")}
                </p>
                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t("whatAgentforceDesc3")}
                </p>
              </div>
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                  {t("agenticTitle")}
                </h2>
                <p className="mt-[29px] xl:mt-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t("agenticDesc")}
                </p>
                <ul className="mt-4 list-disc 4xl:text-[20px] xl:text-[17px] text-[16px] pl-[36px] lg:pl-[56px]  max-[335px]:mr-[15px] space-y-2 font-medium">
                  {agenticData.map((item, idx) => {
                    const [before, ...afterParts] = item.desc.split(
                      item.highlight
                    );
                    const after = afterParts.join(item.highlight);
                    return (
                      <li key={idx}>
                        {before}
                        <strong>{item.highlight}</strong>
                        {after}
                      </li>
                    );
                  })}
                </ul>
                <p className="mt-4 4xl:text-[20px] xl:text-[17px] text-[16px]">
                  {t("agenticDesc2")}
                </p>
              </div>
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                  {t("readyTitle")}
                </h2>
                <div className="mt-[29px] xl:mt-[34px]">
                  <p
                    className="mt-5 mb-4 4xl:text-[20px] xl:text-[17px] text-[16px]"
                    dangerouslySetInnerHTML={{
                      __html: readyToUpgradeData.desc1,
                    }}
                  />
                  {readyToUpgradeData.list.map((item, i) => (
                    <p
                      key={i}
                      className="mt-1 4xl:text-[20px] xl:text-[17px] text-[16px]"
                    >
                      {item}
                    </p>
                  ))}
                  <p className="mt-2 4xl:text-[20px] xl:text-[17px] text-[16px]">
                    {readyToUpgradeData.desc2}
                  </p>
                  <p
                    className="mt-3 4xl:text-[20px] xl:text-[17px] text-[16px]"
                    dangerouslySetInnerHTML={{
                      __html: readyToUpgradeData.desc3,
                    }}
                  />
                </div>
                <p
                  className="mt-5 4xl:text-[20px] xl:text-[17px] text-[16px] leading-tight font-bold"
                  dangerouslySetInnerHTML={{ __html: readyDesc }}
                />
              </div>
              <section className="xl:mt-[80px] mt-[40px]">
                <div className="mt-[29px] xl:mt-[34px]">
                  <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                    {t("faqTitle")}
                  </h2>
                  <FAQAccordion faqData={faqData} />
                </div>
              </section>
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
