"use client";
import Script from "next/script";
import Seo from "../components/Seo";
import UnorderedList from "@/app/[locale]/components/unorderedList";
import { useLocale, useTranslations } from "next-intl";
import enContent from "../../../../messages/en/homepage.json";
import esContent from "../../../../messages/es/homepage.json";
import frContent from "../../../../messages/fr/homepage.json";
import { changeLocalization } from "../components/changeLocalization";

export default function Page() {
  const t = useTranslations("privacyPolicy");
  const locale = useLocale();
  const privacyPolicycontent = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
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
            <h1 className="text-[#0092E0] 4xl:text-[60px] xl:text-[40px] text-[26px] pb-4">{t("headerTitle")}</h1>
          </div>
          <div>
            <p className="4xl:text-[22px] xl:text-[18px] text-[16px] pb-4">{t("headerDate")}</p>
            <p className="4xl:text-[22px] xl:text-[18px] text-[16px] pb-4">
              {t("headerDesc")}{" "}
              <a href="https://rialtes.com/" className="text-[#0092E0]">
                https://www.rialtes.com/
              </a>{" "}
              {t("headerDescOne")}
            </p>
            <p className="4xl:text-[22px] xl:text-[18px] text-[16px]">{t("headerDescTwo")}</p>
            <div className="py-6"></div>
            <h2 className="text-[#0092E0] font-medium 4xl:text-[30px] xl:text-[26px] text-[20px] pb-4">
              {t("collectionTitle")}
            </h2>
            <p className="4xl:text-[22px] xl:text-[18px] text-[16px]">{t("collectionDesc")}</p>
            <div className="py-6"></div>
            <h2 className="text-[#0092E0] font-medium 4xl:text-[30px] xl:text-[26px] text-[20px] pb-4">
              {t("collectTitle")}
            </h2>
            <p className="4xl:text-[22px] xl:text-[18px] text-[16px] pb-4">{t("collectDesc")}</p>

            <div className="pl-3">
              <ul className="list-disc marker:text-[#0092E0] marker:text-xl pl-[26px] font-medium">
                {privacyList.map((item, idx) => (
                  <li className="4xl:text-[22px] xl:text-[18px] text-[16px] pb-4" key={idx}>
                    <h4 className="inline ">{item.title}</h4> :{" "}
                    {item.description}
                  </li>
                ))}
              </ul>
            </div>

            <div className="py-6"></div>

            <h2 className="text-[#0092E0] font-medium 4xl:text-[30px] xl:text-[26px] text-[20px] pb-4">
              {t("howTitle")}
            </h2>
            <div className="pl-3">
              <UnorderedList
                ulClassName="list-disc marker:text-[#0092E0] marker:text-xl pl-[26px] font-medium"
                liClassName="4xl:text-[22px] xl:text-[18px] text-[16px] pb-3 last:pb-0"
                arrName={purposeList}
              />
            </div>

            <div className="py-6"></div>

            <h2 className="text-[#0092E0] font-medium 4xl:text-[30px] xl:text-[26px] text-[20px] pb-4">
              {t("shareTitle")}
            </h2>
            <p className="4xl:text-[22px] xl:text-[18px] text-[16px] pb-4">{t("shareDesc")}</p>

            <div className="pl-3">
              <ul className="list-disc marker:text-[#0092E0] marker:text-xl pl-[26px] font-medium">
                {sharingList.map((item, idx) => (
                  <li className="4xl:text-[22px] xl:text-[18px] text-[16px] pb-4 last:pb-0" key={idx}>
                    <h4 className="inline ">{item.title}</h4> :{" "}
                    {item.description}
                  </li>
                ))}
              </ul>
            </div>

            <div className="py-6"></div>

            <h2 className="text-[#0092E0] font-medium 4xl:text-[30px] xl:text-[26px] text-[20px] pb-4">
              {t("dataTitle")}
            </h2>
            <p className="4xl:text-[22px] xl:text-[18px] text-[16px]">{t("dataDesc")}</p>

            <div className="py-6"></div>

            <h2 className="text-[#0092E0] font-medium 4xl:text-[30px] xl:text-[26px] text-[20px] pb-4">
              {t("yourTitle")}
            </h2>
            <p className="4xl:text-[22px] xl:text-[18px] text-[16px] pb-4">{t("yourDesc")}</p>
            <div className="pl-3">
              <UnorderedList
                ulClassName="list-disc marker:text-[#0092E0] marker:text-xl pl-[26px] font-medium"
                liClassName="4xl:text-[22px] xl:text-[18px] text-[16px] pb-3 last:pb-0"
                arrName={userRightsList}
              />
            </div>

            <div className="py-6"></div>

            <h2 className="text-[#0092E0] font-medium 4xl:text-[30px] xl:text-[26px] text-[20px] pb-4">
              {t("thirdTitle")}
            </h2>
            <p className="4xl:text-[22px] xl:text-[18px] text-[16px]">{t("thirdDesc")}</p>

            <div className="py-6"></div>

            <h2 className="text-[#0092E0] font-medium 4xl:text-[30px] xl:text-[26px] text-[20px] pb-4">
              {t("childTitle")}
            </h2>
            <p className="4xl:text-[22px] xl:text-[18px] text-[16px]">{t("childDesc")}</p>

            <div className="py-6"></div>

            <h2 className="text-[#0092E0] font-medium 4xl:text-[30px] xl:text-[26px] text-[20px] pb-4">
              {t("residentsTitle")}
            </h2>
            <p className="4xl:text-[22px] xl:text-[18px] text-[16px] pb-4">{t("residentsDesc")}</p>
            <p className="4xl:text-[22px] xl:text-[18px] text-[16px] pb-4">{t("underTitle")}</p>
            <div className="pl-3">
              <UnorderedList
                ulClassName="list-disc marker:text-[#0092E0] marker:text-xl  pl-[26px] font-medium"
                liClassName="4xl:text-[22px] xl:text-[18px] text-[16px] pb-3"
                arrName={californiaRightsList}
              />
            </div>
            <p className="4xl:text-[22px] xl:text-[18px] text-[16px] pt-2">{t("underDesc")}</p>

            <div className="py-6"></div>

            <h2 className="text-[#0092E0] font-medium 4xl:text-[30px] xl:text-[26px] text-[20px] pb-4">
              {t("euTitle")}
            </h2>
            <p className="pb-4 4xl:text-[22px] xl:text-[18px] text-[16px]">{t("euDesc")}</p>
            <p className="4xl:text-[22px] xl:text-[18px] text-[16px]">{t("yourRight")}</p>
            <ol className="list-none marker:text-[#0092E0] marker:text-xl pl-[26px] mt-3 font-medium">
              {euRightsList.map((item, idx) => (
                <li key={idx} className="pb-2 4xl:text-[22px] xl:text-[18px] text-[16px]">
                  <h3 className="h3-bold inline 4xl:text-[22px] xl:text-[18px] text-[16px]">{item.title}</h3> –{" "}
                  {item.description}
                </li>
              ))}
            </ol>
            <p className="mt-3 4xl:text-[22px] xl:text-[18px] text-[16px]">
              {t("forDetails")}{" "}
              <a className="text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline 4xl:text-[22px] xl:text-[18px] text-[16px]"
                href="https://www.edpb.europa.eu/about-edpb/about-edpb/members_en">
                {t("forDesc")}
              </a>{" "}
              .
            </p>

            <div className="py-6"></div>

            <h2 className="text-[#0092E0] font-medium 4xl:text-[30px] xl:text-[26px] text-[20px] pb-4">
              {" "}
              {t("changeTitle")}
            </h2>
            <p className="4xl:text-[22px] xl:text-[18px] text-[16px]">{t("changeDesc")}</p>

            <div className="py-6"></div>

            <h2 className="text-[#0092E0] font-medium 4xl:text-[30px] xl:text-[26px] text-[20px] pb-4">
              {t("contactUs")}
            </h2>
            <p className="4xl:text-[22px] xl:text-[18px] text-[16px]">
              {t("thankYou")}{" "}
              <a className="text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline 4xl:text-[22px] xl:text-[18px] text-[16px]"
                href="https://rialtes.netlify.app/contact-us">
                {t("contactForm")}
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
