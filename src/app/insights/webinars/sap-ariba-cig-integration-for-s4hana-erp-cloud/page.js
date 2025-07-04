"use client";
import React, { useRef} from "react";
import Image from "next/image";
import Seo from "@/app/components/Seo";
import WebinarForm from "@/app/components/webinarForm";
import Script from "next/script";


const schemaData = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "SAP Ariba CIG Integration Webinar: ERP Flows, Simplified",
    "description": "Discover how SAP Ariba Cloud Integration Gateway (CIG) connects your SAP ERP (S/4HANA) to the Ariba Network—streamlining integration, improving efficiency, and simplifying procurement transactions. A must-attend online webinar for ERP and SAP professionals.",
    "url": "https://www.rialtes.com/insights/webinars/sap-ariba-cig-integration-for-s4hana-erp-cloud",
    "startDate": "2025-06-10T20:30:00+05:30",
    "endDate": "2025-06-10T21:00:00+05:30",
    "duration": "PT30M",
    "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
    "eventStatus": "https://schema.org/EventScheduled",
    "organizer": {
        "@type": "Organization",
        "name": "Rialtes",
        "url": "https://www.rialtes.com",
        "logo": "https://www.rialtes.com/images/homepage/logo.svg"
    },
    "performer": {
        "@type": "Person",
        "name": "Sapna Chauhan",
        "jobTitle": "Software Engineer",
        "url": "https://www.linkedin.com/in/sapna-chauhan-a85b32219/"
    },
    "image": "https://www.rialtes.com/images/webinar/Webinar_27%20May%2025_webinar%20Banner.webp",
    "audience": {
        "@type": "Audience",
        "audienceType": "Procurement Leaders, Sourcing Managers, IT Decision-Makers, SAP Consultants, ERP Professionals"
    },
    "location": {
        "@type": "VirtualLocation",
        "url": "https://www.rialtes.com/insights/webinars/sap-ariba-cig-integration-for-s4hana-erp-cloud"
    },
    "keywords": "sap ariba cig integration, S4HANA erp cloud, sap procurement webinar"

}
export default function () {
    
     const sectionRef = useRef(null);
    
      const handleScroll = () => {
    if (!sectionRef.current) return;

    const getOffset = () => {
        const width = window.innerWidth;
        if (width > 1536) return 160; // 2xl+
        if (width > 1280) return 120; // xl
        if (width > 768) return 100;  // md
        return 80; // sm and below
    };

    const offset = getOffset();
    const elementPosition = sectionRef.current.getBoundingClientRect().top + window.pageYOffset;

    window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
    });
};

   
    const fullUrl = "https://rialtes.netlify.app/insights/webinars/sap-ariba-cig-integration-for-s4hana-erp-cloud"

    return (
        <div className="min-h-screen">
            <Seo
                title="SAP Ariba CIG Integration Webinar: S/4HANA Cloud Sync | Rialtes"
                description="Discover how SAP Ariba CIG integration helps ERP and S/4HANA users streamline procurement with cloud-based automation and insights."
                canonical="https://www.rialtes.com/insights/webinars/sap-ariba-cig-integration-for-s4hana-erp-cloud/"
            />

           <Script
        id="webinar-schema-sap"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
            <section className="relative custom-container  xl:!pr-0 max-md:px-0">
                <Image
                    src="/images/webinar/Webinar_27 May 25_webinar Banner.webp"
                    alt="Webinar Header"
                    priority
                    width={0}
                    height={0}
                    className="w-full h-full"
                />
            </section>
            <div className="grid xl:grid-cols-12 grid-cols-1 custom-container">
                <div className="xl:col-span-7 col-span-12">
                    <div className="flex flex-row gap-6  mt-10">
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
                    <h1 className="xl:leading-tight mt-10 font-medium xl:font-normal xl:text-[40px]">CIG, Your Gateway to SAP Ariba</h1>
                    <div className="grid xl:grid-cols-12 xl:mt-16 mt-10 xl:gap-10">
                        <div className="xl:col-span-4 col-span-12">
                            <Image
                                src="/images/webinar/sapna-chauhan.webp"
                                alt="CIG, Your Gateway to SAP Ariba"
                                priority
                                className="w-full h-auto"
                                width={0}
                                height={0}
                            />
                        </div>
                        <div className="xl:col-span-8 col-span-12 mt-5 xl:mt-0">
                            <h3 className="xl:text-[24px] text-[#0092E0]">Speaker</h3>
                            <h3 className="mt-3 4xl:text-[29px] xl:text-[22px] font-bold mb-3">Sapna Chauhan</h3>
                            <h3 className="mt-[-10px] 4xl:text-[24px] xl:text-[20px]">Software Engineer - SAP</h3>
                        </div>
                    </div>
                    <p className="mt-16 xl:pr-32">Join us for an exclusive webinar to explore how the Ariba Cloud Integration Gateway (CIG) seamlessly connects your SAP ERP (S/4HANA) with the Ariba Network. Discover how CIG centralizes and streamlines procurement transactions, simplifies integration management, and accelerates your journey to smarter, synchronized procurement operations.</p>
                    <h3 className="mt-16 text-[#0092E0]">In This Webinar, You'll Get:</h3>
                    <ul className="list-disc marker:text-black text-black pl-4 pb-6 xl:text-[20px] text-[16px] marker:font-bold font-medium pr-24">
                        <li className="pb-2 mt-5"><strong>Simplified Integration:</strong> How CIG bridges SAP ERP and Ariba effortlessly.</li>
                        <li className="pb-2"><strong>CIG Architecture:</strong> Dive into key components and how they work together.</li>
                        <li className="pb-2"><strong>Self-Service Portal:</strong>  Learn how to configure, test, and monitor integrations.</li>
                        <li className="pb-2"><strong>Real-World Use Cases: </strong> Practical examples of how organizations benefit from CIG.</li>
                        <li className="pb-2"><strong>Implementation Best Practices:</strong> Tips for faster deployment and effective error handling.</li>
                    </ul>
                    <h3 className="mt-10 text-[#0092E0]">Who Should Attend?</h3>
                    <ul className="list-disc marker:text-black text-black pl-4 pb-6 xl:text-[20px] text-[16px] marker:font-bold font-medium">
                        <li className="pb-2 mt-5">Procurement Leaders</li>
                        <li className="pb-2">Sourcing Managers</li>
                        <li className="pb-2">IT Decision-Makers</li>
                        <li className="pb-2">SAP Technical Consultants</li>
                        <li className="pb-2">SAP Functional Consultants</li>
                        <li className="pb-2">Anyone looking to simplify and optimize SAP Ariba integrations</li>

                    </ul>
                       
                </div>
                <div className="xl:col-span-4 col-span-12 ">
                    <div className="bg-[#0092E0] xl:h-[490px] xl:w-[532px] xl:pt-20 xl:pl-16 pr-10 pt-10 pl-10 pb-10 text-white">
                        <h2 className="font-extrabold">10</h2>
                        <h3>June 2025</h3>
                        <h3 className="font-medium mt-8">10:00 AM CST | 8.30 PM IST</h3>
                        <h3 className="font-medium mt-3">11 AM EST | 8 AM PST</h3>
                         <div onClick={handleScroll}>
                            <button className="text-[#0092E0] xl:text-[20px] text-[16px] font-bold p-5 bg-white mt-8">Watch Now</button>

                             </div>
                    </div>
                   
                    <h3 className="mt-10">How to Join:</h3>
                    <p className="mt-5">Once registered, you will receive a confirmation email with the webinar access link and instructions.</p>
                    <h3 className="mt-10">Can’t Make It?</h3>
                    <p className="mt-3">No problem! Go ahead and register, and we’ll send you a recording of the webinar afterward, so you can watch it whenever it suits you best.</p>
                    <p className="mt-10 xl:pb-0">For inquiries, please contact sales@rialtes.com.</p>
                </div>
                <div className="xl:col-span-1 col-span-12"></div>
            </div>
             <div className="custom-container mb-20" ref={sectionRef}>
                <WebinarForm
                    redirectUrl="https://youtu.be/cBwMv23szkU"
                    emailWebinarLink="https://www.rialtes.com/insights/webinars/rialtes-web/src/app/insights/webinars/sap-ariba-cig-integration-for-s4hana-erp-cloud"
                />

            </div>
        </div>
    );
}