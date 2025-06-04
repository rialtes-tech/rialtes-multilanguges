"use client";
import Seo from "@/app/components/Seo";
import Image from "next/image";
const schemaData={
    
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.rialtes.com/insights/news/rialtes-opens-new-sales-office-in-baddi-himachal-pradesh/"
  },
  "headline": "Rialtes Opens New Sales Office in Baddi, Himachal Pradesh",
  "description": "Rialtes expands its regional presence with a new sales office in Baddi, Himachal Pradesh, supporting digital transformation needs in North India.",
  "image": "https://www.rialtes.com/images/news/baddi-office-banner.webp",
  "datePublished": "2025-04-04",
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
  "articleSection": "News"


}

export default function Page() {
    return (
        <div className="min-h-screen bg-white">

            <Seo
                title="Rialtes Opens Sales Office in Baddi, HP"
                description="Rialtes opens a new office in Baddi, Himachal Pradesh, to enhance client service and deliver Salesforce and SAP solutions for the manufacturing industry."
                canonical="https://www.rialtes.com/insights/news/rialtes-opens-new-sales-office-in-baddi-himachal-pradesh/"
            />
  <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

            <section
                className="custom-container "
            >

                <section className="relative h-[250px] sm:h-[500px] lg:h-[650px] overflow-hidden">
                    <div>
                        <Image
                            src="/images/homepage/inauguration-14 2.webp"
                            alt="How to Integrate SAP SuccessFactors with Microsoft Office 365 for Enhanced Collaboration"
                            fill
                            priority
                        />
                        <h1 className="text-white xl:text-[50px] font-medium xl:w-[65%] absolute container xl:pl-20 xl:pt-[15rem] pl-8 pt-16">Rialtes Opens new Sales Office in Himachal Pradesh, India.</h1>

                    </div>


                </section>
                <div className="pt-10 pb-24 bg-white">
                    <div className="container mx-auto border-b-[2px] border-gray-400 pb-6">
                        <div className="flex flex-col md:flex-row justify-between text-black items-center  max-w-4xl xl:w-[1084px]">
                            <div className='sm:mb-0 mb-6'>
                                4 April 2025
                            </div>
                            <div className="flex flex-col">
                                <div className="flex flex-row gap-6">
                                    <div className="max-w-[40px]">
                                        <a href="https://www.linkedin.com/company/rialtes-technologies-llc/">
                                            <Image
                                                src="/images/case-studies/linkedin.svg"
                                                alt="LinkedIn"
                                                width={0}
                                                height={0}
                                                sizes="100vw"
                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                priority
                                            />
                                        </a>
                                    </div>
                                    {/* <div className="max-w-[40px]">
                                        <a href="https://www.facebook.com/sharer/sharer.php?u=/how-salesforce-agentforce-actually-works">
                                            <Image
                                                src="/images/case-studies/facebook.svg"
                                                alt="Facebook"
                                                width={0}
                                                height={0}
                                                sizes="100vw"
                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                priority
                                            />
                                        </a>
                                    </div> */}
                                    
                                    <div className="max-w-[40px]">
                                        <a href="https://x.com/Rialtestech">
                                            <Image
                                                src="/images/case-studies/twitter.svg"
                                                alt="Twitter"
                                                width={0}
                                                height={0}
                                                sizes="100vw"
                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                priority
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-3"></div>

                    <div className="">
                        <div className="">

                            <p className="text-black  xl:text-[22px] text-[18px]"><span className="font-bold">Baddi, Himachal Pradesh – April 3, 2025 – </span>Rialtes Technologies, a leading global consulting firm, has announced the grand opening of its new Sales Office in Baddi, Himachal Pradesh, marking a significant step in the company’s expansion strategy. The new office aims to strengthen its presence in the northern part of India, while exploring the immense potential of the region's manufacturing sector.</p>

                            <p className="text-black  xl:text-[22px] text-[18px] mt-8">Baddi, known for its industrial infrastructure and strategic location, has long been considered an untapped territory for manufacturing and digital innovation. Rialtes Technologies aims to contribute to the region's growth by providing cutting-edge digital solutions to local manufacturers and enterprises, thereby aligning with India’s vision of becoming a global manufacturing hub.</p>

                            <p className="text-black  xl:text-[22px] text-[18px] mt-8">In a statement, <span className="font-bold">Ajay Tyagi, CEO of Rialtes Technologies</span>, expressed his enthusiasm for this strategic initiative. “Himachal Pradesh, along with the larger northern region, is an untapped manufacturing territory with immense potential for digital transformation. With the vision of Viksat Bharat under the leadership of Prime Minister Narendra Modi, we see this as an opportunity to empower local industries and integrate them with the world’s digital economy. This move aligns perfectly with our goal of supporting a Digital Himachal Pradesh and contributing to India's thriving manufacturing landscape.”</p>

                            <p className="text-black  xl:text-[22px] text-[18px] mt-8">Rialtes has always been at the forefront of innovation and digital solutions, and this expansion into Baddi represents the company’s commitment to driving sustainable economic growth and technological advancement in the region. Rialtes is a Certified SAP Partner for <a className='text-[#038EF4]' href="/services/business-transformation/grow-with-sap-services"> Grow with SAP</a> and <a className="text-[#038EF4]" href="/services/business-transformation/rise-with-sap-services">Rise with SAP</a> initiatives and have been transforming customer care using the <a className="text-[#038EF4]" href="/solutions/enterprise-platforms/salesforce-consulting">Salesforce</a> as a global leader and partner. Whether it’s data <a className="text-[#038EF4]" href="/solutions/data-ai/salesforce-data-cloud-consulting">Data Cloud</a> or Human resources software <a className="text-[#038EF4]" href="/services/hxm-transformation/successplus-successfactors-implementation-partner">SuccessFactors</a> , Rialtes’s team has highly certified professionals to serve clients of all market verticals. Read more about Rialtes here <a className="text-[#038EF4]" href="/about-us">About Us.</a></p>
                            <p className="text-black  xl:text-[22px] text-[18px] mt-8">With its deep expertise in consulting, the company is poised to play a key role in transforming the manufacturing sector in the state and helping businesses adopt cutting-edge technologies.</p>
                            <p className="text-black  xl:text-[22px] text-[18px] mt-8">This new sales office is expected to foster stronger collaborations with regional businesses, enhance digital literacy, and catalyze the adoption of Industry 4.0 technologies across Himachal Pradesh.</p>
                            <h3 className="text-[#068EDA] mt-10 font-bold">About Rialtes Technologies:</h3>
                            <p className="text-black  xl:text-[22px] text-[18px] mt-8">Rialtes Technologies is a global consulting firm specializing in digital transformation, manufacturing consulting, and technology solutions. With a strong presence in multiple countries, Rialtes Technologies is known for helping businesses optimize their operations and drive growth through cutting-edge technologies and digital strategies.</p>
                            <p className="text-black  xl:text-[22px] text-[18px] mt-10">For media inquiries, please contact:</p>
                            <p className="text-black  xl:text-[22px] text-[18px] mt-10 font-bold">Rialtes Technologies PR Team</p>
                            <p className="xl:text-[22px] text-[18px]">Email: pr@rialtes.com</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}