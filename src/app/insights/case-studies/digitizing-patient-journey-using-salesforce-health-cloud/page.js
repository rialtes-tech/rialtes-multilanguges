"use client";
import Image from "next/image";
import Seo from "@/app/components/Seo";
import Script from "next/script";
import useUrl from "@/app/components/useUrl";
import RelatedCaseStudies from '../../../components/RealtedCaseStudies';
const schemaData = {
  "@context": "https://schema.org",
  "@type": "Article",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.rialtes.com/insights/case-studies/digitizing-patient-journey-using-salesforce-health-cloud/"
  },
  "headline": "Case Study: Digitizing Patient Journey Using Salesforce Health Cloud",
  "description": "Discover how Rialtes transformed patient engagement by digitizing the entire care journey using Salesforce Health Cloud—enhancing experience, coordination, and outcomes.",
  "image": "https://www.rialtes.com/images/case-studies/case-study-7.webp",
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
  "datePublished": "2024-08-16"

}

export default function Page() {
  const currUrl = useUrl()
  const fullUrl = "https://www.rialtes.com/insights/blogs/digitizing-patient-journey-using-salesforce-health-cloud";

  return (
    <div className="min-h-screen bg-white">

      <Seo
        title="Salesforce Health Cloud Case Study: Patient Journey Digitized"
        description="Discover how healthcare is transforming with a digital-first patient journey powered by Salesforce, enhancing care, access, and patient engagement.
"
        canonical="https://www.rialtes.com/insights/case-studies/digitizing-patient-journey-using-salesforce-health-cloud"
      />


      <Script
        id="schema-digitizing"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="relative h-[250px] sm:h-[500px] lg:h-[650px] overflow-hidden">
        <div className="hidden lg:block">
          <Image
            src="/images/case-studies/case-study-7.webp"
            alt="Doctor showing medical information on a digital tablet to a senior patient during a consultation"
            fill
            style={{ objectFit: "cover", objectPosition: "40% 20%" }}
            priority
          />
        </div>
        <div className="block lg:hidden">
          <Image
            src="/images/case-studies/case-study-7_thumb.webp"
            alt="Doctor showing medical information on a digital tablet to a senior patient during a consultation Mobile"
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
          <div className="">
            <h1 className="text-[#000000] py-6  leading-tight text-[26px] 4xl:text-[60px]  2xl:text-[48px] xl:text-[42px] md:text-[28px] ">Digitizing the Patient Journey Using Salesforce Health Cloud</h1>
          </div>
          <div className="py-4"></div>
          <div className="">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between text-black">
              <div className=''>
                <span className='text-[#0092E0]'>Healthcare </span> <span className='text-[#ACACAC]'> | </span>16 August 2024
              </div>
              <div className="flex flex-col ml-[-8px]">
                <div className="flex flex-row gap-6">
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
            </div>
            <div className="pt-4"></div>

          </div>

          <div className="py-6"></div>
          <div className="">
            <div className="">
              <h2 className="font-medium text-[#0092E0] 4xl:text-[30px] 2xl:text-[24px] xl:text-[21px] text-[23px] leading-tight pb-4">Client Profile</h2>
              <p className="text-black  4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">A global medical technology company dedicated to improving lives through innovative cardiovascular and endovascular care. The company designs and manufactures pacemakers, defibrillators, and remote monitoring systems used by healthcare professionals worldwide. Their mission is to support better patient outcomes by combining advanced medical technology with seamless digital experiences. </p>

              <div className="py-6"></div>

              <h2 className="font-medium text-[#0092E0] 4xl:text-[30px] 2xl:text-[24px] xl:text-[21px] text-[23px] leading-tight pb-4">Problem or Challenge </h2>
              <p className="text-black pb-6  4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">The company had recently introduced a new patient journey system, but it lacked the critical functionality needed to deliver a truly connected and engaging healthcare experience.</p>

              <div className="pb-4 text-black font-medium  4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px] ">
                <h3 className="h3-bold inline  4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Limited digital engagement </h3> <span className=""> : Patients relied on phone calls, physical visits, and in- person educational sessions for all interactions.</span>
              </div>

              <div className="pb-4 text-black font-medium  4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px] ">
                <h3 className="h3-bold inline  4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">No real-time communication  </h3> <span> : The system lacked virtual touchpoints, making it difficult for patients to contact healthcare providers outside of clinic visits.</span></div>

              <div className="pb-4 text-black font-medium  4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">
                <h3 className="h3-bold inline  4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">No self-service data input </h3><span> : Patients couldn’t submit important health data—like sleep patterns, activity levels, or medication usage, digitally.</span></div>

              <div className=" text-black font-medium  4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px] ">
                <h3 className="h3-bold inline  4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Lack of real-time monitoring </h3><span> : Providers had no visibility into whether patients were adhering to their therapy plans between visits.</span></div>



              <div className="py-6"></div>

              <h2 className="font-medium text-[#0092E0] 4xl:text-[30px] 2xl:text-[24px] xl:text-[21px] text-[23px] leading-tight pb-4">Solutions </h2>

              <p className="text-black pb-6  4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">The client partnered with Rialtes to modernize the patient experience by building a fully integrated, digital-first solution.</p>
              <div className="pl-2">
                <ul className="list-disc marker:text-[#0092E0] marker:text-xl text-black pl-2 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px] font-medium">
                  <li className="pb-4" ><h3 className="h3-bold inline  4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Mobile Application </h3> : Developed for Android and iOS, the app connected seamlessly with Salesforce Health Cloud  to serve as a central hub for patient engagement.</li>
                  <li className="pb-4"  ><h3 className="h3-bold inline  4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Self-Guided Onboarding </h3> : Patients could easily register and access a personalized dashboard to view therapy progress, action items, and relevant data.</li>

                  <li className="pb-4" ><h3 className="h3-bold inline  4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Data Submission & Tracking </h3> : Patients could log vital information—such as sleep, discomfort levels, and medication adherence, directly in the app. Integration with wearable devices (e.g., Apple Watch) enabled automatic collection of metrics like heart rate and step count.</li>

                  <li className="pb-4"  ><h3 className="h3-bold inline  4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Telehealth & Messaging </h3> : Enabled secure, real-time communication between patients and providers for queries, updates, and appointment scheduling.</li>

                  <li className="pb-4" ><h3 className="h3-bold inline  4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Gamification & Engagement </h3> : Patients were encouraged to submit data and complete health-related tasks through gamified elements, improving long-term adherence.</li>
                  <li className="pb-4" ><h3 className="h3-bold inline  4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Smart Notifications </h3> : Automated reminders prompted patients to share health data consistently, ensuring ongoing visibility for care teams.</li>

                  <li ><h3 className="h3-bold inline  4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">In-App Education </h3> : Patients could access videos and articles to understand their conditions and therapies. Providers could monitor content engagement and deliver personalized follow-up materials.</li>

                </ul>
              </div>
            </div>
          </div>
          <div className="py-6"></div>
          <div className="">
            <div className="">
              <h2 className="font-medium text-[#0092E0] 4xl:text-[30px] 2xl:text-[24px] xl:text-[21px] text-[23px] leading-tight pb-4">Benefits</h2>

              <div className="pl-2">
                <ul className="list-disc marker:text-[#0092E0] marker:text-xl text-black pl-2  4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px] font-medium ">
                  <li className="pb-4" >30% increase in therapy adherence through gamified engagement and automated reminders.
                  </li>
                  <li className="pb-4" >40% improvement in data submission rates, enabling more proactive care.</li>
                  <li className="pb-4"  >Real-time visibility for providers, improving coordination and faster intervention for at-risk patients.
                  </li>
                  <li className="pb-4"  >50% reduction in phone-based support as self-service and digital communication became primary channels.
                  </li>
                  <li className="pb-4"  >Enhanced patient satisfaction with personalized, on-the-go access to therapy information and education.
                  </li>
                  <li>Scalable architecture, ready for future enhancements like AI-driven insights and broader wearable device integration.</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>
      {/* case study carousel */}
      <section className="custom-container lg:pr-0 xl:my-[80px] md:my-[60px] my-[40px]">
        <RelatedCaseStudies url={currUrl} currTopic="Healthcare" />
      </section>

    </div>
  );
}