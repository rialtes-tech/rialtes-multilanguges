"use client";
import Image from "next/image";
import Link from "next/link";
import BlogsCarousel from "../../../components/latestBlogCarousel";
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import { useLocale, useTranslations } from "next-intl";
import enContent from '../../../../../../messages/en/blogs.json';
import esContent from '../../../../../../messages/es/blogs.json';
const schemaData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://www.rialtes.com/insights/blogs/agents-vs-copilots-vs-bots-whats-the-difference-and-why-it-matters/",
  },
  headline:
    "Agents vs. Copilots vs. Bots: What’s the Difference and Why It Matters",
  description:
    "Understand the distinctions between AI Agents, Copilots, and Bots, and how each plays a role in enhancing automation and productivity in business systems.",
  image: "https://www.rialtes.com/images/blog/agents-vs-copilots-vs-bots.webp",
  author: {
    "@type": "Organization",
    name: "Rialtes",
    url: "https://www.rialtes.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Rialtes",
    logo: {
      "@type": "ImageObject",
      url: "https://www.rialtes.com/images/homepage/logo.svg",
    },
  },
  datePublished: "2024-10-28",
  articleSection: "AI Automation",
  url: "https://www.rialtes.com/insights/blogs/agents-vs-copilots-vs-bots-whats-the-difference-and-why-it-matters/",
};

