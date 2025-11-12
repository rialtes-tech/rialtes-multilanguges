"use client";
import Image from "next/image";
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import FAQAccordion from "@/app/[locale]/components/faqAccordion";
import { useLocale, useTranslations } from "next-intl";
import enContent from "../../../../../../messages/en/blogs.json";
import esContent from "../../../../../../messages/es/blogs.json";
import frContent from "../../../../../../messages/fr/blogs.json";
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";
import useUrl from "@/app/[locale]/components/useUrl";
import BlogSocialIcons from "@/app/[locale]/components/blogSocialIcons";
import FilteredBlogCarousel from "@/app/[locale]/components/FilteredLatestBlogCarousel";
import UnorderedList from "@/app/[locale]/components/unorderedList";

  const schemaData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "5 Essential API Integrations for Real Estate Firms to Accelerate Growth | Rialtes",
  "description": "Discover how open API integrations eliminate data silos and connect CRM, ERP, finance, and property management systems to enable unified operations, real-time reporting, and scalable growth for real estate firms.",
  "image": "https://www.rialtes.com/images/blog/digital-puzzle-technology-integration.webp",
  "author": {
    "@type": "Organization",
    "name": "Rialtes"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Rialtes",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.rialtes.com/images/homepage/logo.svg"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.rialtes.com/insights/blogs/smart-api-integrations-for-real-estate-2026/"
  },
  "datePublished": "2025-10-31",
  "mainEntity": {
    "@type": "FAQPage",
    "name": "Open API Integrations for Real Estate — FAQs",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is an open API in real estate management?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An open API allows different property systems — like CRM, ERP, and finance tools — to securely exchange data, enabling unified operations and real-time updates."
        }
      },
      {
        "@type": "Question",
        "name": "Why is API integration important for real estate companies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It helps eliminate data silos, automate processes, and improve decision-making by synchronizing information across leasing, finance, and maintenance teams."
        }
      },
      {
        "@type": "Question",
        "name": "Can open APIs integrate legacy systems like Yardi or MRI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Open APIs can bridge legacy platforms with modern CRMs and ERPs, allowing seamless data sharing without replacing existing systems."
        }
      },
      {
        "@type": "Question",
        "name": "What are examples of open API integrations in real estate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Common examples include connecting Salesforce CRM with SAP ERP, integrating IoT maintenance tools, or linking tenant apps to communication platforms like WhatsApp."
        }
      },
      {
        "@type": "Question",
        "name": "How do open APIs reduce operational costs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "They eliminate manual data entry, reduce reconciliation errors, and enable automation, saving both time and resources across departments."
        }
      },
      {
        "@type": "Question",
        "name": "How does Exelona support open API integrations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Exelona's open API architecture connects CRM, ERP, finance, IoT, and analytics systems into one platform, providing a single, scalable foundation for unified real estate operations."
        }
      }
    ]
  }
}

  export default function Page() {
     const currUrl = useUrl()
      const t = useTranslations('openApiBlog')
      const locale = useLocale();
      const blogsContent = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
      const { blogMainData,realEstateData ,workData,integrationData,buildData,faqData} = blogsContent.openApiBlog;
      const fullUrl = "https://www.rialtes.com/insights/blogs/smart-api-integrations-for-real-estate-2026";
      
  return (
    <section className="min-h-screen bg-white">
      <Seo
        title={t('seoTitle')}
        description={t('seoDescription')}
        canonical={`https://www.rialtes.com/${locale}/insights/blogs/smart-api-integrations-for-real-estate-2026/`}/>
      <Script
        id="schema-how-succ-support"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="relative 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden">
        <div className="xl:block hidden">
          <Image
            src="/images/blog/digital-puzzle-technology-integration.webp"
            alt={t('bannerAlt')}
            fill
            priority
          />
        </div>
        <div className="xl:hidden block">
          <Image
            src="/images/blog/digital-puzzle-technology-integration-mobile.webp"
            alt={t('bannerAlt')}
            priority
            height={0}
            width={0}
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      <section className="custom-container 4xl:mt-[80px] xl:mt-[60px] mt-[40px]">
        <div className="grid lg:grid-cols-12 grid-cols-12">
          <div className="4xl:col-span-10 xl:col-span-10 lg:col-span-11 col-span-12">
           {/* date and icons */}
            <BlogSocialIcons fullUrl={fullUrl} topic={t('blogTopic')} date="31 October 2025" />

            {/* main blog */}
            <div className="xl:mt-[60px] mt-[42px]">
              <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">
               {t('mainTitle')}
              </h1>
              <div className="xl:mt-[38px] mt-[33px]">
                {blogMainData.map((data, ind) => {
                  return (
                    <p
                      key={ind}
                      className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                      dangerouslySetInnerHTML={{ __html: data }}
                    />
                  );
                })}
              </div>

              {/* Real Estate section */}
              <div className="md:mt-[50px] mt-[40px]">
                {realEstateData.map((data, id) => {
                  return (
                    <div key={id}>
                      <h2 className="mb-[22px] xl:mb-[30px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                        {data.title}
                      </h2>
                      <p
                        className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                        dangerouslySetInnerHTML={{ __html: data.desc }}
                      />
                      <p
                        className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                        dangerouslySetInnerHTML={{ __html: data.desc2 }}
                      />
                      <p
                        className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                        dangerouslySetInnerHTML={{ __html: data.desc3 }}
                      />
                      <UnorderedList
                        arrName={data.list}
                        ulClassName="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc pl-[36px] lg:pl-[56px] font-medium space-y-2"
                      />
                    </div>
                  );
                })}
              </div>

              {/*Open APIs Work section */}
              <div className="md:mt-[50px] mt-[40px]">
                {workData.map((data, ind) => {
                  return (
                    <div key={ind}>
                      <h2 className="mb-[22px] xl:mb-[30px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                        {data.title}
                      </h2>
                      <p
                        className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                        dangerouslySetInnerHTML={{ __html: data.desc }}
                      />
                      <p
                        className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                        dangerouslySetInnerHTML={{ __html: data.desc2 }}
                      />

                      <UnorderedList
                        arrName={data.list}
                        ulClassName="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc pl-[36px] lg:pl-[56px] font-medium space-y-2"
                      />
                      <p
                        className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                        dangerouslySetInnerHTML={{ __html: data.desc3 }}
                      />
                    </div>
                  );
                })}
              </div>
           {/*Integration section */}
              <div className="md:mt-[50px] mt-[40px]">
                {integrationData.map((data, ind) => {
                  return (
                    <div key={ind} className="md:mt-[50px] mt-[40px]">
                      <h2 className="mb-[22px] xl:mb-[30px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                        {data.title}
                      </h2>
                       <p
                        className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                        dangerouslySetInnerHTML={{ __html: data.why }}
                      />
                      
                      <h3 className="font-bold 4xl:text-[22px] 2xl:text-[18px] xl:text-[18px] md:text-[17px] text-[17px] mt-[25px]">
                       {t('enableTitle')}
                      </h3>
                      <ul className="pl-[36px] lg:pl-[56px] space-y-2 mt-5">
                        {data.list.map((enable, id) => {
                          return (
                            <li
                              key={id}
                              className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc font-medium"
                            >
                              <h4 className="font-bold inline 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                {enable.title}{" "}
                              </h4>
                              {enable.description}
                            </li>
                          );
                        })}
                      </ul>
                      
                      <p className="mt-2 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.example}
                      </p>
                    </div>
                  );
                })}
              </div>
               {/*The Bigger Picture: Open APIs Build Scalable Ecosystems section */}
                <div className="md:mt-[50px] mt-[40px]">
                {buildData.map((data, ind) => {
                  return (
                    <div key={ind}>
                      <h2 className="mb-[22px] xl:mb-[30px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                        {data.title}
                      </h2>
                      <p
                        className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                        dangerouslySetInnerHTML={{ __html: data.desc }}
                      />
                      <p
                        className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                        dangerouslySetInnerHTML={{ __html: data.desc2 }}
                      />
                      <p
                        className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                        dangerouslySetInnerHTML={{ __html: data.desc3 }}
                      />
                    <ul className="pl-[36px] lg:pl-[56px] space-y-2 mt-5">
                        {data.list.map((enable, id) => {
                          return (
                            <li
                              key={id}
                              className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc font-medium"
                            >
                              <p className="font-semibold inline 4xl:text-[22px] 2xl:text-[18px] xl:text-[18px] md:text-[17px] text-[17px]">
                                {enable.title}{" "}
                              </p>
                              {enable.description}
                            </li>
                          );
                        })}
                      </ul>
                       <p
                        className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                        dangerouslySetInnerHTML={{ __html: data.desc4 }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* faq section */}
      <section className="xl:mt-[80px] mt-[40px] custom-container">
        <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
          {t('faq')}
        </h2>
        <div className="mt-[29px] xl:mt-[30px]">
          <FAQAccordion faqData={faqData} />
        </div>
      </section>

      {/* blog carousel */}
      <section className="custom-container lg:pr-0 xl:my-[80px] md:my-[60px] my-[40px]">
        <FilteredBlogCarousel url={currUrl} />
      </section>
    </section>
  );
}
