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
    <section className="min-h-screen">
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

      <section className="custom-container pt-[40px] pb-[80px]">
        <div className="grid lg:grid-cols-12">
          <div className="xl:col-span-12">
            <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">{t('headerTitle')}</h1>
            <p className="mt-[29px] xl:mt-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('headerDate')}March 19, 2025.</p>
            <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] mt-5">
              {t("headerDesc")}{" "}
              <a href="https://rialtes.com/" className="text-[#0092E0]">
                https://www.rialtes.com/
              </a>{" "}
              {t("headerDescOne")}
            </p>
            <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] mt-5">{t("headerDescTwo")}</p>
          </div>
        </div>

        <div className="md:mt-[50px] mt-[40px]">
          <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
            {t("collectionTitle")}
          </h2>
          <p className="mt-[22px] xl:mt-[28px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t("collectionDesc")}</p>
          <ul className="list-disc mt-5 space-y-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] pl-[34px] font-medium">
            {privacyList.map((item, idx) => (
              <li key={idx}>
                <h3 className="inline 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{item.title}</h3> :{" "}
                {item.description}
              </li>
            ))}
          </ul>
        </div>

        <div className="md:mt-[50px] mt-[40px]">
          <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
            {t("howTitle")}
          </h2>
          <UnorderedList
            ulClassName="list-disc mt-5 space-y-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] pl-[34px] font-medium"
            liClassName=""
            arrName={purposeList}
          />
        </div>
        <div className="md:mt-[50px] mt-[40px]">
          <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
            {t("shareTitle")}
          </h2>
          <p className="mt-[22px] xl:mt-[28px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t("shareDesc")}</p>
          <ul className="list-disc mt-5 space-y-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] pl-[34px] font-medium">
            {sharingList.map((item, idx) => (
              <li key={idx}>
                <h3 className="inline 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{item.title}</h3> :{" "}
                {item.description}
              </li>
            ))}
          </ul>
        </div>


        <div className="md:mt-[50px] mt-[40px]">
          <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
            {t("dataTitle")}
          </h2>
          <p className="mt-[22px] xl:mt-[28px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t("dataDesc")}</p>
        </div>

        <div className="md:mt-[50px] mt-[40px]">
          <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
            {t("yourTitle")}
          </h2>
          <p className="mt-[22px] xl:mt-[28px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t("yourDesc")}</p>

          <UnorderedList
            ulClassName="list-disc mt-5 space-y-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] pl-[34px] font-medium"
            liClassName=""
            arrName={userRightsList}
          />
        </div>

        <div className="md:mt-[50px] mt-[40px]">
          <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
            {t("thirdTitle")}
          </h2>
          <p className="mt-[22px] xl:mt-[28px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t("thirdDesc")}</p>
        </div>

        <div className="md:mt-[50px] mt-[40px]">
          <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
            {t("childTitle")}
          </h2>
          <p className="mt-[22px] xl:mt-[28px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t("childDesc")}</p>
        </div>


        <div className="md:mt-[50px] mt-[40px]">
          <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
            {t("residentsTitle")}
          </h2>
          <p className="mt-[22px] xl:mt-[28px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t("residentsDesc")}</p>
          <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t("underTitle")}</p>
          <UnorderedList
            ulClassName="list-disc mt-5 space-y-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] pl-[34px] font-medium"
            liClassName=""
            arrName={californiaRightsList}
          />
          <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t("underDesc")}</p>
        </div>

        <div className="md:mt-[50px] mt-[40px]">
          <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
            {t("euTitle")}
          </h2>
          <p className="mt-[22px] xl:mt-[28px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t("euDesc")}</p>
          <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t("yourRight")}</p>
          <ul className="list-disc mt-5 space-y-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] pl-[34px] font-medium">
            {euRightsList.map((item, idx) => (
              <li key={idx}>
                <h3 className="inline 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{item.title}</h3> –{" "}
                {item.description}
              </li>
            ))}
          </ul>

          <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
            {t("forDetails")}{" "}
            <a className="text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
              href="https://www.edpb.europa.eu/about-edpb/about-edpb/members_en">
              {t("forDesc")}
            </a>{" "}
            .
          </p>
        </div>

        <div className="md:mt-[50px] mt-[40px]">
          <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
            {t("changeTitle")}
          </h2>
          <p className="mt-[22px] xl:mt-[28px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t("changeDesc")}</p>
        </div>
        <div className="md:mt-[50px] mt-[40px]">
          <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
            {t("contactUs")}
          </h2>
          <p className="mt-[22px] xl:mt-[28px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
            {t("thankYou")}{" "}
            <a className="text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
              href="https://rialtes.netlify.app/contact-us">
              {t("contactForm")}
            </a>.
          </p>
        </div>

      </section>
    </section>
  );
}
