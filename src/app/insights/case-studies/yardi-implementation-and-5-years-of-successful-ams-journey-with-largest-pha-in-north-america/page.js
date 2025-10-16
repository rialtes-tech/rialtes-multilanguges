"use client";
import Image from "next/image";
import Seo from "@/app/components/Seo";
import Script from "next/script";
const schemaData = {
  "@context": "https://schema.org",
  "@type": "Article",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.rialtes.com/insights/case-studies/yardi-implementation-and-5-years-of-successful-ams-journey-with-largest-pha-in-north-america/"
  },
  "headline": "Case Study: Trusted YARDI Partner for North America’s Largest PHA",
  "description": "Explore how Rialtes partnered with North America’s largest PHA for a full-scale Yardi implementation and provided 5 years of robust AMS support, ensuring operational excellence and compliance.",
  "image": "https://www.rialtes.com/images/case-studies/case-study-5.webp",
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
  "articleSection": "Case Studies",
  "datePublished": "2024-09-27"}


export default function Page() {
  const fullUrl = "https://www.rialtes.com/insights/case-studies/yardi-implementation-and-5-years-of-successful-ams-journey-with-largest-pha-in-north-america";

  return (
    <div className="min-h-screen bg-white xl:mb-[80px] md:mb-[60px] mb-[40px]">
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

      <section className="relative h-[350px] md:h-[500px]  4xl:h-[650px]  overflow-hidden">
       <div>
         <Image
          src="/images/case-studies/yardi-casestudy.webp "
          alt="A public housing in US"
          fill
          style={{ objectFit: "cover", objectPosition: "40% 20%" }}
          priority
        />
       </div>
      </section>

      <section
        className="custom-container"
      >
        <div className="py-10 bg-white xl:max-w-[1084px] 4xl:w-[1084px] 2xl:w-[900px] xl:w-[800px]">
          <div>
            <h1 className="text-[#000000] py-6 leading-tight text-[26px] 4xl:text-[60px]  2xl:text-[48px]   xl:text-[42px] md:text-[28px] ">Trusted YARDI Partner for North America’s Largest PHA</h1>
          </div>
          <div className="py-2"></div>
          <div>
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between text-black">
              <div className=''>
                <span className='text-[#0092E0]'>Public Sector</span> <span className='text-[#ACACAC]'> | </span>27 September 2024
              </div>
                <div className="flex flex-row gap-6 ml-[-8px]">
                  <div className="max-w-[40px]">
                    <a
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(fullUrl)}&title=A%20public%20housing%20in%20US&summary=Summary%20of%20the%20case%20study&source=LinkedIn`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
                  <div className="max-w-[40px]">
                    <a
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(fullUrl)}&text=Check%20out%20this%20blog%20on%20Agriculture%204.0!`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >                      <Image
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
            <div className="pt-4"></div>
        
          </div>

          <div className="py-6"></div>
          <div>
            <div>

              <h2 className=" font-medium text-[#0092E0] 4xl:text-[30px]   2xl:text-[24px]    xl:text-[21px] text-[23px] leading-tight pb-4">Client Profile</h2>
              <p className="text-black 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">A prominent multifamily real estate firm based in the U.S. specializes in acquiring, developing, and repositioning residential and commercial properties. Focusing on operational excellence and long-term value creation, the firm is dedicated to building thriving communities while maximizing returns for its investors.</p>
              <div className="py-6"></div>

              <h2 className=" font-medium text-[#0092E0] 4xl:text-[30px] 2xl:text-[24px] xl:text-[21px] text-[23px] leading-tight pb-4">Challenges</h2>
              <p className="pb-4 text-black 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">The client faced operational inefficiencies in managing multiple property management platforms, including Yardi Voyager 7, MRI, Voyager, and RealPage:</p>
              <ul className="list-disc marker:text-[#0092E0] marker:text-xl text-black pl-4 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px] font-medium">
                <li className="pb-4"> <h3 className="inline h3-bold 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Skill Silos:</h3> Reliance on individual experts for each platform created bottlenecks. Any unavailability led to delays.</li>
                <li className="pb-4"> <h3 className="inline h3-bold 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Talent Shortage: </h3> Local hiring markets lacked specialists with deep knowledge of the client’s specific tech stack.</li>
                <li className="pb-4"> <h3 className="inline h3-bold 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Lack of Centralized Oversight:</h3> Projects were loosely organized, limiting effective collaboration and knowledge sharing.</li>

              </ul>

              <div className="py-6"></div>

              <h2 className=" font-medium text-[#0092E0] 4xl:text-[30px] 2xl:text-[24px]  xl:text-[21px] text-[23px] leading-tight pb-4">Solutions </h2>

              <p className="text-black pb-4 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Rialtes, a trusted Yardi Managed Services provider, delivered a structured and scalable solution to address these gaps:</p>

              <ul className="list-disc marker:text-[#0092E0] marker:text-xl text-black pl-4 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px] font-medium">
                <li className="pb-4"> <h3 className="inline h3-bold 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Capability Assessment:  </h3>Conducted a thorough review of the client’s internal team and identified skill gaps.</li>
                <li className="pb-4"> <h3 className="inline h3-bold 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Team Augmentation:  </h3> Deployed skilled resources to complement the client's in-house team, providing immediate support for Yardi, MRI, and RealPage.</li>
                <li className="pb-4"> <h3 className="inline h3-bold 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Collaborative Transition: </h3> Initial support was provided offshore by Rialtes' technical team, gradually transitioning to a hybrid model with shared responsibilities.</li>
                <li className="pb-4"> <h3 className="inline h3-bold 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">End-to-End Ownership:</h3> After a successful year, Rialtes took full ownership of all related systems—Yardi, RealPage, affordable housing, residential, and commercial support, delivering a comprehensive managed service model.</li>
              </ul>
            </div>
          </div>
          <div className="py-6"></div>
          <div>
            <div>
              <h2 className=" font-medium text-[#0092E0]  4xl:text-[30px] 2xl:text-[24px] xl:text-[21px] text-[23px] leading-tight pb-4">Benefits</h2>
              <ul className="list-disc marker:text-[#0092E0] text-black pl-4  4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px] font-medium">
                <li className="pb-4">With a follow-the-sun model, the client now receives round-the-clock assistance, ensuring zero operational downtime across time zones</li>
                <li className="pb-4"> Multi-resource coverage eliminated dependency on individual contributors, increasing system resilience by 90%</li>
                <li className="pb-4"> By introducing primary and backup personnel for all critical systems, Rialtes significantly reduced service interruptions</li>
                <li className="pb-4"> Leveraging offshore resources cuts costs by nearly one-third compared to maintaining a full in-house California-based team</li>
                <li > The client gained on-demand access to a wide range of skills across Yardi, MRI, RealPage, and infrastructure without the burden of hiring locally</li>
              </ul>
            </div>
          </div>
          <div className="py-6"></div>
        </div>
      </section>
   </div>
  );
}