import Image from "next/image";
import Seo from "../../components/Seo";
import Script from "next/script";
import BreadCrumbs from '../../components/BreadCrumbs'
export default function Contact() {
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
        { src: "/images/partners/Salesforce.webp", alt: "Salesforce" },
        { src: "/images/partners/SAP.png", alt: "SAP" },
        { src: "/images/partners/adobe sign.webp", alt: "Adobe Sign" },
        { src: "/images/partners/ama2.webp", alt: "AMA" },
        { src: "/images/partners/Automation Anywhere.png", alt: "Automation Anywhere" },
        { src: "/images/partners/azur22.png", alt: "Azure (v2)" },
        { src: "/images/partners/Azure.webp", alt: "Azure" },
        { src: "/images/partners/Conga.png", alt: "Conga" },
        { src: "/images/partners/Callidus Cloud.png", alt: "Callidus Cloud" },
        { src: "/images/partners/bitbu.png", alt: "Bitbucket" },
    ];
    const regionalPartners = [
        { src: "/images/partners/GitHub_Logo.png", alt: "GitHub" },
        { src: "/images/partners/Qlik.webp", alt: "Qlik" },
        { src: "/images/partners/RapidMiner.png", alt: "RapidMiner" },
        { src: "/images/partners/workato.webp", alt: "Workato" },
        { src: "/images/partners/Confluence.webp", alt: "Confluence" },
        { src: "/images/partners/boomi1.png", alt: "Boomi" },
        { src: "/images/partners/Copado-logo-1.webp", alt: "Copado" },
        { src: "/images/partners/DocuSign-Logo-New-1.png", alt: "DocuSign" },
        { src: "/images/partners/Informatica.png", alt: "Informatica" },
        { src: "/images/partners/SAP-Success-Factor-HCM-1.png", alt: "SAP SuccessFactors" },
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
            {images.map((data, index) => (
                <Image
                    key={index}
                    src={data.src}
                    alt={data.alt}
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
        <section>
            <div className="bg-[#EDEDED] lg:py-16 py-10">
                <h2 className="custom-container 4xl:text-[60px] xl:text-[40px] text-[26px]  leading-tight">Our Approach</h2>
                <div className="grid justify-center xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-2 custom-container mt-12 lg:gap-[12%] gap-5">
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
                                <p className="4xl:text-[20px] xl:text-[18px] text-[16px] leading-tight" key={idx}>{text}</p>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
    const KeyPartnerships = () => (
        <section className="custom-container mt-16 px-6">
            <h2 className="mb-16 4xl:text-[60px] xl:text-[40px] text-[26px] leading-tight">Key Partnerships</h2>
            {renderImageSection(keyPartners)}
        </section>
    );
    const RegionalPartnerships = () => (
        <section className="custom-container px-6 mt-[90px] xl:mt-[140px]">
            <h2 className="mb-16 4xl:text-[60px] xl:text-[40px] text-[26px] leading-tight">Regional Partnerships</h2>
            {renderImageSection(regionalPartners)}
        </section>
    );
    const AllPartnerships = () => (
        <section className="custom-container px-6 mt-[90px] xl:mt-[140px]">
            <h2 className="mb-16 4xl:text-[60px] xl:text-[40px] text-[26px] leading-tight">All Partnerships</h2>
            {renderImageSection(allPartnerships)}
        </section>
    );
    return (
        <div>
            <Seo
                title="Our Strategic Partners – Empowering Success with Rialtes"
                description="Rialtes partners with top IT and SaaS companies to deliver innovative solutions. Explore our trusted network of collaborators driving business success."
                keywords="Partners, website, welcome"
                canonical={"https://www.rialtes.com/about-us/global-alliances/"}
            />
            <Script
                id="schema-partners"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            {/** hero section * */}
            <section className="relative group overflow-hidden h-[399px] 4xl:h-[650px] xl:h-[550px]">
                <div className="hidden md:block">
                    <Image
                        src="/images/partners/Partners banner (1).webp"
                        alt="desktop banner"
                        fill
                        priority
                        className="transform transition-transform duration-500 group-hover:scale-110 "
                        style={{ objectFit: "cover" }}

                    />
                </div>
                {/* Mobile Image */}
                <div className="block md:hidden">
                    <Image
                        src="/images/partners/partner 1.webp"
                        alt="mobile banner"
                        fill
                        style={{ objectFit: "cover", objectPosition: "70% 50%" }}

                        priority
                    />
                </div>
                <div className="relative h-full custom-container flex items-center">
                    <div className="grid grid-cols-1 lg:grid-cols-12 w-full">
                        <div className="col-span-12">
                            <h1 className="text-[#FFFFFF] text-[18px] md:text-[24px] font-bold lg:w-full">
                                Our Partners
                            </h1>
                            <h2 className="text-white xl:mt-2 mt-1 leading-tight 4xl:text-[60px] xl:text-[40px] text-[26px]">
                                Global Alliances
                            </h2>
                        </div>
                        <div className="col-span-12 lg:col-span-3 xl:col-span-5">
                        </div>
                    </div>
                </div>
            </section>
            {/* page description */}
            <section className="custom-container">
                <BreadCrumbs currPage="Global Alliances" subPath=" " />

                <div className="grid lg:grid-cols-12 xl:grid-cols-12 mt-16 mb-16">
                    <div className="lg:col-span-6 xl:col-span-6">
                        <h2 className="xl:w-[60%]  w-full 4xl:text-[60px] xl:text-[40px] text-[26px]  leading-tight">Our Strategic Partners</h2>
                    </div>
                    <div className="lg:col-span-6 xl:col-span-6">
                        <p className="mt-5 xl:w-[75%] w-full 4xl:text-[20px] xl:text-[18px] text-[16px]  leading-tight">Rialtes partnered with the most innovative enterprise software companies to provide you with tailored, data-driven IT consulting solutions that simplify, enable, and empower you to solve your biggest business challenges.</p>
                    </div>
                </div>
            </section>
            <div className="pb-20">
                <OurApproachSection />
                <KeyPartnerships />
                <RegionalPartnerships />
                <AllPartnerships />
            </div>
        </div>
    )
}