export default function Page() {
  const t = useTranslations('agentCopilot')
  const locale = useLocale();
  const blogsContent = locale === "es" ? esContent : enContent;
  const { blogs, commonData, tableData } = blogsContent.agentCopilot;
  const fullUrl = "https://www.rialtes.com/insights/blogs/agents-vs-copilots-vs-bots-whats-the-difference-and-why-it-matters";

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Agents vs. Copilots vs. Bots: Key Differences Explained | Rialtes"
        description="Learn the differences among AI Agents, Copilots, and Bots. Discover their unique roles in business automation to enhance productivity."
        keywords="Partners, website, welcome"
        canonical={
          "https://www.rialtes.com/insights/blogs/agents-vs-copilots-vs-bots-whats-the-difference-and-why-it-matters/"
        }
      />

      <Script
        id="schema-copilots"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="relative h-[250px] sm:h-[500px] lg:h-[650px] overflow-hidden">
        <Image
          src="/images/blog/agents-vs-copilots-vs-bots.webp "
          alt="Agents vs. Copilots vs. Bots: What’s the Difference and Why It Matters"
          fill
          style={{ objectFit: "cover", objectPosition: "50% 20%" }}
          priority
        />
      </section>

      <section className="custom-container">
        <div className="py-10 bg-white xl:max-w-[1084px] xl:w-[1084px]">
          <div className="">
            <div className="flex flex-col md:flex-row justify-between text-black items-center  xl:max-w-[1084px] xl:w-[1084px]">
              <div className="sm:mb-0 mb-6">
                <span className="text-[#0092E0]">{t('blogTopic')}</span>{" "}
                <span className="text-[#ACACAC]"> | </span>28 Oct 2024
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row gap-6">
                  <div className="max-w-[40px]">
                    <a
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                        fullUrl
                      )}&title=A%20public%20housing%20in%20US&summary=Summary%20of%20the%20case%20study&source=LinkedIn`}
                      target="_blank"
                      rel="noopener noreferrer">
                      {" "}
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
            </div>
          </div>
          <div className="py-6"></div>

          <h1 className="text-[#000000] font-semibold pb-6 4xl:w-[900px] xl:w-[600px] leading-tight text-[26px] xl:text-[40px] 4xl:text-[60px]">
            {t('blogTitle')}
          </h1>
          <div>
            <p className="text-black pb-4">
              {t('blogMainData')}
            </p>

            <p className="text-black">
              {t('blogMainData2')}
            </p>

            <div className="py-6"></div>
            {
              commonData?.map((data, ind) => {
                return (
                  <div key={ind}>
                    <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4">
                      {data.title}
                    </h2>
                    <p className="text-black pb-4">
                      {data.desc}
                    </p>
                    <h3 className="pb-4 h3-bold">Applications</h3>
                    <ul className="list-disc marker:text-[#0092E0] marker:text-xl text-black pl-4 pb-6 xl:text-[18px] text-[16px] font-medium">
                      {
                        data.applications.map((elem, id) => {
                          return (
                            <li className="text-black pb-4" key={id}>
                              <h4 className="inline">{elem.title}</h4>{elem.desc}
                              {
                                elem.link &&
                                <Link
                                  href={"https://www.rialtes.com/insights/blogs/the-brain-behind-the-agents-unveiling-the-atlas-reasoning-engine-in-agentforce/?utm_source=blog&utm_medium=organic"}
                                  className="text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline">
                                  <span>{elem.link}</span>
                                </Link>
                              }
                              {elem.desc2 && elem.desc2}
                            </li>
                          )
                        })
                      }
                    </ul>
                    <div className="py-4"></div>
                  </div>
                )
              })
            }


            <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4">
              Agentforce Agents vs. Copilots vs. Bots: Choose the Right AI for the Job
            </h2>

            <p className="text-black pb-4">
              Each AI tool is effective within its niche, and the key is knowing
              which to deploy based on the task at hand. Here’s a comparative
              look at how they differ:
            </p>

            <div className="relative agent-table-responsive">
              <style>
                {`@media (max-width: 640px) {
        .agent-table-responsive table,
        .agent-table-responsive thead,
        .agent-table-responsive tbody,
        .agent-table-responsive th,
        .agent-table-responsive td,
        .agent-table-responsive tr {
          display: block;
          width: 100%;
        }

        .agent-table-responsive thead tr {
          position: absolute;
          top: -9999px;
          left: -9999px;
        }

        .agent-table-responsive tr {
          margin-bottom: 1.25rem;
          border: 1px solid #ddd;
          border-radius: 0.375rem;
          padding: 0.75rem;
          background-color: #fff;
        }

        .agent-table-responsive td {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
          justify-content: flex-start;
          border-bottom: 1px solid #eee;
          padding: 0.75rem 0;
        }

        .agent-table-responsive td:last-child {
          border-bottom: 0;
        }

        .agent-table-responsive td::before {
          content: attr(data-label);
          flex-shrink: 0;
          width: 120px;
          font-weight: 600;
          color: #4a4893;
        }
      }
    `}
              </style>
              <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-xs text-white uppercase bg-[#4a4893]">
                  <tr>
                    <th scope="col" className="px-6 py-3">{t('featureHeading')}</th>
                    <th scope="col" className="px-6 py-3">{t('botsHeading')}</th>
                    <th scope="col" className="px-6 py-3">{t('agentforceHeading')}</th>
                    <th scope="col" className="px-6 py-3">{t('copilotsHeading')}</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                      <td className="px-6 py-4 font-medium text-black">{row.feature}</td>
                      <td className="px-6 py-4 font-medium text-black">{row.bots}</td>
                      <td className="px-6 py-4 font-medium text-black">{row.agents}</td>
                      <td className="px-6 py-4 font-medium text-black">{row.copilots}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="py-6"></div>

            <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4">
              {t('futureTitle')}
            </h2>

            <p className="text-black pb-4">
              {t('futureDesc')}
            </p>

            <p className="text-black">
              {t('futureDesc2')}{" "}
              <Link
                className="text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline"
                href={"https://www.rialtes.com/insights/blogs/how-salesforce-agentforce-actually-works/?utm_source=blog&utm_medium=organic"}>
                <span>{t('futureLink')}</span>
              </Link>{" "}
              {t('futureDesc3')}  {" "}
              <Link
                className="text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline"
                href={"https://www.rialtes.com/solutions/enterprise-platforms/salesforce-consulting-partner-us-india/"}>
                <span>{t('futureLink2')}</span>
              </Link>{" "}
              {t('futureDesc4')}
            </p>
          </div>
        </div>
      </section>

      {/* Latest Blogs */}
      <div className="custom-container lg:pr-0 pb-10">
        <BlogsCarousel slides={blogs} />
      </div>
    </div>
  );
}
