import Image from "next/image";
import Seo from "../../components/Seo";
import { HeroSection } from "@/app/components/herosection";
import Script from "next/script";

export default function Contact() {


    const approachData = [
        {
            src: "/images/partners/our1.png",
            alt: "Leadership Team",
            texts: ["Strategic", "orchestration"]
        },
        {
            src: "/images/partners/our2.png",
            alt: "Leadership Team",
            texts: ["Client-first", "customization"]
        },
        {
            src: "/images/partners/our3.png",
            alt: "Leadership Team",
            texts: ["Industry-specific", "solutions"]
        },
        {
            src: "/images/partners/our4.png",
            alt: "Leadership Team",
            texts: ["Vendor-agnostic", "partnerships"]
        }
    ];

    const keyPartners = [
        "/images/partners/Salesforce.webp",
        "/images/partners/SAP.png",
        "/images/partners/adobe sign.webp",
        "/images/partners/ama2.webp",
        "/images/partners/Automation Anywhere.png",
        "/images/partners/azur22.png",
        "/images/partners/Azure.webp",
        "/images/partners/Conga.png",
        "/images/partners/Callidus Cloud.png",
        "/images/partners/bitbu.png"
    ];

    const regionalPartners = [
        "/images/partners/GitHub_Logo.png",
        "/images/partners/Qlik.webp",
        "/images/partners/RapidMiner.png",
        "/images/partners/workato.webp",
        "/images/partners/Confluence.webp",
        "/images/partners/boomi1.png",
        "/images/partners/Copado-logo-1.webp",
        "/images/partners/DocuSign-Logo-New-1.png",
        "/images/partners/Informatica.png",
        "/images/partners/SAP-Success-Factor-HCM-1.png"
    ];

    const allPartnerships = [
        { src: "/images/partners/GitHub_Logo.png", alt: "GitHub" },
        { src: "/images/partners/Qlik.webp", alt: "Quik" },
        { src: "/images/partners/RapidMiner.png", alt: "Rapid" },
        { src: "/images/partners/workato.webp", alt: "Worka" },
        { src: "/images/partners/Confluence.webp", alt: "Conf" },
        { src: "/images/partners/boomi1.png", alt: "Boomi" },
        { src: "/images/partners/Copado-logo-1.webp", alt: "Copa" },
        { src: "/images/partners/DocuSign-Logo-New-1.png", alt: "Docus" },
        { src: "/images/partners/Informatica.png", alt: "Inform" },
        { src: "/images/partners/SAP-Success-Factor-HCM-1.png", alt: "Successf" },
        { src: "/images/partners/Dynamics 365.png", alt: "Dynam" },
        { src: "/images/partners/power BI.webp", alt: "Successf" },
        { src: "/images/partners/MuleSoft.png", alt: "Muls" },
        { src: "/images/partners/SF pardot.png", alt: "Pardot" },
        { src: "/images/partners/Callidus Cloud.png", alt: "Callc" },
        { src: "/images/partners/sapa.png", alt: "Sapa" },
        { src: "/images/partners/smartsheet-logo.png", alt: "Smarts" },
        { src: "/images/partners/Tableau-Logo-2.png", alt: "Table" },
        { src: "/images/partners/UiPath.png", alt: "Uipa" },
        { src: "/images/partners/windo1.webp", alt: "Windo" },
        { src: "/images/partners/vistex.webp", alt: "Vix" },
    ];


    const renderImageSection = (images) => (
        <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 border-0 gap-10">
            {images.map((src, index) => (
                <Image
                    key={index}
                    src={src}
                    alt="Leadership Team"
                    className="h-full"
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
            ))}
        </div>
    );

    const OurApproachSection = () => (
        <section className="">
            <div className="bg-[#EDEDED] lg:py-16 py-10">
                <h2 className="custom-container">Our Approach</h2>
                <div className="grid justify-center xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-2 custom-container mt-8 lg:gap-[12%] gap-5">
                    {approachData.map((data, index) => (
                        <div key={index}>
                            <Image
                                src={data.src}
                                alt={data.alt}
                                width={0}
                                height={0}
                                className="mb-5 h-20 w-20"
                                sizes="100vw"
                                style={{
                                    objectFit: "cover",
                                }}
                                priority
                            />
                            {data.texts.map((text, idx) => (
                                <p key={idx}>{text}</p>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );

    const KeyPartnerships = () => (
        <section className="custom-container  mt-16 px-6">
            <h4 className="text-[#0092E0] mb-16">KEY PARTNERSHIPS</h4>
            {renderImageSection(keyPartners)}
        </section>
    );

    const RegionalPartnerships = () => (
        <section className="custom-container px-6 mt-16 ">
            <h4 className="text-[#0092E0] mb-16">REGIONAL PARTNERSHIPS</h4>
            {renderImageSection(regionalPartners)}
        </section>
    );
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Rialtes",
        "url": "https://www.rialtes.com",
        "description": "Rialtes collaborates with leading technology providers to offer seamless digital transformation solutions.",
        "knowsAbout": [
            {
                "@type": "Organization",
                "name": "Adobe Sign",
                "url": "https://www.adobe.com/sign",
                "description": "Partnering for secure digital document signing solutions."
            },
            {
                "@type": "Organization",
                "name": "Amazon Web Services",
                "url": "https://aws.amazon.com",
                "description": "Cloud computing and infrastructure partner."
            },
            {
                "@type": "Organization",
                "name": "Automation Anywhere",
                "url": "https://www.automationanywhere.com",
                "description": "Providing intelligent automation and RPA solutions."
            },
            {
                "@type": "Organization",
                "name": "Salesforce",
                "url": "https://www.salesforce.com",
                "description": "Strategic partner for CRM and digital transformation solutions."
            },
            {
                "@type": "Organization",
                "name": "SAP",
                "url": "https://www.sap.com",
                "description": "Enterprise resource planning and business software partner."
            },
            {
                "@type": "Organization",
                "name": "Microsoft Azure",
                "url": "https://azure.microsoft.com",
                "description": "Cloud platform partner for scalable business solutions."
            },
            {
                "@type": "Organization",
                "name": "Azure DevOps",
                "url": "https://azure.microsoft.com/en-us/products/devops/",
                "description": "Supporting DevOps automation and CI/CD pipelines."
            },
            {
                "@type": "Organization",
                "name": "Conga",
                "url": "https://www.conga.com",
                "description": "Partnering for document generation and contract lifecycle management."
            },
            {
                "@type": "Organization",
                "name": "CallidusCloud",
                "url": "https://www.sap.com/products/calliduscloud.html",
                "description": "Sales performance management and CPQ solutions partner."
            },
            {
                "@type": "Organization",
                "name": "Bitbucket",
                "url": "https://bitbucket.org",
                "description": "Version control and software collaboration platform partner."
            }
        ]
    }
    return (
        <div>
            <Seo
                title="Our Strategic Partners – Empowering Success with Rialtes"
                description="Rialtes partners with top IT and SaaS companies to deliver innovative solutions. Explore our trusted network of collaborators driving business success."
                keywords="Partners, website, welcome"
                canonical={"https://www.rialtes.com/about-us/global-alliences/"}
            />

            <Script
                id="schema-partners"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            {/* <div className="relative">
                <Image
                    src="/images/partners/Partners banner (1).webp"
                    alt="Leadership Team"
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
                <div className="absolute xl:px-[280px] lg:px-[100px] px-6  md:px-[100px] top-[13%]  lg:text-start xl:top-[35%] md:top-[40%] text-white">
                    <h3 className="font-bold">Our Partners</h3>
                    <h2>Global Alliances</h2>
                </div>
            </div> */}

            <HeroSection title="Global Alliances" subtitle="Our Partners" mobimg="/images/partners/partner 1.webp" deskimg="/images/partners/Partners banner (1).webp" extraImg="" />

            {/* //strategies section */}

            <section className="custom-container">
                <div className="grid lg:grid-cols-2 mt-16 mb-16">
                    <div>
                        <h1 className="xl:w-[60%] w-full">Our Strategic Partners</h1>
                    </div>

                    <p className="mt-5 xl:w-[75%] w-full">Rialtes partnered with the most innovative enterprise software companies to provide you with tailored, data-driven IT consulting solutions that simplify, enable, and empower you to solve your biggest business challenges.</p>
                </div>
            </section>
            <div className="pb-20">
                <OurApproachSection />
                <KeyPartnerships />
                <RegionalPartnerships />
                <section className="custom-container mt-16 ">
                    <h4 className="text-[#0092E0] mb-16">ALL PARTNERSHIPS</h4>
                    <div className="grid xl:grid-cols-5 lg:grid-cols-4  sm:grid-cols-2 grid-cols-2 border-0 gap-10">
                        {allPartnerships.map((partner, index) => (
                            <Image
                                key={index}
                                src={partner.src}
                                alt={partner.alt}
                                className=" h-full"
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
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}
