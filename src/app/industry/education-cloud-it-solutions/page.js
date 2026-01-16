"use client";
import Image from "next/image";
import ContactForm from "../../components/contactform";
import Seo from "@/app/components/Seo";
import Link from "next/link";
import LearnMore from "../../components/learnMore";
import Script from "next/script";
import UnorderedList from "@/app/components/unorderedList";
import BreadCrumbs from '@/app/components/BreadCrumbs'

const schemaData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Education & EdTech IT Solutions",
  "url": "https://www.rialtes.com/industry/education-cloud-it-solutions/",
  "description": "Rialtes provides smart, scalable IT solutions for the education sector, empowering K-12 schools, higher education institutions, and EdTech firms with Salesforce Education Cloud, SAP, and AI-driven technologies. Our offerings enhance student lifecycle management, digital learning, and data-driven engagement.",
  "publisher": {
    "@type": "Organization",
    "name": "Rialtes",
    "url": "https://www.rialtes.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.rialtes.com/images/homepage/logo.svg"
    },
    "sameAs": [
      "https://www.linkedin.com/company/rialtes-technologies-llc/",
      "https://www.youtube.com/@rialtes"
    ]
  },
  "mainEntity": {
    "@type": "Service",
    "name": "Education & EdTech IT Solutions",
    "description": "Smart IT solutions for K-12, universities, and EdTech firms, leveraging Salesforce Education Cloud, SAP, and AI to transform the student journey.",
    "areaServed": [
      { "@type": "Country", "name": "United States" },
      { "@type": "Country", "name": "Canada" },
      { "@type": "Country", "name": "India" },
      { "@type": "Country", "name": "Singapore" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Education Cloud & EdTech IT Solutions",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Salesforce Education Cloud Implementation",
            "description": "Enable personalized student experiences, unified communication, and lifecycle automation across admissions, enrollment, and alumni engagement."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SAP for Higher Education",
            "description": "Modernize academic administration, financial aid, and resource planning with scalable SAP S/4HANA and Student Lifecycle Management (SLcM)."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Learning & Engagement Platforms",
            "description": "Build and scale intuitive EdTech platforms with real-time analytics, mobile accessibility, and integrated content delivery."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI-Driven Student Analytics & Insights",
            "description": "Use AI and data visualization tools to monitor student success, retention, and engagement with predictive dashboards."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Admissions & Outreach Automation",
            "description": "Streamline marketing, lead nurturing, and applicant tracking with Salesforce CRM and Experience Cloud."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "System Integration & Data Management",
            "description": "Connect learning management systems (LMS), ERPs, and CRMs using MuleSoft, SAP BTP, and secure data pipelines."
          }
        }
      ]
    }
  }
}
const Services2 = () => {
  return (
    <div className="mx-auto text-black">
      <h2 className="text-black mb-6 4xl:text-[60px] 2xl:text-[56px] xl:text-[45px] lg:text-[45px] md:text-[35px] text-[26px] max-[350px]:text-[22px] leading-tight">
        Rialtes’ Pre-Delivered Accelerators:
      </h2>
      <h3 className="4xl:text-[42px] 2xl:text-[40px] xl:text-[36px] lg:text-[36px] md:text-[26px] max-[390px]:text-[20px] xl:font-bold  font-medium mt-5 text-[22px] pr-10 xl:pr-0">
        Fast-Tracking Education Success
      </h3>
      <p className="mt-5 4xl:text-[22px] 2xl:text-[20px] xl:text-[16px] md:text-[18px] text-[16px] w-full pr-4 xl:pr-0 font-light leading-tight">
        Our proprietary accelerators for the education sector are designed to
        simplify and optimize student lifecycle management:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-8 mt-10">
        {latestServices2.map((services) => (
          <ServicesCard key={services.id} services={services} />
        ))}
      </div>
      <LearnMore />
    </div>
  );
};
const ServicesCard = ({ services }) => (
  <div className="w-full h-full flex flex-col border border-[#707070] py-10 px-6 2xl:p-14 xl:p-10 transition ease-out duration-300 hover:bg-[#D9F2FF] hover:border-[#D9F2FF]">
    <div className="flex-grow flex flex-col">
      <h3 className="mb-[15px] md:mb-[25px] 4xl:text-[24px] 2xl:text-[20px] xl:text-[18px]  text-[20px] max:[400px]:text-[18px] font-semibold leading-tight">
        {services.title}
      </h3>
      <p className="md:mb-[15px] mb-0 4xl:text-[20px] 2xl:text-[17px] xl:text-[15px] md:text-[17px] text-[16px] leading-tight font-light">
        {services.description}
      </p>
    </div>
  </div>
);
const latestServices2 = [
  {
    id: 1,
    title: "Student Engagement Management Bolt-On",
    description:
      "Enhances Salesforce Education Cloud to deliver seamless student lifecycle management, including admissions, case management, and alumni engagement.",
  },
  {
    id: 2,
    title: "Enrollment and Academic Progress Tracker",
    description:
      "Integrated solution for student onboarding, course enrollment, and academic progress monitoring connected with SAP backend for finance and operations.",
  },
  {
    id: 3,
    title: "Family and Guardian Mapping Framework",
    description:
      "Builds a comprehensive student family tree, enabling institutions to engage students, parents, guardians, and sponsors effectively.",
  },
];
const keyIndustryData = [
  "Fragmented student engagement and communication channels.",
  "Complex and inefficient recruitment and admissions processes.",
  "Disconnected case management for student services and support.",
  "Lack of 360-degree student insights across academic, financial, and social dimensions.",
  "Difficulty in personalizing outreach to prospective and current students.",
  "Inefficient alumni and donor relationship management.",
];
const approachData = [
  "Strategic advisory for educational digital transformation.",
  "Process redesign and technology enablement with SAP and Salesforce.",
  "Pre-built accelerators for student engagement, recruitment, and retention.",
  "Agile, scalable implementations aligned with industry best practices.",
  " Continuous optimization through robust QA and post-go-live support.",
];
const studentLeadData = [
  "Capture student leads from multiple channels (web, social, email, recruitment events) using Salesforce Education Cloud.",
  "Intelligent lead nurturing with Salesforce Marketing Cloud, leveraging personalized journeys based on interests and backgrounds.",
  "AI-based lead scoring and matching to recommend suitable programs and scholarships.",
];
const selectionData = [
  "Seamless application management with real-time status updates.",
  "Automated document collection and verification workflows.",
  "Selection committee collaboration portals for holistic application reviews.",
  "Integrated offer and acceptance workflows with e-signatures.",
];
const studentData = [
  "Create a comprehensive family and guardian chart to manage multi-student relationships.",
  "Track alumni family connections for targeted donor campaigns and legacy admissions.",
  "Map sponsorship and scholarship relationships for financial aid management.",
];
const hyperData = [
  "AI-powered segmentation to target prospects by program interests, geography, demographics.",
  "Personalized student journeys for pre-admission, onboarding, academic advising, and alumni engagement.",
  "Behavioral triggers for scholarship offers, deadlines, and personalized content delivery.",
  "Event management and RSVP tracking for open houses, campus tours, and recruitment fairs.",
];
const lifelongData = [
  "End-to-end student case management for academic, financial, and wellness support.",
  "AI-assisted case deflection and chatbots for common queries (admission status, course selection, fee details).",
  "Proactive student success and retention programs, powered by early alert systems and predictive analytics.",
  "Integration with career services for internships, placements, and alumni mentorship.",
];
const selfData = [
  "Personalized portals for application tracking, document submissions, fee payments, and course registration.",
  "Faculty portals for advising, mentoring, and grading.",
  "External communication management for parents, sponsors, and alumni.",
  "Embedded communication channels (chat, messaging, email) for real-time engagement.",
];
const s4HanaData = [
  "Fully integrated student information and ERP system for enrollment, finance, and resource management.",
  "Real-time visibility into fee status, financial aid, and scholarships.",
  "SAP-backed course scheduling, faculty assignment, and resource allocation.",
  "Procurement and supplier collaboration via SAP ARIBA for campus infrastructure needs.",
];
const dynamicData = [
  "Program and tuition fee configuration based on course, campus, residency status, and scholarship eligibility.",
  "Manage installment plans, discounts, and refunds.",
  "End-to-end quote-to-enrollment processes for executive education and certificate programs.",
  "Integrate with SAP for billing, AR, and finance operations.",
];
const unifiedData = [
  "A 360-degree view of every student: academic progress, financial aid, career services, and engagement.",
  "Advanced analytics and AI models for predicting at-risk students and enhancing retention.",
  "Real-time data synchronization with SAP S/4HANA, LMS, CRM, and student success platforms.",
  "Donor and alumni relationship management for advancement and fundraising.",
];
const empoweringData = [
  "Unified view of each student’s academic, financial, wellness, and engagement history.",
  "AI-based next-best-action (NBA) to support student success (e.g., intervention, counseling).",
  "Manage advising sessions, notes, and follow-ups with integrated case management.",
  "Collaboration tools for cross-departmental student success initiatives.",
];
const educationSolutions = [
  {
    title: "SAP S/4HANA for Education",
    href: "/services/business-transformation/grow-with-sap-services",
    description: "Robust ERP for education finance, HR, and campus operations.",
  },
  {
    title: "Salesforce Marketing and Revenue Cloud",
    href: "/solutions/enterprise-platforms/salesforce-revenue-cloud-consulting",
    description: "Personalized campaigns and dynamic pricing.",
  },
  {
    title: "SAP ARIBA for Education",
    href: "/services/spend-management/sapbuyplus-ariba-implementation-partner",
    description: "Procurement solutions for campus operations.",
  },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Salesforce Cloud IT Solutions for Education Industry | Rialtes"
        description="IT solutions for education using AI and Salesforce Cloud empower K–12 to higher ed to transform learning. Explore smarter outcomes with Rialtes today."
        canonical="https://www.rialtes.com/industry/education-cloud-it-solutions/"
      />
      <Script
        id="schema-education"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      {/* hero section */}
      <section className="relative group overflow-hidden xl:pb-40 pb-10 h-[350px] md:h-[530px]  4xl:h-[650px] ">
        <div className="md:block hidden">
          <Image
            src="/images/education/Education banner.webp"
            alt="Education banner"
            fill
            priority
            sizes="100vw"
            className="transform transition-transform object-cover duration-500 group-hover:scale-110"
          />
        </div>
        <div className="md:hidden block">
          <Image
            src="/images/education/Group 483.webp"
            alt="Education banner"
            fill
            style={{ objectFit: "cover", objectPosition: "35% 20%" }}

            priority
            className="transform transition-transform duration-500 group-hover:scale-110"
            sizes="100vw"
          />
        </div>
        <div className="h-full relative custom-container">
          <div className="grid xl:grid-cols-12 grid-cols-1 xl:mt-20 mt-[8rem]">
            <div className="xl:col-span-7 col-span-12">
              <h2 className="text-white 2xl:text-[24px] xl:text-[22px] text-[18px] font-bold mb-2 mt-10">
                Education Industry
              </h2>
              <h1 className="text-white leading-tight xl:pr-[130px] xl:mt-10 4xl:text-[60px] 2xl:text-[50px] xl:text-[40px] lg:text-[45px] text-[24px] ">
                Empowering the Future of Education
              </h1>
              <h3 className="4xl:text-[45px] 2xl:text-[38px] xl:text-[32px] lg:text-[38px] xl:mt-10 mt-5 text-white font-bold text-[18px] leading-tight">
                Rialtes’ End-to-End Solutions for Student Success
              </h3>
            </div>
            <div className="xl:col-span-5 col-span-12"></div>
          </div>
        </div>
      </section>
      {/* breadcrumb */}
      <div className="custom-container">
        <BreadCrumbs currPage="Education" />
      </div>
      {/* page description */}
      <section className="xl:mt-16 mt-8 custom-container">
        <div className="grid xl:grid-cols-12 grid-cols-1">
          <div className="xl:col-span-11 col-span-12">
            <h2 className="4xl:text-[60px]  2xl:text-[56px] xl:text-[45px] lg:text-[40px] max-[400px]:text-[24px] mt-5 leading-tight 4xl:w-[1222px] 2xl:w-[1150px] xl:w-[900px] lg:w-[800px] md:text-[30px] text-[26px] ">
              Transforming Education with Technology-Driven Student Experiences
            </h2>
            <p className="4xl:text-[22px] 2xl:text-[20px] xl:text-[18px] md:text-[18px]  text-[16px] mt-10 lg:pr-32 leading-tight">
              Education today is evolving at a rapid pace. Institutions must
              engage digitally native students, streamline enrollment and
              academic processes, and foster lifelong relationships with
              learners. From K-12 to higher education, organizations face
              challenges in managing fragmented student journeys, disjointed
              academic operations, and evolving stakeholder expectations.
            </p>
            <p className="4xl:text-[22px] 2xl:text-[20px] xl:text-[18px] md:text-[18px]  text-[16px] mt-5 xl:pr-32 leading-tight">
              {" "}
              Rialtes delivers holistic education solutions—covering strategic
              advisory, seamless implementations, process optimization, and
              long-term support.
            </p>
          </div>
          <div className="xl:col-span-1 col-span-12"></div>
        </div>
      </section>
      {/**Thought Leadership Section */}
      <section className="relative group xl:mt-20 mt-16 pb-20">
        <div className="xl:block hidden">
          <Image
            src="/images/education/TL.webp"
            alt="Thought Leadership image"
            fill
            style={{ objectFit: "cover", objectPosition: "35% 20%" }}

            priority
            sizes="100vw"
          />
        </div>
        <div className="xl:hidden block">
          <Image
            src="/images/education/AdobeStock_612317773.webp"
            alt="Thought Leadership image"
            priority
            sizes="100vw"
            className="h-[343px] w-full"
            style={{ objectFit: "cover", objectPosition: "35% 5%" }}

            width={0}
            height={0}
          />
        </div>
        <div className="relative xl:mt-16 mt-8 custom-container">
          <div className="xl:pt-16">
            <h2 className="4xl:text-[60px] 2xl:text-[56px] xl:text-[45px] lg:text-[45px] md:text-[30px] text-[26px] max-[350px]:text-[22px]">
              Thought Leadership:
            </h2>
            <h3 className="4xl:text-[42px] 2xl:text-[40px] xl:text-[36px] lg:text-[36px]md:text-[30px]  max-[350px]:text-[18px] mt-5 xl:font-bold font-medium text-[22px] ">
              Solving Education’s Most Pressing Challenges
            </h3>
          </div>
          <div className="grid xl:grid-cols-12 grid-cols-1 xl:pt-10 pt-5">
            <div className="xl:col-span-5 col-span-12">
              <h3 className="4xl:text-[26px] 2xl:text-[24px] xl:text-[22px] text-[20px] font-bold max-[350px]:text-[18px]">
                Key Industry Challenges We Address:
              </h3>
              <UnorderedList
                arrName={keyIndustryData}
                ulClassName="list-disc xl:space-y-4 marker:font-bold marker:text-2xl pl-5 text-[16px] md:text-[18px] 2xl:text-[20px] xl:text-[18px] xl:mt-5 mt-3 lg:pr-10"
                liClassName=""
              />
            </div>
            <div className="xl:col-span-5 col-span-12  bg-[#0A69B7] absolute xl:left-[44%] left-0 top-[40rem] max-[380px]:top-[44rem] md:left-[30px] md:top-[26rem] xl:top-[22rem] text-white p-10 pb-12  xl:w-[500px]">
              <h3 className="4xl:text-[26px] 2xl:text-[24px] xl:text-[22px]  text-[20px] font-bold ">
                Rialtes’ Approach:
              </h3>
              <UnorderedList
                arrName={approachData}
                ulClassName="list-disc xl:space-y-5 space-y-3 marker:font-bold marker:text-2xl pl-5 2xl:text-[20px] xl:text-[18px] text-[16px] md:text-[18px] lg:pr-4 mt-5"
                liClassName=""
              />
            </div>
          </div>
        </div>
      </section>
      {/**Pre-Delivered Accelerators */}
      <section className="xl:mt-40 max-[388px]:mt-[38rem] mt-[35rem] md:mt-[26rem] custom-container xl:!pr-[142px]">
        <div className="pb-16 bg-white">
          <Services2 />
        </div>
      </section>
      {/**Student Journey * */}
      <section className="relative group overflow-hidden h-auto 4xl:h-[1620px] 2xl:h-[1550px] xl:h-[1500px]  xl:mt-0">
        <div className="xl:block hidden">
          <Image
            src="/images/education/student journey.webp"
            alt="student journey image"
            fill
            style={{ objectFit: "cover", objectPosition: "35% 20%" }}
            priority
            className="transform transition-transform duration-500 group-hover:scale-110"
            sizes="100vw"
          />
        </div>
        <div className="xl:hidden block">
          <Image
            src="/images/education/Group 484.webp"
            alt="student journey image"
            fill
            style={{ objectFit: "cover", objectPosition: "35% 20%" }}
            priority
            className="transform transition-transform duration-500 group-hover:scale-110"
            sizes="100vw"
          />
        </div>
        <div className="h-full relative custom-container">
          <div className="flex">
            <div className="relative 4xl:w-[1014px] 2xl:w-[980px] xl:w-[850px] xl:h-[1621px] pb-16 xl:pb-0">
              <div className="absolute xl:inset-0 bg-[#016FBE] mix-blend-multiply opacity-[0.9]"></div>
              <div className="relative bg-opacity-80 text-white z-10 rounded-lg">
                <div className=" pt-16  xl:pr-0 xl:pl-20">
                  <h2 className="leading-tight xl:pr-20 4xl:text-[60px] 2xl:text-[56px] xl:text-[45px] lg:text-[45px] md:text-[30px] text-[26px] max-[350px]:text-[22px]">
                    The Complete Student Journey
                  </h2>
                  <h3 className="4xl:text-[42px] 2xl:text-[40px] xl:text-[34px] lg:text-[36px] md:text-[30px] text-[22px] max-[350px]:text-[18px] xl:font-bold font-medium mt-10 leading-tight xl:pr-40 ">
                    From First Inquiry to Graduation and Beyond
                  </h3>
                </div>
                <div>
                  <div className="xl:pl-20 flex items-center xl:gap-5 gap-3">
                    <h3 className="4xl:text-[35px] mt-10 2xl:text-[32px] xl:text-[28px] text-[20px] font-bold  xl:pr-0 max-[350px]:text-[18px]">
                      Recruitment and Enrollment Journey
                    </h3>
                  </div>
                </div>
                <div className="xl:pl-20 xl:pr-0 xl:pt-10 pt-5">
                  <h3 className="4xl:text-[30px] 2xl:text-[28px] xl:text-[26px] md:text-[22px] text-[18px] xl:font-bold font-medium max-[350px]:text-[16px]">
                    Student Lead Management and Engagement
                  </h3>
                  <UnorderedList
                    arrName={studentLeadData}
                    ulClassName="list-disc xl:space-y-4 marker:font-bold marker:text-2xl pl-5 4xl:text-[20px] 2xl:text-[18px] xl:text-[16px] md:text-[18px] text-[16px] xl:mt-5 mt-3 xl:pr-64 font-light"
                    liClassName=""
                  />
                </div>
                <div className="xl:pl-20 pt-10">
                  <h3 className="4xl:text-[30px] 2xl:text-[28px] xl:text-[26px] md:text-[22px] text-[18px] font-medium max-[350px]:text-[16px]">
                    Selection and Admissions
                  </h3>
                  <UnorderedList
                    arrName={selectionData}
                    ulClassName="list-disc xl:space-y-4 marker:font-bold marker:text-2xl pl-5 4xl:text-[20px] 2xl:text-[18px] xl:text-[16px] md:text-[18px] text-[16px] mt-5 xl:pr-64"
                    liClassName=""
                  />
                </div>
                <div className="xl:pl-20 flex items-center xl:gap-5 gap-3 mt-10">
                  <h3 className="4xl:text-[35px] 2xl:text-[32px] xl:text-[28px] text-[20px] font-bold max-[350px]:text-[18px]">
                    Student Family Mapping and Engagement
                  </h3>
                </div>
                <div className="xl:pl-20  pt-5">
                  <UnorderedList
                    arrName={studentData}
                    ulClassName="list-disc xl:space-y-4 marker:font-bold marker:text-2xl pl-5 4xl:text-[20px] 2xl:text-[18px] xl:text-[16px] text-[16px] md:text-[18px] xl:mt-5 xl:pr-64"
                    liClassName=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* hyper and lifelong section */}
      <section className="relative xl:mt-16">
        <div className="grid xl:grid-cols-2 grid-cols-1 items-start relative z-10 gap-10">
          <div className="relative z-10">
            <div className="custom-container xl:!pr-12 xl:top-[3rem] top-[5rem] relative">
              <div className="relative group overflow-hidden">
                <Image
                  src="/images/education/marketing.webp"
                  alt="marketing image"
                  priority
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="100vw"
                  width={0}
                  height={0}
                />
              </div>
            </div>
            <div className="bg-[#C4EBEA] custom-container w-full xl:pr-20 xl:pb-20 pb-10 pt-[8rem] xl:pt-[5rem]">
              <h2 className="text-[28px] 4xl:text-[47px] 2xl:text-[42px] xl:text-[38px] lg:text-[40px] md:text-[30px] font-medium leading-tight max-[400px]:text-[25px] max-[350px]:text-[20px] ">
                Hyper-Personalized Student Engagement with Salesforce Marketing
                Cloud
              </h2>
              <UnorderedList
                arrName={hyperData}
                ulClassName="list-disc mt-5 pl-5 space-y-4 text-[16px] 4xl:text-[20px] 2xl:text-[18px] xl:text-[16px] font-medium leading-tight marker:font-bold marker:text-2xl  md:text-[18px]"
                liClassName=""
              />
              <div className="mt-5">
                <LearnMore />
              </div>
            </div>
          </div>
          <div className="relative z-10">
            <div className="custom-container xl:pl-16  xl:mt-[20rem]">
              <div className="relative group overflow-hidden">
                <Image
                  src="/images/education/service cloud.webp"
                  alt="service cloud image"
                  priority
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="100vw"
                  width={0}
                  height={0}
                />
              </div>
            </div>
            <div className="bg-[#F7E2D4] w-full xl:pb-20 pb-10 pt-[6rem] xl:!pl-16 mt-[-3rem]  custom-container">
              <h2 className="text-[28px] 4xl:text-[47px] 2xl:text-[42px] xl:text-[38px] lg:text-[40px] md:text-[30px] font-medium leading-tight 4xl:w-[608px] 2xl:w-[590px] xl:w-[550px] max-[400px]:text-[25px] max-[350px]:text-[22px]">
                Lifelong Student Support with Salesforce Service Cloud
              </h2>
              <UnorderedList
                arrName={lifelongData}
                ulClassName="list-disc mt-5 pl-5 space-y-4 text-[16px] 4xl:text-[20px] 2xl:text-[18px] xl:text-[16px] font-medium leading-tight marker:font-bold marker:text-2xl md:text-[18px]"
                liClassName=""
              />
              <div className="mt-5">
                <LearnMore />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* salesforce and seamless section */}
      <section className="relative xl:mt-0 mt-[3rem]">
        <div className="grid xl:grid-cols-2 grid-cols-1 items-start relative z-10 gap-10">
          <div className="relative z-10">
            <div className="custom-container xl:!pr-12">
              <div className="relative group overflow-hidden">
                <Image
                  src="/images/education/experience cloud.webp"
                  alt="experience cloud image"
                  priority
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="100vw"
                  width={0}
                  height={0}
                />
              </div>
            </div>
            <div className="bg-[#D6CFCF] custom-container w-full xl:pr-12 xl:pb-20 pb-10 pt-[5rem] -mt-14">
              <h2 className="text-[28px] 4xl:text-[47px] 2xl:text-[42px] xl:text-[38px] lg:text-[40px] md:text-[30px] font-medium leading-tight max-[400px]:text-[25px] max-[350px]:text-[20px]">
                Self-Service Portals for Students and Faculty
              </h2>
              <h3 className="mt-10 font-bold 4xl:text-[40px] 2xl:text-[36px] xl:text-[32px] text-[22px] max-[400px]:text-[21px] pr-10 xl:pr-0">
                Salesforce Experience Cloud
              </h3>
              <UnorderedList
                arrName={selfData}
                ulClassName="list-disc mt-5 pl-5 space-y-4 text-[16px] 4xl:text-[20px] 2xl:text-[18px] xl:text-[16px] font-medium leading-tight marker:font-bold marker:text-2xl md:text-[18px]"
                liClassName=""
              />
              <div className="mt-5">
                <LearnMore />
              </div>
            </div>
          </div>
          <div className="relative z-10">
            <div className="custom-container xl:pl-16 xl:mt-[14rem]">
              <div className="relative group overflow-hidden">
                <Image
                  src="/images/education/s4hana.webp"
                  alt="s4hana image"
                  priority
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="100vw"
                  width={0}
                  height={0}
                />
              </div>
            </div>
            <div className="bg-[#E8DFC7] w-full xl:pb-20 pb-10 pt-[6rem] xl:!pl-16 mt-[-3rem] custom-container">
              <h2 className="text-[28px] 4xl:text-[47px] 2xl:text-[42px] xl:text-[38px] lg:text-[40px] md:text-[30px] font-medium leading-tight max-[400px]:text-[25px] max-[350px]:text-[20px]  ">
                Seamless Enrollment, Fee, and Resource Management
              </h2>
              <h3 className="mt-10 font-bold 4xl:text-[40px] 2xl:text-[36px] xl:text-[32px] text-[22px]  max-[400px]:text-[21px] max-[350px]:text-[18px]">
                SAP S/4HANA + Rialtes
              </h3>
              <UnorderedList
                arrName={s4HanaData}
                ulClassName="list-disc mt-5 pl-5 space-y-4 text-[16px] 4xl:text-[20px] 2xl:text-[18px] xl:text-[16px] md:text-[18px] font-medium leading-tight marker:font-bold marker:text-2xl"
                liClassName=""
              />
              <div className="mt-5">
                <LearnMore />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* dynamic and unified section */}
      <section className="relative xl:mt-0 mt-[3rem]">
        <div className="grid xl:grid-cols-2 grid-cols-1 items-start relative z-10 gap-10">
          <div className="relative z-10">
            <div className="custom-container xl:!pr-12">
              <div className="relative group overflow-hidden">
                <Image
                  src="/images/education/revenue cloud.webp"
                  alt="revenue cloud image"
                  priority
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="100vw"
                  width={0}
                  height={0}
                />
              </div>
            </div>
            <div className="bg-[#F1D8D9] custom-container w-full xl:pr-20 xl:pb-20 pb-10 pt-[6rem] xl:pt-[6rem] -mt-16">
              <h2 className="text-[28px] 4xl:text-[47px] 2xl:text-[42px] xl:text-[38px] lg:text-[40px] md:text-[30px]  max-[400px]:text-[25px] max-[350px]:text-[20px] font-medium leading-tight pr-10">
                Dynamic Program and Course Pricing
              </h2>
              <h3 className="xl:mt-10 mt-5 font-bold 4xl:text-[40px] 2xl:text-[36px] xl:text-[32px] text-[22px] max-[350px]:text-[18px] max-[400px]:text-[21px]">
                Salesforce Revenue Cloud
              </h3>
              <UnorderedList
                arrName={dynamicData}
                ulClassName="list-disc mt-5 pl-5 space-y-4 text-[16px] 4xl:text-[20px] 2xl:text-[18px] xl:text-[16px] font-medium leading-tight marker:font-bold marker:text-2xl md:text-[18px]"
                liClassName=""
              />
              <div className="mt-5">
                <LearnMore />
              </div>
            </div>
          </div>
          <div className="relative z-10">
            <div className="custom-container xl:pl-16  xl:mt-[14rem]">
              <div className="relative group overflow-hidden">
                <Image
                  src="/images/education/data cloud.webp"
                  alt="data cloud image"
                  priority
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="100vw"
                  width={0}
                  height={0}
                />
              </div>
            </div>
            <div className="bg-[#C7E8E9] w-full xl:pb-20 pb-10 pt-[6rem] xl:!pl-16 mt-[-3rem] custom-container">
              <h2 className="text-[28px] 4xl:text-[47px] 2xl:text-[42px] xl:text-[38px] lg:text-[40px] md:text-[30px]   max-[350px]:text-[20px]  font-medium  leading-tight">
                Unified Data and Insights
              </h2>
              <h3 className="xl:mt-10 mt-5 font-bold 4xl:text-[40px] 2xl:text-[36px] xl:text-[32px] text-[22px]  max-[400px]:text-[21px] max-[350px]:text-[18px]">
                Salesforce Data Cloud for Education
              </h3>
              <UnorderedList
                arrName={unifiedData}
                ulClassName="list-disc mt-5 pl-5 space-y-4 text-[16px] 4xl:text-[20px] 2xl:text-[18px] xl:text-[16px] font-medium leading-tight marker:font-bold marker:text-2xl md:text-[18px]"
                liClassName=""
              />
              <div className="mt-5">
                <LearnMore />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* empowering section */}
      <section className="relative xl:mt-0 mt-[3rem]">
        <div className="grid xl:grid-cols-2 grid-cols-1 items-start relative z-10 gap-10">
          <div className="relative z-10">
            <div className="custom-container xl:!pr-12">
              <div className="relative group overflow-hidden">
                <Image
                  src="/images/education/eduction agentforce.webp"
                  alt="Agentforce for Education"
                  priority
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="100vw"
                  width={0}
                  height={0}
                />
              </div>
            </div>

            <div className="bg-[#C4E2FF] custom-container w-full xl:pr-20 xl:pb-20 pb-10 pt-[7rem] xl:pt-[6rem] -mt-16">
              <h2 className="text-[28px] 4xl:text-[47px] 2xl:text-[42px] xl:text-[38px] lg:text-[40px] md:text-[30px]  max-[400px]:text-[25px] max-[350px]:text-[20px]  font-medium leading-tight  xl:pr-0">
                Empowering Advisors and Faculty
              </h2>
              <h3 className="mt-5 font-bold 4xl:text-[40px] 2xl:text-[36px] xl:text-[32px] text-[22px]  max-[400px]:text-[21px] max-[350px]:text-[18px]">
                Agentforce for Education
              </h3>
              <UnorderedList
                arrName={empoweringData}
                ulClassName="list-disc mt-5 pl-5 space-y-4 text-[16px] 4xl:text-[20px] 2xl:text-[18px] xl:text-[16px] font-medium leading-tight marker:font-bold marker:text-2xl md:text-[18px]"
                liClassName=""
              />
              <div className="mt-5">
                <LearnMore />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* agentchat section */}
      <section className="xl:mt-32 mt-16 ">
        <div className="relative h-[2750px] md:h-[1000px] group md:overflow-hidden">
          <div className="md:block hidden">
            <Image
              src="/images/education/agentchat.webp"
              alt="agentchat image"
              fill
              priority
              className="transform transition-transform duration-500 group-hover:scale-110"
              style={{ objectFit: "cover", objectPosition: "35% 20%" }}
              sizes="100vw"
            />
          </div>
          <div className="md:hidden block">
            <Image
              src="/images/education/Group 485.webp"
              alt="agentchat image"
              fill
              priority
              className="!h-full"
              sizes="100vw"
            />
          </div>
        </div>
        <div className="bg-[#8792D9] md:pb-40 pb-16 mt-[-147rem] md:mt-0">
          <div className="text-white h-full relative custom-container">
            <div className="grid md:grid-cols-12 grid-cols-1 text-white">
              <div className="md:col-span-8 col-span-12 md:pr-20">
                <h2 className="text-[30px] 4xl:text-[50px] 2xl:text-[46px] xl:text-[40px] md:text-[35]  text-white leading-tight md:pr-10 font-medium max-[400px]:text-[26px] max-[350px]:text-[24px]">
                  <span className="font-bold 4xl:text-[70px] 2xl:text-[65px] xl:text-[62px] md:text-[50] text-[40px] max-[400px]:text-[36px] max-[350px]:text-[34px]">
                    AgentChat
                  </span>{" "}
                  <br></br> Transforming Communication in Education with
                  AI-Powered WhatsApp Integration
                </h2>
              </div>
              <div className="md:col-span-4 col-span-12 mt-10 md:mt-0">
                <p className="4xl:text-[22px] 2xl:text-[20px] xl:text-[20px] md:text-[18px] text-[16px]  xl:pr-0 leading-tight font-light">
                  Unlock the future of communication with AgentChat, an
                  AI-driven, bi-directional WhatsApp conversation tool fully
                  integrated with Salesforce Education Cloud. Streamline
                  interactions with students, parents, and faculty, all while
                  enhancing engagement, boosting operational efficiency, and
                  delivering personalized experiences.
                </p>
              </div>
            </div>

            <div className="xl:mt-20 mt-10">
              <h3 className="2xl:text-[30px] xl:text-[28px] md:text-[26px] text-[24px]">
                Key Features:
              </h3>
              <div className="flex flex-col md:flex-row xl:flex-row mt-10 xl:gap-20 gap-8 mb-16">
                <div className="flex flex-col xl:flex-row  xl:items-start gap-4 xl:gap-0 xl:w-1/2">
                  <Image
                    className="xl:w-[200px] xl:h-[200px] w-[156px] h-[156px]"
                    src="/images/education/Seamless Salesforce Integration.svg"
                    alt="Taking the lead"
                    width={0}
                    height={0}
                    sizes="100vw"
                    priority
                  />
                  <div className="mt-4 xl:mt-0 xl:ml-12">
                    <h3 className="4xl:text-[24px] 2xl:text-[22px] xl:text-[20px] md:text-[22] text-[20px]   xl:text-left pr-16 xl:pr-0 leading-tight">
                      Seamless Salesforce Integration
                    </h3>
                    <p className="4xl:text-[22px] 2xl:text-[20px] xl:text-[18px] md:text-[18px] text-[16px] mt-3  xl:text-left  xl:pr-0 leading-tight font-light">
                      Effortlessly syncs with Salesforce Education Cloud,
                      providing a unified platform for managing all student
                      interactions in real time.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col  xl:flex-row  xl:items-start gap-4 xl:gap-0 xl:w-1/2 mt-10 md:mt-0 xl:mt-0">
                  <Image
                    className="xl:w-[200px] xl:h-[200px] w-[156px] h-[156px]"
                    src="/images/education/AI-Powered Automation & Personalization.svg"
                    alt="Taking the lead"
                    width={0}
                    height={0}
                    sizes="100vw"
                    priority
                  />
                  <div className="mt-4 xl:mt-0 xl:ml-12">
                    <h3 className="4xl:text-[24px] 2xl:text-[22px] xl:text-[20px] md:text-[22] text-[20px] pr-16 xl:pr-0 xl:text-left leading-tight ">
                      AI-Powered Automation & Personalization
                    </h3>
                    <p className="4xl:text-[22px] 2xl:text-[20px] xl:text-[18px] md:text-[18px] text-[16px] mt-3  xl:pr-0  xl:text-left leading-tight font-light">
                      Instantly responds with personalized, context-aware
                      answers, automating routine inquiries while adapting to
                      each individual’s needs.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row xl:flex-row mt-10 xl:gap-20 gap-8 mb-16">
                <div className="flex flex-col xl:flex-row  xl:items-start gap-4 xl:gap-0 xl:w-1/2 mt-10 xl:mt-0">
                  <Image
                    className="xl:w-[200px] xl:h-[200px] w-[156px] h-[156px]"
                    src="/images/education/Scalable & Efficient Communication.svg"
                    alt="Taking the lead"
                    width={0}
                    height={0}
                    sizes="100vw"
                    priority
                  />
                  <div className="mt-4 xl:mt-0 xl:ml-12">
                    <h3 className="4xl:text-[24px] 2xl:text-[22px] xl:text-[20px] md:text-[22] text-[20px] pr-16 xl:pr-0 xl:text-left leading-tight">
                      Scalable & Efficient Communication
                    </h3>
                    <p className="4xl:text-[22px] 2xl:text-[20px] xl:text-[18px] md:text-[18px] text-[16px] mt-3 xl:pr-0 xl:text-left leading-tight font-light">
                      Handles an increasing volume of interactions with ease,
                      improving response times and reducing manual effort, while
                      ensuring high-quality, consistent communication.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col xl:flex-row  xl:items-start gap-4 xl:gap-0 xl:w-1/2 mt-10 xl:mt-0">
                  <Image
                    className="xl:w-[200px] xl:h-[200px] w-[156px] h-[156px]"
                    src="/images/education/Actionable Insights & Data Security.svg"
                    alt="Taking the lead"
                    width={0}
                    height={0}
                    sizes="100vw"
                    priority
                  />
                  <div className="mt-4 xl:mt-0 xl:ml-12">
                    <h3 className="4xl:text-[24px] 2xl:text-[22px] xl:text-[20px] md:text-[22] text-[20px] pr-16 xl:pr-0 xl:text-left leading-tight">
                      Actionable Insights & Data Security
                    </h3>
                    <p className="4xl:text-[22px] 2xl:text-[20px] xl:text-[18px] md:text-[18px] text-[16px] mt-3  xl:pr-0 xl:text-left leading-tight font-light">
                      Unlock valuable engagement insights through advanced
                      analytics, while ensuring top-tier security and compliance
                      with industry standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="relative">
          <div className="h-full xl:mr-[142px] custom-container z-40">
            <p className=" 4xl:text-[26px] 2xl:text-[22px]  xl:text-[18px] md:text-[20px]  text-[18px] bg-[#0C8AD4]  p-5 xl:p-8  pl-6  text-white max-[360px]:mt-[-70px] max-[414px]:mt-0 mt-[15px] md:mt-[-50px] xl:mt-[-55px] 4xl:mt-[-65px]  xl:w-[80%] leading-tight font-light max-[400px]:text-[17px] ">
              With AgentChat, elevate your institution’s communication to new
              heights—efficient, secure, and fully integrated.
            </p>
          </div>
          <div className="mt-10 custom-container ">
            <button className="bg-[#134874]  hover:bg-[#ffffff] hover:text-[#134874] border-[1px] border-[solid] border-[#134874] font-semibold text-white py-3 text-[16px] xl:text-[22px] px-8 transition duration-300 order-4 mt-6">
              <Link href="/products/agentchat">Know More</Link>
            </button>
          </div>
        </div>
      </section>
      {/* related section */}
      <section>
        <div className="py-32 xl:mt-5 md:mt-[-80px] mt-[-40px]">
          <div className="relative custom-container">
            <div className="grid xl:grid-cols-12 grid-cols-1 xl:gap-16">
              <div className="xl:col-span-5 col-span-12 relative group overflow-hidden">
                <div className="xl:block hidden">
                  <Image
                    src="/images/education/solutions.webp"
                    alt="solutions image"
                    fill
                    priority
                    sizes="100vw"
                    className="w-full object-cover origin-center transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:brightness-90 group-hover:saturate-150"
                  />
                </div>
                <div className="xl:hidden block">
                  <Image
                    src="/images/education/solutions.webp"
                    alt="solutions image"
                    priority
                    sizes="100vw"
                    className="w-full h-full "
                    width={0}
                    height={0}

                  />
                </div>
              </div>
              <div className="xl:col-span-5 col-span-12 text-black">
                <h2 className="4xl:text-[60px] 2xl:text-[54px] xl:text-[45px] lg:text-[45px]md:text-[30px] text-[26px] max-[350px]:text-[22px] font-light mb-8 mt-10 xl:mt-0">
                  Related Solutions
                </h2>
                <div className="space-y-10">
                  {educationSolutions.map((item, index) => (
                    <div key={index}>
                      <Link
                        href={item.href}
                        className="text-[#0C8AD4] font-semibold underline 4xl:text-[22px] 2xl:text-[20px] xl:text-[18px] md:text-[20px] text-[18px] pr-10 xl:pr-0"
                      >
                        {item.title}
                      </Link>
                      <p className="text-gray-700 mt-2 4xl:text-[20px] 2xl:text-[18px] xl:text-[16px] md:text-[18px] text-[17px] xl:pr-0">
                        {item.description}
                      </p>
                      {index !== educationSolutions.length - 1 && (
                        <hr className="mt-8 border-gray-300 border-1" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Form */}
      <div className="custom-container text-black xl:py-20 pb-10">
        <ContactForm
          title={"Ready to Redefine Your Student Experience?"}
          subtitle={
            "Rialtes is ready to partner with your institution to deliver student-centric, agile, and future-ready education solutions."
          }
          subtitle1={
            "Contact us today for a personalized consultation and demo!"
          }
          className={
            "max-w-[62rem] leading-tight  4xl:text-[60px]  2xl:text-[56px] xl:text-[45px] lg:text-[45px] md:text-[30px] text-[26px] max-[400px]:text-[24px]"
          }
        />
      </div>
    </div>
  );
}
