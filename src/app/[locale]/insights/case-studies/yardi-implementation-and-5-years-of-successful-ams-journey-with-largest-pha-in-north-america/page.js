"use client";
import Image from "next/image";
import RelatedTopicsCarousel from "../../../components/relatedTopicsCarousel";
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import { changeLocalization } from "../../components/changeLocalization";
import UnorderedList from "@/app/[locale]/components/unorderedList";
import { useLocale, useTranslations } from "next-intl";
import enContent from "../../../../../../messages/en/caseStudy.json";
import esContent from "../../../../../../messages/es/caseStudy.json";

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Article",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://www.rialtes.com/insights/case-studies/yardi-implementation-and-5-years-of-successful-ams-journey-with-largest-pha-in-north-america/",
  },
  headline: "Case Study: Trusted YARDI Partner for North America’s Largest PHA",
  description:
    "Explore how Rialtes partnered with North America’s largest PHA for a full-scale Yardi implementation and provided 5 years of robust AMS support, ensuring operational excellence and compliance.",
  image: "https://www.rialtes.com/images/case-studies/case-study-5.webp",
  author: {
    "@type": "Organization",
    name: "Rialtes",
  },
  publisher: {
    "@type": "Organization",
    name: "Rialtes",
    logo: {
      "@type": "ImageObject",
      url: "https://www.rialtes.com/images/homepage/logo.svg",
    },
  },
  articleSection: "Case Studies",
  datePublished: "2024-09-27",
};

export default function Page() {
  const t = useTranslations("yardiCaseStudy");
  const locale = useLocale();
  const Content = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
  const { challengesList, solutionStepsList, benefitsList, slides } =
    Content.yardiCaseStudy;

  const fullUrl =
    "https://www.rialtes.com/insights/case-studies/yardi-implementation-and-5-years-of-successful-ams-journey-with-largest-pha-in-north-america";

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Yardi Implementation Case Study: 5 Years, 1 PHA, and Big Wins"
        description="Explore our Yardi implementation case study to see how we supported a 5-year digital transformation journey with Yardi AMS for long-term success."
        canonical="https://www.rialtes.com/insights/case-studies/yardi-implementation-and-5-years-of-successful-ams-journey-with-largest-pha-in-north-america/"
      />
      <Script
        id="schema-yardi"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="relative h-[250px] sm:h-[500px] lg:h-[650px] overflow-hidden">
        <Image
          src="/images/case-studies/publicsector (1).webp "
          alt="A public housing in US"
          fill
          style={{ objectFit: "cover", objectPosition: "40% 20%" }}
          priority
        />
      </section>

      <section className="custom-container">
        <div className="py-10 bg-white 4xl:max-w-[1080px] 4xl:w-[1080px] xl:w-[900px]">
          <div>
            <h1 className="text-[#000000] py-6 leading-tight text-[26px]  4xl:text-[60px] xl:text-[45px]">
              {t("headerTitle")}
            </h1>
          </div>
          <div className="py-2"></div>
          <div>
            <div className="flex flex-col md:flex-row justify-between text-black">
              <div className="pb-6">
                <span className="text-[#0092E0]">{t("publicTitle")}</span>{" "}
                <span className="text-[#ACACAC]"> | </span>
                {t("date")}
              </div>
              <div className="flex flex-col">
                <span>{t("read")}</span>
              </div>
            </div>
            <div className="pt-4"></div>
            <div className="flex flex-row gap-6 ml-[-8px]">
              <div className="max-w-[40px]">
                <a
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                    fullUrl
                  )}&title=A%20public%20housing%20in%20US&summary=Summary%20of%20the%20case%20study&source=LinkedIn`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/case-studies/linkedin.svg"
                    alt="LinkedIn"
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
                </a>
              </div>
              <div className="max-w-[40px]">
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                    fullUrl
                  )}&text=Check%20out%20this%20blog%20on%20Agriculture%204.0!`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <Image
                    src="/images/case-studies/twitter.svg"
                    alt="Twitter"
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
                </a>
              </div>
            </div>
          </div>

          <div className="py-6"></div>
          <div>
            <div>
              <h3 className=" font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4">
                {t("clientTitle")}
              </h3>
              <p className="text-black">{t("clientDesc")}</p>
              <div className="py-6"></div>

              <h3 className=" font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4">
                {t("challengesTitle")}
              </h3>
              <p className="pb-4 text-black">{t("challengesDesc")}</p>
                <ul className="list-disc marker:text-[#0092E0] marker:text-xl text-black pl-4 xl:text-[20px] text-[16px] md:text-[19px] font-medium ">
                  {challengesList.map((item, idx) => (
                    <li className="pb-4 last:pb-0" key={idx}>
                      <h3 className="inline h3-bold xl:text-[20px] text-[17px] md:text-[19px]">
                        {item.title}
                      </h3> : {item.description}
                    </li>
                  ))}
                </ul>
          

              <div className="py-6"></div>

              <h3 className=" font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4">
                {t("solutionsTitle")}{" "}
              </h3>

              <p className="text-black pb-4">{t("solutionsDesc")}</p>
               <ul className="list-disc marker:text-[#0092E0] marker:text-xl text-black pl-4 xl:text-[20px] text-[16px] md:text-[19px] font-medium ">
                  {solutionStepsList.map((item, idx) => (
                    <li className="pb-4 last:pb-0" key={idx}>
                      <h3 className="inline h3-bold xl:text-[20px] text-[17px] md:text-[19px]">
                        {item.title}
                      </h3> : {item.description}
                    </li>
                  ))}
                </ul>
      
            </div>
          </div>
          <div className="py-6"></div>
          <div>
            <div>
              <h3 className=" font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4">
                {t("benefits")}
              </h3>
              <UnorderedList
                ulClassName="list-disc marker:text-[#0092E0] text-black pl-4 xl:text-[20px] text-[16px] font-medium"
                liClassName="pb-4"
                arrName={benefitsList}
              />
            </div>
          </div>
          <div className="py-6"></div>
        </div>
      </section>

      {/* Latest Blogs */}
      <div className="pb-10 custom-container lg:pr-0">
        <RelatedTopicsCarousel slides={slides} />
      </div>
    </div>
  );
}
