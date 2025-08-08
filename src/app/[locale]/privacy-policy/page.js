"use client";
import Script from "next/script";
// pages/case-study-detail.js
import Seo from "../components/Seo";
import UnorderedList from "@/app/[locale]/components/unorderedList";
import { useLocale, useTranslations } from "next-intl";
import enContent from "../../../../messages/en/homepage.json";
import esContent from "../../../../messages/es/homepage.json";

export default function Page() {
  const t = useTranslations("privacyPolicy");
  const locale = useLocale();
  const privacyPolicycontent = locale === "es" ? esContent : enContent;
  const {
    privacyList,
    purposeList,
    sharingList,
    userRightsList,
    californiaRightsList,
    euRightsList,
  } = privacyPolicycontent.privacyPolicy;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy",
    description:
      "This page explains Rialtes' policies on data privacy and user information protection.",
  };
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Privacy Policy | Rialtes"
        description="Read Rialtes' Privacy Policy to understand how we collect, use, and protect your personal information while delivering exceptional IT consulting services."
        keywords="Contact, website, welcome"
        canonical={"https://www.rialtes.com/privacy-policy/"}
      />
      <Script
        id="schema-privacy"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <section className="custom-container">
        <div className="py-10 xl:max-w-[1084px] xl:w-[1084px]">
          <div>
            <h1 className="text-[#0092E0] pb-4">{t("headerTitle")}</h1>
          </div>
          <div>
            <p className="text-black pb-4">{t("headerDate")}</p>
            <p className="text-black pb-4">
              {t("headerDesc")}{" "}
              <a href="https://rialtes.com/" className="text-[#0092E0]">
                https://www.rialtes.com/
              </a>{" "}
              {t("headerDescOne")}
            </p>
            <p className="text-black">{t("headerDescTwo")}</p>
            <div className="py-6"></div>
            <h2 className="text-[#0092E0] font-medium xl:text-[30px] text-[20px] pb-4">
              {t("collectionTitle")}
            </h2>
            <p className="text-black">{t("collectionDesc")}</p>
            <div className="py-6"></div>
            <h2 className="text-[#0092E0] font-medium xl:text-[30px] text-[20px] pb-4">
              {t("collectTitle")}
            </h2>
            <p className="text-black pb-4">{t("collectDesc")}</p>

            <div className="pl-3">
              <ul className="list-disc marker:text-[#0092E0] marker:text-xl text-black pl-4 xl:text-[20px] text-[16px] font-medium">
                {privacyList.map((item, idx) => (
                  <li className="text-black pb-4" key={idx}>
                    <h4 className="inline ">{item.title}</h4> :{" "}
                    {item.description}
                  </li>
                ))}
              </ul>
            </div>

            <div className="py-6"></div>

            <h2 className="text-[#0092E0] font-medium xl:text-[30px] text-[20px] pb-4">
              {t("howTitle")}
            </h2>
            <div className="pl-3">
              <UnorderedList
                ulClassName="list-disc marker:text-[#0092E0] marker:text-xl text-black pl-4 xl:text-[20px] text-[16px] font-medium"
                liClassName="text-black pb-4 last:pb-0"
                arrName={purposeList}
              />
            </div>

            <div className="py-6"></div>

            <h2 className="text-[#0092E0] font-medium xl:text-[30px] text-[20px] pb-4">
              {t("shareTitle")}
            </h2>
            <p className="text-black pb-4">{t("shareDesc")}</p>

            <div className="pl-3">
              <ul className="list-disc marker:text-[#0092E0] marker:text-xl text-black pl-4 xl:text-[20px] text-[16px] font-medium">
                {sharingList.map((item, idx) => (
                  <li className="text-black pb-4 last:pb-0" key={idx}>
                    <h4 className="inline ">{item.title}</h4> :{" "}
                    {item.description}
                  </li>
                ))}
              </ul>
            </div>

            <div className="py-6"></div>

            <h2 className="text-[#0092E0] font-medium xl:text-[30px] text-[20px] pb-4">
              {t("dataTitle")}
            </h2>
            <p className="text-black">{t("dataDesc")}</p>

            <div className="py-6"></div>

            <h2 className="text-[#0092E0] font-medium xl:text-[30px] text-[20px] pb-4">
              {t("yourTitle")}
            </h2>
            <p className="text-black pb-4">{t("yourDesc")}</p>
            <div className="pl-3">
              <UnorderedList
                ulClassName="list-disc marker:text-[#0092E0] marker:text-xl text-black pl-4 xl:text-[20px] text-[16px] font-medium"
                liClassName="text-black pb-4 last:pb-0"
                arrName={userRightsList}
              />
            </div>

            <div className="py-6"></div>

            <h2 className="text-[#0092E0] font-medium xl:text-[30px] text-[20px] pb-4">
              {t("thirdTitle")}
            </h2>
            <p className="text-black">{t("thirdDesc")}</p>

            <div className="py-6"></div>

            <h2 className="text-[#0092E0] font-medium xl:text-[30px] text-[20px] pb-4">
              {t("childTitle")}
            </h2>
            <p className="text-black">{t("childDesc")}</p>

            <div className="py-6"></div>

            <h2 className="text-[#0092E0] font-medium xl:text-[30px] text-[20px] pb-4">
              {t("residentsTitle")}
            </h2>
            <p className="text-black pb-4">{t("residentsDesc")}</p>
            <p className="pb-4">{t("underTitle")}</p>
            <div className="pl-3">
              <UnorderedList
                ulClassName="list-disc marker:text-[#0092E0] marker:text-xl text-black pl-4 xl:text-[20px] text-[16px] font-medium"
                liClassName="text-black pb-4 last:pb-0"
                arrName={californiaRightsList}
              />
            </div>
            <p className="text-black pt-2">{t("underDesc")}</p>

            <div className="py-6"></div>

            <h2 className="text-[#0092E0] font-medium xl:text-[30px] text-[20px] pb-4">
              {t("euTitle")}
            </h2>
            <p className="pb-4 text-black">{t("euDesc")}</p>
            <p>{t("yourRight")}</p>
            <ol className="list-none marker:text-[#0092E0] marker:text-xl text-black xl:text-[20px] text-[16px] font-medium">
              {euRightsList.map((item, idx) => (
                <li key={idx} className="pb-2">
                  <h3 className="h3-bold mt-3 inline">{item.title}</h3> –{" "}
                  {item.description}
                </li>
              ))}
            </ol>
            <p className="mt-3 text-black">
              {t("forDetails")}{" "}
              <a
                className="text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline"
                href="https://www.edpb.europa.eu/about-edpb/about-edpb/members_en"
              >
                {t("forDesc")}
              </a>{" "}
              .
            </p>

            <div className="py-6"></div>

            <h2 className="text-[#0092E0] font-medium xl:text-[30px] text-[20px] pb-4">
              {" "}
              {t("changeTitle")}
            </h2>
            <p className="text-black">{t("changeDesc")}</p>

            <div className="py-6"></div>

            <h2 className="text-[#0092E0] font-medium xl:text-[30px] text-[20px] pb-4">
              {t("contactUs")}
            </h2>
            <p className="text-black">
              {t("thankYou")}{" "}
              <a
                className="text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline"
                href="https://rialtes.netlify.app/contact-us"
              >
                {t("contactForm")}
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
