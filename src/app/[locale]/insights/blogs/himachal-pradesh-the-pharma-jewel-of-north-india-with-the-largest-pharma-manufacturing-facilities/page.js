"use client";
import Image from "next/image";
import BlogsCarousel from '../../../components/latestBlogCarousel';
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import enContent from '../../../../../../messages/en/blogs.json';
import esContent from '../../../../../../messages/es/blogs.json';
import UnorderedList from "@/app/[locale]/components/unorderedList";
const schemaData = {};
const fullUrl = "https://www.rialtes.com/insights/blogs/himachal-pradesh-the-pharma-jewel-of-north-india-with-the-largest-pharma-manufacturing-facilities";
export default function Page() {
  const t = useTranslations("himachalBlog");
  const locale = useLocale();
  const content = locale === "es" ? esContent : enContent;
  const { blogs, blogMainData, pharmaData, economicData, economicData2, economicData3, hmData } = content.himachalBlog
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="The Rise of Himachal in India’s Pharma Industry | Rialtes"
        description="Explore how Himachal Pradesh became a pharma manufacturing leader with SEZs, tax breaks, global supply links, and 600+ certified production units."
        canonical={
          "https://www.rialtes.com/insights/blogs/himachal-pradesh-the-pharma-jewel-of-north-india-with-the-largest-pharma-manufacturing-facilities/"
        }
      />
      <Script
        id="schema-himachal"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <section className="relative h-[350px] md:h-[500px]  4xl:h-[650px]  overflow-hidden">
        <Image
          src="/images/blog/Pharma Jewel of North India_Blog banner.webp"
          alt="Himachal Pradesh: The Pharma Jewel of North India"
          fill
          style={{ objectFit: "cover", objectPosition: "50% 20%" }}
          priority
          className="w-full h-full xl:block hidden "
        />
        <Image
          src="/images/blog/Pharma Jewel of North India_Blog mobile banner.webp"
          alt="Himachal Pradesh: The Pharma Jewel of North India"
          fill
          priority
          className="xl:hidden block"
          style={{ objectFit: "cover", objectPosition: "50% 20%" }}
        />
      </section>

      <section className="custom-container">
        <div className="py-10 bg-white  max-w-[1084px] xl:w-[1084px]">
          <div>
            <div className="flex flex-col md:flex-row justify-between text-black items-center  ">
              <div className="sm:mb-0 mb-6 text-[16px] md:text-[20px]">
                <span className="text-[#0092E0]"> {t('blogTopic')}</span>{" "}
                <span className="text-[#ACACAC]"> | </span>01 July 2025
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row gap-6">
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
                      rel="noopener noreferrer">
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
            </div>
          </div>
          <div className="py-6"></div>
          <div>
            <h1 className="text-[#000000] font-semibold pb-10  4xl:w-full xl:w-[950px] leading-tight 4xl:text-[60px] xl:text-[50px] text-[26px]">
              {t('blogTitle')}
            </h1>
          </div>

          <div>
            <div>
              {
                blogMainData.map((data, ind) => {
                  return (
                    <p className="text-black pb-6" key={ind}>
                      {data}
                    </p>
                  )
                })
              }
              <Image
                src="/images/blog/infographic.png"
                alt="India's impact on the global pharmaceutical industry"
                width={0}
                height={0}
                className="w-full h-full relative xl:right-[64px] lg:right-[55px] md:right-[44px]" />
              <div className="py-6 xl:py-0"></div>
              <h2 className=" pb-4 font-medium text-[#0092E0] xl:text-[30px] md:text-[24px] text-[20px]">
                {t('northernTitle')} {" "}
              </h2>
              <p className="text-black pb-4">
                {t('northerData')}    {" "}
              </p>
              <p className="text-black">
                {t('northerData2')}
              </p>
              <div className="py-6"></div>
              <h2 className=" pb-4 font-medium text-[#0092E0] xl:text-[30px] md:text-[24px] text-[20px]">
                {t('pharmaTitle')}
              </h2>
              {
                pharmaData.map((data, ind) => {
                  return (
                    <p className="text-black pb-4" key={ind}>
                      {data}
                    </p>

                  )
                })
              }
              <div className="py-6"></div>
              <h2 className=" pb-4 font-medium text-[#0092E0] xl:text-[30px] md:text-[24px] text-[20px]">
                {t('economicTitle')}    {" "}
              </h2>

              <p className="text-black pb-4">
                {t('economicDesc')}
              </p>

              <p className="text-black pb-4">
                {t('economicDesc2')}
              </p>
              <div className="pl-3 pb-4">
                <UnorderedList arrName={economicData} ulClassName="list-disc marker:text-[#0092E0] marker:text-xl text-black pl-4 text-[16px] md:text-[20px] font-medium" />
              </div>

              <p className="pb-4 text-black">
                {t('economicDesc3')}
              </p>
              <p className="text-black pb-4">
                {t('economicDesc4')}
              </p>
              <div className="pl-3 pb-4">
                <UnorderedList arrName={economicData2} ulClassName="list-disc marker:text-[#0092E0] marker:text-xl text-black pl-4 text-[16px] md:text-[20px] font-medium" />
              </div>
              <p className="text-black pb-4">
                {t('economicDesc5')}
              </p>
              <div className="pl-3 pb-4">
                <UnorderedList arrName={economicData3} ulClassName="list-disc marker:text-[#0092E0] marker:text-xl text-black pl-4 text-[16px] md:text-[20px] font-medium" />
              </div>
              <p className="text-black">
                {t('economicDesc6')}
              </p>
              <div className="py-6"></div>

              {/* himachal pradeshs section */}
              <h2 className=" pb-4 font-medium text-[#0092E0] xl:text-[30px] md:text-[24px] text-[20px]">
                {t('hmRoleTitle')}
              </h2>
              {
                hmData.map((data, ind) => {
                  return (
                    <p className="text-black pb-4" key={ind}>
                      {data}
                    </p>
                  )
                })
              }

              <p className="text-black">
                {t('hmDesc')}{" "}
                <Link className="underline" href={"mailto:sales@rialtes.com"}><span>sales@rialtes.com</span></Link>{" "}
                {t('hmDesc2')}
              </p>
            </div>
          </div>
        </div>
      </section >
      {/* Latest Blogs */}
      <div className="custom-container pb-10 xl:pr-0">
        < BlogsCarousel slides={blogs} />
      </div>
    </div >
  );
}
